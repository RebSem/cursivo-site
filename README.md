# Cursivo Site

Public multilingual marketing site for Cursivo, built as a dedicated Astro repository.

## Overview

Cursivo is positioned as a multilingual AI CRM for car rental operators. This repo will hold the public site that explains the product clearly, shows the operational workflow, and supports search-first content in English, Russian, and Arabic.

Live links:

- Repo: [https://github.com/RebSem/cursivo-site](https://github.com/RebSem/cursivo-site)
- Linear project: [https://linear.app/rebsem/project/cursivo-site-48c5b90dc853](https://linear.app/rebsem/project/cursivo-site-48c5b90dc853)

The initial scope in this repository is:

- Astro 5 starter setup
- deployment target deferred until the final domain is ready
- project brief committed in the repo
- implementation tracked in Linear as a dedicated project

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
```

## Deployment

Deployment is intentionally deferred until the site is implemented and the final domain is ready.

## Notes

- The public site is intentionally separate from the internal product repository.
- The repo starts with a simple branded placeholder page; the full implementation is tracked as Linear issues derived from the brief.
- The final production domain should be wired later instead of hardcoding a temporary Pages URL.
