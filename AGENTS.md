# AGENTS.md: cursivo-site

Canonical guide for coding agents (Claude Code, Codex, Cursor, Gemini and others).
`CLAUDE.md` imports this file; `GEMINI.md` is the older Gemini-specific overview and
points here. Human-facing overview: [`README.md`](README.md).

## What this is

The public marketing site for **Cursivo**, an AI agent + CRM for car rental operators
(positioned around multi-branch, multilingual operators, with Dubai as the stated
market). Static Astro 5 site in three locales: English (default, unprefixed), Russian
(`/ru/`) and Arabic (`/ar/`, right-to-left). It explains the product, publishes
SEO-oriented articles, use cases and a changelog, and sends visitors to contact the
founder directly (Telegram, WhatsApp and LinkedIn links; there are no forms).

Status: live at https://cursivo.xyz via GitHub Pages; last deploy 2026-05-25. The
product itself lives in a separate internal repository; this repo is only the public
site. The repository is **public**.

## Current state

- Default branch: `main` at `7355c09` (2026-05-25, merge of PRs #3 and #4).
- Version: `package.json` `0.1.0`, never bumped; no git tags.
- Open PR: **#5** `design/visual-polish`, "design(home): fix layout overflow, mobile
  pipeline, and motion polish" (opened 2026-06-12, one commit, not merged).
- Unmerged branch: **`wip/2026-10-11`**: the owner's uncommitted work saved on
  2026-10-11. It holds a September 2026 review prototype at `/prototype/` (RU) and
  `/prototype/en/` (`src/components/prototype/*`, `src/data/prototype.ts`,
  `src/styles/prototype.css`, `src/pages/prototype/*`), product and design notes
  (`PRODUCT.md`, `DESIGN.md`, `DESIGN_SYSTEM.md`), Codex screenshots in
  `.codex-artifacts/`, a `.claude/launch.json`, `devToolbar: { enabled: false }` in
  `astro.config.mjs`, and it deletes the two `.claude/worktrees/*` gitlinks. Treat it as
  draft context, not as approved direction. Summary of those notes under
  "Design direction" below.
- Known gaps (verified 2026-10-11):
  - `npm run qa:links` **fails on `main`**: 58 missing targets, one per generated page,
    all pointing at `/open-source/`, `/ru/open-source/`, `/ar/open-source/`. The
    navigation (`src/data/navigation.ts`) links to an open-source page that was
    planned in the blueprint but never built. PR #5 notes the same.
  - The "Inspect the codebase" link (`socialLinks.github` in `src/data/strings.ts`)
    points to `github.com/RebSem/cursivosite`, which does not exist (the repo is
    `cursivo-site`).
  - Unreferenced components: `HeroLiveDemo.astro`, `MarketingHomePage.astro`,
    `TransparencyTrustSection.astro` (and `OperationsControlSection.astro`, used only
    by `MarketingHomePage`). Unused devDependencies: `playwright`, `wait-on`.
  - `astro check` reports 1 hint: unused `wrappedPositionCards` in
    `HeroPipelineSimulator.astro`.
  - No LICENSE file, although the blueprint calls the site "open-source by default".
  - Tracked by mistake: gitlinks `.claude/worktrees/objective-spence` and
    `.claude/worktrees/zen-vaughan` (mode 160000, no `.gitmodules`, added in `a54e310`)
    and a 3-byte file named `...` at the repo root (added in `6b91b6e`). Left in
    place; removal needs the owner.
  - Contact links use `t.me`. The sibling repo `RebSem/portfo` moved to `telegram.me`
    in July 2026 because `t.me` was in serverHold from 2026-07-13 (portfo #42); check
    whether `t.me` resolves before relying on it.

## Repository map

```
astro.config.mjs        static output, site https://cursivo.xyz, MDX integration
public/                 CNAME (cursivo.xyz), favicons
src/
  pages/                EN routes at the root; ru/ and ar/ mirror them
    index.astro         home (HomePage component)
    product/            product deep dive
    use-cases/          index + [translationKey]
    blog/, changelog/   index + [translationKey] + rss.xml.ts
    privacy/, terms/    legal pages
    cases.astro         legacy alias that redirects to /use-cases/
    sitemap.xml.ts, robots.txt.ts, llms.txt.ts   generated
  layouts/BaseLayout.astro   shell: SEO, JSON-LD, analytics, header/footer, lang + dir (RTL)
  components/           Astro components; HomePage.astro (+ HeroPipelineSimulator) is the
                        live home for all three locales; *Page.astro render collections
  content/              Markdown collections: blog, changelog, use-cases, faq, pages
  content.config.ts     zod schemas (locale, translationKey, draft, ...)
  data/
    strings.ts          UI strings for the home page, per locale (getStrings)
    site.ts             shared types (Locale, NavItem, ...) and getHomeContent, still
                        used by blog/changelog/use-case/product pages
    navigation.ts       header nav, footer groups, locale links
    seo.ts, jsonld.ts   canonical/hreflang URLs, structured data
    content.ts, publishing.ts, use-cases.ts, rss.ts   collection helpers and routes
    product.ts, legal.ts, ctas.ts, features.ts, insights.ts, landing.ts   page content
    analytics.ts        analytics config from env
  styles/global.css     fonts (@fontsource imports), design tokens, global layout
scripts/check-links.mjs QA over dist/: internal links, anchors, alt text, lang/title/description
docs/prelaunch-qa.md    March 2026 QA baseline and remaining manual checks
public-marketing-site-blueprint.md   original site brief: positioning, visual system,
                        routes, SEO and multilingual strategy
GEMINI.md               earlier agent overview (kept; AGENTS.md is canonical)
.github/workflows/deploy.yml   build and deploy to GitHub Pages on push to main
```

## Commands

Node: CI uses 20; `engines` allows `18.20.8 || ^20.3.0 || >=22.0.0`. No `.nvmrc`.

| Task | Command |
|---|---|
| Install | `npm ci` (or `npm install`) |
| Dev server | `npm run dev` → http://localhost:4321 |
| Build | `npm run build` → `dist/` |
| Typecheck | `npm run check` (`astro check`) |
| Link/QA check | `npm run qa:links` (needs `dist/`) |
| All of the above | `npm run qa:prelaunch` (build → check → qa:links) |
| Preview build | `npm run preview` |

There are no unit tests and no linter/formatter config.

Verified on 2026-10-11 in a fresh clone (Node 22.22, npm 10.9): `npm ci` OK;
`npm run build` OK (58 pages); `npm run check` 0 errors, 0 warnings, 1 hint;
`npm run qa:links` **fails** with the 58 `/open-source/` targets described above, so
`npm run qa:prelaunch` exits 1. Not run: `dev`, `preview`.

## Configuration

Analytics is the only configuration. See `.env.example`.

| Variable | Purpose |
|---|---|
| `PUBLIC_POSTHOG_TOKEN` | PostHog project token. When set, PostHog is used |
| `PUBLIC_POSTHOG_HOST` | PostHog host, default `https://eu.i.posthog.com` |
| `PUBLIC_ANALYTICS_ENABLED` | `false` turns analytics off even if a token is set |
| `PUBLIC_ANALYTICS_SCRIPT_URL`, `PUBLIC_ANALYTICS_DOMAIN` | Legacy Plausible-style script, used only when no PostHog token is set; both required |
| `PUBLIC_ANALYTICS_API_HOST` | Optional `data-api` for the legacy script |

With no token and no legacy pair, no analytics script is rendered. In CI the PostHog
values come from GitHub Actions **repository variables** (`vars.PUBLIC_POSTHOG_TOKEN`,
`vars.PUBLIC_POSTHOG_HOST`), not secrets; the token is public by nature (it ships in
the page). Local `.env` is git-ignored.

The site URL `https://cursivo.xyz` is hard-coded in `astro.config.mjs`,
`src/data/seo.ts` and `public/CNAME`.

## Deploy & release

- `.github/workflows/deploy.yml`: on push to `main` (or manual dispatch) → Node 20 →
  `npm ci` → `npm run build` → upload `dist/` → `actions/deploy-pages`.
- GitHub Pages serves the custom domain `cursivo.xyz` (HTTPS enforced).
- CI does **not** run `astro check` or `qa:links`; a broken link does not block deploy.
- No PR checks, no staging, no versioning: a merge to `main` is a release.

## Conventions

- Language: English for code, docs and commits. Every user-facing change ships in
  EN, RU and AR; Arabic must keep working RTL (`dir="rtl"` comes from `BaseLayout`).
- Routes are locale-first and indexable (`/`, `/ru/`, `/ar/`); translations of the
  same entry share a `translationKey`. Don't rely on a client-side locale toggle for
  SEO-critical pages.
- Styling: plain CSS only (no Tailwind), using the tokens in `src/styles/global.css`.
  Motion via `transform`/`opacity`, respecting `prefers-reduced-motion`.
- JavaScript: zero-JS by default; scripts only where interaction needs them (locale
  switching, the hero pipeline simulator, animations).
- Content and copy live in `src/data/*` and `src/content/*`, not hard-coded in
  components.
- Commits: since May 2026 Conventional-Commit style with scopes,
  e.g. `design(hero): ...`, `design(home): ...`, `feat: ...`, `chore: ...`; earlier
  commits are plain sentences, some with Linear IDs (`REB-207`). Work goes through
  branches (`codex/…`, `design/…`) and PRs into `main`.
- Before a PR: `npm run qa:prelaunch` (expect only the known `/open-source/` failures
  until that is resolved) and a visual check of EN, RU and AR at desktop and mobile
  widths.

## Rules / what must not break

- Positioning rules from the blueprint: lead with operations, not AI hype; show AI as
  part of a workflow; never present features that are not live as if they exist;
  roadmap items must be framed as upcoming. No invented statistics or market-first
  claims (repeated in the wip `PRODUCT.md`).
- The site stays static: no runtime database, no SSR, no dependency on the product's
  internal API or database, no backend form handling.
- All three locales stay in parity, including RTL for Arabic.
- Keep SEO plumbing intact: canonical + `hreflang`, `sitemap.xml`, `robots.txt`,
  `llms.txt`, JSON-LD, unique title/description per page and locale.
- `public/CNAME` must stay `cursivo.xyz`.
- Owner decisions: the `/open-source` page (build it or drop the links), licensing,
  removing the tracked gitlinks and `...`, merging PR #5 or the wip prototype.

## Design direction

Two generations of guidance exist; check with the owner which one a task follows.

- On `main` ("Concierge" look, from `public-marketing-site-blueprint.md` and
  `GEMINI.md`): warm sand/ivory surfaces, ink text, terracotta accent, navy for
  product-state surfaces; Space Grotesk (display), Manrope (body), IBM Plex Mono
  (labels), Noto Sans Arabic; asymmetric layouts, layered cards, route lines and
  dispatch pills. The tokens actually in use are in `src/styles/global.css`
  (for example `--color-terracotta: #a64d25`).
- On `wip/2026-10-11` (September 2026 prototype): `DESIGN_SYSTEM.md` (in Russian)
  formalises the Concierge tokens (glass surfaces, radii, shadows, spring easing);
  `DESIGN.md` describes a lighter, Apple-like presentation for the prototype: cool
  near-white neutrals, graphite text, terracotta details, Manrope only, a 1140px
  canvas, one dark section for a planned MCP interface, no perpetual animation,
  sample data only. `PRODUCT.md` frames Cursivo as one rental-specific AI agent + CRM
  and lists the design principles and accessibility expectations.

## History & key decisions

- 2026-03-16: Astro scaffold; brief committed as `public-marketing-site-blueprint.md`.
- 2026-03-17: site foundation with the CRM simulator; prepared for GitHub Pages at
  cursivo.xyz.
- 2026-03-18: PostHog analytics and deploy workflow; performance/accessibility/SEO
  audit; floating capsule header.
- 2026-03-25 → 26: locale parity and responsive polish (#1), header/footer (#2).
- 2026-05-25: repositioned around "AI agent + CRM", one `HomePage` for all locales
  driven by `src/data/strings.ts` (#3); hero pipeline "live activity" (#4). Last deploy.
- 2026-06-12: PR #5 opened (visual polish), still open.
- 2026-09: review prototype at `/prototype` built locally; saved to
  `wip/2026-10-11` on 2026-10-11.

## Gotchas

- `.gitignore` used to end with a literal `\n.claude/` (an escaped `n`, so `.claude/`
  was never ignored); fixed on 2026-10-11. Ignore rules do not untrack the two
  `.claude/worktrees/*` gitlinks that are already committed.
- `scripts/check-links.mjs` reads `dist/`; run a build first. It also checks `alt`,
  `lang`, `<title>` and meta description, not only links.
- The homepage copy is in `src/data/strings.ts`; `src/data/site.ts` still feeds the
  other page types. `GEMINI.md` predates that split.
- The blueprint was written from the product repository, so paths it mentions such
  as `apps/ops-web/...` do not exist here.
- `/cases` is a legacy alias page that redirects to `/use-cases/`; keep it unless the
  owner says otherwise.
- Fonts are self-hosted through `@fontsource` imports at the top of `global.css`, by
  subset; add a subset there when a new weight or script is needed.

## Where to look next

- [`public-marketing-site-blueprint.md`](public-marketing-site-blueprint.md): positioning,
  visual system, route plan, SEO and multilingual strategy
- [`docs/prelaunch-qa.md`](docs/prelaunch-qa.md): QA baseline and manual checks still open
- [`GEMINI.md`](GEMINI.md): earlier agent overview
- Branch `wip/2026-10-11`: `PRODUCT.md`, `DESIGN.md`, `DESIGN_SYSTEM.md`, prototype code
- PR #5 description: layout overflow and mobile pipeline fixes
