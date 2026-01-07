# Copilot / AI Agent Guidance for this repo

Purpose
- This is a React + TypeScript single-page portfolio built with Vite and Tailwind. Keep changes minimal and predictable: the app composes small presentational components under `src/components` and `src/components/sections`.

Big-picture architecture
- Entry: `src/main.tsx` → mounts `src/App.tsx`.
- `App.tsx` composes the site: fixed `Navbar`, a `BackgroundRipple` overlay, and multiple section components (Hero, About, Projects, Contact, etc.).
- Sections are implemented as independent components in `src/components/sections`. Each section is rendered inside a `<section id="...">` block for anchor scrolling.
- Styling: Tailwind via `index.css` and utility `cn` in `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`). Use `cn(...)` to merge conditional Tailwind classes.

Key developer workflows / commands
- Install (repo uses pnpm lockfile but npm/yarn also work): `pnpm install` (preferred).
- Dev server: `pnpm dev` → runs `vite` (see `package.json` scripts). Use this for HMR.
- Build: `pnpm build` → runs `tsc -b && vite build` (note: build runs TypeScript project references). Always run the build script to validate type-checked output.
- Preview build: `pnpm preview`.
- Lint: `pnpm lint` → `eslint .` using project ESLint config.

Project-specific conventions
- File locations:
  - Visual/sections: `src/components/sections/*.tsx` — add new site sections here.
  - Shared UI helpers: `src/components/ui/*`.
  - Small reusable components: `src/components/*` (e.g., `Navbar.tsx`, `BackgroundRipple.tsx`).
- When adding a new section:
  1. Create `src/components/sections/MySection.tsx` exporting a default React component.
  2. Import and include it in `src/App.tsx` inside a `<section id="my-section">` wrapper.
  3. Add navigation anchor in `src/components/Navbar.tsx` if needed.
- Tailwind + utility classes: prefer `cn(...)` for conditional class composition instead of manual string concatenation.
- Animation and scroll libraries present: `framer-motion`, `gsap`, `lenis`, `react-intersection-observer`. Check existing components for patterns (e.g., entrance animations inside section components).

Integration points & external dependencies
- Vite + `@vitejs/plugin-react` — see `vite.config.ts`.
- TypeScript project refs: see `tsconfig.json` references to `tsconfig.app.json` and `tsconfig.node.json`. Builds rely on `tsc -b`.
- Static assets: put in `public/` for direct URL access or `src/assets/` for import bundling.

What to modify cautiously
- `App.tsx` controls page order and the BackgroundRipple overlay sizing — moving sections or changing stacking (`z-` classes) affects visuals and click capture.
- `Navbar.tsx` is fixed and interacts with anchor ids in `App.tsx` — keep ids and nav links in sync.
- `tsconfig.*` and `vite.config.ts` changes impact build and path aliases (`@/*` → `src/*`).

Examples (quick)
- Add a small section:
  - Create `src/components/sections/Testimonial.tsx` with `export default function Testimonial(){ return <div>…</div> }`.
  - Import in `src/App.tsx` and add `<section id="testimonials"><Testimonial/></section>`.

Search pointers for the agent
- Look at `src/components/sections/*` for component patterns and animation usage.
- See `src/lib/utils.ts` for class merging conventions.
- Check `package.json` scripts for the canonical dev/build/lint commands.

Notes / missing info to ask the user about
- Preferred package manager (pnpm vs npm) if you want CI scripts to assume one.
- Any additional environment variables, deployment targets, or preview URLs to include.

If anything is unclear or you want this tuned for CI/PR automation, tell me which CI provider and I'll extend this file.
