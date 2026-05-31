<!--
  SEO_METADATA.md
  Rules for page titles, meta tags, and Google indexing.
  Read before changing Layout.astro SEO or any page title/description.
-->

# SEO metadata & indexing

## Policy

**Always verify with Heather before changing anything that affects how Google sees the site.**

An AI assistant or collaborator must:

1. State what file(s) will change and why.
2. Show **before → after** for every affected title, description, robots, and canonical value.
3. Wait for explicit approval before editing.

Do not bundle metadata changes into unrelated tasks (copy edits, new sections, styling, etc.).

---

## What affects indexing

| Item | Where it lives | Notes |
|------|----------------|-------|
| **Sitewide `noindex`** | `src/layouts/Layout.astro` — `noindex` constant | While `true`, Google should not index the site. **Removing this is the main launch switch.** |
| **Page `<title>`** | Each page’s `title` prop → `<Layout>` | Must stay unique per page. |
| **Meta description** | Each page’s `description` prop → `<Layout>` | Must stay unique per page. |
| **Canonical URL** | `Layout.astro` (built from `Astro.url`) | Usually leave alone unless URL structure changes. |
| **OG / Twitter tags** | `Layout.astro` | Use page `title` / `description` / `ogImage`. |
| **JSON-LD** | `Layout.astro` + some pages (e.g. home FAQ) | Changing business name, URL, or service list affects rich results. |

Keyword strategy (what to say, not how tags are wired): `docs/SEO_KEYWORDS.md`.

---

## Pre-launch (current state)

- `noindex` is **ON** on purpose until the site is ready for production indexing.
- Staging: Netlify preview; production domain when launched.
- Do not remove `noindex` without a deliberate launch decision and a quick check of every public page’s title and description.

---

## Launch checklist (when going live on Google)

Use this as a gate before setting `noindex = false` in `Layout.astro`:

- [ ] Every public page has a **unique** `title` and `description` (no duplicates).
- [ ] Titles and descriptions match current page content (not old drafts).
- [ ] `noindex` removed only in `Layout.astro` (one intentional change).
- [ ] Deploy to production domain; confirm canonical URLs resolve correctly.
- [ ] Optional: Google Search Console — submit sitemap / request indexing after deploy.
- [ ] Record the change in `docs/DECISIONS.md` and bump `docs/STATUS.md` `_Last verified_` date.

---

## Files to treat as sensitive

- `src/layouts/Layout.astro` — robots, canonical, OG, Twitter, LocalBusiness schema
- `src/pages/**/*.astro` — frontmatter `title` and `description` on every page

---

## For AI tools

Cursor rule (always on): `.cursor/rules/seo-metadata.mdc`
