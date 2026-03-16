# Cursivo Public Marketing Site Blueprint

## Why this document exists

The repository already contains the product core, pilot docs, and a working ops interface.
What it does not contain yet is the public multilingual marketing site that explains the product clearly, ranks well in search, and can live as an open-source Astro project on GitHub Pages.

This document defines that site.

## What the current project already tells us

Based on the existing repo:

- Cursivo is not a generic chatbot. It is an AI-assisted CRM and operations layer for car rental teams.
- The strongest product story is the operational loop from inbound chat to qualified lead, quote, hold, and manager handoff.
- The current product language is already stronger than a typical SaaS pitch: inbox, reservations, branches, fleet, handoff, dashboard, follow-up.
- The public multilingual site is explicitly in the roadmap after the current pilot.
- The ops product already has a visual language worth reusing:
  - warm sand background
  - terracotta accent
  - deep navy text and structural contrast
  - mono utility labels
  - Arabic support is already planned in the product UI

That means the site should feel like the public face of the same product family, not like a separate startup template.

## Core site goal

The site should answer three questions quickly:

1. What is Cursivo?
2. Why is it different from a chatbot or generic CRM?
3. Why should a rental operator trust this workflow?

The site should do that without becoming a web app. Its job is explanation, proof, discoverability, and trust.

## Product positioning for the site

Recommended positioning:

> Cursivo is a multilingual AI CRM for car rental operators that turns inbound chat demand into structured leads, quotes, reservations, and manager actions.

Important positioning rules:

- Lead with operations, not AI hype.
- Show AI as part of a workflow, not as the product by itself.
- Emphasize Telegram-first today, with WhatsApp, widget, and public-site layer as the next expansion.
- Make branch-aware operations and manager handoff central.
- Avoid promising features that are not live yet.

## Visual direction

### Overall concept

The site should feel like a **concierge operations board**, not a generic SaaS dashboard clone.

Desired mood:

- warm
- precise
- premium but not luxury-cliche
- operational
- confident
- multilingual-ready

The unusual part should come from composition, not gimmicks:

- asymmetric layouts
- layered cards instead of centered template blocks
- route-like connector lines between sections
- editorial typography mixed with operational UI fragments
- small mono labels that look like dispatch metadata
- screenshots used sparingly and cropped into story-driven frames

### What the site should not look like

- no neon-on-black AI landing page
- no startup template with one hero, logo wall, and six icon cards
- no stock car photography as the main visual system
- no fake glassmorphism everywhere
- no over-animated hero with heavy JS

## Color system

The palette should evolve from the existing ops UI, not replace it.

### Primary palette

- `Sand / page base`: `#F5EFE6`
- `Ivory / raised surface`: `#FFFDF9`
- `Ink / main text`: `#142033`
- `Slate / secondary text`: `#5F6D80`
- `Terracotta / primary accent`: `#C96A3A`
- `Burnt terracotta / active accent`: `#934822`
- `Reservation navy / structural contrast`: `#284766`
- `Success green`: `#2F8A62`
- `Warning ochre`: `#AD6A27`
- `Border sand`: `rgba(113, 88, 62, 0.18)`

### How to use the palette

- Sand and ivory carry most of the page.
- Ink is the dominant reading color.
- Terracotta is for CTA, highlights, and route emphasis.
- Navy is for product-state surfaces, reservation-related cards, and deeper contrast zones.
- Green appears only where proof or success matters.

This keeps continuity with `apps/ops-web/app/globals.css` while giving the site more room for storytelling.

## Typography

Reuse the existing product family because it already works and supports the target languages:

- `Space Grotesk` for display headlines
- `Manrope` for body text
- `IBM Plex Mono` for labels, metadata, and product state pills
- `Noto Sans Arabic` for Arabic content

Typography behavior:

- headlines should be compact, high-contrast, and slightly editorial
- body copy should stay readable and business-clear
- mono text should signal system state, branches, timings, and workflow labels

## Layout language

The key visual metaphor should be a route through operations.

Examples:

- connector lines between hero cards and subsequent sections
- timeline sections that read like a booking path
- split blocks labeled `AI` and `Manager`
- branch and reservation cards laid out like live operating slips

### Grid behavior

- desktop: asymmetrical 12-column layout with offset blocks
- tablet: simplified 6-column rhythm
- mobile: stacked single-column layout with preserved hierarchy

The mobile version should not collapse into plain centered cards. It should keep strong spacing and sequence.

## Recommended site structure

Launch scope:

- `/` or `/en/` as the main landing page
- `/product`
- `/open-source`
- `/blog`
- `/changelog`
- `/privacy` and `/terms` if needed
- localized routes for `ru` and `ar`

Recommended locale strategy:

- `/` defaults to English
- `/ru/` for Russian
- `/ar/` for Arabic

For SEO, each locale should have its own route and canonical metadata.

## Landing page block plan

### 1. Hero: "Inbound demand, structured in minutes"

Purpose:

- explain the product in one screen
- show that Cursivo sits between customer chat and manager workflow
- communicate multilingual and operational scope

Composition:

- left: strong headline, short supporting copy, two CTAs
- right: layered visual stack of chat card, AI qualification card, reservation card, and branch status card
- background: soft route lines and radial gradients, not a plain white section

Suggested CTAs:

- `View on GitHub`
- `See product flow`

### 2. Proof ribbon

A narrow block immediately below the hero with short proof statements:

- Telegram-first workflow live
- Multi-branch operations
- Admin and manager surfaces
- RU / EN / AR direction
- Open-source marketing site

Use mono labels and subtle separators instead of large icons.

### 3. Operating loop section

This is the main story block.

Show the workflow as a horizontal or stepped sequence:

1. Customer message arrives
2. AI qualifies the request
3. Inventory is checked by branch
4. Quote and hold path are prepared
5. Manager receives the handoff with context

This should look like a route board, not five generic feature cards.

### 4. AI and manager handoff block

Two-column block with a strong center divide:

- left column: what AI handles well
- right column: what remains human-owned

This is important because it makes the product credible.

Example labels:

- AI: qualification, inventory check, quote prep, context capture
- Manager: approval, exceptions, negotiation, final confirmation

### 5. Multi-branch control block

Purpose:

- show that the product is operational, not cosmetic
- make the product feel deeper than chat automation

Visual idea:

- stacked KPI strips
- branch cards
- reservation and task state chips
- one highlighted insight panel

This is the best place for a carefully cropped dashboard screenshot if used.

### 6. Setup and onboarding block

Narrative:

- upload branch and fleet data
- configure channel
- start operating

Visual idea:

- XLSX card to live workspace sequence
- simple 3-step diagram

This reduces perceived adoption risk.

### 7. Multilingual block

This should not be a small footer mention.

Show:

- English
- Russian
- Arabic with real RTL preview

The point is not only translation. The point is market readiness and interface discipline.

### 8. Open-source and trust block

Because the site will be public on GitHub, make that part of the trust layer.

Show:

- open repo
- static deploy via GitHub Pages
- transparent changelog
- public roadmap / release notes

This works especially well for technical buyers and partners.

### 9. Blog or insights preview

This block exists for SEO and product trust.

Content examples:

- why rental operators lose chat leads
- what AI should and should not automate in booking workflows
- how multilingual ops change conversion quality

### 10. Final CTA

Keep it simple:

- GitHub
- Telegram or email contact
- pilot/demo request link

Do not force a complex form in v1.

## Reusable visual elements

The design system for the site should include:

- route lines and connector curves
- dispatch-like pills and micro-labels
- layered cards with slight rotation or offset
- bordered paper-like surfaces
- split comparison blocks
- section dividers that feel like maps or travel sheets
- subtle depth through shadows, not blur-heavy glass effects

## Motion

Motion should be quiet and purposeful:

- staggered reveal on first load
- line-draw effect for route connectors
- subtle card lift on hover
- number counters only where they reinforce meaning

Avoid:

- parallax-heavy scenes
- scroll hijacking
- large JS animation frameworks unless absolutely needed

## Technology stack

## Site framework

- Astro 5
- TypeScript
- static output
- GitHub Actions deploy to GitHub Pages

## Repository strategy

Recommended default:

- keep the public site as a separate sibling repo, similar to `portfo`

Why:

- the marketing site has a different release rhythm than the product monorepo
- GitHub Pages deploy is much simpler from a dedicated static repo
- the public repo stays clean and intentionally open-source
- the site does not need to inherit backend, worker, and internal app concerns

Alternative:

- keep it in this monorepo as `apps/marketing-site`

This is only worth it if you strongly want shared product docs or shared assets in one place.

For the current goal, a separate public repo is the cleaner choice.

## Content layer

- `astro:content` collections for structured multilingual content
- MDX for blog, changelog, use cases, and possibly long-form product pages
- TypeScript data modules for navigation, feature matrices, FAQ, and CTA metadata

## Styling approach

- plain CSS with design tokens, or CSS modules where component isolation helps
- no Tailwind by default

Reason:

- the neighboring `portfo` project already proves the Astro + CSS path works well
- open-source contributors can read and adjust plain CSS quickly
- custom visual composition is usually cleaner without utility-class sprawl

## Interactivity

- default to zero-JS or minimal-JS pages
- use Astro islands only where needed:
  - locale switcher
  - animated workflow block
  - expandable FAQ
  - copy/share helpers

## Recommended Astro dependencies

- `astro`
- `@astrojs/mdx`
- `@astrojs/sitemap`
- `@astrojs/rss` if blog/changelog feeds are needed
- `@astrojs/check`

Optional:

- a tiny link checker script
- `vitest` for utility tests

## Data and database strategy

For the public site in v1:

- **no runtime database**

That is the correct choice for a static GitHub Pages deployment.

### What to use instead

- content files in the repo
- typed collections
- build-time generated JSON where useful

Suggested content model:

- `src/content/pages`
- `src/content/blog`
- `src/content/changelog`
- `src/content/use-cases`
- `src/content/faq`
- `src/data/site.ts`
- `src/data/features.ts`
- `src/data/navigation.ts`

### What not to do

- do not connect the marketing site directly to the product PostgreSQL database
- do not make the public site depend on the internal API to render
- do not introduce SSR just for simple content pages

If later the public site needs dynamic leads, forms, or booking widgets, that can be added as a separate integration layer.

## SEO architecture

Because this is a marketing site, SEO should shape the implementation from the start.

### Required decisions

- locale-specific routes, not client-side translation only
- unique title and description per locale and page
- canonical URLs
- `hreflang` for `en`, `ru`, and `ar`
- generated `sitemap.xml`
- generated `robots.txt`
- `llms.txt`
- Open Graph and Twitter metadata
- JSON-LD structured data

### Recommended structured data

- `Organization`
- `WebSite`
- `SoftwareApplication`
- `BreadcrumbList`
- `FAQPage`
- `Article` for blog posts

### Content SEO strategy

The site should rank through intent-specific pages, not only the homepage.

Recommended clusters:

- AI CRM for car rental
- Telegram lead handling for rentals
- multilingual rental operations
- branch-aware rental workflow
- fleet onboarding and quote preparation

Important:

- do not publish pages for non-live features as if they already exist
- future-facing pages should clearly frame roadmap items as upcoming

## Multilingual strategy

The multilingual system should be route-first and content-first.

Recommended locales:

- `en`
- `ru`
- `ar`

Recommended approach:

- each locale has its own page file or generated route
- blog/changelog content has translation pairs using a shared `translationKey`
- Arabic gets true RTL layout support

Do not rely on a JavaScript locale toggle alone for SEO-critical pages.

The `portfo` project is a useful Astro reference for structure and content collections, but Cursivo should improve on it by giving each locale indexable routes.

## GitHub Pages constraints and opportunities

### Constraints

- no server runtime
- no secret-dependent rendering
- no backend form handling out of the box

### Opportunities

- cheap and predictable hosting
- excellent fit for static marketing content
- public build pipeline
- open-source transparency

### CTA strategy under those constraints

Recommended v1 CTAs:

- GitHub repo
- Telegram contact
- email
- external scheduling link if wanted

Not recommended for v1:

- complex demo request forms that need backend processing

## Content tone

The copy should feel:

- practical
- product-aware
- operational
- multilingual-market-ready

Avoid:

- generic AI buzzwords
- inflated enterprise language
- vague automation promises

Use concrete nouns:

- conversation
- lead
- branch
- quote
- hold
- reservation
- handoff
- manager

## Recommended implementation phases

### Phase 1

- Astro app bootstrap inside the repo
- design tokens and layout shell
- homepage
- localized routing
- sitemap, robots, metadata, JSON-LD

### Phase 2

- product page
- open-source page
- blog and changelog
- first 3 to 5 SEO-oriented articles

### Phase 3

- use-case pages
- richer illustrations
- optional lightweight analytics

## Final recommendation

Build the site as a static Astro project that reuses the product brand language from the ops app, but presents it in a more editorial and cinematic way.

The strongest concept is:

- warm operational palette
- asymmetric storytelling layout
- route-based workflow visuals
- multilingual route-first SEO
- no runtime database
- no heavy JS
- open-source by default

That gives Cursivo a site that feels sharper than `portfo`, consistent with the product, and realistic for GitHub Pages hosting.
