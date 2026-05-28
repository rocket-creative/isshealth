import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { cervicalCenterFaqs } from '@/content/clinical-faqs'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, faqSchema } from '@/lib/schema'
import { Accordion } from '@/components/Accordion'
import { BottomCta } from '@/components/ConditionLayout'
import { cervicalConditions } from '@/content/conditions'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.cervicalCenter.title,
  description: PAGE_SEO.cervicalCenter.description,
  path: '/cervical-center/',
})

export default function CervicalCenterPage() {
  return (
    <>
      <JsonLd
        data={[generateBreadcrumbSchema('/cervical-center/'), faqSchema(cervicalCenterFaqs)]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6">
          <Link href="/" className="hover:text-iss-teal">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-iss-ink font-bold">Cervical Center</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">About The Cervical Center</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">
          The Cervical Center.
        </h1>
        <p className="mt-5 max-w-prose text-iss-body text-base md:text-lg font-light leading-relaxed">
          The Cervical Spine Center is focused on the care of patients with cervical spine disorders such as pinched nerves, neck
          pain, instability, cancer, trauma, and any other related abnormality that requires treatment. The Cervical Spine Center
          brings a multidisciplinary team of neurosurgeons, orthopedic spine surgeons, and physiatrists to evaluate and treat your
          condition.
        </p>
      </header>

      {/* Conditions grid */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Conditions We Treat</p>
            <h2 className="mt-4 font-heading text-h2">Diagnoses in the cervical spine.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cervical-center/non-surgical-options/"
              className="btn-arrow inline-flex items-center gap-2 border border-iss-teal text-iss-teal hover:bg-iss-teal hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Non Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
            <Link
              href="/cervical-center/surgical-options/"
              className="btn-arrow inline-flex items-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.values(cervicalConditions).map((c) => (
            <Link
              key={c.slug}
              href={`/cervical-center/${c.slug}/`}
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

      {/* FAQs */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patient Questions</p>
            <h2 className="mt-4 font-heading text-h2">Common questions about the cervical spine.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={cervicalCenterFaqs} />
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  )
}
