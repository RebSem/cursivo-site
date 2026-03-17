import { getAlternateUrls, getSiteUrl, toAbsoluteUrl } from "../data/seo";

export function GET() {
	const siteUrl = getSiteUrl();
	const alternates = getAlternateUrls(siteUrl).filter((item) => item.href);
	const robotsUrl = toAbsoluteUrl("/robots.txt", siteUrl);
	const sitemapUrl = toAbsoluteUrl("/sitemap.xml", siteUrl);

	const lines = [
		"# Cursivo",
		"",
		"> Multilingual AI CRM for car rental operators.",
		"",
		"## Public routes",
		...alternates.map((item) => `- ${item.locale.toUpperCase()}: ${item.href}`),
		"",
		"## Machine-readable files",
		...(robotsUrl ? [`- robots.txt: ${robotsUrl}`] : []),
		...(sitemapUrl ? [`- sitemap.xml: ${sitemapUrl}`] : []),
		"",
		"## Product summary",
		"- Cursivo helps rental teams turn inbound chat demand into qualified leads, quote preparation, reservation context, and manager actions.",
		"- Public content is route-first for English, Russian, and Arabic.",
	];

	return new Response(`${lines.join("\n")}\n`, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
