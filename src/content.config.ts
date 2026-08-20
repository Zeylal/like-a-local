import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each trip is one markdown file in src/trips/ — the filename becomes the
// URL slug (e.g. milano-2026.md -> /trips/milano-2026/). Structured page
// content (facts, the trip's own route map, the city intro) lives in
// frontmatter here. The markdown BODY is the long-form story itself,
// rendered as-is — use it for the actual narrative instead of (or as well
// as) the optional dayByDay/dishes/tips fields below.
const trips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/trips' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    teaser: z.string(),
    dates: z.string(),
    stamp: z.string(),
    emoji: z.string(),
    badge: z.string(),
    // public/-relative path or remote URL — polaroid card photo
    image: z.string(),
    // CityIntro hero photo; falls back to `image` if omitted
    heroImage: z.string().optional(),
    // higher = shown first on the home page
    order: z.number(),
    // ADM0_A3 code used to light this country up on the home globe
    countryCode: z.string().length(3),
    // this trip's own route-map view center [lat, lng]
    coords: z.tuple([z.number(), z.number()]),
    facts: z.array(z.object({ k: z.string(), v: z.string() })),
    pins: z.array(
      z.object({ n: z.string(), c: z.tuple([z.number(), z.number()]), e: z.string() })
    ),
    // Optional — a trip can use these structured sections, the markdown
    // body, or both. Omit any that don't apply.
    dayByDay: z
      .array(
        z.object({
          heading: z.string(),
          paragraphs: z.array(z.string()),
          // optional photo strip shown under this section's text
          images: z.array(z.string()).optional(),
        })
      )
      .optional(),
    dishes: z
      .array(
        z.object({
          emoji: z.string(),
          name: z.string(),
          description: z.string(),
          price: z.string(),
        })
      )
      .optional(),
    tips: z.array(z.string()).optional(),
    // CityIntro intro blurb — history / what the city is known for, one string per paragraph
    about: z.array(z.string()),
    // hover/tap hotspots over the CityIntro hero photo
    hotspots: z.array(
      z.object({
        x: z.number().min(0).max(100),
        y: z.number().min(0).max(100),
        label: z.string(),
        info: z.string(),
      })
    ),
  }),
});

export const collections = { trips };
