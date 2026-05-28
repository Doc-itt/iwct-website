# Project: IWCT Website Build

## Status
Active — in progress. Heather is out of the country, returning October 2026.

## Goal
Get the phone ringing before October. Pass leads to trusted crews.
Have jobs lined up so Heather can return and work immediately.

## Tech Stack
- Astro v6.3.3
- Tailwind CSS v4 (CSS variable-based config in global.css)
- Deployed on Netlify
- Staging: https://iwct-in-progress.netlify.app/
- Production: https://ifwallscouldtalkllc.com/
- noindex currently ON — remove when ready to launch

## Site Structure
```
src/
  layouts/Layout.astro        — shell, schema, head tags
  components/
    Header.astro
    Footer.astro
  styles/global.css           — color tokens, font config
  pages/
    index.astro               — Home (DONE)
    about.astro               — About (DONE)
    contact.astro             — Contact (DONE)
    homeowner-guide.astro     — Guide hub (DONE)
    homeowner-guide/
      hiring-a-painter-brevard-county.astro  (DONE)
      questions-to-ask-before-you-hire.astro (DONE)
      paint-products-florida.astro           (DONE)
      what-to-expect-during-your-project.astro (DONE)
    services/
      index.astro             — Services hub (TODO)
      exterior-painting.astro (TODO)
      interior-painting.astro (TODO)
      cabinet-painting.astro  (TODO)
      pool-deck-painting.astro (TODO)
    blog/
      index.astro             — Blog hub (TODO — coming soon placeholder)
```

## Design Tokens
Colors: cream (#fbf8f3), charcoal (#2d2438), muted (#6b6478),
        purple (#6b3b6e), coral (#d4574e), orange (#e89b4c), sage (#a8b870)
Fonts: DM Sans (body), Fraunces (display/headings)
Accent bar: gradient purple→coral→orange→sage (used as decorative divider)

## Page Pattern (follow about.astro)
- Frontmatter: title, description, faqItems array, faqSchema + serviceSchema objects
- Layout wrapper with title + description props
- article.mx-auto.max-w-4xl.space-y-14
- Sections with h2 (font-display text-2xl/3xl font-semibold)
- FAQ rendered from faqItems array
- JSON-LD scripts at bottom for FAQ + Service schemas

## Services Pages — Content Plan
Each page needs:
1. Answer-first lead paragraph (40-60 words)
2. Why it matters in Florida section
3. Process (step-by-step)
4. Question-based H3s (AEO)
5. Homeowner tips section
6. Related services links
7. CTA to contact

Pages planned:
- Exterior Painting (highest search volume)
- Interior Painting
- Cabinet Painting
- Pool Deck & Outdoor Coatings

## Pending Decisions
- Pricing on service pages: ranges vs. estimate-only (ask Heather)
- Paint brand recommendations: name brands or stay general? (ask Heather)
- Pool deck page scope: pool-focused or broader "outdoor coatings"?
