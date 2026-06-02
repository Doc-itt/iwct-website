<!--
  FULL_CONTEXT_AUDIT.md
  Complete inventory and analysis of all AI context, documentation, and rules files.
  Generated: 2026-06-01. Re-run freshness audit when STATUS.md is stale or after major doc changes.
-->

# Full Context & Documentation Audit

_Audit date: 2026-06-01_
_Files audited: 19 (15 `.md`, 3 `.mdc`, 1 relevant non-markdown)_
_Actual codebase cross-checked against `src/pages/` and `src/components/`_

---

## File Inventory

### Root (`/`)

| File | Type | Purpose |
|------|------|---------|
| `AGENTS.md` | `.md` | Tool-agnostic AI entry point. Short pointers to `docs/` read order + core working rules. Declared canonical entry for Cursor, Claude, Sourcegraph, etc. |
| `CLAUDE.md` | `.md` | Claude-oriented persistent memory. Rich business context: Heather, crews, 5-layer vision, voice, veteran neighborhood, open questions, SEO/AEO, FL painting facts. **Not referenced in `AGENTS.md` read list.** |
| `README.md` | `.md` | Default Astro starter kit boilerplate. **Not IWCT-specific.** Does not point to `AGENTS.md` or project docs. |
| `TASKS.md` | `.md` | Empty task board shell (Active / Waiting On / Someday / Done). No tasks populated. |
| `dashboard.html` | HTML | Local "Productivity" dashboard (~3,100 lines). File System Access API UI for editing `CLAUDE.md` and `memory/` files. Separate workflow from `docs/` system. |

**Not present:** `.cursorrules` (removed 2026-05-18 per `docs/DECISIONS.md` and `docs/CHANGELOG.md`)

---

### `docs/` (9 files at audit time)

| File | Purpose |
|------|---------|
| `PROJECT_BRIEF.md` | Static project facts: company, owner, contact, model, location, goal, tech stack, high-level rules, page list. |
| `STATUS.md` | "Right now" snapshot with `_Last verified_` date, page table, components, tech stack, doc system map, what's next, known issues. |
| `BRAND_RULES.md` | Voice/tone (brief), avoid-list, Tailwind v4 color tokens, fonts, reusable CSS classes, logo file table (usage TBD). |
| `SEO_KEYWORDS.md` | Primary/secondary keywords, topic clusters, AEO note. |
| `SEO_METADATA.md` | Metadata/indexing policy, launch checklist, sensitive files list, link to Cursor rule. |
| `DECISIONS.md` | Dated log of non-obvious choices (2 dates: 2026-05-18, 2026-05-29). |
| `SESSIONS.md` | Chronological session recaps (2 entries: 2026-05-18, 2026-06-01). Newest on top. |
| `CHANGELOG.md` | One line per concrete file change (2 dates: 2026-05-18, 2026-06-01). |
| `RITUALS.md` | Change Law, copy-paste start/end/feature/freshness prompts, file responsibility table. |

---

### `memory/` (2 files)

| File | Purpose |
|------|---------|
| `memory/context/business-vision.md` | Full five-layer business vision, veteran neighborhood pilot, personal story, strategic notes. Captured May 2026. |
| `memory/projects/iwct-website.md` | Website build status, tech stack, site structure tree, design tokens, page pattern, services content plan, pending decisions. |

**Not referenced in `AGENTS.md` read order.** Editable via `dashboard.html`.

---

### `.cursor/rules/` (3 files — all `alwaysApply: true`)

| File | Purpose |
|------|---------|
| `main.mdc` | Core working rules: Astro/Tailwind, file comments, confirm before delete, BRAND_RULES pointer, SEO approval gate, small steps. |
| `core.mdc` | Content/UX rules: one H1, real lists, FL climate focus, don't touch nav/images/layout without ask, professional tone. |
| `seo-metadata.mdc` | Hard enforcement of metadata/indexing approval workflow. Points to `docs/SEO_METADATA.md`. |

---

### External (referenced, not in repo)

| Resource | Purpose |
|----------|---------|
| [Notion — IWCT Website — LLM Prompts](https://www.notion.so/364cbc135e26815380c6d622686ff22f) | Copy-paste prompt mirror of `docs/RITUALS.md`. Repo declared source of truth. |
| Cursor user rules (account-level) | Commit/PR protocol, prose standards, coding principles. Not version-controlled in repo. |

---

## Key Content Summary

### `AGENTS.md` — AI entry point

- **Project:** Astro + Tailwind static site for If Walls Could Talk LLC, Brevard County FL. Owner Heather, remote from Da Nang, Vietnam. Netlify + GitHub.
- **Read order:** PROJECT_BRIEF → STATUS → BRAND_RULES → SEO_KEYWORDS → SEO_METADATA → DECISIONS → SESSIONS (last 2–3) → RITUALS.
- **Working rules:** Confirm before file changes; small steps; file header comments; Astro + Tailwind only; unique title/description per page; never change metadata/indexing without approval; wrap-up ritual every session.
- **Does NOT mention:** `CLAUDE.md`, `memory/`, `TASKS.md`, `dashboard.html`.

---

### `CLAUDE.md` — Claude memory (113 lines)

**Me / contact:** Heather, owner. Phone 321-557-6959, email iwctpaintingplus@gmail.com. Out of country until October 2026. GMB link.

**Business:** Owner-operated; vetted crews; word-of-mouth; no aggressive sales. Full Brevard / Space Coast service area.

**Website state (as documented):**
- Staging: iwct-in-progress.netlify.app | Production: ifwallscouldtalkllc.com
- Astro v6.3.3, Tailwind, Netlify, noindex ON
- Pages done: Home, About, Homeowner Guide (4 articles), Contact
- Pages in progress: Services (4 pages), Blog

**Heather's voice:**
- Direct, plain, no fluff. Short declarative sentences.
- Educational, empowers homeowners. Calls out industry problems by name.
- Never salesy. "I" on About; "we" for service delivery.
- Key phrases: "prep is everything", "Florida's climate demands more", "no surprises".

**Five-layer vision:**
1. Lead gen now → phone ringing, pass to 2–3 crews before October 2026
2. October return → hands-on training, full SOPs
3. Worker training chatbot (SOPs + site content)
4. Homeowner chatbot / DIY subscription
5. Reentry / second-chance hiring (WOTC, Federal Bonding Program)

**Other context:** Heather's background (incarceration, service dogs, warden, Sheriff Wayne Ivy), crews (2/3 have site link), veteran neighborhood pilot (900+ homes), availability/need for clear roadmap.

**Open questions:**
- Pricing on service pages — ranges vs estimate-only?
- Paint brand recommendations?
- Pool deck scope — pool-only vs broader outdoor coatings?
- Chatbot-ready architecture now?
- Reentry/veteran program — own page/brand/entity?

**SEO/AEO:** Answer-first, question H2/H3s, FAQ schema, local signals, content = trust + chatbot training data.

**FL facts:** No painting license since 2021; exterior paint 7–10 yrs with prep / 3–5 without; humidity/UV/salt/temp swings; WOTC and bonding program notes.

---

### `docs/PROJECT_BRIEF.md`

- Company, owner, model (Heather sets standards; crews paint), location, phone, email.
- Goal: educate first, build trust, not hard-sell.
- Tech: Astro (latest) + Tailwind, Netlify, GitHub.
- Rules: simple, readable, small steps, confirm first, comments on files, natural SEO, no pushy sales.
- **Current pages (STALE):** only `index.astro`, `about.astro` marked done.
- **Planned (STALE):** `services.astro`, `faq.astro`, `contact.astro`.

---

### `docs/STATUS.md` (_Last verified: 2026-06-01 — content STALE vs codebase_)

**Pages table (documented vs actual):**

| Page | Docs say | Actual (2026-06-01) |
|------|----------|---------------------|
| Home | Done | Done |
| About | Done — needs refactor | Done |
| Services | Planned, no page file | **Done** — hub + 4 service pages exist |
| FAQ | Planned, not started | Still not started (no `/faq` page) |
| Contact | Stub (~487 bytes) | **Done** (~7,866 bytes) |
| Homeowner Guide | Stub (~500 bytes) | **Done** — hub + 4 articles |
| Blog | Planned | **Mostly done** — index + 3 live posts (+ prep post referenced in SESSIONS) |

**Components:** Header, Footer, Layout done. Welcome.astro unused. **Missing from docs:** `FaqSection.astro`, `ServiceCategoryBar.astro`, `GuideUnderConstruction.astro`.

**Tech stack:** Accurate (Astro 6.3.3, Tailwind v4, sharp, sitemap, Netlify, Node ≥22.12).

**What's next:** Proofread services/homeowner guide; reconcile PROJECT_BRIEF; build Tier 1 components; build services/faq; finish contact/homeowner-guide; refactor about; delete Welcome.astro.

**Known issues:** about.astro off-palette colors — still likely valid.

---

### `docs/BRAND_RULES.md`

**Voice (brief):** Honest, direct, educational. No hard sell/hype. Clear sentences, short paragraphs, plain English.

**Avoid:** Pushy CTAs, exaggerated claims, salesy language, cluttered layouts.

**Visual:** Full color token table, DM Sans + Fraunces, watercolor gradient, `.page-container`, `.btn-primary`. Logo files listed; usage rules TBD.

**Missing vs CLAUDE.md:** No "I" vs "we" rule, no signature phrases, no FL-specific content guidance, no AEO heading pattern.

---

### `docs/SEO_KEYWORDS.md`

- Primary: Brevard County painting, house painters Brevard, Melbourne FL, exterior painting Brevard.
- Secondary: Palm Bay, Titusville, Merritt Island, Cocoa.
- Clusters: prep, FL materials, choosing a painter, cost guides.
- AEO: answer real homeowner questions naturally.

---

### `docs/SEO_METADATA.md`

- **Policy:** Explicit Heather approval + before/after for all metadata/indexing changes.
- **Current:** noindex ON deliberately.
- **Launch checklist:** unique titles/descriptions, single noindex flip, deploy, optional GSC, log in DECISIONS + bump STATUS.
- **Sensitive files:** Layout.astro, all page frontmatter.

---

### `docs/DECISIONS.md`

**2026-05-29:** SEO metadata approval required; documented in SEO_METADATA.md; enforced via seo-metadata.mdc; noindex until launch.

**2026-05-18:**
- `.cursor/rules/main.mdc` over legacy `.cursorrules`
- Tailwind v4 @theme in global.css
- Brand palette locked (no gray/blue)
- Tone: honest, educational, never salesy
- AGENTS.md = AI entry point
- Repo docs canonical; Notion = prompt mirror only
- STATUS `_Last verified_` = freshness anchor (30-day rule)
- All IWCT Notion pages under one parent page

---

### `docs/SESSIONS.md`

**2026-06-01 (Cursor):** Image optimization (sharp, Astro Image, WebP); optimize scripts; blog/service image updates; prep blog post. Decision: public JPEGs for OG, src/assets for on-page Image. Next: proofread on branch.

**2026-05-18 (Claude Cowork):** Created docs system, AGENTS.md, Cursor rules, Notion mirror. Flagged PROJECT_BRIEF and STATUS staleness, about.astro colors, Welcome.astro, missing Tier 1 components.

---

### `docs/CHANGELOG.md`

Tracks file-level changes for 2026-06-01 (image pipeline, blog post, doc updates) and 2026-05-18 (initial docs/rules creation, .cursorrules removal).

---

### `docs/RITUALS.md`

**Change Law:**
1. Wrap-up every session (SESSIONS + CHANGELOG + STATUS if material)
2. STATUS freshness anchor (>30 days → audit first)
3. Decisions superseded, never deleted

**Prompts:** Start-of-session, end-of-session wrap-up, new feature/page, freshness audit.

**File map:** Defines purpose and update frequency for each docs/ file + AGENTS.md. Does not include CLAUDE.md, memory/, TASKS.md, dashboard.html, .cursor/rules/.

---

### `memory/context/business-vision.md`

- Core insight: site is not just lead gen — content serves leads, education, chatbot training, SOPs, platform.
- Five layers (same structure as CLAUDE.md, more narrative detail on why layers fit together).
- Veteran neighborhood pilot (900+ homes, personal bond, pricing, word-of-mouth, reentry pipeline).
- Personal story (incarceration, dogs, warden, Sheriff Ivy) — "NOT a marketing angle."
- Strategic notes: October 2026 milestone; don't over-build; bigger story doesn't need to be on site yet; potential social enterprise / own entity.

---

### `memory/projects/iwct-website.md`

- Status: active, Heather abroad until October 2026.
- Goal: phone ringing, jobs lined up for return.
- Tech stack + URLs + noindex.
- **Site structure (PARTIALLY STALE):** Correct for home, about, contact, homeowner guide. Services hub + 4 pages marked TODO but **exist in repo**. Blog marked TODO but **index + posts exist**.
- Design tokens (matches BRAND_RULES).
- Page pattern (follow about.astro).
- Services content plan (7-section template).
- Pending decisions (pricing, paint brands, pool deck scope) — duplicates CLAUDE.md open questions.

---

### `.cursor/rules/main.mdc`

Astro/Tailwind, small components, file comments, confirm before delete, BRAND_RULES tone, unique SEO per page, metadata approval gate, small steps with confirmation.

---

### `.cursor/rules/core.mdc`

One H1 per page, real ul/ol lists, FL climate content (hurricanes, humidity, sun, salt, mold), don't change images/reviews/nav/layout without ask, only edit what user asks, fast/mobile/readable, professional tone, keep it simple.

---

### `.cursor/rules/seo-metadata.mdc`

Duplicate enforcement layer for SEO_METADATA.md policy. Lists all protected fields. noindex launch gate. Reference to docs.

---

### `README.md` / `TASKS.md`

- **README:** Astro template only. No IWCT context.
- **TASKS:** Empty sections. No active work tracked here (work lives in STATUS "What's next" and SESSIONS "Next").

---

### `dashboard.html`

- Local productivity UI with Memory tab.
- Reads/writes `CLAUDE.md` and files under `memory/` via browser File System Access API.
- Parallel edit path — does not sync with `docs/STATUS.md`, `SESSIONS.md`, or `AGENTS.md` workflow.

---

## Actual Codebase Snapshot (ground truth, 2026-06-01)

Cross-check used because multiple docs are stale.

### Pages (`src/pages/`)

| Path | File | Approx. status |
|------|------|----------------|
| `/` | `index.astro` | Done |
| `/about` | `about.astro` | Done (refactor needed per STATUS) |
| `/contact` | `contact.astro` | Done (~7.9 KB) |
| `/thank-you` | `thank-you.astro` | Exists (not in docs) |
| `/404` | `404.astro` | Exists (not in docs) |
| `/homeowner-guide` | `homeowner-guide.astro` | Done |
| `/homeowner-guide/*` | 4 article pages | Done |
| `/services` | `services/index.astro` | Done |
| `/services/*` | 4 service pages | Done |
| `/blog` | `blog/index.astro` | Done |
| `/blog/*` | 3 posts (+ prep post in repo) | Done |
| `/faq` | — | **Not started** |

### Components (`src/components/`)

`Header.astro`, `Footer.astro`, `FaqSection.astro`, `ServiceCategoryBar.astro`, `GuideUnderConstruction.astro`, `Welcome.astro` (unused starter)

---

## Duplicates & Conflicts

### 1. Five-layer business vision (triple copy)

| Location | Lines (approx.) | Notes |
|----------|-----------------|-------|
| `CLAUDE.md` § "The Bigger Vision" | ~35 | Includes layers 1–5 + reentry programs |
| `memory/context/business-vision.md` | ~85 | Richest narrative; "why layers fit together" |
| `CLAUDE.md` + `memory/` overlap | ~90% | Same structure, minor wording differences |

**Risk:** Edit one, forget the others. Strategic context diverges over time.

---

### 2. Voice / tone rules (four places, uneven depth)

| Location | Depth |
|----------|-------|
| `CLAUDE.md` "Heather's Voice" | **Rich** — phrases, I/we, examples |
| `docs/BRAND_RULES.md` | **Thin** — generic tone bullets |
| `docs/DECISIONS.md` (2026-05-18) | One-line decision |
| `.cursor/rules/core.mdc` | FL climate + professional tone only |

**Conflict:** BRAND_RULES is declared canonical in AGENTS.md and main.mdc, but CLAUDE.md has the actual voice guidance writers need.

---

### 3. Project status (four conflicting snapshots)

| File | Services | Contact | Homeowner Guide | Blog |
|------|----------|---------|-----------------|------|
| `docs/STATUS.md` | Planned | Stub | Stub | Planned |
| `docs/PROJECT_BRIEF.md` | Planned (services.astro) | Planned | Not mentioned | Not mentioned |
| `CLAUDE.md` | In progress (4 pages) | Done | Done (4 articles) | In progress |
| `memory/projects/iwct-website.md` | TODO | Done | Done | TODO placeholder |
| **Actual repo** | **Done** | **Done** | **Done** | **Done (3–4 posts)** |

**Critical:** STATUS was bumped 2026-06-01 but page table was not updated despite major site progress. SESSIONS 2026-05-18 explicitly flagged this; still unfixed.

---

### 4. Contact info & business facts (consistent — good)

Phone, email, location, owner name, model agree across AGENTS.md, CLAUDE.md, PROJECT_BRIEF.md, memory/projects. No conflicts found.

---

### 5. Tech stack (consistent — good)

Astro v6.3.3, Tailwind v4 @theme in global.css, Netlify, noindex ON — aligned across STATUS, CLAUDE.md, memory/projects, DECISIONS.

---

### 6. Open / pending questions (two places, not in docs/)

| Question | `CLAUDE.md` | `memory/projects/iwct-website.md` |
|----------|-------------|-----------------------------------|
| Pricing on service pages | Yes | Yes |
| Paint brands | Yes | Yes |
| Pool deck scope | Yes | Yes |
| Chatbot-ready architecture | Yes | No |
| Reentry/veteran own page/brand | Yes | No |

**Gap:** No `docs/OPEN_QUESTIONS.md`. Questions only in Claude/memory files — invisible to AGENTS.md read path.

---

### 7. SEO / metadata policy (triple enforcement — intentional overlap)

Same rule in: `AGENTS.md`, `docs/SEO_METADATA.md`, `docs/DECISIONS.md`, `.cursor/rules/main.mdc`, `.cursor/rules/seo-metadata.mdc`.

**Assessment:** Redundant but aligned. main.mdc + seo-metadata.mdc duplicate each other partially.

---

### 8. Working rules / confirm-before-change (four places)

Overlapping "confirm before changing" in: AGENTS.md, main.mdc, core.mdc, RITUALS prompts.

**Minor tension:** core.mdc says "only edit what user asks"; main.mdc says "break into small steps and confirm" — compatible but repetitive across 3 always-on Cursor rules.

---

### 9. Workflow file map gaps

`RITUALS.md` file table omits: `CLAUDE.md`, `memory/`, `TASKS.md`, `dashboard.html`, `.cursor/rules/*.mdc`, `docs/FULL_CONTEXT_AUDIT.md`.

AGENTS.md omits: `CLAUDE.md`, `memory/`.

---

### 10. README vs reality

README describes Astro starter template structure. Contradicts actual project (IWCT pages, components, docs system). Misleading for humans and AIs that read README first.

---

### 11. CHANGELOG vs SESSIONS vs STATUS

- CHANGELOG references prep blog post created 2026-06-01.
- STATUS still lists blog as "Planned."
- SESSIONS "Next" mentions proofread branch — aligns with partial progress, not STATUS table.

---

### 12. Tier 1 components

STATUS and SESSIONS 2026-05-18 list PageHero, Section, ContactCard, FaqItem, ServiceCard as not built. **Partial progress:** `FaqSection.astro` exists (similar to FaqItem). Others still missing. Docs not updated.

---

## Recommendations

### Target structure (minimal duplication)

```
/
├── AGENTS.md              ← Single entry: read order + 8 working rules (pointers only)
├── CLAUDE.md              ← Slim pointer: "Read AGENTS.md. Deep context: docs/BUSINESS_CONTEXT.md"
├── README.md              ← IWCT project blurb + npm commands + "AI: read AGENTS.md"
├── TASKS.md               ← Active queue OR delete and use STATUS only
│
├── docs/
│   ├── PROJECT_BRIEF.md   ← Static facts: company, contact, model, goal (no page list)
│   ├── BUSINESS_CONTEXT.md ← NEW: merge vision from memory/context + CLAUDE.md strategic sections
│   ├── BRAND_RULES.md     ← Expand: merge CLAUDE voice + visual tokens (one voice source)
│   ├── STATUS.md          ← Only "right now" snapshot (pages, components, what's next)
│   ├── OPEN_QUESTIONS.md  ← NEW: owner decisions pending (from CLAUDE.md list)
│   ├── DECISIONS.md       ← Why we chose X (unchanged)
│   ├── SESSIONS.md        ← Session recaps (unchanged)
│   ├── CHANGELOG.md       ← File changes (unchanged)
│   ├── RITUALS.md         ← Workflow prompts (update file map)
│   ├── SEO_KEYWORDS.md    ← Keywords (unchanged)
│   ├── SEO_METADATA.md    ← Metadata gate (unchanged)
│   ├── CHAT_BRIEF.md      ← NEW: ~40 lines for Claude Chat / Grok paste
│   └── FULL_CONTEXT_AUDIT.md ← This file; re-run after consolidation
│
├── memory/                ← ARCHIVE or delete after migration to docs/BUSINESS_CONTEXT.md
│
└── .cursor/rules/
    ├── main.mdc           ← Tech + process + pointers (keep)
    ├── content.mdc        ← Merge core.mdc content rules; scope to src/pages, src/components
    └── seo-metadata.mdc   ← Keep as-is (remove duplicate line from main.mdc)
```

---

### Priority actions

#### P0 — Fix stale docs (do first)

1. Update `docs/STATUS.md` page table to match actual `src/pages/` (see ground truth above).
2. Update `docs/PROJECT_BRIEF.md`: remove stale page lists or replace with pointer to STATUS.
3. Update `CLAUDE.md` website section: Services done, Blog mostly done.
4. Update or archive `memory/projects/iwct-website.md`.

#### P1 — Consolidate duplication

5. Create `docs/BUSINESS_CONTEXT.md` from `memory/context/business-vision.md` + unique CLAUDE.md sections (crews, availability, GMB).
6. Expand `docs/BRAND_RULES.md` with CLAUDE.md voice section (I/we, key phrases, AEO heading pattern).
7. Create `docs/OPEN_QUESTIONS.md` from CLAUDE.md open questions list.
8. Slim `CLAUDE.md` to ~15 lines of pointers (Claude auto-loads it; avoid maintaining two full copies).

#### P2 — Tool consistency

9. Create `docs/CHAT_BRIEF.md` for Claude Chat and Grok (contact, noindex warning, 5 voice bullets, link to repo).
10. Update `RITUALS.md` file map to include all context files.
11. Replace `README.md` with IWCT-specific content.
12. Either populate `TASKS.md` from STATUS "What's next" or delete TASKS.md and document that STATUS owns the queue.

#### P3 — Cursor cleanup

13. Merge `core.mdc` into scoped `content.mdc` (or into main.mdc) to reduce triple always-on overlap.
14. Remove SEO duplicate sentence from `main.mdc` (seo-metadata.mdc already covers it).

#### P4 — dashboard.html

15. Point dashboard Memory tab at `docs/BUSINESS_CONTEXT.md` + `docs/OPEN_QUESTIONS.md`, or retire memory/ folder editing to prevent forked truth.

---

### What to keep as-is (working well)

- **AGENTS.md → docs/ read order** — solid cross-tool pattern.
- **RITUALS.md Change Law + wrap-up prompts** — best-in-class workflow documentation.
- **SEO_METADATA.md + seo-metadata.mdc** — appropriate safety layering for pre-launch.
- **DECISIONS.md format** — short, dated, supersede-not-delete.
- **BRAND_RULES color/font tables** — grounded in actual global.css.
- **Repo canonical, Notion mirror** — good decision; keep Notion as prompt clipboard only.

---

### Files to process in consolidation

| Action | Files |
|--------|-------|
| Keep & maintain | AGENTS.md, all docs/ except merges, .cursor/rules/ |
| Slim to pointer | CLAUDE.md |
| Expand | BRAND_RULES.md, STATUS.md, RITUALS.md file map |
| Create | BUSINESS_CONTEXT.md, OPEN_QUESTIONS.md, CHAT_BRIEF.md |
| Replace | README.md |
| Archive/delete after merge | memory/context/business-vision.md, memory/projects/iwct-website.md |
| Decide | TASKS.md (use or remove), dashboard.html (align or retire) |

---

## Audit metadata

| Metric | Count |
|--------|-------|
| Root `.md` files | 4 |
| `docs/` `.md` files | 9 (10 after this audit) |
| `memory/` `.md` files | 2 |
| `.cursor/rules/` `.mdc` files | 3 |
| Relevant non-markdown | 1 (`dashboard.html`) |
| **Total processed** | **19** |
| Legacy `.cursorrules` | 0 (removed) |
| Documented conflicts | 12 categories |
| Stale status files | 3 (STATUS, PROJECT_BRIEF, memory/projects) |

---

_End of audit. Next step: run P0 freshness fixes on STATUS and PROJECT_BRIEF with owner approval._
