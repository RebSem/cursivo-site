import { getLocalizedEntries } from "../data/content";
import {
	blogIndexPaths,
	changelogIndexPaths,
	getCollectionEntryPath,
} from "../data/publishing";
import { getLocalizedUseCases } from "../data/content";
import { getUseCaseEntryPath, useCaseIndexPaths } from "../data/use-cases";
import { getSiteUrl, toAbsoluteUrl } from "../data/seo";
import type { Locale } from "../data/site";

export async function GET() {
	const siteUrl = getSiteUrl();

	if (!siteUrl) {
		return new Response(
			[
				'<?xml version="1.0" encoding="UTF-8"?>',
				'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
			].join(""),
			{
				headers: {
					"Content-Type": "application/xml; charset=utf-8",
				},
			}
		);
	}

	const locales = ["en"] as Locale[];
	const staticPaths = [
		"/",
		// "/ru/",
		// "/ar/",
		"/product/",
		// "/ru/product/",
		// "/ar/product/",
		"/privacy/",
		// "/ru/privacy/",
		// "/ar/privacy/",
		"/terms/",
		// "/ru/terms/",
		// "/ar/terms/",
		useCaseIndexPaths.en,
		// useCaseIndexPaths.ru,
		// useCaseIndexPaths.ar,
		blogIndexPaths.en,
		// blogIndexPaths.ru,
		// blogIndexPaths.ar,
		changelogIndexPaths.en,
		// changelogIndexPaths.ru,
		// changelogIndexPaths.ar,
		"/blog/rss.xml",
		// "/ru/blog/rss.xml",
		// "/ar/blog/rss.xml",
		"/changelog/rss.xml",
		// "/ru/changelog/rss.xml",
		// "/ar/changelog/rss.xml",
		"/robots.txt",
		"/llms.txt",
	];

	const [blogEntries, changelogEntries, useCaseEntries] = await Promise.all([
		Promise.all(locales.map((locale) => getLocalizedEntries("blog", locale))),
		Promise.all(locales.map((locale) => getLocalizedEntries("changelog", locale))),
		Promise.all(locales.map((locale) => getLocalizedUseCases(locale))),
	]);

	const entryPaths = [
		...blogEntries.flatMap((entries) =>
			entries.map((entry) =>
				getCollectionEntryPath("blog", entry.data.locale, entry.data.translationKey),
			),
		),
		...changelogEntries.flatMap((entries) =>
			entries.map((entry) =>
				getCollectionEntryPath("changelog", entry.data.locale, entry.data.translationKey),
			),
		),
		...useCaseEntries.flatMap((entries) =>
			entries.map((entry) => getUseCaseEntryPath(entry.data.locale, entry.data.translationKey)),
		),
	];

	const urls = [...new Set([...staticPaths, ...entryPaths])]
		.map((path) => toAbsoluteUrl(path, siteUrl))
		.filter(Boolean) as string[];

	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls.map((url) => `<url><loc>${url}</loc></url>`),
		"</urlset>",
	].join("");

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
}
