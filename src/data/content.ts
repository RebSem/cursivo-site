import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Locale } from "./site";
import {
	getCollectionEntryPath,
	getCollectionIndexPath,
	type PublishCollection,
} from "./publishing";

type LocalizedEntry = CollectionEntry<"blog"> | CollectionEntry<"changelog">;

export async function getLocalizedEntries<C extends PublishCollection>(
	collection: C,
	locale: Locale,
): Promise<CollectionEntry<C>[]> {
	return (await getCollection(collection, ({ data }) => data.locale === locale && data.draft === false)).sort(
		(left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
	);
}

export async function getEntryByTranslationKey<C extends PublishCollection>(
	collection: C,
	locale: Locale,
	translationKey: string,
): Promise<CollectionEntry<C> | null> {
	const entries = await getCollection(
		collection,
		({ data }) =>
			data.locale === locale && data.translationKey === translationKey && data.draft === false,
	);

	return entries[0] ?? null;
}

export async function getEntryTranslations<C extends PublishCollection>(
	collection: C,
	translationKey: string,
): Promise<CollectionEntry<C>[]> {
	const entries = await getCollection(
		collection,
		({ data }) => data.translationKey === translationKey && data.draft === false,
	);

	return entries.sort((left, right) => left.data.locale.localeCompare(right.data.locale));
}

export function buildAlternateEntryPaths(
	collection: PublishCollection,
	entries: LocalizedEntry[],
): Partial<Record<Locale, string>> {
	return Object.fromEntries(
		entries.map((entry) => [
			entry.data.locale,
			getCollectionEntryPath(collection, entry.data.locale, entry.data.translationKey),
		]),
	) as Partial<Record<Locale, string>>;
}

export function buildLocaleLinksForEntry(
	collection: PublishCollection,
	entries: LocalizedEntry[],
): Array<{ code: Locale; label: string; href: string }> {
	const alternatePaths = buildAlternateEntryPaths(collection, entries);

	return (["en", "ru", "ar"] as Locale[]).map((locale) => ({
		code: locale,
		label: locale.toUpperCase(),
		href: alternatePaths[locale] ?? getCollectionIndexPath(collection, locale),
	}));
}

export function formatPublishDate(date: Date, locale: Locale) {
	const localeName = locale === "ar" ? "ar" : locale === "ru" ? "ru-RU" : "en-US";

	return new Intl.DateTimeFormat(localeName, {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(date);
}

export async function getLocalizedUseCases(locale: Locale): Promise<CollectionEntry<"use-cases">[]> {
	return (
		await getCollection(
			"use-cases",
			({ data }) => data.locale === locale && data.draft === false,
		)
	).sort((left, right) => {
		const orderDiff = left.data.order - right.data.order;
		if (orderDiff !== 0) {
			return orderDiff;
		}

		return left.data.title.localeCompare(right.data.title);
	});
}

export async function getUseCaseByTranslationKey(
	locale: Locale,
	translationKey: string,
): Promise<CollectionEntry<"use-cases"> | null> {
	const entries = await getCollection(
		"use-cases",
		({ data }) =>
			data.locale === locale && data.translationKey === translationKey && data.draft === false,
	);

	return entries[0] ?? null;
}

export async function getUseCaseTranslations(
	translationKey: string,
): Promise<CollectionEntry<"use-cases">[]> {
	const entries = await getCollection(
		"use-cases",
		({ data }) => data.translationKey === translationKey && data.draft === false,
	);

	return entries.sort((left, right) => left.data.locale.localeCompare(right.data.locale));
}
