import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { PAGE_SEO } from '@/content/page-seo'
import { BottomCta } from '@/components/ConditionLayout'
import { ContentPlaceholder } from '@/components/ContentPlaceholder'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.insurance.title,
  description: PAGE_SEO.insurance.description,
  path: '/insurance/',
})

export default function InsurancePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: toCanonicalUrl('/') },
            { name: 'Insurance and Billing', url: toCanonicalUrl('/insurance/') },
          ]),
          webPageSchema({
            name: PAGE_SEO.insurance.title,
            description: PAGE_SEO.insurance.description,
            url: toCanonicalUrl('/insurance/'),
          }),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6">
          <Link href="/" className="hover:text-iss-teal">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-iss-ink font-bold">Insurance and Billing</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Patient resources</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">Insurance and Billing</h1>
        <p className="mt-5 max-w-prose text-iss-body text-lg font-light leading-relaxed">
          Plan details and billing information for patients of the Institute For Spine Surgery.
        </p>
      </header>

      <div className="bg-white px-6 lg:px-12 py-12 md:py-16 space-y-14 max-w-3xl">
        <section aria-labelledby="accepted-plans-heading">
          <h2 id="accepted-plans-heading" className="font-heading text-h2">
            Accepted Insurance Plans
          </h2>
          <div className="mt-6">
            <ContentPlaceholder section="list of accepted insurance plan names" />
          </div>
        </section>

        <section aria-labelledby="medicare-medicaid-heading">
          <h2 id="medicare-medicaid-heading" className="font-heading text-h2">
            Medicare and Medicaid
          </h2>
          <div className="mt-6">
            <ContentPlaceholder section="Medicare and Medicaid acceptance details" />
          </div>
        </section>

        <section aria-labelledby="what-to-bring-heading">
          <h2 id="what-to-bring-heading" className="font-heading text-h2">
            What to Bring to Your First Appointment
          </h2>
          <div className="mt-6">
            <ContentPlaceholder section="first appointment checklist" />
          </div>
        </section>

        <section aria-labelledby="billing-questions-heading">
          <h2 id="billing-questions-heading" className="font-heading text-h2">
            Billing Questions
          </h2>
          <p className="mt-4 text-iss-body font-light leading-relaxed max-w-prose">
            For billing questions, contact our office using the information below.
          </p>
          <ul className="mt-6 space-y-3 text-iss-body font-light list-none">
            <li>
              <span className="font-bold text-iss-ink">Phone: </span>
              <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
                (914) 948 3008
              </a>
            </li>
            <li>
              <span className="font-bold text-iss-ink">Fax: </span>
              <span>(914) 992 7401</span>
            </li>
            <li>
              <span className="font-bold text-iss-ink">Email: </span>
              <a href="mailto:info@nybrainspine.com" className="text-iss-teal font-bold link-underline">
                info@nybrainspine.com
              </a>
            </li>
          </ul>
        </section>
      </div>

      <BottomCta />
    </>
  )
}
