<!--
  STATUS.md
  Current state of the project. The "right now" snapshot.
  Update this when something material changes (new page, component, tech change).
  Historical/chronological detail belongs in SESSIONS.md, not here. Keep this short.
-->

# Project Status

_Last verified: 2026-06-06_

## Pages
| Page | Path | Status | Notes |
|---|---|---|---|
| Home | `/` | Done | `src/pages/index.astro` |
| About | `/about` | Done — needs refactor | Uses gray/blue colors not in brand palette; not using `.page-container` |
| Services hub | `/services` | Done | Four category sections with anchor IDs; every listed service links to a detail page |
| Services detail pages | `/services/*` | Done | 24 pages across exterior, interior, specialty/woodwork, and outdoor living |
| FAQ | `/faq` | Planned | Not started |
| Contact | `/contact` | Done | `src/pages/contact.astro` |
| Homeowner Guide hub | `/homeowner-guide` | Done | `src/pages/homeowner-guide.astro` |
| Homeowner Guide articles | `/homeowner-guide/*` | Done | 4 articles published |
| Blog index | `/blog` | Done | `src/pages/blog/index.astro` |
| Blog posts | `/blog/*` | Done | 2 published posts |
| Utility pages | `/thank-you`, `/404` | Done | Thank-you and 404 pages exist |

## Components
- `Header.astro` — done; sticky nav with logo, watercolor bar, phone CTA, desktop + mobile menus
- `Footer.astro` — done; brand block, contact info, quick links, full Brevard service area
- `Layout.astro` — done; handles all SEO (title, description, canonical, OG, Twitter cards, fonts)
- `FaqSection.astro` — done; reusable FAQ rendering section
- `ServiceCategoryBar.astro` — done; four category image cards linking to `/services/#` hub sections
- `GuideUnderConstruction.astro` — done; reusable under-construction callout
- `Welcome.astro` — Astro starter template, **unused** — candidate for deletion

## Images / performance
- Service bar and blog heroes use **Astro `<Image />`** (`astro:assets`) — build outputs WebP + `srcset`.
- Sources live in `src/assets/services/` and `src/assets/blog/`; matching optimized JPEGs in `public/images/` for OG meta tags.
- Re-run after replacing originals: `npm run optimize:service-images` and `npm run optimize:blog-images`.

## Tech stack
- **Astro** v6.3.3
- **Tailwind CSS** v4 via `@tailwindcss/vite` (no separate `tailwind.config.js` — config lives in `src/styles/global.css` using `@theme`)
- **sharp** — image resize/compress scripts + Astro image pipeline
- **Sitemap** via `@astrojs/sitemap` (wired in `astro.config.mjs`; `sitemap-index.xml` on build)
- **Indexing** enabled — no sitewide `noindex`; `public/robots.txt` points to sitemap
- **Hosting:** Netlify
- **Version control:** GitHub
- **Node** ≥ 22.12.0

## Documentation system
- `AGENTS.md` (root) — AI entry point
- `docs/PROJECT_BRIEF.md`, `BUSINESS_CONTEXT.md`, `OPEN_QUESTIONS.md`, `BRAND_RULES.md`, `SEO_KEYWORDS.md`, `STATUS.md`, `SESSIONS.md`, `DECISIONS.md`, `RITUALS.md`, `CHANGELOG.md`, `FULL_CONTEXT_AUDIT.md`
- `.cursor/rules/main.mdc` — Cursor-specific rules (modern format)
- **Notion mirror:** [IWCT Website — LLM Prompts](https://www.notion.so/364cbc135e26815380c6d622686ff22f) (child of "IWCT Website" Notion page) — copy-paste prompts only, repo is source of truth

## What's next
- Proofread new service detail pages and homeowner guide content
- Deploy and verify all `/services/*` URLs; re-submit sitemap after deploy
- Build `/faq` page
- Build Tier 1 reusable components: `PageHero`, `Section`, `ContactCard`, `FaqItem`, `ServiceCard`
- Refactor `about.astro` to brand palette + `.page-container`
- Decide what to do with `Welcome.astro`, `dashboard.html`, and `memory/` archive strategy

## Known issues
- `about.astro` uses off-palette colors (`bg-gray-50`, `border-gray-100`, `text-blue-600`) and a custom container instead of `.page-container`
