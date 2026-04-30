# Post-Launch Website Hardening — Intern Track

Welcome! The NeuroTech @ UCSB website is live, but "live" is just step one. This doc is a guided research + implementation backlog for interns to take a real, production website from "it works" to "high-end and fully functional."

You won't need to do all of this. Pick what interests you, claim it (DM the lead before starting so we don't double-up), and treat each item as: **research → propose → implement → PR**.

---

## How to work each task

For every task below:

1. **Research** — read the linked docs, look at how 2–3 other production sites handle it. Take notes.
2. **Propose** — open a GitHub issue summarizing what you'd do, why, and what tradeoffs exist. Get a 👍 from the lead before coding.
3. **Implement** — branch off `main`, push commits, open a PR. Reference the issue.
4. **Verify** — test it locally, run Lighthouse, check it works on mobile + keyboard-only.
5. **Document** — update the README or add a short note to this file under "What we did and why."

If you get stuck for >1 hour: ask. If a task feels too big: split it. If something here is wrong or outdated: fix the doc itself.

Stack: **Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel.**

---

## Track 1 — Accessibility (WCAG 2.1 AA)

> **Quick context**: ADA (Americans with Disabilities Act) is US law. WCAG (Web Content Accessibility Guidelines) is the technical standard courts use to measure ADA compliance. Conforming to **WCAG 2.1 Level AA** = ADA-compliant. They are not separate workstreams.

### 1.1 Site-wide a11y audit
- Run **axe DevTools** (Chrome extension) on every page. Log every violation in a GitHub issue.
- Run **Lighthouse → Accessibility** in Chrome. Note score per page.
- Test the entire site **keyboard-only** (no mouse). Document anywhere focus is lost or trapped.
- Test with **VoiceOver** (Mac, ⌘+F5) on the homepage and apply page. Note anything that's confusing.

**Deliverable**: `docs/a11y-audit.md` with a list of violations, severity, and which page.

### 1.2 Fix the obvious violations (already known)
- `app/layout.tsx` wraps children in `<main>`, but several `app/**/page.tsx` files render their own `<main>`. **Two `<main>` elements per page is a WCAG fail.** Pick one approach.
- `app/components/neural-background.tsx` — decorative canvas. Add `aria-hidden="true"`.
- Add a "Skip to main content" link in `app/layout.tsx` (visible on focus only).
- Mobile menu toggle in `app/components/navbar.tsx` needs `aria-expanded` and `aria-controls`.
- Audit all body text using `rgba(12, 60, 110, 0.65)` and `0.72` — likely below 4.5:1 contrast on white. Use https://webaim.org/resources/contrastchecker/ to verify, bump to 0.8+ where needed.
- Add a global `:focus-visible` style in `globals.css` so keyboard users see where they are.

### 1.3 Reduced motion
- The neural background already respects `prefers-reduced-motion` ✓. Audit the rest of the site (CSS animations on blobs, hover transitions) and ensure nothing critical breaks if a user has reduced motion enabled.

### Resources
- https://www.w3.org/WAI/WCAG21/quickref/ (the actual checklist)
- https://web.dev/learn/accessibility/
- https://www.a11yproject.com/checklist/

---

## Track 2 — SEO & Discoverability

### 2.1 Per-page metadata
Every page in `app/**` should `export const metadata: Metadata` with its own title and description. Currently only `app/layout.tsx` has it, which means every page shares the same title.

- Title pattern: `"Page Name — NeuroTech @ UCSB"`
- Description: 1–2 sentences, ~150 chars, unique per page.
- Add OpenGraph and Twitter card fields.

### 2.2 `metadataBase` + social previews
- Add `metadataBase: new URL("https://neurotechucsb.com")` (or your prod URL) to root layout.
- Generate a default social card image. Use Next's `app/opengraph-image.tsx` (dynamic) or a static `public/og.png`.
- Test with https://www.opengraph.xyz/ and https://cards-dev.twitter.com/validator.

### 2.3 `sitemap.ts` and `robots.ts`
- Create `app/sitemap.ts` listing all routes (homepage, about, all projects, all publications, apply).
- Create `app/robots.ts` allowing crawl + pointing to the sitemap.
- Submit the sitemap to Google Search Console (ask the lead for access).

### 2.4 JSON-LD structured data
- Add Organization schema to root layout (`<script type="application/ld+json">`) — name, URL, logo, social profiles, parent org (UCSB).
- Helps Google show a knowledge panel for "NeuroTech UCSB" searches.

### 2.5 Heading hierarchy audit
- Every page should have exactly one `<h1>`. Headings should not skip levels (`h1 → h3` with no `h2` is a fail).
- Run https://wave.webaim.org/ on each page to check.

### Resources
- https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- https://schema.org/Organization
- https://developers.google.com/search/docs

---

## Track 3 — Performance & Core Web Vitals

### 3.1 Baseline Lighthouse scores
- Run Lighthouse on every page (mobile + desktop). Record LCP, INP, CLS, total page weight.
- Goal: **all metrics in "good" (green)** — LCP < 2.5s, INP < 200ms, CLS < 0.1.

### 3.2 Image optimization
- Audit all images in `public/`. Confirm they're served via `next/image`.
- For the homepage logo (`neurotech-ucsb.png`) — add `priority` prop if it's above the fold.
- Convert large PNGs to AVIF/WebP if needed.

### 3.3 Add Vercel Speed Insights & Web Analytics
- `pnpm add @vercel/speed-insights @vercel/analytics`
- Add `<SpeedInsights />` and `<Analytics />` in `app/layout.tsx`.
- Free on hobby projects, gives real-user metrics.

### 3.4 Lighthouse CI in GitHub Actions
- Add a workflow that runs Lighthouse on PRs against the preview deployment.
- Set perf budgets — fail the build if scores drop.
- See: https://github.com/GoogleChrome/lighthouse-ci

### Resources
- https://web.dev/vitals/
- https://nextjs.org/docs/app/building-your-application/optimizing

---

## Track 4 — Security Hardening

### 4.1 Security headers
Add the following headers in `next.config.ts` under `async headers()`:
- `Content-Security-Policy` (start with `default-src 'self'` and loosen as needed)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- HSTS is auto-applied by Vercel ✓

Test with https://securityheaders.com/ — aim for an A rating.

### 4.2 Dependency hygiene
- Enable **Dependabot** in the repo settings (free on GitHub).
- Configure it for weekly npm updates + security alerts.
- Set up GitHub secret scanning + push protection.

### 4.3 Form spam protection (when apply form goes live)
- Look into **Vercel BotID** (free tier) for the apply form.
- Add rate limiting on the submission endpoint.
- Validate all inputs server-side, not just client-side.

### Resources
- https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
- https://vercel.com/docs/security/botid

---

## Track 5 — CI/CD & Quality Gates

### 5.1 GitHub Actions workflow
Create `.github/workflows/ci.yml` that runs on every PR:
- `npm install`
- `npm run lint`
- `npx tsc --noEmit` (typecheck)
- `npm run build`

### 5.2 Branch protection
- Require the CI workflow to pass before merging to `main`.
- Require at least 1 review.
- Disable force-push to `main`.

### 5.3 Preview deployment workflow
- Vercel auto-creates preview URLs per PR ✓
- Add a GitHub Action that comments the preview URL + Lighthouse score on each PR.

### 5.4 E2E smoke tests
- Set up **Playwright** with 2–3 critical-path tests:
  - Homepage loads, hero is visible, "Apply" button navigates to `/apply`.
  - Navbar dropdowns work on hover and on mobile tap.
  - Apply form submits successfully (when implemented).

### Resources
- https://playwright.dev/
- https://docs.github.com/en/actions

---

## Track 6 — Apply Form Backend

The `/apply` page exists but probably needs a real backend. Research:

- **Option A**: Vercel Function (`app/api/apply/route.ts`) → posts to Discord/Slack webhook.
- **Option B**: Form service (Formspree, Tally, Google Forms embed) — least code, less control.
- **Option C**: Email via Resend (https://resend.com — free tier 100/day) → sends to officers.

Whichever path: include validation (Zod), rate limiting, and bot protection (Track 4.3). Confirm with officers what fields they need before building.

---

## Track 7 — Observability & Monitoring

### 7.1 Error tracking
- Set up **Sentry** (free tier) or use Vercel's built-in error monitoring.
- Capture client-side and server-side errors.
- Set up Slack/Discord alerts for new errors.

### 7.2 Uptime monitoring
- Set up **Better Stack** or **UptimeRobot** (free tiers) to ping the homepage every 5 min.
- Alert officers if the site is down for >2 min.

### Resources
- https://docs.sentry.io/platforms/javascript/guides/nextjs/
- https://betterstack.com/uptime

---

## Track 8 — Compliance & Polish

### 8.1 Privacy policy
If we collect any data (apply form, analytics cookies, newsletter signups), we need a privacy policy. Draft one — there are free templates at https://www.termsfeed.com/ or https://www.privacypolicies.com/. Have an officer review before publishing.

### 8.2 404 + error pages
- Add a styled `app/not-found.tsx` (custom 404).
- Add a styled `app/error.tsx` (catches runtime errors).
- Both should match the site's design language.

### 8.3 Loading states
- Add `app/loading.tsx` for slow routes.
- Audit any client-side fetches and add skeletons.

---

## Track 9 — Developer Experience

### 9.1 README upgrade
Current README is the default Next.js scaffold. Replace with:
- What this repo is.
- How to run locally (`npm install && npm run dev`).
- How to deploy (auto-deploys to Vercel on `main`).
- Project structure overview.
- Where to find this intern doc.

### 9.2 Onboarding
- Add a `CONTRIBUTING.md` explaining commit conventions, branch naming, PR template.
- Add a `.github/PULL_REQUEST_TEMPLATE.md`.

---

## What we did and why

> Append to this section as tasks ship. One bullet per merged PR.

- _(empty — first intern to ship something, add your bullet here)_

---

## Questions, blockers, ideas

If something here is unclear, file a GitHub issue with the `intern-questions` label. No question is too small.

Have fun. Build something you'd be proud to show in an interview.
