import { getCanonicalUrl, getLocalePath, getSiteUrl, toAbsoluteUrl } from "./seo";
import type { HomeContent, Locale } from "./site";

type JsonLd = Record<string, unknown>;

function withContext(schema: JsonLd): JsonLd {
	return {
		"@context": "https://schema.org",
		...schema,
	};
}

export function buildOrganizationSchema(content: HomeContent): JsonLd {
	const siteUrl = getSiteUrl();
	const canonicalUrl = getCanonicalUrl(content.locale, siteUrl);

	return withContext({
		"@type": "Organization",
		name: "Cursivo",
		description: content.description,
		url: canonicalUrl ?? undefined,
		knowsAbout: [
			"car rental operations",
			"lead qualification",
			"multilingual customer communication",
			"quote preparation",
			"reservation workflows",
		],
	});
}

export function buildWebsiteSchema(content: HomeContent): JsonLd {
	const siteUrl = getSiteUrl();
	const canonicalUrl = getCanonicalUrl(content.locale, siteUrl);

	return withContext({
		"@type": "WebSite",
		name: "Cursivo",
		description: content.description,
		inLanguage: content.locale,
		url: canonicalUrl ?? undefined,
	});
}

export function buildSoftwareApplicationSchema(content: HomeContent): JsonLd {
	const siteUrl = getSiteUrl();
	const canonicalUrl = getCanonicalUrl(content.locale, siteUrl);

	return withContext({
		"@type": "SoftwareApplication",
		name: "Cursivo",
		applicationCategory: "BusinessApplication",
		operatingSystem: "Web",
		abstract: content.heroLead,
		description: content.description,
		inLanguage: content.locale,
		url: canonicalUrl ?? undefined,
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
	});
}

export function buildBreadcrumbSchema(locale: Locale, pageName: string, path = getLocalePath(locale)): JsonLd {
	const siteUrl = getSiteUrl();
	const homeUrl = getCanonicalUrl(locale, siteUrl);
	const pageUrl = toAbsoluteUrl(path, siteUrl);
	const isHomePage = path === getLocalePath(locale);

	return withContext({
		"@type": "BreadcrumbList",
		itemListElement: isHomePage
			? [
					{
						"@type": "ListItem",
						position: 1,
						name: pageName,
						item: pageUrl ?? undefined,
					},
				]
			: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Cursivo",
						item: homeUrl ?? undefined,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: pageName,
						item: pageUrl ?? undefined,
					},
				],
	});
}

export function buildFaqPageSchema(
	questions: Array<{ question: string; answer: string }>
): JsonLd {
	return withContext({
		"@type": "FAQPage",
		mainEntity: questions.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	});
}

export function buildArticleSchema(input: {
	locale: Locale;
	title: string;
	description: string;
	path: string;
	datePublished?: string;
	dateModified?: string;
}): JsonLd {
	const siteUrl = getSiteUrl();
	const articleUrl = toAbsoluteUrl(input.path, siteUrl);

	return withContext({
		"@type": "Article",
		headline: input.title,
		description: input.description,
		inLanguage: input.locale,
		mainEntityOfPage: articleUrl ?? undefined,
		url: articleUrl ?? undefined,
		datePublished: input.datePublished,
		dateModified: input.dateModified,
	});
}

export function buildHomepageJsonLd(content: HomeContent): JsonLd[] {
	return [
		buildOrganizationSchema(content),
		buildWebsiteSchema(content),
		buildSoftwareApplicationSchema(content),
		buildBreadcrumbSchema(content.locale, "Cursivo"),
	];
}

export function getLocalizedWebsiteEntries(): Array<{ locale: Locale; path: string; url: string | null }> {
	const siteUrl = getSiteUrl();

	return (["en", "ru", "ar"] as Locale[]).map((locale) => ({
		locale,
		path: getLocalePath(locale),
		url: toAbsoluteUrl(getLocalePath(locale), siteUrl),
	}));
}
