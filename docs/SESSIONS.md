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
