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

The `/api/appointment` endpoint receives sensitive contact details (email, phone, diagnosis, concern) and emails them to the practice inbox using the Paubox Email API. Keep these safeguards in place:

1. The send runs server side only, on the Node.js runtime, via the `paubox-node` SDK. Credentials come from server only env vars (`PAUBOX_API_KEY`, `PAUBOX_API_USERNAME`).
2. Secure transport is enforced. `allowNonTLS` is never set, so Paubox encrypts the message in transit or routes it to its secure portal. There is no non secure fallback.
3. No submissions are stored in a database and there is no dashboard.
4. Do not enable Vercel Analytics. GA4 with IP anonymization only.
5. Do not enable Google Ads remarketing lists. Conversion tracking only, no PII in events. No form field values reach analytics, ad pixels, or any URL.
6. Logs are structured and contain no form payloads. Only `{ ts, endpoint, ok }` plus a non PHI send result.
7. CSP, X-Frame-Options DENY, nosniff, HSTS are set in `next.config.ts`.

### Business Associate Agreements

The appointment submission contains PHI that passes briefly through the Vercel function before Paubox encrypts and delivers it. Two BAAs cover this flow and both must be signed before any real PHI reaches production:

1. Vercel. As of the September 2025 plan change, Vercel signs a BAA. On the Pro plan it is a self serve click through HIPAA add on ($350/month) under Settings then Billing. On Enterprise it is included in the negotiated agreement, along with Secure Compute for isolated infrastructure. This covers the transient handling of PHI inside the function.
2. Paubox. Paubox signs a BAA as the email vendor that encrypts and delivers the message. Vercel's BAA does not extend to Paubox, so this is a separate agreement.

Sign both before go live. Building first and signing later means every pre BAA submission is a violation. Do not rely on the conduit exception; a function that parses the request body is more than a pure conduit.

The migration plan in [../iss.health/VERCEL_MIGRATION.md](../iss.health/VERCEL_MIGRATION.md) specifies Vercel as the host. Workspace rules prefer AWS/GCP for PHI; the Vercel plus Paubox BAA path above is the accepted alternative for this stack. An alternative considered and not chosen was Paubox Forms (a hosted form that keeps PHI off Vercel entirely) which was declined because it retains responses in the Paubox dashboard rather than being email only.

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
- [ ] `npm run build` passes.
- [ ] Confirm sitemap at `/sitemap.xml` and robots at `/robots.txt`.
- [ ] Mobile PageSpeed ≥ 90.
- [ ] All images loaded and alt text present.
