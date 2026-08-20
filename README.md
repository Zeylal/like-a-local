# like a local ✈

Travel notes by Zeynep — non-touristy itineraries, local food spots, and maps from every trip.

## What's inside

```
src/trips/milano-2026.md      → one markdown file per trip — all content lives in its frontmatter
src/pages/index.astro         → home page: about me, 3D globe, trip polaroids — auto-generated, don't hand-edit
src/pages/trips/[slug].astro  → shared trip-page template (facts, day-by-day, food, route map, tips)
src/components/CityIntro.astro → the "About the city" hero photo + hover hotspots block
src/content.config.ts         → the frontmatter schema — the source of truth for what fields a trip needs
src/data/comingSoonCountries.ts → countries lit up on the globe that don't have a trip page yet
src/styles/global.css         → all the site's CSS
public/Assets/                → photos (destination photos + your portrait)
```

Astro, static output — no server/SSR needed. Maps use Leaflet (trip pages) and globe.gl (home page), both loaded via CDN `<script>` tags, not npm dependencies.

## Local dev

```
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # preview the production build locally
```

## Deploy to Vercel (separate from the portfolio!)

1. Create a **new** GitHub repo (e.g. `like-a-local`) — do NOT put this in the portfolio repo.
2. Push these files.
3. On vercel.com → **Add New… → Project** → import `like-a-local`.
4. Framework preset: **Astro** (auto-detected). Deploy.
5. Done — it gets its own URL like `like-a-local.vercel.app`, completely independent from the portfolio project.

Optional: in the Vercel project → Settings → Domains, you can later add a subdomain of your portfolio's domain, e.g. `travels.yourname.com`.

## Adding a new trip

Ask Claude 🙂 — bring your notes (what you did, where you ate, budget) and ask it to:

1. Create `src/trips/<place-year>.md` and fill in the fields documented in `src/content.config.ts` (title, dates, facts, day-by-day, dishes, tips, pins, the `about`/`hotspots` city intro, etc).
2. If that country was previously in `src/data/comingSoonCountries.ts`, remove its entry — it's now picked up automatically from the trip's `countryCode`.

That's it — no manual edits to `index.astro` needed. The polaroid card and the globe highlight are both generated automatically from the collection, sorted by the `order` field (higher = shown first).

## The "About the city" hotspots

Each trip page opens with a hero photo (`heroImage`, falls back to `image` if omitted) and an `about` intro (array of paragraph strings). `hotspots` is an array of `{ x, y, label, info }`, where `x`/`y` are 0–100 percentages positioning a small dot over the hero photo — hover (or tap, or Tab to it) to reveal the info card.

## A note on inline HTML

`dayByDay[].paragraphs`, `dishes[].description`, `tips`, and `about` are plain strings that may contain inline `<b>`/`<i>` tags (rendered as real HTML, not escaped) — this preserves the site's original hand-written emphasis styling without needing a markdown-in-YAML parser.

## Replacing the placeholder photos

`image`/`heroImage` in a trip's frontmatter point at a file in `public/Assets/` (referenced as `/Assets/<file>`) or a remote URL. Milano currently borrows existing Italy/Rome photos as a stand-in since there's no dedicated Milano photo yet — swap them for the real thing whenever you have it.
