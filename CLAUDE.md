# CLAUDE.md: Andrew Pocta — Builder (personal site)

## What this is
Andrew's personal "builder" website: a single static page in a Liquid Glass bento style (Manrope + JetBrains Mono, deep navy #070b18, blue/violet/teal light orbs, frosted-glass tiles). Hosted on Netlify, auto-deployed from this repo's `main` branch. No build step.

## Structure
- `content.js`: ALL user-facing words, projects and links (`window.SITE`). Andrew edits this by hand on GitHub. Keep its comments and format simple.
- `index.html`: design, layout and behavior. Renders everything from `window.SITE`.
- `tests/verify.mjs`: deterministic verification (Playwright).

## Rules
1. **Never invent facts.** Unknown details stay as `[PLACEHOLDER: ...]` (rendered as amber tags). No made-up stats, dates, users or testimonials.
2. Copy changes go in `content.js`, never hard-coded in `index.html`.
3. Keep `content.js` editable by a non-coder: plain strings, comments explaining each field, no functions.
4. Do not mention drone work anywhere on the site.
5. Version-label significant redesigns (v2, v3…) and keep prior versions recoverable (git tags `v1`, `v2`…).
6. Run the verification before every commit that touches `index.html`, and before adding any new feature.

## Verification (definition of done)
```
npm i -D playwright@latest   # first time only, if not installed
node tests/verify.mjs
```
Must print `PASS` for every check:
- page loads with zero console errors
- no horizontal overflow at 1440 px and 390 px widths
- every project in `content.js` renders a tile, and its panel opens and closes
- Math Mystic demo: clicking 56 shows the success message
- ⌘K / Ctrl+K palette opens and lists every project
- the contact section shows the email (or its placeholder) and all links

## History
- v1 (Nov 2, 2026): dark topographic one-pager.
- v2 (Nov 3, 2026): Liquid Glass bento (concept 3A); content moved to `content.js`.
