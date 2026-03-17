import { promises as fs } from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const BASE_URL = "https://qa.local";
const HTML_EXT = ".html";
const DIRECT_FILE_EXTENSIONS = new Set([
	".css",
	".js",
	".mjs",
	".json",
	".xml",
	".txt",
	".ico",
	".svg",
	".png",
	".jpg",
	".jpeg",
	".webp",
	".woff",
	".woff2",
]);

async function walkFiles(rootDir) {
	const entries = await fs.readdir(rootDir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(rootDir, entry.name);
			if (entry.isDirectory()) {
				return walkFiles(fullPath);
			}
			return [fullPath];
		}),
	);

	return files.flat();
}

function routeFromFile(filePath) {
	const relativePath = path.relative(DIST_DIR, filePath).replaceAll(path.sep, "/");
	if (relativePath === "index.html") {
		return "/";
	}

	if (relativePath.endsWith("/index.html")) {
		return `/${relativePath.slice(0, -"index.html".length)}`;
	}

	if (relativePath.endsWith(HTML_EXT)) {
		return `/${relativePath}`;
	}

	return `/${relativePath}`;
}

function distPathFromUrlPath(urlPath) {
	const normalized = urlPath.startsWith("/") ? urlPath : `/${urlPath}`;
	const extension = path.extname(normalized);

	if (DIRECT_FILE_EXTENSIONS.has(extension)) {
		return path.join(DIST_DIR, normalized);
	}

	const trimmed = normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
	if (trimmed === "") {
		return path.join(DIST_DIR, "index.html");
	}

	return path.join(DIST_DIR, trimmed, "index.html");
}

function collectIds(html) {
	const ids = new Set();
	const idPattern = /\sid=(["'])([^"']+)\1/g;

	for (const match of html.matchAll(idPattern)) {
		ids.add(match[2]);
	}

	return ids;
}

function collectRefs(html, attribute) {
	const refs = [];
	const pattern = new RegExp(`\\b${attribute}=(["'])([^"']+)\\1`, "g");

	for (const match of html.matchAll(pattern)) {
		refs.push(match[2]);
	}

	return refs;
}

function collectImageAltIssues(html, route) {
	const issues = [];
	const imgPattern = /<img\b([^>]*?)>/g;

	for (const match of html.matchAll(imgPattern)) {
		const attrs = match[1];
		if (!/\balt=(["']).*?\1/.test(attrs)) {
			issues.push(`${route}: image tag is missing alt text`);
		}
	}

	return issues;
}

function isExternalRef(ref) {
	return (
		ref.startsWith("http://") ||
		ref.startsWith("https://") ||
		ref.startsWith("mailto:") ||
		ref.startsWith("tel:") ||
		ref.startsWith("data:") ||
		ref.startsWith("javascript:") ||
		ref.startsWith("//")
	);
}

async function main() {
	const allFiles = await walkFiles(DIST_DIR);
	const htmlFiles = allFiles.filter((file) => file.endsWith(HTML_EXT));
	const fileSet = new Set(allFiles.map((file) => path.resolve(file)));
	const pageIndex = new Map();

	for (const file of htmlFiles) {
		const html = await fs.readFile(file, "utf8");
		pageIndex.set(routeFromFile(file), {
			file,
			ids: collectIds(html),
			html,
		});
	}

	const errors = [];
	const warnings = [];
	const externalRefs = new Set();

	for (const [route, page] of pageIndex.entries()) {
		const refs = [...collectRefs(page.html, "href"), ...collectRefs(page.html, "src")];

		for (const issue of collectImageAltIssues(page.html, route)) {
			errors.push(issue);
		}

		for (const ref of refs) {
			if (isExternalRef(ref)) {
				externalRefs.add(ref);
				continue;
			}

			let targetUrl;
			try {
				targetUrl = new URL(ref, `${BASE_URL}${route}`);
			} catch {
				errors.push(`${route}: invalid URL reference "${ref}"`);
				continue;
			}

			if (targetUrl.origin !== BASE_URL) {
				externalRefs.add(ref);
				continue;
			}

			const targetPath = decodeURIComponent(targetUrl.pathname);
			const targetFile = path.resolve(distPathFromUrlPath(targetPath));

			if (!fileSet.has(targetFile)) {
				errors.push(`${route}: missing target for "${ref}" -> ${targetPath}`);
				continue;
			}

			if (targetUrl.hash) {
				const hash = decodeURIComponent(targetUrl.hash.slice(1));
				const targetRoute = routeFromFile(targetFile);
				const targetPage = pageIndex.get(targetRoute);

				if (!targetPage) {
					errors.push(`${route}: anchor target page missing for "${ref}"`);
					continue;
				}

				if (!targetPage.ids.has(hash)) {
					errors.push(`${route}: missing anchor "${targetUrl.hash}" in ${targetRoute}`);
				}
			}
		}

		if (!/\blang=/.test(page.html)) {
			warnings.push(`${route}: <html> is missing lang`);
		}

		if (!/<title>.*<\/title>/.test(page.html)) {
			warnings.push(`${route}: missing <title>`);
		}

		if (!/\bname="description"\s+content=/.test(page.html)) {
			warnings.push(`${route}: missing meta description`);
		}
	}

	if (errors.length > 0) {
		console.error("Link and QA checks failed:\n");
		for (const error of errors) {
			console.error(`- ${error}`);
		}
		process.exit(1);
	}

	console.log(`Checked ${pageIndex.size} generated HTML pages.`);
	console.log(`Validated ${externalRefs.size} external-style references without fetching them.`);
	console.log("No broken internal links, asset paths, anchor targets, or missing image alts found.");

	if (warnings.length > 0) {
		console.log("\nWarnings:");
		for (const warning of warnings) {
			console.log(`- ${warning}`);
		}
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
