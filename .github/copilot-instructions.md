# Copilot instructions for ScaleAble website

## Project shape (read first)
- Primary app is a Vite + React SPA in `src/`, mounted from `src/main.tsx` and routed in `src/App.tsx`.
- Deployment target is Vercel with:
  - SPA rewrites and domain redirects in `vercel.json`
  - a serverless email endpoint at `api/request-access.js`
- `app/` contains Next-style pages, but current runtime/build is Vite (`npm run dev`, `npm run build`). Treat `src/` as the source of truth unless explicitly asked to update Next pages too.

## Key architecture and flows
- Landing page is section-based (`Hero`, `Problem`, `Solution`, `Features`, `HowItWorks`, `Pricing`, etc.) composed in `src/App.tsx`.
- Header/footer links rely on in-page anchors (example: `/#pricing`, `/#how-it-works`), so keep section `id` values stable.
- Request-access flow:
  - UI form: `src/components/RequestAccessForm.tsx`
  - page route: `src/components/RequestAccessPage.tsx`
  - modal wrapper: `src/components/RequestAccessModal.tsx`
  - API target: `POST /api/request-access` handled by `api/request-access.js`
- Booking flow uses `/go/book-*` routes -> `BookingRedirect` -> analytics event (`window.gtag`) -> external Google Calendar URL.
- SEO is client-managed per route via `src/components/SeoManager.tsx` (title, description, canonical, OG tags).

## Conventions specific to this repo
- Use React Router patterns already in use (`Routes`, `Route`, `useNavigate`) for SPA pages.
- Preserve mobile behavior where modals switch to full page (see `RequestAccessModal`: small screens navigate to `/request-access`).
- Standalone/legal/help pages often call `window.scrollTo({ top: 0, left: 0, behavior: "auto" })` in `useEffect`.
- UI primitives are shadcn-style components in `src/components/ui/`; combine classes with `cn()` from `src/components/ui/utils.ts`.
- Keep existing import style for pinned aliases (example: `@radix-ui/react-slot@1.1.2`, `class-variance-authority@0.7.1`) used by generated UI files.
- Figma asset aliases are mapped in `vite.config.ts` (`figma:asset/...`), so preserve those imports when editing components.

## Styling and assets
- `src/index.css` is a prebuilt Tailwind v4-style stylesheet already checked in.
- Prefer reusing existing utility-class patterns/components instead of introducing a new styling pipeline.
- Do not edit `build/` directly; it is output (`vite build` -> `build/`).

## Dev workflows
- Install: `npm i`
- Local dev: `npm run dev` (Vite server, port 3000, auto-open configured in `vite.config.ts`)
- Production build: `npm run build`
- There are currently no test/lint scripts in `package.json`; validate by building and spot-checking routes/forms.

## Environment/deployment notes
- `api/request-access.js` requires `RESEND_API_KEY`.
- Optional recipient override: `REQUEST_ACCESS_TO_EMAIL` (falls back to `support@scaleableapp.com`).
- Rewrites in `vercel.json` send unknown routes to `/` for client-side routing; keep React Router paths aligned with SEO metadata entries.
