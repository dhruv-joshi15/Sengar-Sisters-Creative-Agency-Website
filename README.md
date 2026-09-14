# Sengar Sisters

A warm editorial creative-studio prototype built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production checks: `npm run typecheck` and `npm run build`; `npm start` serves the production build.

## Replace the sample content

All sisters, services, portfolio projects, results, testimonials and contact destinations live in `data/siteData.ts`. Projects, testimonials and performance figures are illustrative concepts, not actual client claims. Instagram links to the real @_sengarsisters profile; email and phone/WhatsApp destinations remain placeholders. The inquiry form validates in the browser and displays a preview confirmation; it does not transmit or save data.

Place images in `public/images`, video in `public/videos`, client assets in `public/clients`. Use paths such as `/images/your-project.jpg` in a project's optional `image` field. Add an optional `video` path for MP4 or WebM; `image` becomes its poster. Project media uses Next/Image for photographs and native accessible video controls for films. For sister portraits, set the optional `image` and `instagram` fields in the sister data. Set `showreel.video` and `showreel.image` in the same data file for the final studio film.

Aditi’s supplied portrait loads eagerly and is bundled locally in `public/images/aditi-sengar.jpg`, with its original colours and full 9:16 composition. Apoorva’s portrait remains a clearly labelled placeholder. Portfolio concepts use local CSS artwork and have no remote media dependencies.

## Design and behavior

Dark mode is the default for new visitors. The theme menu offers Dark, Light and System default; the last choice follows live operating-system changes. Theme preference persists in localStorage and is applied before paint. Motion respects reduced-motion preferences. The responsive navigation and project dialogs support Escape, focus trapping and focus return. Mobile uses native scrolling, a compact chapter bar, stacked projects and swipeable testimonials.

Palette, typography and breakpoint rules are in `app/globals.css`. Reusable media, motion and modal primitives are in `components/Art.tsx` and `components/UI.tsx`. Metadata is in `app/layout.tsx`; update the social preview with a final PNG/JPG when the brand assets are ready.

## Browser checks

With the development server running, use `npm run test:e2e`. Chromium can be installed with `npx playwright install chromium`. The browser test checks six viewport widths, overflow, theme persistence, navigation, portfolio filters, dialogs and inquiry validation. Set `TEST_BASE_URL` to test a different local server. Set `NEXT_PUBLIC_SITE_URL` to the final public domain before deployment so social metadata resolves correctly.

This environment restricts Turbopack worker ports, so the run scripts use Next.js's supported Webpack compiler.

## Art direction and chapter navigation

The consolidated `app/globals.css` defines violet, sea-glass mint and apricot over soft lavender light mode and midnight indigo dark mode. `Atmosphere` composes cached celestial SVG orbits, aurora light and grain. Mobile retains the same automatic motion and touch response; reduced-motion mode makes the scene static.

`KineticStage` replaces the angled marquee. Disciplines come from the centralized `disciplines` array and change every three seconds, pausing on hover, focus, hidden tabs and when offscreen. Reduced-motion mode shows a static list.

The centralized `chapters` array supplies the chapter rail and mobile chapter list. `ChapterProvider` measures section offsets, tracks the section crossing 35% of the viewport and shares active state with the navbar. The rail thumb follows actual scroll progress. Measurements refresh on resize, media load and layout changes. Contact becomes active at the page bottom. All chapter links support keyboard navigation.

Hero text uses masked entrances; portfolio media supports restrained pointer and touch tilt; CTAs have gentle magnetic movement; and the process timeline draws with scroll progress. `hooks/useMotionPreference.ts` keeps reduced-motion preferences consistent during hydration. Browser checks cover both themes, six viewport widths, portrait framing, chapter navigation, kinetic controls and the existing project/contact interactions.

Contact links launch a viewport-fitted paper plane before opening their destination in the same tab. Modified clicks retain native browser behavior. Email and WhatsApp URLs include editable inquiry drafts defined in `lib/contact.ts`; Instagram opens the configured profile. No message is sent automatically. `ContactFlight` owns the flight and `PressEffects` adds pointer and keyboard press rings to every button and link. Reduced-motion mode replaces the spatial flight with a brief fade.

## Scroll-developed camera

`CameraInterlude` sits between Services and Work. A generated photorealistic Canon camera moves through studio light as the visitor scrolls. A dark shutter beat leads into a contact sheet of real food, wedding and brand work, followed by the studio story. The complete camera stays intact; there are no illustrated or assembling parts. The native scroll sequence reverses naturally and runs on mobile. Copy lives in `cameraStory` in `data/siteData.ts`.

Transforms and opacity are driven by MotionValues; React state changes only at three phase thresholds. Reduced motion presents a static camera, contact sheet and story. Ambient backdrop motion pauses when the camera stage covers it.

Generated asset: `public/images/camera-editorial.png`, made with the built-in imagegen tool and optimized locally. The exact generation prompt is recorded in [docs/camera-asset.md](docs/camera-asset.md). Final prompt: a complete photorealistic black Canon EOS mirrorless camera with prime lens, subtle front three-quarter view, realistic rubber and machined-metal textures, controlled softbox rim light, restrained violet and teal lens reflections and a transparent background. No hands, extra objects, illustration, cartoon or exploded parts.

## Celestial identity

The studio Instagram destination is `https://www.instagram.com/_sengarsisters/`; its handle and URL are centralized in `contact`. Header and footer use an uppercase Sengar Sisters wordmark with an interwoven SS / orbit / star symbol. The reusable SVG logo is in `public/images/sengar-sisters-logo.svg`.

The palette uses midnight indigo, violet, sea-glass mint and apricot in both themes. The backdrop is a cached celestial SVG with layered aurora light. Ambient layers freeze at their current pose during scrolling and resume from the same animation phase when scrolling stops, keeping rendering time available for the portraits and content grid. About uses staggered, straight portrait frames, elliptical orbits and a horizontal studio signature. `SocialGrowth` replaces the sample phone with a nine-tile concept grid whose columns move independently with native scroll. All growth numbers remain explicitly illustrative. Portfolio cards include framed artwork, edition numbers, service tags and a light sweep. Motion stays on transforms and opacity, with static reduced-motion alternatives.

### Three Instagram worlds

`components/InstagramWorlds.tsx` is the second chapter, directly after Home and ahead of About. Food is selected by default. The labelled concept portfolio remains in Work. Keyboard-accessible tabs explore the studio, food and wedding channels. Sage, rose and violet botanical scenes frame a featured post, supporting frames, a genuine quoted comment and a six-image contact sheet. Native post links open the exact original Instagram post in a new tab; profile links retain the paper-plane transition. Mobile includes every channel, image, comment and interaction. Reduced motion disables parallax and spatial transitions.

All editable channel copy, post credits, exact URLs and comments live in `data/instagram.ts`. Nine selected public post covers and three account avatars are stored in `public/images/instagram` and optimized with Next/Image; no Instagram embed script or live API is required. The source accounts are [Sengar Sisters](https://www.instagram.com/_sengarsisters/), [your_foodieredwine](https://www.instagram.com/your_foodieredwine/) and [ShaadiReelRiwaz](https://www.instagram.com/shaadireelriwaz/). Public feeds, original posts, collaborator credits and comments were checked on 14 September 2026. Likes/comments are explicitly dated snapshots, not verified views, reach or viral claims. Quoted comments are typeset previews of real public text, not fabricated screenshots. Revisit the original posts before updating engagement counts.

### Cinematic first impression

Home uses oversized faded SENGAR SISTERS typography, masked headline entrances, real Instagram imagery and interactive Food / Brands / Weddings art direction controls. Food is the initial first impression. Both primary CTAs lead into the real portfolio or the existing contact flow. About removes name-plate backgrounds and adds oversized portrait typography; Apoorva retains a clearly labelled typographic placeholder. Work uses a large faded editorial watermark, edition numbers and refined hover depth. Both themes and reduced motion preserve readable content.
