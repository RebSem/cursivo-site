import type { Locale } from "./site";

export const localePaths: Record<Locale, string> = {
	en: "/",
	ru: "/ru/",
	ar: "/ar/",
};

export function getSiteUrl(): URL | null {
	return new URL("https://cursivo.xyz/");
}

export function getLocalePath(locale: Locale): string {
	return localePaths[locale];
}

export function toAbsoluteUrl(path: string, siteUrl: URL | null): string | null {
	if (!siteUrl) {
		return null;
	}

	return new URL(path.replace(/^\//, ""), siteUrl).toString();
}

export function getCanonicalUrl(locale: Locale, siteUrl: URL | null): string | null {
	return toAbsoluteUrl(getLocalePath(locale), siteUrl);
}

export function getAlternateUrls(siteUrl: URL | null) {
	return (Object.keys(localePaths) as Locale[]).map((locale) => ({
		locale,
		href: toAbsoluteUrl(getLocalePath(locale), siteUrl),
	}));
}

export function getCanonicalUrlForPath(path: string, siteUrl: URL | null): string | null {
	return toAbsoluteUrl(path, siteUrl);
}

export function getAlternateUrlsForPaths(paths: Record<Locale, string>, siteUrl: URL | null) {
	return (Object.keys(paths) as Locale[]).map((locale) => ({
		locale,
		href: toAbsoluteUrl(paths[locale], siteUrl),
	}));
}
