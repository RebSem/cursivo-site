# Cursivo Site

Public multilingual marketing site for Cursivo, built as a dedicated Astro repository.

## Overview

Cursivo is positioned as a multilingual AI CRM for car rental operators. This repository contains the public-facing site that explains the product clearly, shows the operational workflow, and supports search-first content in English, Russian, and Arabic.

Live links:

- Repo: [https://github.com/RebSem/cursivo-site](https://github.com/RebSem/cursivo-site)

The initial scope in this repository is:

- Astro 5 starter setup
- deployment target deferred until the final domain is ready
- project brief committed in the repository
- implementation roadmap tracked privately

## Product goals

The site should answer three questions fast:

1. What is Cursivo?
2. Why is it different from a generic chatbot or CRM?
3. Why should a rental operator trust this workflow?

## Planned stack

- Astro 5
- TypeScript
- static output
- plain CSS
- deployment target to be configured later for the final domain

## Planned routes

- `/`
- `/product`
- `/open-source`
- `/blog`
- `/changelog`
- `/ru/`
- `/ar/`

## Source brief

The technical brief for the site lives in [`public-marketing-site-blueprint.md`](./public-marketing-site-blueprint.md).

## Local development

```bash
npm install
npm run dev
```

Additional commands:

```bash
npm run build
npm run preview
npm run check
npm run qa:links
npm run qa:prelaunch
```

## Optional Analytics

Analytics is optional and disabled by default.

If you want a privacy-conscious static-friendly script such as a Plausible-compatible endpoint, set:

```bash
PUBLIC_ANALYTICS_ENABLED=true
PUBLIC_ANALYTICS_SCRIPT_URL=https://analytics.example.com/js/script.js
PUBLIC_ANALYTICS_DOMAIN=cursivo.site
PUBLIC_ANALYTICS_API_HOST=https://analytics.example.com/api/event
```

Notes:

- `PUBLIC_ANALYTICS_SCRIPT_URL` and `PUBLIC_ANALYTICS_DOMAIN` are required to inject the script
- `PUBLIC_ANALYTICS_API_HOST` is optional and only needed for compatible setups that expect `data-api`
- if these vars are not set, no analytics script is rendered
- the integration stays static-site-friendly and does not require SSR or a backend in this repo

## Deployment

Deployment is intentionally deferred until the site is implemented and the final domain is ready.

## Notes

- The public site is intentionally separate from the internal product repository.
- The repository started from a branded placeholder page and is evolving into the full public marketing site.
- The final production domain should be wired later instead of hardcoding a temporary Pages URL.
