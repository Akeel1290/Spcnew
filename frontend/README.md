# SPC Frontend (Next.js)

Next.js 15 (App Router) frontend for SPC ERP. API traffic is proxied via `/aapi` (Auth service) and `/tapi` (Transport service) to the Spring Boot backends.

## Prerequisites
- Node.js 18+ (Vercel default is fine)
- npm 9+

## Local setup
- Copy `.env.example` to `.env.local` and fill in values for your environment.
- Install deps: `npm install`
- Run dev server: `npm run dev` (http://localhost:3000)

## Environment variables
- `NEXT_PUBLIC_APP_URL` – Deployed frontend URL (used in CORS headers); set to your Vercel domain.
- `NEXT_PUBLIC_AUTH_BASE` – Auth service base URL (no trailing slash).
- `NEXT_PUBLIC_TRANSPORT_BASE` – Transport service base URL (no trailing slash).
- `NEXT_PUBLIC_API_BASE` / `NEXT_PUBLIC_API_BASE_URL` – Optional single API base used by some transport pages.
- `NEXT_PUBLIC_API_TIMEOUT` / `NEXT_PUBLIC_TRANSPORT_TIMEOUT` – Optional request timeout overrides (ms).

## Deploying to Vercel
- In Vercel, create a new project and select the `frontend` folder. Framework: Next.js; Build command: `npm run build`; Install command: `npm install`; Output directory: `.next` (defaults work).
- Add the environment variables above to Production and Preview (UI or `vercel env pull/push`).
- Deploy. `next.config.js` will allow cookies to pass through the `/aapi` and `/tapi` rewrites and will default the allowed origin to `NEXT_PUBLIC_APP_URL` or the Vercel domain.
- Ensure your backend allows the Vercel domain in its CORS settings and is reachable from the internet.

## Useful scripts
- `npm run dev` – Start local dev server.
- `npm run lint` – Lint the project.
- `npm run build` – Production build.
