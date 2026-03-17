# Prelaunch QA

Date: March 17, 2026

This note captures the current launch-quality QA baseline for the Cursivo public site.

## Automated checks

- `npm run build`
- `npm run check`
- `npm run qa:links`

The link checker validates generated `dist` output rather than source files. It checks:

- internal route links
- asset paths
- in-page and cross-page anchor targets
- image `alt` presence in generated HTML
- presence of `lang`, `<title>`, and meta description on generated pages

## Responsive baseline

Current layout review focused on the existing static routes in English, Russian, and Arabic:

- desktop layout keeps the asymmetrical grid and operational hierarchy intact
- tablet layout collapses into the planned reduced grid without losing section order
- mobile layout preserves workflow order and CTA readability instead of flattening into generic centered cards
- Arabic routes keep RTL direction through the shared layout and preserve the same section structure as EN/RU

## Accessibility baseline

Current accessibility review confirmed these baseline conditions:

- route-level `lang` and `dir` are set in the shared layout
- reduced motion is respected through `prefers-reduced-motion`
- generated images include `alt` text
- section structure uses semantic headings and grouped content rather than div-only blocks
- link checking includes cross-page anchor validation for workflow, ownership, multilingual, contact, and locale routes

Residual manual checks still worth doing before final production launch:

- keyboard-only traversal in a real browser
- screen reader pass on one EN page and one AR page
- final contrast spot-check against production fonts and hosting setup

## Performance baseline

The site remains a mostly static Astro build with:

- no heavy animation framework
- optional analytics support remains disabled by default unless production env vars are provided
- CSS-first motion with a very small reveal helper
- self-hosted fonts and generated static pages

This is an appropriate baseline for a mostly static marketing surface. A final production-domain review should still confirm transfer size, font loading, and real network behavior.
