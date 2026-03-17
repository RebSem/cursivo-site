# Cursivo Site - Project Overview & Context

This is the public multilingual marketing site for **Cursivo**, an AI CRM and operations layer specifically designed for car rental operators. It is built as a static [Astro 5](https://astro.build/) project.

## Project Mission
The site aims to answer three key questions:
1. **What is Cursivo?** (AI-assisted CRM for rentals)
2. **Why is it different?** (Focus on operational loops, not just chat)
3. **Why trust it?** (Built for real-world branch workflows)

## Core Technologies
- **Framework:** Astro 5 (Static Output)
- **Language:** TypeScript
- **Content:** MDX via Astro Content Collections
- **Styling:** Plain CSS (No Tailwind, following a custom design system)
- **Typography:** Space Grotesk (Headlines), Manrope (Body), IBM Plex Mono (Labels), Noto Sans Arabic (Arabic)
- **Deployment:** Static hosting (Target: GitHub Pages)

## Project Structure
- `src/components/`: Modular Astro components for landing page sections and UI elements.
- `src/content/`: Multilingual Markdown/MDX content for `blog`, `changelog`, `use-cases`, and `faq`.
- `src/data/`: TypeScript data modules for site configuration, navigation, SEO, and localized landing page content (`site.ts`).
- `src/layouts/`: `BaseLayout.astro` manages global shell, SEO, and RTL/LTR logic.
- `src/pages/`: Route definitions, including localized subdirectories (`/ar/`, `/ru/`).
- `scripts/`: Utility scripts like `check-links.mjs` for QA.

## Key Development Commands
- `npm run dev`: Start local development server.
- `npm run build`: Generate static production build.
- `npm run preview`: Preview the production build locally.
- `npm run check`: Run Astro and TypeScript checks.
- `npm run qa:links`: Run the internal link checker script.
- `npm run qa:prelaunch`: Full check (Build + Typecheck + Link Check).

## Architecture & Conventions

### Multilingual Support
- **Route-first Localization:** Each language has its own indexable routes (`/`, `/ru/`, `/ar/`).
- **RTL Support:** Arabic (`/ar/`) uses `dir="rtl"` in the layout and specific RTL-aware CSS.
- **Translation Keys:** Content collections use a `translationKey` to link translated versions of the same entry.

### Design System (The "Concierge" Look)
- **Palette:** Warm sand (`#F5EFE6`), Ivory (`#FFFDF9`), Ink (`#142033`), Terracotta (`#C96A3A`), and Reservation Navy (`#284766`).
- **Asymmetry:** Layouts favor offset blocks and layered cards over centered templates.
- **Visual Metaphors:** "Route lines" and "dispatch pills" are used to represent operational workflows.

### Content Strategy
- Homepage content is managed in `src/data/site.ts` to allow for easy localization of complex landing page blocks.
- Long-form content lives in `src/content/`.

### SEO & Discoverability
- Automatic generation of `sitemap.xml`, `robots.txt`, and `llms.txt`.
- Comprehensive JSON-LD structured data and Open Graph metadata per page.

## Guidelines for AI Interactions
- **Styling:** Always use plain CSS. Adhere to the design tokens and asymmetric layout philosophy described in `public-marketing-site-blueprint.md`.
- **Localization:** When adding features or content, ensure support for EN, RU, and AR.
- **Performance:** Maintain a zero-JS default. Use Astro Islands only for necessary interactivity (e.g., locale switching, complex animations).
- **Data-Driven:** Update `src/data/` modules for global site changes rather than hardcoding values in components.
