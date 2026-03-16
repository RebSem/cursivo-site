# Cursivo Site

Public multilingual marketing site for Cursivo, built as a dedicated Astro repository for GitHub Pages.

## Overview

Cursivo is positioned as a multilingual AI CRM for car rental operators. This repo will hold the public site that explains the product clearly, shows the operational workflow, and supports search-first content in English, Russian, and Arabic.

Live links:

- Repo: [https://github.com/RebSem/cursivo-site](https://github.com/RebSem/cursivo-site)
- Pages: [https://rebsem.github.io/cursivo-site/](https://rebsem.github.io/cursivo-site/)
- Linear project: [https://linear.app/rebsem/project/cursivo-site-48c5b90dc853](https://linear.app/rebsem/project/cursivo-site-48c5b90dc853)

The initial scope in this repository is:

- Astro 5 starter setup
- static deployment target for GitHub Pages
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
- GitHub Actions deployment to GitHub Pages

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

The repository is configured for GitHub Pages deployment through GitHub Actions.

- GitHub Pages URL: [https://rebsem.github.io/cursivo-site/](https://rebsem.github.io/cursivo-site/)
- GitHub repo homepage is set to the Pages URL.

## Notes

- The public site is intentionally separate from the internal product repository.
- The repo starts with a simple branded placeholder page; the full implementation is tracked as Linear issues derived from the brief.
