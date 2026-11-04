# CLAUDE.md: Andrew Pocta — Builder (personal site)

## What this is
Andrew's personal "builder" website: a single static page in a Liquid Glass bento style (Manrope + JetBrains Mono, deep navy #070b18, blue/violet/teal light orbs, frosted-glass tiles). Hosted on Netlify, auto-deployed from this repo's `main` branch. No build step.

## Structure
- `content.js`: ALL user-facing words, projects and links (`window.SITE`). Andrew edits this by hand on GitHub. Keep its comments and format simple.
- `index.html`: design, layout and behavior. Renders everything from `window.SITE`.
- `tests/verify.mjs`: deterministic verification (Playwright).
- `images/`: headshot (`SITE.photo`), panel screenshots (`project.images`), on-tile screenshots (`project.tileImages`, click to enlarge in a lightbox) and video posters (`project.poster`).
- Layout: intro tile + the `nowBuilding` project on top; every other project sits in a sideways-scrolling row (`#rail`) that bleeds off the right edge, with edge hover-scroll (mouse only), arrow buttons and swipe.
- `media/`: demo videos (`project.video`, H.264 MP4, faststart). Projects with a video get a Watch demo button.
- `family-hub/`: Expo web build of the Family Hub demo, served at /family-hub/ (uploaded by Andrew; don't edit by hand).
- Placeholders are hidden from visitors; `?draft` shows them as amber tags. Projects with an http(s) or /path `link` get a Live demo button.

## Rules
1. **Never invent facts.** Unknown details stay as `[PLACEHOLDER: ...]` (rendered as amber tags). No made-up stats, dates, users or testimonials.
2. Copy changes go in `content.js`, never hard-coded in `index.html`.
3. Keep `content.js` editable by a non-coder: plain strings, comments explaining each field, no functions.
4. Only include credentials Andrew has asked for (e.g. the FAA Part 107 line was added at his request on Nov 4, 2026).
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
- projects with a link or video show a Live demo / Watch demo button
- visitors see no [PLACEHOLDER] tags; `?draft` shows them
- ⌘K / Ctrl+K palette opens and lists every project
- the contact section shows the email (or its placeholder) and all links

## History
- v1 (Nov 2, 2026): dark topographic one-pager.
- v2 (Nov 3, 2026): Liquid Glass bento (concept 3A); content moved to `content.js`.
- v3 (Nov 4, 2026): sideways-scrolling project row (+RollForge, 757 Locals App, InkFreeze), on-tile screenshots with lightbox, new bio/CV/quote, X link, 501(c)(3) font-ligature fix.
- v2.2 (Nov 4, 2026): headshot, demo videos (Game Night, Wetlands), Math Mystic art, Family Hub sample-data screenshot.
- v2.1 (Nov 4, 2026): launch prep — Live demo buttons, draft mode, photo/screenshot support, OG image, favicon, 404, sitemap.
