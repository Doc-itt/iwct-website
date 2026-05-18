<!--
  BRAND_RULES.md
  Voice, tone, and visual identity rules for the If Walls Could Talk site.
  Anyone (or any AI) writing for this site should read this first.
-->

# Brand Rules

## Tone
Honest, direct, educational. No hard sell. No hype.

## Writing style
Clear sentences. Short paragraphs. Plain English.

## What to avoid
- Pushy CTAs
- Exaggerated claims
- Salesy language
- Cluttered layouts

## Colors

This project uses **Tailwind v4** with the Vite plugin (`@tailwindcss/vite`). There is **no separate `tailwind.config.js`** — colors and fonts are defined inside `src/styles/global.css` using the v4 `@theme` block.

| Token | Hex | Role |
|---|---|---|
| `--color-cream` | `#fbf8f3` | Page background |
| `--color-charcoal` | `#2d2438` | Body text, headings |
| `--color-muted` | `#6b6478` | Secondary text |
| `--color-purple` | `#6b3b6e` | Primary brand color (buttons, accents) |
| `--color-coral` | `#d4574e` | Hover / accent |
| `--color-orange` | `#e89b4c` | Accent |
| `--color-sage` | `#a8b870` | Accent |

A signature **watercolor gradient** (purple → coral → orange → sage) is used in dividers and accent bars. Defined in `global.css` as `.watercolor-bar` and `.watercolor-divider`.

## Fonts

| Token | Family | Used for |
|---|---|---|
| `--font-sans` | "DM Sans", ui-sans-serif, system-ui, sans-serif | Body text |
| `--font-display` | "Fraunces", ui-serif, Georgia, serif | Headings (h1–h4) |

## Reusable style classes (already defined in `global.css`)
- `.page-container` — max-width wrapper with responsive horizontal padding
- `.btn-primary` — primary button (purple, hovers to coral)
- `.watercolor-bar` / `.watercolor-divider` — brand gradient lines

## Logo files

| File | Path | Notes |
|---|---|---|
| `LOGO.png` | `public/LOGO.png` | ~872 KB — likely the full/master logo |
| `logotransparent.png` | `public/logotransparent.png` | ~84 KB — transparent background version |
| `favicon.ico` | `public/favicon.ico` | Site favicon |
| `favicon.svg` | `public/favicon.svg` | SVG favicon |

**Logo usage rules:** _TBD — Heather to add once she's reviewed which logo file should be used where (header, footer, social cards, etc.)._
