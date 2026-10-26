# Deployment

The site is hosted on **Vercel** and deploys automatically from GitHub.

```
git push (main)  ──►  GitHub  ──►  Vercel builds  ──►  live at your domain   (production)
open a PR        ──►  GitHub  ──►  Vercel builds  ──►  unique preview URL    (preview)
                         └──►  GitHub Actions CI: lint + build check (.github/workflows/ci.yml)
```

No deploy commands or tokens are needed — once the repo is connected, **every push to `main` updates the live
site**, usually within 1–2 minutes.

## One-time setup (about 5 minutes)

1. Go to [vercel.com](https://vercel.com) and **sign up / log in with GitHub**.
2. Click **Add New… → Project**.
3. Under *Import Git Repository*, find **Charvit123/Aurensys** and click **Import**.
   If it isn't listed, click *Adjust GitHub App Permissions* and give Vercel access to the repo.
4. On the configure screen leave the defaults:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command / Output: defaults
5. *(Optional)* Expand **Environment Variables** and add the EmailJS keys from `.env.example`
   (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`).
6. Click **Deploy**. You'll get a URL like `aurensys.vercel.app`.
7. In **Project → Settings → Git**, confirm **Production Branch** is `main`.

That's it — from now on, pushing to `main` deploys automatically.

## Custom domain

1. **Project → Settings → Domains → Add**, enter e.g. `aurensys.com` (and `www.aurensys.com`).
2. Add the DNS records Vercel shows at your domain registrar. HTTPS is issued automatically.
3. Update `site.url` in `src/data/site.js` to the final domain (used for SEO, sitemap and Open Graph tags),
   commit and push.

## Day-to-day workflow

| You want to… | Do this | Result |
| --- | --- | --- |
| Ship a change | Commit to `main` and `git push` | Production updates automatically |
| Review before going live | Push a branch and open a PR | Vercel posts a preview URL on the PR; merge to go live |
| Roll back | Vercel → **Deployments** → pick a previous one → **Promote to Production** | Instant rollback, no git changes |
| See why a deploy failed | Vercel → Deployments → the failed one → **Build Logs** | Also visible as a red ✗ on the GitHub commit |

## CI (GitHub Actions)

`.github/workflows/ci.yml` runs `npm ci`, `npm run lint` and `npm run build` on every push to `main` and every
pull request. It does **not** deploy — Vercel does that — but it shows a ✓ / ✗ on each commit so problems are
easy to spot. Because it uses `npm ci`, always commit `package-lock.json` together with `package.json` changes.

## Environment variables

Set in **Vercel → Project → Settings → Environment Variables**. Variables starting with `NEXT_PUBLIC_` are baked
into the build, so **redeploy** (Deployments → ⋯ → Redeploy) after changing them.
