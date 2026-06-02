<!--
  CHANGELOG.md
  One line per concrete file change. Most recent date at the TOP.

  Format:
  ## YYYY-MM-DD
  - Created/Updated/Removed `path/to/file` — short reason
-->

# Changelog

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
