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
| **Sitewide robots** | `src/layouts/Layout.astro` | No `noindex` meta — crawlers use default index/follow. Do not re-add without approval. |
| **Page `<title>`** | Each page’s `title` prop → `<Layout>` | Must stay unique per page. |
| **Meta description** | Each page’s `description` prop → `<Layout>` | Must stay unique per page. |
| **Canonical URL** | `Layout.astro` (built from `Astro.site` + `Astro.url`) | Set via `site` in `astro.config.mjs`. |
| **Sitemap** | `@astrojs/sitemap` in `astro.config.mjs` → `dist/sitemap-index.xml` on build | Do not remove integration. |
| **robots.txt** | `public/robots.txt` | Allow all; points to sitemap. No `Disallow` without approval. |
| **OG / Twitter tags** | `Layout.astro` | Use page `title` / `description` / `ogImage`. |
| **JSON-LD** | `Layout.astro` + some pages (e.g. home FAQ) | Changing business name, URL, or service list affects rich results. |

Keyword strategy (what to say, not how tags are wired): `docs/SEO_KEYWORDS.md`.

---

## Launch completed (2026-06-03)

- [x] Every public page has a **unique** `title` and `description`.
- [x] Sitewide `noindex` removed from `Layout.astro`.
- [x] `site: 'https://iwctpainting.com'` + `@astrojs/sitemap` wired in `astro.config.mjs`.
- [x] `public/robots.txt` added (Allow `/`, Sitemap URL).
- [x] Phase 0 audit: no legacy indexed URLs found; no `_redirects` needed.
- [ ] **Production deploy** — push/build on Netlify, then run post-deploy checks below.
- [ ] **Google Search Console** — owner steps below.

**Before → after (robots meta):** `noindex, nofollow` on all pages → *(none — default index/follow)*

---

## Post-deploy verification (production)

After Netlify deploy to `iwctpainting.com`:

1. View-source on `/` and one inner page — confirm **no** `<meta name="robots" content="noindex`.
2. Confirm `<link rel="canonical" href="https://iwctpainting.com/...">` on each page checked.
3. Open `https://iwctpainting.com/robots.txt` — Allow `/` and Sitemap line.
4. Open `https://iwctpainting.com/sitemap-index.xml` — loads and lists current URLs.

---

## Post-launch guardrails

| Rule | Why |
|------|-----|
| No `noindex` on pages (unless explicitly approved) | Blocks indexing |
| No `nofollow` on internal links | Wastes internal link signals |
| No `Disallow` in robots.txt (unless approved) | Blocks crawlers |
| No URL/slug changes without 301 in `public/_redirects` | Breaks links and indexed URLs |
| Keep sitemap integration working | Discovery for Google and AI crawlers |
| Unique title + description; one H1 per page | Avoid duplicate/confusing signals |
| No SEO cloaking (`display:none` / `visibility:hidden` for keyword text) | Policy violation risk |
| No keyword stuffing | Quality and trust |

---

## Owner: Google Search Console (after deploy)

1. Add or open property for `https://iwctpainting.com` (domain or URL prefix).
2. **Sitemaps** → submit `https://iwctpainting.com/sitemap-index.xml`.
3. **URL inspection** → test `/`, `/services/`, `/contact/` → Request indexing (optional; not instant).
4. Monitor **Pages** / coverage over 2–4 weeks.
5. Optional: [Bing Webmaster Tools](https://www.bing.com/webmasters) — same sitemap URL.

---

## Files to treat as sensitive

- `src/layouts/Layout.astro` — canonical, OG, Twitter, LocalBusiness schema
- `astro.config.mjs` — `site` URL and sitemap integration
- `public/robots.txt`
- `src/pages/**/*.astro` — `title` and `description` on every page

---

## For AI tools

Cursor rule (always on): `.cursor/rules/seo-metadata.mdc`
