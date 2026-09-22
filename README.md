# Dreyz Studio

Premium architecture & interior design website for **Dreyz Interior** — a cinematic, scroll-driven experience with React Three Fiber, GSAP ScrollTrigger, and Lenis.

Upgrade from the previous [dreyzinterior.com](https://www.dreyzinterior.com/) site toward an award-site-quality presentation.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- React Three Fiber + Three.js + Drei
- Framer Motion (UI transitions)
- Content modules ready for Sanity / headless CMS

## Setup

```bash
cd dreyz-studio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/                  # Routes: home, about, projects, services, process, contact
  components/
    home/               # Home sections
    layout/             # Header, Footer, SmoothScroll
    projects/           # Portfolio grid + case study
    three/              # R3F scenes (hero, scroll story, mini model)
    shared/             # Reveal, parallax helpers
    ui/                 # Button, Container, Tag
  content/              # Typed placeholder content (CMS-ready)
  hooks/                # Media query, mouse parallax
  lib/                  # utils, gsap registration
```

## Animation architecture

1. **Lenis** (`SmoothScroll`) wraps the app for inertial scrolling.
2. **GSAP ScrollTrigger** powers:
   - fade/stagger reveals (`Reveal`, `StaggerLines`)
   - process timeline progress line
   - pinned 3D storytelling section progress
   - image parallax (`ParallaxImage`)
3. **Framer Motion** handles hero entrance and menu overlay.
4. ScrollTrigger is refreshed on load and after route layouts settle.

## 3D scene structure

| Scene | File | Role |
|-------|------|------|
| Hero | `components/three/HeroScene.tsx` | Architectural massing model, mouse + idle motion |
| Scroll story | `components/three/ScrollStorySection.tsx` | Pinned camera orbit + progressive volumes |
| Mini model | `components/three/MiniModel.tsx` | Lightweight model for contact / project pages |

`CanvasWrapper` reduces DPR and disables expensive effects on mobile / `prefers-reduced-motion`.

## Performance notes

- Heavy R3F sections are `dynamic(..., { ssr: false })`
- Mobile: lower DPR, fewer lights/shadows, simplified geometry
- Images via `next/image` + Unsplash remote patterns
- Prefer scrubbed GSAP over continuous JS loops where possible
- Split content from presentation for future CMS

## CMS upgrade path (Sanity)

Content today lives in `src/content/*.ts` with stable shapes:

- `projects` → documents with slug, gallery, stats, materials
- `services` → service documents
- `studio` → singleton (about, contact, values, team)
- `processSteps` / `storyChapters` → ordered arrays

Suggested next steps:

1. Create matching Sanity schemas
2. Replace imports with `sanityFetch` / GROQ
3. Keep component props typed against the same interfaces
4. Add image CDN (Sanity images) instead of Unsplash placeholders

## Brand notes

- Studio: **Dreyz Interior**
- Contact from existing site: Palm Tree Close Kyaliwajala · +256 779 449 481 · info@dreyzinterior.com
- Palette: charcoal, paper, stone, sand/bronze accents
- Type: Cormorant Garamond (display) + Outfit (body)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero 3D, statement, projects, scroll story, services, process, materials, CTA |
| `/projects` | Filterable portfolio |
| `/projects/[slug]` | Case study with gallery, materials, mini 3D |
| `/about` | Philosophy, values, team |
| `/services` | Full service narratives |
| `/process` | Timeline deep-dive |
| `/contact` | Inquiry form + map + 3D accent |
