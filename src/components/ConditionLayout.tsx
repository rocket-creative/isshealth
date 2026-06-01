import Link from 'next/link'
import {
  JsonLd,
  medicalConditionSchema,
  medicalServiceSchema,
  faqSchema,
} from '@/lib/schema'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import type { ConditionSchemaDetails } from '@/content/condition-schema'
import { toCanonicalUrl } from '@/lib/metadata'
import { MedicalReviewBlock } from '@/components/MedicalReviewBlock'
import { ClinicalReferences } from '@/components/ClinicalReferences'
import { TrustSignals } from '@/components/TrustSignals'
import { FaqSection, type FaqItem } from '@/components/FaqSection'

export type Breadcrumb = { name: string; url: string }

export type RelatedLink = { label: string; href: string }

type SchemaKind = 'condition' | 'service'

interface ConditionLayoutProps {
  eyebrow: string
  title: string
  intro: string
  breadcrumbs: Breadcrumb[]
  related?: RelatedLink[]
  canonicalPath: string
  schemaKind?: SchemaKind
  schemaDetails?: ConditionSchemaDetails
  faqs?: FaqItem[]
  faqHeading?: string
  faqIntro?: string
  showClinicalBlocks?: boolean
  children: React.ReactNode
}

export function ConditionLayout({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  related = [],
  canonicalPath,
  schemaKind = 'condition',
  schemaDetails,
  faqs,
  faqHeading,
  faqIntro,
  showClinicalBlocks = true,
  children,
}: ConditionLayoutProps) {
  const canonical = toCanonicalUrl(canonicalPath)
  const segmentLabels = Object.fromEntries(
    breadcrumbs.slice(1).map((b) => {
      const segment = b.url.replace(/^\/+|\/+$/g, '').split('/').pop() ?? ''
      return [segment, b.name]
    }),
  )

  const pageSchema =
    schemaKind === 'service'
      ? medicalServiceSchema({ name: title, description: intro, url: canonical })
      : medicalConditionSchema({
          name: title,
          description: intro,
          url: canonical,
          ...schemaDetails,
        })

  const schemaBlocks: object[] = [generateBreadcrumbSchema(canonicalPath, segmentLabels), pageSchema]
  if (faqs?.length) {
    schemaBlocks.push(faqSchema(faqs))
  }

  return (
    <article>
      <JsonLd data={schemaBlocks} />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14 scroll-mt-28">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body mb-6 flex flex-wrap gap-2">
          {breadcrumbs.map((b, i) => (
            <span key={b.url} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === breadcrumbs.length - 1 ? (
                <span className="text-iss-ink font-bold">{b.name}</span>
              ) : (
                <Link href={b.url} className="link-underline hover:text-iss-teal">
                  {b.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">{eyebrow}</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">{title}</h1>
        <p className="mt-5 max-w-prose text-iss-body text-base md:text-lg font-light leading-relaxed">{intro}</p>
      </header>

      <div className="px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="prose-iss lg:col-span-8 max-w-prose">
          {children}
          {showClinicalBlocks ? (
            <>
              <MedicalReviewBlock />
              <ClinicalReferences />
            </>
          ) : null}
        </div>

        {related.length > 0 ? (
          <aside className="lg:col-span-4 lg:sticky lg:top-36 h-fit scroll-mt-28">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Related</p>
            <ul className="mt-4 flex flex-col divide-y divide-stone-200 border-t border-b border-stone-200 list-none">
              {related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block py-4 text-iss-ink hover:text-iss-teal font-body text-sm uppercase tracking-wide font-bold transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
                  >
                    {r.label} →
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-iss-teal text-white p-6">
              <p className="font-heading text-xl font-bold uppercase tracking-tight">Schedule a consultation</p>
              <p className="mt-2 font-light text-sm leading-relaxed">
                Our team evaluates your condition and recommends the right path, surgical or non surgical.
              </p>
              <TrustSignals className="mt-4 text-white/80" />
              <Link
                href="/appointments/"
                className="btn-arrow mt-4 inline-flex items-center gap-2 bg-white text-iss-teal px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-iss-alt transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
              >
                <span>Request Appointment</span>
                <span className="arrow">→</span>
              </Link>
              <a
                href="tel:+19149483008"
                className="mt-3 block text-center text-sm font-bold text-white link-underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Or call (914) 948 3008
              </a>
              <p className="mt-2 text-center text-xs text-white/70 font-light">Typical callback within one business day</p>
            </div>
          </aside>
        ) : null}
      </div>

      {faqs?.length ? (
        <FaqSection
          id="condition-faq"
          headingId="condition-faq-heading"
          title={faqHeading ?? `What should I know about ${title.toLowerCase()}?`}
          subtitle={faqIntro}
          items={faqs}
        />
      ) : null}

      <ContactUsToday />

      <BottomCta />
    </article>
  )
}

export function ContactUsToday() {
  return (
    <section
      className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16 border-t border-stone-200"
      aria-labelledby="contact-us-today-heading"
    >
      <div className="max-w-4xl">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Get in touch</p>
        <h2 id="contact-us-today-heading" className="mt-3 font-heading text-h2">
          Contact us today.
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-body/70">Office</p>
            <address className="mt-2 not-italic text-iss-body font-light leading-relaxed">
              New York Brain &amp; Spine Surgery, P.C.
              <br />
              244 Westchester Avenue, Suite 209
              <br />
              West Harrison, NY 10604
            </address>
          </div>
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-body/70">Phone</p>
            <a href="tel:+19149483008" className="mt-2 inline-block text-iss-teal font-bold link-underline">
              (914) 948 3008
            </a>
          </div>
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-body/70">Email</p>
            <a href="mailto:info@nybrainspine.com" className="mt-2 inline-block text-iss-teal font-bold link-underline">
              info@nybrainspine.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BottomCta() {
  return (
    <section
      className="bg-iss-ink text-white px-6 lg:px-12 py-14 md:py-20 scroll-mt-28"
      aria-labelledby="bottom-cta-heading"
    >
      <div className="max-w-3xl">
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Start your recovery</p>
        <h2 id="bottom-cta-heading" className="mt-4 font-heading text-h2 text-white">
          What should I do next for spine care?
        </h2>
        <p className="mt-5 text-white/90 text-lg font-light leading-relaxed">
          Take the first step toward a pain free life. Schedule a consultation to explore advanced spine surgery options at the
          Institute For Spine Surgery. Our expert team guides you through a personalized plan for optimal recovery.
        </p>
        <TrustSignals className="mt-6 text-white/75" />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/appointments/"
            className="btn-arrow inline-flex items-center gap-3 bg-iss-coral-dark hover:bg-iss-coral text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <span>Schedule Your Consultation</span>
            <span className="arrow">→</span>
          </Link>
          <a
            href="tel:+19149483008"
            className="inline-flex items-center gap-3 border border-white/40 hover:bg-white/10 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            Call (914) 948 3008
          </a>
        </div>
      </div>
    </section>
  )
}
