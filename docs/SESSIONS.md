<!--
  SESSIONS.md
  Short dated recap after each work session.

  Format:
  ## YYYY-MM-DD — [tool used, e.g. Claude / Cursor / ChatGPT]
  - What we did (2–4 bullets, file paths welcome)
  - Decisions: (any meaningful calls; if non-obvious, also add to DECISIONS.md)
  - Next: (what's queued for next session)

  Most recent entry goes at the TOP. Older entries below.
-->

# Sessions Log

## 2026-06-06 — Cursor
- Added 20 new service detail pages under `src/pages/services/` (exterior subservices, interior subservices, specialty/woodwork, outdoor living/concrete) using the same layout pattern as the original four.
- Updated `src/pages/services/index.astro`: refreshed category copy, linked every listed service to its detail page, and added section anchor IDs (`exterior-painting`, `interior-painting`, `specialty-finishes-woodwork`, `outdoor-living-concrete-coatings`) with `scroll-mt-24` for the sticky header.
- Updated `src/components/ServiceCategoryBar.astro`: home page service cards now link to those index sections (`/services/#…`) instead of individual detail pages.
- Tweaked copy on the four original service pages (`exterior`, `interior`, `cabinet`, `pool-deck`) for consistency with the expanded hub.
- **Decisions:** Home category cards route to hub sections; individual service links live on the services index only. Page titles and meta descriptions on detail pages unchanged this session (SEO guardrails).
- **Next:** Proofread new service pages; deploy and spot-check all `/services/*` URLs and home-page anchor scroll; submit updated sitemap in Search Console after deploy.
- **Git:** Committed and pushed to `master`.

## 2026-06-03 — Cursor (service page copy)
- Rewrote body copy on all four service detail pages: `exterior-painting-brevard-county.astro`, `interior-painting-brevard-county.astro`, `cabinet-painting-brevard-county.astro`, `pool-deck-painting-slip-resistant-coatings-brevard-county.astro` (intros, What We Cover, How We Approach It, What to Expect, Homeowner Tips, FAQs + JSON-LD where applicable).
- Targeted follow-up edits: interior intro + What to Expect timelines; cabinet Hardware subsection + pricing/FAQ wording; pool deck intro, approach intro, maintenance tip; cabinet hardware tip about mentioning changes before start.
- **Decisions:** Page `title` and meta `description` unchanged (SEO guardrails); FAQ section heading stays “Frequently Asked Questions” via `FaqSection.astro`.
- **Next:** Proofread homeowner guide articles; deploy and spot-check live service URLs; consider `/faq` page.
- **Git:** Committed and pushed to `master`.

## 2026-06-03 — Cursor
- SEO indexing launch: removed sitewide `noindex` from `src/layouts/Layout.astro`; wired `site` + `@astrojs/sitemap` in `astro.config.mjs`; added `public/robots.txt`.
- Phase 0 audit: `site:iwctpainting.com` returned no results; live site had `noindex` only from current build — no `_redirects` needed.
- Local build verified: no robots `noindex` in HTML, `dist/sitemap-index.xml` with 18 URLs, `dist/robots.txt` present.
- Updated post-launch docs/rules: `docs/SEO_METADATA.md`, `.cursor/rules/seo-metadata.mdc`, `docs/DECISIONS.md`, `docs/STATUS.md`, `docs/BUSINESS_CONTEXT.md`, `README.md`, `AGENTS.md`.
- **Decisions:** Indexing enabled 2026-06-03 (see `docs/DECISIONS.md`); supersedes pre-launch `noindex` policy.
- **Next:** Deploy to Netlify production; run post-deploy checks in `docs/SEO_METADATA.md`; submit `sitemap-index.xml` in Google Search Console; continue services + homeowner guide edits on `feature/services-homeowner-guide-2026-06-03`.
- **Git:** Committed indexing launch to `master`; new work branch for services/HO guide editing.

## 2026-06-02 — Cursor
- Updated `src/pages/services/index.astro` with revised services page copy, refined section lists, and streamlined FAQs aligned to Brevard County messaging.
- Added a centered intro CTA on the services page (`Describe your project`) plus a Homeowner Guide contextual link in the intro.
- Updated `src/pages/about.astro` intro and contact copy, including a linked Homeowner Guide sentence as a separate paragraph and simplified closing language.
- Updated `src/pages/homeowner-guide.astro` with a new `Read About IWCT →` link under Heather’s sign-off and simplified the closing contact guidance copy.
- **Decisions:** Keep CTA/link styles consistent with existing site patterns (`btn-primary` and small purple arrow links) rather than introducing new variants.
- **Next:** Continue copy QA across service and guide pages; then run a final consistency pass before launch-prep metadata/indexing steps.

## 2026-06-02 — Cursor
- Completed a full context/documentation cleanup pass: synced stale status docs, replaced boilerplate README, and standardized project pointers.
- Added `docs/BUSINESS_CONTEXT.md` and `docs/OPEN_QUESTIONS.md` to make strategy memory and unresolved decisions explicit in the canonical docs flow.
- Slimmed `CLAUDE.md` into a pointer file and converted `memory/` files into archive pointers to reduce drift.
- Updated `AGENTS.md`, `docs/RITUALS.md`, `TASKS.md`, and `.cursor/rules/main.mdc` for better consistency and lower duplication.
- **Decisions:** `docs/` is reinforced as canonical memory; `memory/` is now archive/pointer-only unless reactivated intentionally.
- **Next:** Confirm and execute per-file deletions (or archival) for irrelevant files such as `src/components/Welcome.astro` and `dashboard.html`.

## 2026-06-01 — Cursor
- Optimized homepage service bar and blog hero images (~17 MB of JPEGs → ~1 MB); added `sharp`, Astro `<Image />` with WebP + responsive `srcset`, and `src/assets/` sources.
- Added `scripts/optimize-service-images.mjs` and `scripts/optimize-blog-images.mjs` (`npm run optimize:service-images` / `optimize:blog-images`).
- Updated `ServiceCategoryBar.astro`, `src/pages/blog/index.astro`, and all three live blog post pages; new post `paint-prep-florida-brevard-county.astro` included in this commit.
- **Decisions:** Keep optimized JPEGs in `public/images/` for Open Graph / social preview URLs; use `src/assets/` for on-page `<Image />` generation at build time.
- **Next:** Proofread service pages and homeowner guide on branch `feature/proofread-services-homeowner-guide-2026-06-01`.

## 2026-05-18 — Claude (Cowork mode)
- Created `docs/` folder with `PROJECT_BRIEF.md`, `BRAND_RULES.md`, `SEO_KEYWORDS.md`, `CHANGELOG.md`.
- Inspected project; documented real brand palette (cream/charcoal/muted/purple/coral/orange/sage) and fonts (DM Sans + Fraunces) into `BRAND_RULES.md`.
- Added `.cursor/rules/main.mdc` (modern Cursor rules format; replaced legacy `.cursorrules`).
- Built cross-LLM handoff system: `AGENTS.md`, `docs/STATUS.md`, `docs/SESSIONS.md`, `docs/DECISIONS.md`, `docs/RITUALS.md`.
- Mirrored copy-paste LLM prompts to Notion: created **"IWCT Website — LLM Prompts"** under the existing **"IWCT Website"** Notion page ([link](https://www.notion.so/364cbc135e26815380c6d622686ff22f)).
- Ran the wrap-up ritual on this session — first time using it; treat this entry as the template for future sessions.
- **Decisions:** Default to modern best-practice patterns; minimal-files approach; STATUS.md is the "freshness anchor" with a `_Last verified_` date; repo docs are canonical, Notion is convenience mirror for prompts only; all IWCT-related Notion pages live under the "IWCT Website" page until Heather reorganizes Notion.
- **Flagged stale / needs review:**
  - `docs/PROJECT_BRIEF.md` lists `contact.astro` under "Planned pages" but it actually exists as a stub (487 bytes). Same for the unmentioned `homeowner-guide.astro`, `blog/`, `services/` subfolders. Reconcile next session.
  - `about.astro` uses off-palette colors (`bg-gray-50`, `border-gray-100`, `text-blue-600`) and a custom container instead of `.page-container` — refactor when site work resumes.
  - `Welcome.astro` is an unused Astro starter template — candidate for deletion.
  - Reusable site components (PageHero, Section, ContactCard, FaqItem, ServiceCard) not yet built — deferred to next session.
- **Next session:**
  1. Reconcile PROJECT_BRIEF.md with reality (move contact + homeowner-guide from "planned" to actual; add blog/services subfolders).
  2. Decide whether to delete `Welcome.astro`.
  3. Resume STEP 4 of the original plan: build the Tier 1 components.
