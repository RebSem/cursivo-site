// @ts-check
import mdx from "@astrojs/mdx";
import { defineConfig } from 'astro/config';

const siteUrl = /** @type {string | undefined} */ (/** @type {any} */ (globalThis).process?.env
	?.PUBLIC_SITE_URL);

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: siteUrl || undefined,
	integrations: [mdx()],
});
