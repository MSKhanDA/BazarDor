# বাজার দর | BazarDor

**বাজার দর** is a responsive price-tracking website for everyday essentials in Bangladesh. Explore current prices and market changes, compare prices across local markets, and sign in to view protected product details.

## Features

- Live product and category data from the BazarDor API, with two fallback API hosts.
- Responsive home page with price-change highlights, Bengali taka formatting, and a scrolling ticker.
- Persistent বাংলা/English language toggle for navigation, catalog, authentication, and profile screens.
- Category filtering with numeric low-to-high and high-to-low price sorting.
- Protected product-detail pages with market ranges and minimum/maximum/average prices.
- BetterAuth email/password authentication and optional Google/GitHub social sign-in.
- Profile page and authenticated user-name updates.
- Loading skeletons, toast feedback, friendly empty/error states, and unknown-route handling.

## Technology

Next.js App Router, React, TypeScript, Tailwind CSS, BetterAuth, Drizzle ORM, PostgreSQL, and `react-hot-toast`.

## Getting started

1. Install Node.js 20.9 or newer and PostgreSQL.
2. Install dependencies: `npm install`.
3. Copy `.env.example` to `.env.local` and set `DATABASE_URL`, `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL`. Generate a secret with `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`.
4. Generate and apply the BetterAuth database schema:

   ```bash
   npm run db:generate
   npm run db:migrate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit [http://localhost:3000](http://localhost:3000).

Google and GitHub sign-in are enabled when the corresponding client ID and secret are set. For local Google sign-in, add `http://localhost:3000/api/auth/callback/google` to the Google OAuth client's **Authorized redirect URIs**, and add your Google account as a test user if the consent screen is in testing mode. For local GitHub sign-in, set the GitHub OAuth App's callback URL to `http://localhost:3000/api/auth/callback/github`. For deployment, register `https://YOUR_HOST/api/auth/callback/google` and `https://YOUR_HOST/api/auth/callback/github` with the providers, and set `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `BETTER_AUTH_URL`, `BETTER_AUTH_SECRET`, and `DATABASE_URL` in Vercel. Social providers are optional; email/password sign-in does not require OAuth credentials.

## Routes

| Route | Description |
| --- | --- |
| `/` | Market overview and all products |
| `/category/[slug]` | Category listing with sort control |
| `/product/[slug]` | Protected product and market-price detail |
| `/signin`, `/signup` | Authentication |
| `/profile`, `/profile/update` | Profile and name update |

## Data source

The app reads products and categories from `https://openapi.programming-hero.com/api/bazardor`. Set `BAZARDOR_API_URL` to override the primary API base. Fallback hosts are `https://api.api-store.workers.dev/api/bazardor` and `https://api.abcz.workers.dev/api/bazardor`.

## Deployment

Deploy as a Next.js application (for example, on Vercel), configure the environment variables from `.env.example`, and run the Drizzle migration against the production PostgreSQL database before enabling sign-in.
