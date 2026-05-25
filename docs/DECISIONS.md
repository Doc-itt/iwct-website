<!--
  DECISIONS.md
  Running log of "we chose X over Y because…"

  Format:
  ## YYYY-MM-DD
  - **Decision in one sentence.** Reasoning in one or two sentences.

  Rules:
  - Don't delete reversed decisions — add a new entry that supersedes the old one and links back.
  - Keep entries short. Detail belongs in SESSIONS.md or external docs.
  - Add an entry whenever a non-obvious choice is made that future-you (or a future AI) might want to second-guess.
-->

# Decisions

## 2026-05-18
- **Use `.cursor/rules/main.mdc` instead of legacy `.cursorrules`.** Cursor's modern format; lets us scope rules by file type later; official recommendation.
- **Tailwind v4 with `@theme` in `src/styles/global.css`; no separate `tailwind.config.js`.** This is the v4 best practice. Inherited from existing setup.
- **Brand palette is locked: cream, charcoal, muted, purple, coral, orange, sage.** No gray/blue or off-palette colors anywhere on the site. Watercolor gradient (purple → coral → orange → sage) for dividers and accents.
- **Tone is honest, educational, never salesy.** No hard CTAs, no hype, no exaggerated claims.
- **`AGENTS.md` at project root is the entry point for any AI tool.** Tool-agnostic name — read by Cursor, Claude, and others by default.
- **Documentation lives in the repo (`docs/`), not externally.** Notion is an optional mirror for prompts only; the repo files are canonical.
- **STATUS.md has a `_Last verified_` date as the freshness anchor.** Older than 30 days → run a freshness audit before doing other work.
- **All IWCT-related Notion pages live under the "IWCT Website" Notion page** (id `35dcbc13-5e26-80eb-b4ef-c5fc0fa58aac`). Heather's Notion is currently unorganized; using one consistent parent until she reorganizes prevents pages from getting scattered.
