import { getSiteUrl, toAbsoluteUrl } from "../data/seo";

export function GET() {
	const siteUrl = getSiteUrl();
	const sitemapUrl = toAbsoluteUrl("/sitemap.xml", siteUrl);

	const lines = [
		"User-agent: *",
		"Allow: /",
	];

	if (sitemapUrl) {
		lines.push(`Sitemap: ${sitemapUrl}`);
	}

	return new Response(`${lines.join("\n")}\n`, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
