<!--
  RITUALS.md
  Repeatable workflows for working with any AI on this project.
  This is the playbook. Copy-paste the prompts as-is.
-->

# Rituals

## The Change Law

Three rules that keep this documentation honest no matter which AI is working on the project.

1. **The wrap-up runs every session.** Before ending any working conversation, the AI updates `SESSIONS.md`, `CHANGELOG.md`, and `STATUS.md` (if anything material changed). No exceptions.
2. **`STATUS.md` is the freshness anchor.** The top of that file has a `_Last verified: YYYY-MM-DD_` line. If that date is older than **30 days**, run a freshness audit *before* doing anything else.
3. **Decisions get superseded, never deleted.** Reversing a past choice? Add a new entry in `DECISIONS.md` that links back to the old one. Future-you needs to see the path, not just the current state.

---

## Start-of-session prompt

Paste this at the start of any new LLM conversation about this project:

```
I'm working on my If Walls Could Talk website project (iwct-website folder).

Before anything else, read these in order:
1. AGENTS.md
2. docs/STATUS.md (note the _Last verified_ date — flag if older than 30 days)
3. docs/PROJECT_BRIEF.md
4. docs/BRAND_RULES.md
5. docs/DECISIONS.md (skim; full read if today's task touches a past decision)
6. docs/SESSIONS.md — last 2–3 entries only

Then give me a 3-line summary of the current state. Wait for me to give you today's task.
```

---

## End-of-session prompt ("wrap up")

Paste this when you're ready to close any working session:

```
Wrap up this session. Follow the Change Law in docs/RITUALS.md:

1. Add a new dated entry at the TOP of docs/SESSIONS.md. Format:
   ## YYYY-MM-DD — [your tool, e.g. Claude / Cursor]
   - What we did (2–4 bullets)
   - Decisions:
   - Next:

2. Add one line to docs/CHANGELOG.md for each concrete file change.

3. If pages/components/features/tech-stack changed, update docs/STATUS.md
   and bump _Last verified_ to today's date.

4. If a non-obvious choice was made, add an entry to docs/DECISIONS.md.

5. Flag any docs that now look stale or contradicted by what we did today.

6. End your reply with a 3-line "handoff" summary I can paste into my next session.
```

---

## Adding a new feature, page, or component

Paste this when starting work on something new:

```
We're adding [name + brief description] to the site.

Before any code:
- Check docs/STATUS.md and docs/PROJECT_BRIEF.md to confirm this fits the plan.
- Check docs/DECISIONS.md for any past calls that constrain this.
- Propose what you want to build in plain English first.
- Wait for my OK before writing any files.
```

---

## Freshness audit (monthly OR when STATUS is >30 days old)

```
Run a freshness audit on the docs/ folder. Don't change files yet.

1. Read each file in docs/ and compare it to the actual project state
   (current file listings, current code in src/).
2. List anything stale, missing, or contradicted by reality.
3. Propose specific fixes.
4. Wait for my OK before changing anything.
5. After fixes are approved and applied, bump _Last verified_ on STATUS.md to today.
```

---

## Quick reference — which file holds what

| File | Purpose | When to update |
|---|---|---|
| `AGENTS.md` | AI entry point (root) | Rarely — only when working rules change |
| `docs/PROJECT_BRIEF.md` | Static project facts | When the *business* changes (new phone, new service area, etc.) |
| `docs/BRAND_RULES.md` | Voice + visual identity | When tone/colors/fonts change |
| `docs/SEO_KEYWORDS.md` | SEO targets | When keyword strategy changes |
| `docs/STATUS.md` | Current state snapshot | Every time something material changes |
| `docs/SESSIONS.md` | Chronological session recaps | Every session (newest at top) |
| `docs/DECISIONS.md` | Why we chose X over Y | Whenever a non-obvious choice is made |
| `docs/CHANGELOG.md` | One line per concrete file change | Every session |
| `docs/RITUALS.md` | This playbook | Rarely — only when the workflow itself changes |
