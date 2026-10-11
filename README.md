# Cursivo Site

Public multilingual marketing site for Cursivo, built as a dedicated Astro repository.

Status: live at [cursivo.xyz](https://cursivo.xyz) (GitHub Pages), last deployed
2026-05-25. A visual-polish PR (#5) and a September 2026 prototype (branch
`wip/2026-10-11`) are not merged yet. Coding agents: start at [`AGENTS.md`](AGENTS.md).

## Overview

Cursivo is positioned as an AI agent + CRM for car rental operators: an agent that
answers customer chats and a CRM that fills itself with leads, quotes and manager tasks.
This repository contains the public-facing site that explains the product clearly, shows
the operational workflow, and supports search-first content in English, Russian, and
Arabic. The product itself lives in a separate internal repository.

## Product goals

The site should answer three questions fast:

1. What is Cursivo?
2. Why is it different from a generic chatbot or CRM?
3. Why should a rental operator trust this workflow?

## Stack

- Astro 5, static output, TypeScript (strict)
- Markdown content collections (blog, changelog, use cases, FAQ, pages)
- Plain CSS with design tokens in `src/styles/global.css`; fonts self-hosted via `@fontsource`
- Optional PostHog analytics
- GitHub Actions → GitHub Pages, custom domain `cursivo.xyz`

## Routes

Every route exists in English (root), Russian (`/ru/`) and Arabic (`/ar/`, RTL).

| Route | |
|---|---|
| `/` | Landing page |
| `/product/` | Product deep dive |
| `/use-cases/`, `/use-cases/:key/` | Use cases |
| `/blog/`, `/blog/:key/`, `/blog/rss.xml` | Articles |
| `/changelog/`, `/changelog/:key/`, `/changelog/rss.xml` | Changelog |
| `/privacy/`, `/terms/` | Legal |
| `/cases` | Legacy alias, redirects to `/use-cases/` (EN only) |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Generated |

The navigation also links to `/open-source/`, which does not exist yet; see AGENTS.md.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

Additional commands:

```bash
npm run build          # static build into dist/
npm run preview        # serve the build
npm run check          # astro check (types, diagnostics)
npm run qa:links       # link, anchor, alt and meta checks over dist/
npm run qa:prelaunch   # build + check + qa:links
```

`qa:links` currently fails on `main` because of the missing `/open-source/` page.

## Analytics

Analytics is optional. Nothing is rendered unless one of these is configured
(see [`.env.example`](.env.example)):

- **PostHog** (used in production): `PUBLIC_POSTHOG_TOKEN`, optional
  `PUBLIC_POSTHOG_HOST` (defaults to PostHog EU).
- **Legacy Plausible-compatible script**, used only when no PostHog token is set:
  `PUBLIC_ANALYTICS_SCRIPT_URL` and `PUBLIC_ANALYTICS_DOMAIN` (both required), optional
  `PUBLIC_ANALYTICS_API_HOST` for setups that expect `data-api`.

`PUBLIC_ANALYTICS_ENABLED=false` switches analytics off even when a token is present.
The integration stays static-site-friendly and needs no SSR or backend.

## Project layout

```
src/pages/        routes; ru/ and ar/ mirror the root
src/components/   Astro components (HomePage is the live home for all locales)
src/content/      Markdown collections
src/data/         copy, navigation, SEO and JSON-LD helpers, per locale
src/styles/       global tokens and layout
scripts/          check-links.mjs (QA over dist/)
docs/             prelaunch-qa.md
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
`npm ci`, `npm run build`, then deploys `dist/` to GitHub Pages. The custom domain is set
in [`public/CNAME`](public/CNAME). PostHog values come from repository variables.
The workflow does not run `check` or `qa:links`.

## Source brief and docs

- [`public-marketing-site-blueprint.md`](./public-marketing-site-blueprint.md): the
  original site brief (positioning, visual system, SEO and multilingual strategy)
- [`docs/prelaunch-qa.md`](docs/prelaunch-qa.md): QA baseline
- [`AGENTS.md`](AGENTS.md): current state, rules and gotchas for contributors and agents

## Notes

- The public site is intentionally separate from the internal product repository.
- The repository started from a branded placeholder page and grew into the full public
  marketing site.
- The implementation roadmap is tracked privately.
