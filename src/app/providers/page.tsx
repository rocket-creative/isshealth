import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema, physicianSchema } from '@/lib/schema'
import { BottomCta } from '@/components/ConditionLayout'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export const metadata: Metadata = buildMetadata({
  title: 'Meet Dr. John M. Abrahams, MD | Providers',
  description:
    'Dr. John M. Abrahams is a board certified neurosurgeon in West Harrison, NY. Past President of Brain and Spine Surgeons of New York. Over 150 procedures annually.',
  path: '/providers/',
  image: `${SITE_URL}/images/dr-john-abrahams.jpg`,
})

export default function ProvidersPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Providers', url: `${SITE_URL}/providers/` },
          ]),
          physicianSchema(),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6">
          <Link href="/" className="hover:text-iss-teal">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-iss-ink font-bold">Providers</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Our Providers</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">Meet the surgeons who lead our practice.</h1>
      </header>

      <section className="px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <AnimateOnScroll animation="left" className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-iss-alt">
            <Image
              src="/images/dr-john-abrahams.jpg"
              alt="Dr. John M. Abrahams, MD headshot"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-6 border-l-4 border-iss-teal pl-5">
            <p className="font-heading text-2xl md:text-3xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
              Dr. John M. Abrahams, MD
            </p>
            <p className="mt-2 font-body text-sm uppercase tracking-[0.18em] text-iss-teal font-bold">Neurosurgeon</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="right" className="lg:col-span-7 prose-iss max-w-prose">
          <h2>Meet Dr. Abrahams</h2>
          <p>
            Dr. Abrahams is one of the busiest neurosurgeons performing spinal surgery in the Hudson Valley of Lower New York. He has
            been in practice since 2002 and routinely performs over 150 surgical procedures per year. His current practice includes
            mostly anterior cervical fusions and posterior lumbar fusions.
          </p>
          <p>
            Dr. John Abrahams treats disorders of the brain and spine. He is the author of numerous patents, has authored over 30
            publications in peer reviewed journals and textbooks, and has given lectures at many national and local meetings. In
            addition to being the past President of BSSNY, he is now President of New York Brain and Spine Surgery. He is also
            Northern Westchester Hospital&apos;s Co Director of the Spine Section of the Orthopedic and Spine Institute.
          </p>
          <p>
            In 2009, he founded and now runs the Brain and Spine Research Institute. Dr. Abrahams has a background in biomedical
            engineering and has been quite active as a biomedical entrepreneur, founding numerous medical companies including
            EndoMedix, Capseus, and DTX Medical. Dr. Abrahams&apos; most recent project is a surgical robotic device for brain surgery.
          </p>
          <p>
            Dr. Abrahams was past President of Brain and Spine Surgeons of New York from 2015 until 2023. He was recently named one
            of the &ldquo;Top 10 Spine, Orthopedic Surgeon Tech Entrepreneurs to Know&rdquo; by Becker&apos;s Spine Review.
          </p>

          <h2>Hospital Appointments</h2>
          <ul>
            <li>Northern Westchester Hospital, Mt. Kisco, New York</li>
            <li>Westchester Medical Center, Valhalla, New York</li>
            <li>White Plains Hospital, White Plains, New York</li>
          </ul>

          <div className="not-prose mt-10 flex flex-wrap gap-3">
            <Link
              href="/appointments/"
              className="btn-arrow inline-flex items-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Request Appointment</span>
              <span className="arrow">→</span>
            </Link>
            <Link
              href="/innovations/"
              className="btn-arrow inline-flex items-center gap-2 border border-iss-teal text-iss-teal hover:bg-iss-teal hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>View Innovations</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <BottomCta />
    </>
  )
}
