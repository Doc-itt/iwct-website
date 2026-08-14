<!--
  CHANGELOG.md
  One line per concrete file change. Most recent date at the TOP.

  Format:
  ## YYYY-MM-DD
  - Created/Updated/Removed `path/to/file` — short reason
-->

# Changelog

## 2026-08-14
- Updated `src/layouts/Layout.astro` — merged LocalBusiness + WebSite JSON-LD into one `@graph`; areaServed +Rockledge/Cocoa Beach/Satellite Beach/Merritt Island; added `knowsAbout` (8 service entities); `sameAs` now pulls from data file
- Updated `src/data/google-business.ts` — added `otherProfileUrls` export (empty; paste Facebook/Instagram/directory URLs here for sitewide `sameAs`)
- Updated `src/data/schema.ts` — added `servicePageSchema` builder (Service type, provider → `#localbusiness`)
- Updated `src/pages/services/*-brevard-county.astro` (24 pages) — per-page `Service` JSON-LD referencing the sitewide business entity
- Updated `src/pages/services/stucco-painting-and-sealing-brevard-county.astro` — elastomeric tip now cites 10–15 dry mil thickness (GEO fact density)
- Created `public/llms.txt` — business info, service area, core services, and key page links for AI crawlers
- Created `public/_redirects` — Netlify redirect: `/card` → `/contact` (302, forced) for the dynamic business card QR code
- Updated `astro.config.mjs` — matching `/card` → `/contact` redirect so dev/preview don't 404 (keep both in sync when retargeting)
- Updated `src/pages/services/` (7 pages) — heading/copy mismatch audit fixes: answer-first intro sentences under scope-question H2s (siding, stucco crack repair, exterior wood painting, exterior wood staining, cabinet), new "spotting failing caulk" tip (caulking), pool deck approach H2 retitled to cover its timeline copy

## 2026-08-13
- Updated `src/pages/services/*-brevard-county.astro` (24 pages) — "The short answer" blocks under each H1; generic section H2s rewritten as natural homeowner questions (ids/anchors unchanged)
- Updated `src/pages/homeowner-guide/*.astro` (4 articles) — removed "The short answer" blocks (owner request); FAQ sections and schema unchanged
- Updated `docs/SESSIONS.md`, `docs/CHANGELOG.md`, `docs/STATUS.md` — session wrap-up

## 2026-06-11
- Created `src/data/schema.ts` — shared JSON-LD builders: BlogPosting, BreadcrumbList, FAQPage
- Updated `src/layouts/Layout.astro` — `sameAs` now lists the Google Maps profile URL; added `WebSite` JSON-LD; trimmed Google Fonts request to used weights
- Updated `src/pages/blog/*.astro` (3 posts) — BlogPosting + BreadcrumbList + FAQPage schema, TL;DR "short answer" blocks, FAQ sections
- Updated `src/pages/homeowner-guide/*.astro` (4 articles) — BreadcrumbList + FAQPage schema, TL;DR blocks, FAQ sections, services links
- Updated `src/pages/services/*-brevard-county.astro` (24 pages) — titles localized to "in Brevard County, FL" (owner-approved), BreadcrumbList schema, "Related Services & Reading" navs
- Removed `public/images/blog/services/Website/` — ~10.8 MB of unused legacy image originals
- Updated `docs/SESSIONS.md`, `docs/CHANGELOG.md`, `docs/STATUS.md`, `docs/DECISIONS.md` — session wrap-up

## 2026-06-06
- Created 20 new `src/pages/services/*-brevard-county.astro` detail pages — exterior, interior, specialty/woodwork, and outdoor living subservices
- Updated `src/pages/services/index.astro` — linked service lists, category anchor IDs, refreshed hub copy and meta description
- Updated `src/components/ServiceCategoryBar.astro` — home cards link to `/services/#` sections instead of detail pages
- Updated `src/pages/services/exterior-painting-brevard-county.astro`, `interior-painting-brevard-county.astro`, `cabinet-painting-brevard-county.astro`, `pool-deck-painting-slip-resistant-coatings-brevard-county.astro` — minor consistency tweaks
- Updated `docs/SESSIONS.md`, `docs/CHANGELOG.md`, `docs/STATUS.md` — session wrap-up for service expansion

## 2026-06-03
- Updated `src/pages/services/exterior-painting-brevard-county.astro` — full copy refresh (prep, timelines, tips, FAQs)
- Updated `src/pages/services/interior-painting-brevard-county.astro` — full copy refresh; revised intro and What to Expect timelines
- Updated `src/pages/services/cabinet-painting-brevard-county.astro` — full copy refresh; Hardware subsection; pricing/FAQ tweaks
- Updated `src/pages/services/pool-deck-painting-slip-resistant-coatings-brevard-county.astro` — full copy refresh; coating options and approach intro
- Updated `docs/SESSIONS.md`, `docs/CHANGELOG.md`, `docs/STATUS.md` — session wrap-up for service page copy pass
- Updated `src/layouts/Layout.astro` — removed sitewide `noindex` / robots meta for indexing launch
- Updated `astro.config.mjs` — added `site` URL and `@astrojs/sitemap` integration
- Created `public/robots.txt` — allow all crawlers; sitemap discovery URL
- Updated `docs/SEO_METADATA.md`, `.cursor/rules/seo-metadata.mdc` — post-launch indexing guardrails and GSC steps
- Updated `docs/DECISIONS.md`, `docs/STATUS.md`, `docs/BUSINESS_CONTEXT.md`, `README.md`, `AGENTS.md`, `docs/SESSIONS.md`, `TASKS.md` — indexing launch recorded

## 2026-06-02
- Updated `docs/STATUS.md` — reconciled page/component status with actual repo state
- Updated `docs/PROJECT_BRIEF.md` — removed stale page plan details; pointed to `docs/STATUS.md`
- Created `docs/BUSINESS_CONTEXT.md` — canonical long-form strategy/business context
- Created `docs/OPEN_QUESTIONS.md` — canonical unresolved owner decisions list
- Updated `docs/RITUALS.md` — expanded startup read order and quick-reference file map
- Updated `README.md` — replaced Astro starter boilerplate with IWCT project docs
- Updated `CLAUDE.md` — converted to short pointer file to canonical docs
- Updated `memory/context/business-vision.md` — archived to pointer-only
- Updated `memory/projects/iwct-website.md` — archived to pointer-only
- Updated `TASKS.md` — populated active, waiting, and done sections
- Updated `.cursor/rules/main.mdc` — reduced duplicate SEO wording while preserving policy
- Updated `AGENTS.md` — added BUSINESS_CONTEXT and OPEN_QUESTIONS to read order
- Updated `docs/DECISIONS.md`, `docs/SESSIONS.md`, `docs/CHANGELOG.md` — recorded this cleanup session

## 2026-06-01
- Updated `package.json` / `package-lock.json` — added `sharp`; scripts `optimize:service-images`, `optimize:blog-images`
- Created `scripts/optimize-service-images.mjs` — resize/compress service bar photos to 800px
- Created `scripts/optimize-blog-images.mjs` — resize/compress blog heroes to 1200px
- Created `src/assets/services/*.jpg` — optimized sources for Astro Image
- Created `src/assets/blog/*.jpg` — optimized sources for Astro Image
- Updated `public/images/services/*.jpg` — replaced full-size phone photos with web-sized JPEGs
- Updated `public/images/blog/*.jpg` — replaced full-size heroes with web-sized JPEGs
- Created `public/images/blog/paint-prep-florida-brevard.jpg` — hero for prep blog post
- Updated `src/components/ServiceCategoryBar.astro` — Astro `<Image />`, responsive WebP
- Updated `src/pages/blog/index.astro` — Astro `<Image />` on post cards
- Updated `src/pages/blog/florida-painting-contractor-license-changes-brevard.astro` — Astro `<Image />` hero
- Updated `src/pages/blog/how-paint-colors-affect-how-you-feel.astro` — Astro `<Image />` hero
- Created `src/pages/blog/paint-prep-florida-brevard-county.astro` — prep blog post with optimized hero
- Updated `docs/SESSIONS.md`, `docs/CHANGELOG.md`, `docs/STATUS.md` — session wrap-up

## 2026-05-18
- Created `docs/PROJECT_BRIEF.md` — project facts
- Created `docs/BRAND_RULES.md` — voice + brand palette + fonts + logos
- Created `docs/SEO_KEYWORDS.md` — SEO targets and topic clusters
- Created `docs/CHANGELOG.md` — this file
- Created `.cursor/rules/main.mdc` — Cursor's modern rules format
- Removed `.cursorrules` — legacy format, superseded by `.cursor/rules/main.mdc`
- Created `AGENTS.md` (root) — AI entry point, tool-agnostic
- Created `docs/STATUS.md` — current project state snapshot
- Created `docs/SESSIONS.md` — chronological session log
- Created `docs/DECISIONS.md` — record of past calls
- Created `docs/RITUALS.md` — start/end-of-session prompts + Change Law
- Created Notion page **"IWCT Website — LLM Prompts"** (id `364cbc13-5e26-8153-80c6-d622686ff22f`) under existing "IWCT Website" Notion page — copy-paste mirror of `docs/RITUALS.md` prompts
