<!--
  STATUS.md
  Current state of the project. The "right now" snapshot.
  Update this when something material changes (new page, component, tech change).
  Historical/chronological detail belongs in SESSIONS.md, not here. Keep this short.
-->

# Project Status

_Last verified: 2026-05-18_

## Pages
| Page | Path | Status | Notes |
|---|---|---|---|
| Home | `/` | Done | `src/pages/index.astro` |
| About | `/about` | Done — needs refactor | Uses gray/blue colors not in brand palette; not using `.page-container` |
| Services | `/services` | Planned | `src/pages/services/` subfolder exists, no page file yet |
| FAQ | `/faq` | Planned | Not started |
| Contact | `/contact` | Stub | `src/pages/contact.astro` exists (~487 bytes) |
| Homeowner Guide | `/homeowner-guide` | Stub | `src/pages/homeowner-guide.astro` exists (~500 bytes) |
| Blog index | `/blog` | Planned | `src/pages/blog/` subfolder exists |

## Components
- `Header.astro` — done; sticky nav with logo, watercolor bar, phone CTA, desktop + mobile menus
- `Footer.astro` — done; brand block, contact info, quick links, full Brevard service area
- `Layout.astro` — done; handles all SEO (title, description, canonical, OG, Twitter cards, fonts)
- `Welcome.astro` — Astro starter template, **unused** — candidate for deletion

## Tech stack
- **Astro** v6.3.3
- **Tailwind CSS** v4 via `@tailwindcss/vite` (no separate `tailwind.config.js` — config lives in `src/styles/global.css` using `@theme`)
- **Sitemap** via `@astrojs/sitemap`
- **Hosting:** Netlify
- **Version control:** GitHub
- **Node** ≥ 22.12.0

## Documentation system
- `AGENTS.md` (root) — AI entry point
- `docs/PROJECT_BRIEF.md`, `BRAND_RULES.md`, `SEO_KEYWORDS.md`, `STATUS.md`, `SESSIONS.md`, `DECISIONS.md`, `RITUALS.md`, `CHANGELOG.md`
- `.cursor/rules/main.mdc` — Cursor-specific rules (modern format)
- **Notion mirror:** [IWCT Website — LLM Prompts](https://www.notion.so/364cbc135e26815380c6d622686ff22f) (child of "IWCT Website" Notion page) — copy-paste prompts only, repo is source of truth

## What's next
- Reconcile `docs/PROJECT_BRIEF.md` with reality (contact + homeowner-guide stubs exist; blog/services subfolders exist)
- Build Tier 1 reusable components: `PageHero`, `Section`, `ContactCard`, `FaqItem`, `ServiceCard`
- Build `services.astro`, `faq.astro`; finish `contact.astro` and `homeowner-guide.astro`
- Refactor `about.astro` to brand palette + `.page-container`
- Decide what to do with unused `Welcome.astro`

## Known issues
- `about.astro` uses off-palette colors (`bg-gray-50`, `border-gray-100`, `text-blue-600`) and a custom container instead of `.page-container`
