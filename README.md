# ISS Health — Institute For Spine Surgery

Next.js 15 rebuild of [iss.health](https://iss.health) off WordPress/Divi onto Vercel. Editorial magazine chrome aligned with sibling [cognifica-health](../cognifica-health/) project. ISS brand colors, copy, and images preserved exactly.

## Stack

- Next.js 15 (App Router, React 19)
- TypeScript (strict)
- Tailwind CSS 3.4
- Work Sans + IBM Plex Sans Condensed (via `next/font/google`)
- Resend (transactional email)
- Zod (form validation)
- lucide-react (icons)

## Getting started

```bash
npm install
cp .env.example .env.local
# Fill in RESEND_API_KEY and analytics IDs
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

All 30 routes are implemented.

- `/` homepage
- `/providers/`
- `/locations/`
- `/appointments/`
- `/innovations/`
- `/in-the-news/`
- `/cervical-center/` + `surgical-options`, `non-surgical-options`, and 5 condition subpages (`[condition]`)
- `/the-lumbar-center/` + `surgical-options`, `non-surgical-options`, and 9 condition subpages at `/common-diagnosis/[condition]/`
- `/cervical-spine/`, `/lumbar-spine/`, `/meet-dr-abrahams/` (Google Ads landing pages)

## Brand tokens

| Token | Hex | Use |
|-------|-----|-----|
| `iss-teal` | `#05668D` | Primary CTA, stats, links |
| `iss-coral` | `#F72E57` | Top utility bar, accents |
| `iss-ink` | `#111111` | Headings |
| `iss-body` | `#333333` | Body copy |
| `iss-alt` | `#F4F4F4` | Alternating section background |

Font weights are restricted to 300, 400, and 700 per workspace rules.

## Assets

All 23 images are in `public/images/`. To refresh from source, run:

```bash
./scripts/download-images.sh
```

Next.js Image pipeline converts to WebP on demand.

## HIPAA considerations

The `/api/contact` endpoint receives PHI (email, phone, diagnosis). Lock down before production:

1. Sign a BAA with Resend (or swap for AWS SES with BAA).
2. Do not enable Vercel Analytics. GA4 with IP anonymization only.
3. Do not enable Google Ads remarketing lists. Conversion tracking only, no PII in events.
4. Logs are structured and contain no form payloads. Only `{ ts, endpoint, ok }`.
5. CSP, X-Frame-Options DENY, nosniff, HSTS are set in `next.config.ts`.

The migration plan in [../iss.health/VERCEL_MIGRATION.md](../iss.health/VERCEL_MIGRATION.md) specifies Vercel as the host. Workspace rules prefer AWS/GCP for PHI. Honor the stated stack but flag the tradeoff with the client before go live.

## Commit convention

Branch: `ISS_DEV` for work, `ISS_MAIN` for production. Commits follow `NNN_type_description`:

- `001_chore_iss-scaffold`
- `002_feat_iss-homepage`
- `003_feat_iss-cervical-center`
- `004_feat_iss-lumbar-center`
- `005_feat_iss-ads-landing-pages`

## DNS cutover

See [../iss.health/VERCEL_MIGRATION.md](../iss.health/VERCEL_MIGRATION.md) sections "DNS Cutover" and "Post-Launch Checklist".

## Pre deploy checklist

- [ ] Fill `RESEND_API_KEY`, `NEXT_PUBLIC_GA4_MEASUREMENT_ID`, `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`, `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` in Vercel env.
- [ ] BAA signed with Resend.
- [ ] `npm run build` passes.
- [ ] Confirm sitemap at `/sitemap.xml` and robots at `/robots.txt`.
- [ ] Mobile PageSpeed ≥ 90.
- [ ] All images loaded and alt text present.
