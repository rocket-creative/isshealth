import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { JsonLd, localBusinessSchema, webPageSchema } from '@/lib/schema'
import { PAGE_SEO } from '@/content/page-seo'
import { toCanonicalUrl } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { LocationsSection } from '@/components/LocationsSection'
import { BottomCta } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.locations.title,
  description: PAGE_SEO.locations.description,
  path: '/locations/',
})

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema('/locations/'),
          localBusinessSchema(),
          webPageSchema({
            name: PAGE_SEO.locations.title,
            description: PAGE_SEO.locations.description,
            url: toCanonicalUrl('/locations/'),
          }),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6">
          <Link href="/" className="hover:text-iss-teal">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-iss-ink font-bold">Locations</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Where to find us</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">Westchester&apos;s home for spine care.</h1>
        <p className="mt-5 max-w-prose text-iss-body text-lg font-light leading-relaxed">
          Our main office is located at 244 Westchester Avenue in West Harrison, New York.
        </p>
      </header>

      <section className="px-6 lg:px-12 py-12 md:py-16 bg-white">
        <LocationsSection variant="compact" />
      </section>

      <section className="px-6 lg:px-12 pb-12 md:pb-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="border-l-4 border-iss-teal pl-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-iss-ink uppercase tracking-tight">
              Office Hours
            </h2>
            <p className="mt-4 text-iss-body font-light leading-relaxed max-w-prose">
              By appointment. Call{' '}
              <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
                (914) 948 3008
              </a>{' '}
              to schedule or to confirm current hours. Phones are answered Monday through Friday, 8am to 5pm ET.
            </p>
          </div>
          <div className="border-l-4 border-iss-teal pl-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-iss-ink uppercase tracking-tight">
              Getting Here
            </h2>
            <p className="mt-4 text-iss-body font-light leading-relaxed max-w-prose">
              The office sits along the Westchester Avenue corridor in West Harrison, with easy access from I-287 and the
              Hutchinson River Parkway. The nearest Metro North stations are White Plains and Rye on the New Haven Line, a
              short drive away. Turn by turn directions are available through the map on this page.
            </p>
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  )
}
