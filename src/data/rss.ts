import { getLocalizedEntries } from "./content";
import { getCollectionEntryPath, getCollectionIndexPath, type PublishCollection } from "./publishing";
import { getSiteUrl, toAbsoluteUrl } from "./seo";
import type { Locale } from "./site";

function escapeXml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

function toRssDate(date: Date) {
	return date.toUTCString();
}

const feedCopy: Record<Locale, Record<PublishCollection, { title: string; description: string }>> = {
	en: {
		blog: {
			title: "Cursivo Blog",
			description: "Operations-first writing about rental demand, AI boundaries, and multilingual team workflows.",
		},
		changelog: {
			title: "Cursivo Changelog",
			description: "Public release notes for the Cursivo marketing surface and related buyer-facing updates.",
		},
	},
	ru: {
		blog: {
			title: "Cursivo Blog",
			description: "Операционные материалы о спросе из чатов, границах AI и мультиязычном workflow для проката.",
		},
		changelog: {
			title: "Cursivo Changelog",
			description: "Публичные release notes для маркетинговой поверхности Cursivo и связанных buyer-facing обновлений.",
		},
	},
	ar: {
		blog: {
			title: "Cursivo Blog",
			description: "مقالات تشغيلية عن طلبات الدردشة وحدود الذكاء الاصطناعي وسير العمل متعدد اللغات.",
		},
		changelog: {
			title: "Cursivo Changelog",
			description: "ملاحظات إصدار عامة لسطح Cursivo التسويقي والتحديثات المرئية للمشترين.",
		},
	},
};

export async function buildRssResponse(collection: PublishCollection, locale: Locale) {
	const entries = await getLocalizedEntries(collection, locale);
	const siteUrl = getSiteUrl();
	const feedPath = `${getCollectionIndexPath(collection, locale)}rss.xml`;
	const channelLink = toAbsoluteUrl(getCollectionIndexPath(collection, locale), siteUrl) ?? getCollectionIndexPath(collection, locale);
	const selfLink = toAbsoluteUrl(feedPath, siteUrl) ?? feedPath;
	const copy = feedCopy[locale][collection];

	const items = entries
		.map((entry) => {
			const entryPath = getCollectionEntryPath(collection, locale, entry.data.translationKey);
			const entryUrl = toAbsoluteUrl(entryPath, siteUrl) ?? entryPath;

			return [
				"<item>",
				`<title>${escapeXml(entry.data.title)}</title>`,
				`<description>${escapeXml(entry.data.description)}</description>`,
				`<link>${escapeXml(entryUrl)}</link>`,
				`<guid>${escapeXml(entryUrl)}</guid>`,
				`<pubDate>${toRssDate(entry.data.publishedAt)}</pubDate>`,
				"</item>",
			].join("");
		})
		.join("");

	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
		"<channel>",
		`<title>${escapeXml(copy.title)}</title>`,
		`<description>${escapeXml(copy.description)}</description>`,
		`<link>${escapeXml(channelLink)}</link>`,
		`<atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml" />`,
		items,
		"</channel>",
		"</rss>",
	].join("");

	return new Response(xml, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
		},
	});
}
