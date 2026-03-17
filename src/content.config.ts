import { defineCollection, z } from "astro:content";

const localizedPageSchema = z.object({
	title: z.string(),
	description: z.string(),
	locale: z.enum(["en", "ru", "ar"]),
	translationKey: z.string(),
	draft: z.boolean().default(false),
});

const pages = defineCollection({
	type: "content",
	schema: localizedPageSchema,
});

const blog = defineCollection({
	type: "content",
	schema: localizedPageSchema.extend({
		publishedAt: z.coerce.date(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		excerpt: z.string().optional(),
		estimatedReadTime: z.string().optional(),
		featuredOnIndex: z.boolean().default(false),
	}),
});

const changelog = defineCollection({
	type: "content",
	schema: localizedPageSchema.extend({
		publishedAt: z.coerce.date(),
		version: z.string(),
	}),
});

const useCases = defineCollection({
	type: "content",
	schema: localizedPageSchema.extend({
		industry: z.string(),
		audience: z.string(),
		order: z.number().int().nonnegative(),
	}),
});

const faq = defineCollection({
	type: "content",
	schema: localizedPageSchema.extend({
		question: z.string(),
		answer: z.string(),
		order: z.number().int().nonnegative(),
	}),
});

export const collections = {
	pages,
	blog,
	changelog,
	"use-cases": useCases,
	faq,
};
