# Sengar Sisters

A warm editorial creative-studio prototype built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production checks: `npm run typecheck` and `npm run build`; `npm start` serves the production build.

## Replace the sample content

All sisters, services, portfolio projects, results, testimonials and contact destinations live in `data/siteData.ts`. Projects, testimonials and performance figures are illustrative concepts, not actual client claims. Contact URLs and numbers are placeholders. The inquiry form validates in the browser and displays a preview confirmation; it does not transmit or save data.

Place images in `public/images`, video in `public/videos`, client assets in `public/clients`. Use paths such as `/images/your-project.jpg` in a project's optional `image` field. Add an optional `video` path for MP4 or WebM; `image` becomes its poster. Project media uses Next/Image for photographs and native accessible video controls for films. For sister portraits, set the optional `image` and `instagram` fields in the sister data. Set `showreel.video` and `showreel.image` in the same data file for the final studio film.

Aditi’s supplied portrait is bundled locally in `public/images/aditi-sengar.jpg`, with its original colours and full 9:16 composition. Apoorva’s portrait remains a clearly labelled placeholder. Portfolio concepts use local CSS artwork and have no remote media dependencies.

## Design and behavior

Dark mode is the default for new visitors. The theme menu offers Dark, Light and System default; the last choice follows live operating-system changes. Theme preference persists in localStorage and is applied before paint. Motion respects reduced-motion preferences. The responsive navigation and project dialogs support Escape, focus trapping and focus return. Mobile uses native scrolling, a compact chapter bar, stacked projects and swipeable testimonials.

Palette, typography and breakpoint rules are in `app/globals.css`. Reusable media, motion and modal primitives are in `components/Art.tsx` and `components/UI.tsx`. Metadata is in `app/layout.tsx`; update the social preview with a final PNG/JPG when the brand assets are ready.

## Browser checks

With the development server running, use `npm run test:e2e`. Chromium can be installed with `npx playwright install chromium`. The browser test checks six viewport widths, overflow, theme persistence, navigation, portfolio filters, dialogs and inquiry validation. Set `TEST_BASE_URL` to test a different local server. Set `NEXT_PUBLIC_SITE_URL` to the final public domain before deployment so social metadata resolves correctly.

This environment restricts Turbopack worker ports, so the run scripts use Next.js's supported Webpack compiler.

## Art direction and chapter navigation

The consolidated `app/globals.css` defines pearl / cherry / charcoal light mode and warm-charcoal / ivory / soft-cherry dark mode. `Atmosphere` composes local SVG liquid-metal contours, orbiting fine lines, drifting rose-and-bronze illumination and grain. Mobile retains the same automatic motion and touch response; reduced-motion mode makes the scene static.

`KineticStage` replaces the angled marquee. Disciplines come from the centralized `disciplines` array and change every three seconds, pausing on hover, focus, hidden tabs and when offscreen. Reduced-motion mode shows a static list.

The centralized `chapters` array supplies the chapter rail and mobile chapter list. `ChapterProvider` measures section offsets, tracks the section crossing 35% of the viewport and shares active state with the navbar. The rail thumb follows actual scroll progress. Measurements refresh on resize, media load and layout changes. Contact becomes active at the page bottom. All chapter links support keyboard navigation.

Hero text uses masked entrances; portfolio media supports restrained pointer and touch tilt; CTAs have gentle magnetic movement; and the process timeline draws with scroll progress. `hooks/useMotionPreference.ts` keeps reduced-motion preferences consistent during hydration. Browser checks cover both themes, six viewport widths, portrait framing, chapter navigation, kinetic controls and the existing project/contact interactions.

Contact links launch a viewport-fitted paper plane before opening their destination in the same tab. Modified clicks retain native browser behavior. Email and WhatsApp URLs include editable inquiry drafts defined in `lib/contact.ts`; Instagram opens the configured profile. No message is sent automatically. `ContactFlight` owns the flight and `PressEffects` adds pointer and keyboard press rings to every button and link. Reduced-motion mode replaces the spatial flight with a brief fade.
