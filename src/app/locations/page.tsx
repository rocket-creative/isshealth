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

      <BottomCta />
    </>
  )
}
