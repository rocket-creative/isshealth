import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { LocationsSection } from '@/components/LocationsSection'
import { BottomCta } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: 'Our Location | West Harrison, NY | Institute For Spine Surgery',
  description:
    'Visit the Institute For Spine Surgery main office in West Harrison, NY. New York Brain and Spine Surgery, P.C. Call (914) 948 3008.',
  path: '/locations/',
})

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Locations', url: `${SITE_URL}/locations/` },
        ])}
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
