# TERRANE — Product Showcase

A cinematic, editorial product catalogue built with Next.js 16 (App Router),
React 19, TypeScript, Tailwind CSS v4 and Motion.

> **This is a demo.** TERRANE is a fictional lighting & object atelier. All
> product names, prices, copy and contact details are placeholders. There is no
> cart, payment or checkout flow — enquiries happen on WhatsApp.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm start
```

## WhatsApp configuration

All contact configuration lives in **`lib/site.ts`**.

The default number is the obvious placeholder `+00 000 000 0000`. In demo mode,
every WhatsApp CTA opens an honest dialogue explaining that the number is not
connected, showing the exact prefilled product message and offering a copy
button. It never pretends to be a real contact.

To connect a real seller, create `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=+62 812 3456 7890
```

or replace the fallback in `lib/site.ts`. Use the full international format;
spaces and punctuation are stripped when the `wa.me` link is built. Every
product enquiry includes the product name, selected finish and a short question.

The email uses the reserved `.example` domain and is also a placeholder.

## Replacing the demo catalogue

| What | Where |
| --- | --- |
| Brand, contact, navigation | `lib/site.ts` |
| Products, prices, finishes, copy | `lib/products.ts` |
| Product and editorial imagery | `public/images/` |
| Colour tokens and type | `app/globals.css` |
| Page composition | `app/page.tsx` |

Product imagery uses 4:5 crops. Keep the same aspect ratio when swapping files
to preserve the grid rhythm. `og.jpg` is the social preview image.

## Structure

```
app/
  layout.tsx        fonts, metadata, motion provider
  page.tsx          page composition
  globals.css       design tokens, grain, dialogs, motion
components/
  hero.tsx          cinematic entrance + scroll parallax
  manifesto.tsx     editorial statement + layered parallax
  story.tsx         pinned "three studies" scroll story
  collection.tsx    filterable catalogue + product dialog
  product-dialog.tsx  finishes, details, WhatsApp CTA
  materials.tsx     material triptych
  contact-cta.tsx   final WhatsApp / email call to action
  site-header.tsx   sticky nav + native-dialog mobile menu
  whatsapp-button.tsx  configured link or honest demo dialogue
lib/
  site.ts           single source of truth for contact details
  products.ts       demo catalogue data
  whatsapp.ts       message + wa.me URL builders
```

## Motion & accessibility

- Motion is used for entrance choreography, restrained parallax and the pinned
  story; it is not applied to every element.
- `prefers-reduced-motion` is respected through `MotionConfig`, scroll transforms
  and CSS media queries. The marquee stops, transforms are dropped and smooth
  scrolling is disabled.
- Product details and the mobile menu use the native `<dialog>` element for focus
  trapping, Escape handling and focus restoration.
- All product cards, filters and contact actions are keyboard operable with
  visible focus styles. Images have descriptive alt text.
- A `<noscript>` fallback makes reveal content visible without JavaScript.

## Imagery

Photography is sourced from [Unsplash](https://unsplash.com) under the
[Unsplash License](https://unsplash.com/license) and is used as replaceable demo
imagery. Source photo IDs are embedded in the downloaded files' original URLs:

- `hero-lamp.jpg` — photo `1573676386604-78f8ed228e2b`
- `craft-hands.jpg` — photo `1493106641515-6b5631de4bb9`
- `interior-light.jpg` — photo `1519710164239-da123dc03ef4`
- `pendant-orbit.jpg` — photo `1540932239986-30128078f3c5`
- `lamp-halo.jpg` — photo `1517991104123-1d56a6e81ed9`
- `lamp-monolith.jpg` — photo `1507473885765-e6ed057f782c`
- `vessel-column.jpg` — photo `1565193566173-7a0ee3dbe261`
- `cups-kiln.jpg` — photo `1610701596007-11502861dcfa`
- `bowl-drift.jpg` — photo `1525973779373-015bdf68e579`
- `plates-loam.jpg` — photo `1594761077405-876e6bf97b50`
- `serving-slate.jpg` — photo `1578749556568-bc2c40e68b61`

Replace these with your own product photography before publishing.
