import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, SITE_URL, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { lumbarCenterFaqs } from '@/content/clinical-faqs'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, faqSchema, medicalServiceSchema } from '@/lib/schema'
import { FaqSection } from '@/components/FaqSection'
import { BottomCta } from '@/components/ConditionLayout'
import { lumbarConditions } from '@/content/conditions'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.lumbarCenter.title,
  description: PAGE_SEO.lumbarCenter.description,
  path: '/the-lumbar-center/',
})

export default function LumbarCenterPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema('/the-lumbar-center/'),
          medicalServiceSchema({
            name: 'Lumbar Spine Center',
            description: PAGE_SEO.lumbarCenter.description,
            url: toCanonicalUrl('/the-lumbar-center/'),
          }),
          faqSchema(lumbarCenterFaqs),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6">
          <Link href="/" className="hover:text-iss-teal">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-iss-ink font-bold">The Lumbar Center</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">About The Lumbar Center</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">
          The Lumbar Center.
        </h1>
        <p className="mt-5 max-w-prose text-iss-body text-base md:text-lg font-light leading-relaxed">
          The Lumbar Center provides comprehensive care for patients with lumbar spine disorders and conditions affecting the
          lower back. Our team evaluates every patient with a thorough history, imaging, and a focused plan that starts with non
          surgical care and escalates only when needed.
        </p>
      </header>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Common Diagnoses</p>
            <h2 className="mt-4 font-heading text-h2">Conditions treated at the Lumbar Center.</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Link
              href="/the-lumbar-center/non-surgical-options/"
              className="btn-arrow inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-iss-teal text-iss-teal hover:bg-iss-teal hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Non Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
            <Link
              href="/the-lumbar-center/surgical-options/"
              className="btn-arrow inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.values(lumbarConditions).map((c) => (
            <Link
              key={c.slug}
              href={`/common-diagnosis/${c.slug}/`}
              className="group block border border-stone-200 hover:border-iss-teal p-6 transition-colors"
            >
              <p className="font-heading text-xl font-bold text-iss-ink uppercase tracking-tight group-hover:text-iss-teal transition-colors">
                {c.title}
              </p>
              <p className="mt-3 text-iss-body font-light text-sm leading-relaxed line-clamp-3">{c.intro}</p>
              <p className="mt-4 text-iss-teal text-xs font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2">
                Learn more <span>→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <FaqSection
        id="lumbar-center-faq"
        headingId="lumbar-center-faq-heading"
        title="What should I know about lumbar spine care?"
        items={lumbarCenterFaqs}
        className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16"
      />

      <BottomCta />
    </>
  )
}
