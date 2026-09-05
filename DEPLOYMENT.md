# Deploying TCoLDS to Vercel

This guide walks through deploying TCoLDS (Next.js 15 + Supabase) to Vercel, configuring
environment variables, and connecting a custom domain.

## 1. Prerequisites

- A [Vercel](https://vercel.com) account (the free Hobby tier is sufficient to get started).
- A [Supabase](https://supabase.com) project with your project URL and anon/public API key.
- This repository pushed to GitHub (Vercel deploys directly from a connected Git repo).

## 2. Import the project into Vercel

1. Log in to [vercel.com](https://vercel.com) and click **Add New… → Project**.
2. Select **Import Git Repository** and choose this repository.
3. Vercel auto-detects the Next.js framework. Leave the defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (from `package.json`)
   - **Output Directory:** `.next` (default, do not change)
   - **Install Command:** `npm install`
4. Do **not** click Deploy yet — first configure the environment variables below.

## 3. Configure Supabase environment variables

In the Vercel project's **Settings → Environment Variables** page, add the following
variables (see `.env.example` for the full list). At minimum, Supabase requires:

| Name | Value | Environment |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL (Supabase dashboard → Settings → API) | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public API key (same page) | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | The public URL of your deployment (e.g. `https://your-domain.com`) | Production |

Add any optional integrations you use (Stripe, Google Analytics, AdSense, AI provider
keys, etc.) the same way. Variables prefixed with `NEXT_PUBLIC_` are exposed to the
browser; keep any private/server-only keys (e.g. `OPENAI_API_KEY`) **without** that
prefix so they stay server-side only.

> ⚠️ Never commit real Supabase keys or other secrets to the repository. Use
> `.env.example` as a template and keep actual values only in Vercel's environment
> variable settings (or a local, git-ignored `.env`/`.env.local` file).

After adding the variables, click **Deploy**.

## 4. Verify the deployment

1. Once the build finishes, open the generated `*.vercel.app` preview URL.
2. Confirm the app loads and any Supabase-backed features (auth, data fetching) work
   as expected.
3. If the build fails, check **Deployments → [latest] → Build Logs** for errors —
   most commonly a missing/incorrect environment variable.

## 5. Configure your custom domain

1. In the Vercel project, go to **Settings → Domains**.
2. Enter your domain (e.g. `example.com` or `www.example.com`) and click **Add**.
3. Vercel will show the DNS records you need to create at your domain registrar:
   - **Apex domain (`example.com`):** add an `A` record pointing to `76.76.21.21`.
   - **Subdomain (`www.example.com`):** add a `CNAME` record pointing to
     `cname.vercel-dns.com`.
4. Add these records in your domain registrar's DNS settings (e.g. GoDaddy,
   Namecheap, Cloudflare).
5. Return to the Vercel Domains page — once DNS propagates (usually a few minutes,
   up to 48 hours), the domain shows a green "Valid Configuration" checkmark and
   Vercel automatically issues an SSL certificate.
6. (Optional) Set your preferred domain (apex or `www`) as the primary domain and
   configure the other to redirect to it under the same Domains page.

## 6. Ongoing deploys

Once connected, every push to your default branch (e.g. `main`) triggers a new
Production deployment, and every pull request gets its own Preview deployment
automatically — no extra configuration required.

## Troubleshooting

- **Build fails with a Supabase-related error:** double-check
  `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set for the
  correct environment (Production/Preview/Development) and redeploy.
- **Environment variable changes not taking effect:** environment variable updates
  require a new deployment — trigger one via **Deployments → Redeploy**.
- **Domain stuck on "Invalid Configuration":** verify the DNS records match exactly
  what Vercel provided, and allow time for DNS propagation.
