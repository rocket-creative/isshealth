import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, physicianSchema } from '@/lib/schema'
import { AppointmentForm } from '@/components/AppointmentForm'
import { BottomCta } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.meetDrAbrahams.title,
  description: PAGE_SEO.meetDrAbrahams.description,
  path: '/meet-dr-abrahams/',
  image: `${SITE_URL}/images/dr-john-abrahams.jpg`,
})

const credentials = [
  'Board certified neurosurgeon, in practice since 2002',
  'President, Institute For Spine Surgery',
  'Past President, Brain and Spine Surgeons of New York (2015 — 2023)',
  'Co Director, Spine Section, Northern Westchester Hospital Orthopedic and Spine Institute',
  'Founder, Brain and Spine Research Institute',
  'Author of 30+ peer reviewed publications',
  'Multiple US and international medical device patents',
  'Named Top 10 Spine Orthopedic Surgeon Tech Entrepreneurs by Becker\u2019s Spine Review',
]

export default function MeetDrAbrahamsPage() {
  return (
    <>
      <JsonLd
        data={[generateBreadcrumbSchema('/meet-dr-abrahams/'), physicianSchema()]}
      />

      <nav
        aria-label="Breadcrumb"
        className="px-6 lg:px-12 pt-8 text-xs uppercase tracking-[0.18em] text-iss-body bg-white border-b border-stone-200"
      >
        <Link href="/" className="hover:text-iss-teal">
          Home
        </Link>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        <span className="text-iss-ink font-bold">Meet Dr. Abrahams</span>
      </nav>

      <section className="relative bg-iss-ink text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative aspect-[3/4] lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/images/dr-john-abrahams.jpg"
              alt="Dr. John M. Abrahams, MD headshot"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="lg:col-span-7 px-6 lg:px-12 py-12 md:py-16">
            <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Meet Your Surgeon</p>
            <h1 className="mt-5 font-gotham font-bold text-white uppercase text-display">
              Dr. John M. <span className="text-iss-coral">Abrahams</span>, MD
            </h1>
            <p className="mt-6 max-w-prose text-white/85 text-lg font-light leading-relaxed">
              One of the busiest neurosurgeons performing spinal surgery in the Hudson Valley of Lower New York. Routinely performs
              over 150 surgical procedures per year, with a practice that focuses on anterior cervical fusion and posterior lumbar
              fusion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="#appointment"
                className="btn-arrow inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-iss-coral-dark hover:bg-iss-coral text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                <span>Request Consultation</span>
                <span className="arrow">→</span>
              </Link>
              <a
                href="tel:+19149483008"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-iss-teal-dark hover:bg-iss-alt px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                (914) 948 3008
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 prose-iss max-w-prose">
          <h2>Practice and background</h2>
          <p>
            Dr. Abrahams treats disorders of the brain and spine. He has authored numerous patents, written over thirty peer
            reviewed publications, and lectured at national and local meetings. He has a background in biomedical engineering and
            remains an active biomedical entrepreneur, having founded companies including EndoMedix, Capseus, and DTX Medical. His
            most recent project is a surgical robotic device for brain surgery.
          </p>
          <h2>Hospital appointments</h2>
          <ul>
            <li>Northern Westchester Hospital, Mt. Kisco, NY</li>
            <li>Westchester Medical Center, Valhalla, NY</li>
            <li>White Plains Hospital, White Plains, NY</li>
          </ul>
        </div>
        <aside className="lg:col-span-5">
          <div className="bg-iss-alt p-8 md:p-10 border-l-4 border-iss-teal">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Credentials</p>
            <ul className="mt-5 space-y-3 text-iss-body font-light text-sm md:text-base list-none">
              {credentials.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="flex-shrink-0 mt-1 w-2 h-2 bg-iss-coral" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section id="appointment" className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Book a Consultation</p>
            <h2 className="mt-4 font-heading text-h2">Request an appointment with Dr. Abrahams.</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed max-w-md">
              Share a few details and our team will reach out within one business day.
            </p>
          </div>
          <div className="lg:col-span-7 bg-white p-6 md:p-10">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  )
}
