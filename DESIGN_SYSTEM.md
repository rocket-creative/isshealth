# ISS Health — Design System

Institute For Spine Surgery (ISS Health). One brand, two programs that share tokens but carry distinct page personalities:

1. **Main spine practice** — board certified cervical and lumbar spine surgery. Teal led, editorial, photography forward.
2. **Concussion and brain injury program** — the newer clinician led program, paired with the Kavera assessment platform. Same palette, more structured and card driven, with a darker, clinical tone.

Stack: Next.js 15 (App Router, React 19), TypeScript strict, Tailwind CSS 3.4, lucide-react icons, Resend, Zod. Hosted on Vercel.

---

## Brand foundations

### Color tokens (Tailwind)

| Token | Hex | Role |
|-------|-----|------|
| `iss-teal` | `#05668D` | Primary. CTAs, stats, links, eyebrows, card accents |
| `iss-teal-dark` | `#034862` | Teal hover and gradient origin |
| `iss-coral` | `#F72E57` | Accent. Eyebrows on dark, concussion nav CTA, current state |
| `iss-coral-dark` | `#C81D44` | Top utility bar, coral hover |
| `iss-ink` | `#111111` | Headings, dark full bleed sections |
| `iss-body` | `#333333` | Body copy |
| `iss-alt` | `#F4F4F4` | Alternating section background |
| stone-200 | `#e7e5e4` | Page canvas behind the white content panel |

Extra hero blue `#0B8FB8` is used only as the lightest stop in hero gradients. One color dominates per section; coral is a scalpel, never a paintbrush.

### Typography

Loaded via `next/font/google`. Weights restricted to 300, 400, 500, 700 (Montserrat also 800).

| Role | Family | Notes |
|------|--------|-------|
| H1 hero | Montserrat 700 | Gotham substitute, uppercase |
| H2 / H3 | IBM Plex Sans Condensed 500/700 | Headings, often uppercase with tight tracking |
| Body | IBM Plex Sans 300/400 | 300 for lists, 400 for paragraphs |
| Nav / UI | Open Sans | Uppercase, letter spaced |

Fluid type scale via `clamp()` tokens: `display`, `stat`, `h1`, `h2`, `h3`, `body`, `caption`. Eyebrows are 11 to 12px uppercase, tracking `0.2em` to `0.22em`, bold.

### Layout

Magazine presentation. A `max-w-[1280px]` white panel sits centered (`mx-auto`) over the stone-200 canvas with a shadow, so content has clear edges. Section rhythm alternates background: white, `iss-alt`, white, then a dark `iss-ink` or teal moment, then footer. Section padding is `px-6 lg:px-12` with `py-12` to `py-20`. Common content widths: `max-w-3xl` for intros, 12 column grids for splits (5/7 and 4/8 are typical).

### Responsive (mobile first)

Breakpoints: `xs 375`, `sm 393`, `md 810`, `lg 1024`, `xl 1440`, `2xl 1920`. Always scale up, never down. Desktop nav appears at `xl`; below that a full screen mobile menu is used. Tap targets are at least 44px.

---

## Components

### Shared

- **Buttons.** Square (no rounded corners), uppercase, letter spaced `0.18em` to `0.2em`, bold, small text. Primary is solid `iss-teal` to `iss-teal-dark` on hover; secondary is a teal outline that fills on hover. Every button uses the `.btn-arrow` pattern with an arrow span that shifts right 6px on hover.
- **Links.** `.link-underline` grows a 2px underline from left to right on hover. Inline prose links are teal with a faint bottom border.
- **Cards.** No shadow, minimal or no border. Accent comes from a colored top or left rule (`border-t-4` / `border-l-4 border-iss-teal`). Image cards let the photo be the card and scale it 1.04 on hover.
- **Scroll reveals.** `AnimateOnScroll` (and `.animate-on-scroll*` classes) fade and translate content in on enter, with stagger delays. All of it collapses to visible and static under `prefers-reduced-motion`.
- **Nav.** Sticky white header. Coral utility bar on top (email, LinkedIn, Instagram). Desktop is a two row layout: logo plus Appointments CTA, then right aligned dropdowns. The Concussion Program is a coral CTA dropdown to set it apart from the teal spine links.
- **Footer, BackToTop, MobileCallBar** persist across the app shell.

### Main spine practice

- **HeroSection.** Full bleed photo with a left to right teal gradient overlay (`#034862/90` to transparent), coral eyebrow, large uppercase Montserrat headline, teal CTA.
- **StatsBar.** Animated count up numbers (IntersectionObserver, eased, reduced motion aware) on a top rule. Five proof points.
- **ServicesGrid, TestimonialsSection, LeadCaptureSection, Accordion FAQ, BottomCta.** Editorial two column splits with images at varied scale.
- **DraftCallout.** Internal editorial review marker used during the content build.

### Concussion and brain injury program

Lives under `/concussion-program/` with its own component set in `src/components/concussion/`.

- **Gradient hero.** No photo. Diagonal teal gradient `from-iss-teal-dark via-iss-teal to-[#0B8FB8]`, coral eyebrow, white uppercase headline.
- **CtaBlock.** Dark `iss-ink` band with a coral primary button and an outlined click to call.
- **Accent cards.** Kavera points use white cards with a `border-t-4 border-iss-teal`; audience cards use `iss-alt` with `border-l-4 border-iss-teal`.
- **What to expect.** Dark `iss-ink` section with a `gap-px` grid that renders hairline white dividers between four steps.
- **ClusterNav.** Hub and spoke sub navigation linking every page in the cluster. Cards fill teal on hover; the current page card is marked with a coral left rule and `aria-current`.
- **Faq.** Server rendered, shares one source array with FAQPage JSON-LD.
- **NapBlock.** Name, address, phone for both locations (Concussion Center in Cortlandt Manor, Main Office in West Harrison), kept byte identical with the clinic schema.
- **Disclaimer.** Medical disclaimer plus Kavera clarification (clinical decision support, not treatment) above the footer on every concussion page.
- **Breadcrumbs** on every concussion page; **Google Ads** with Consent Mode v2 that honors Global Privacy Control.

---

## Content voice

- Sentence case headings, active voice, Oxford comma.
- No hyphens in copy. Rewrite to avoid. Phone format `(914) 948 3008`.
- No AI giveaway phrases.
- Clinical and reassuring. Concussion copy leans on structure, documentation, and steady follow up; spine copy leans on expertise, outcomes, and conservative care first.

## Accessibility

WCAG 2.1 AA. Visible teal focus rings, skip to content link, semantic headings and landmarks, `aria-current` on active nav, alt text on every image, 44px minimum tap targets, reduced motion honored.

## SEO

Per page metadata (titles 50 to 60 chars, descriptions 150 to 160). JSON-LD throughout: Organization and WebSite on the shell, Physician, MedicalWebPage, and a concussion clinic schema on the program, FAQPage from shared FAQ arrays, BreadcrumbList on non homepage routes. Canonical URLs are absolute against `https://iss.health`.

## Key references in the repo

- Tokens: `tailwind.config.ts`, `src/app/globals.css`
- App shell: `src/app/layout.tsx`, `src/components/Nav.tsx`, `src/components/Footer.tsx`
- Spine patterns: `src/app/page.tsx`, `src/components/HeroSection.tsx`, `src/components/StatsBar.tsx`
- Concussion program: `src/app/concussion-program/`, `src/components/concussion/`
- Copy and SEO: `src/content/page-seo.ts`, `src/lib/schema.tsx`
