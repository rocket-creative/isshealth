import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/schema'
import { LandingHero } from '@/components/LandingHero'
import { AppointmentForm } from '@/components/AppointmentForm'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { BottomCta } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: 'Cervical Spine and Neck Surgery Specialists | West Harrison, NY',
  description:
    'Expert cervical spine surgery in West Harrison, NY. ACDF, disc replacement, stenosis, radiculopathy. Board certified neurosurgery. Over 4,000 surgeries.',
  path: '/cervical-spine/',
})

const conditions = [
  { title: 'Cervical Stenosis', href: '/cervical-center/cervical-stenosis/', blurb: 'Narrowing of the cervical spinal canal causing neck pain, myelopathy, or radiculopathy.' },
  { title: 'Cervical Disc Herniation', href: '/cervical-center/cervical-disc-herniation/', blurb: 'Disc fragment compressing a spinal nerve, producing arm pain or weakness.' },
  { title: 'Cervical Myelopathy', href: '/cervical-center/cervical-myelopathy/', blurb: 'Progressive spinal cord compression requiring timely surgical decompression.' },
  { title: 'Cervical Radiculopathy', href: '/cervical-center/cervical-radiculopathy/', blurb: 'Pinched cervical nerve producing radiating arm and hand pain, numbness, or weakness.' },
  { title: 'Cervical Degeneration', href: '/cervical-center/cervical-degeneration/', blurb: 'Progressive arthritis of the cervical spine, often age related, producing neck pain.' },
]

export default function CervicalSpineLandingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Cervical Spine', url: `${SITE_URL}/cervical-spine/` },
          ]),
          serviceSchema({
            name: 'Cervical Spine Surgery',
            description:
              'Cervical spine and neck surgery including anterior cervical discectomy and fusion, disc replacement, and decompression.',
            url: `${SITE_URL}/cervical-spine/`,
          }),
        ]}
      />

      <LandingHero
        eyebrow="Cervical Spine and Neck Care"
        headline="Relief from neck pain, arm pain, and numbness."
        body="Board certified neurosurgical care for cervical spine disorders. Evidence based evaluation, non surgical first, surgery only when it will help."
        bullets={[
          'Over 4,000 successful surgeries performed',
          'Same day outpatient procedures for one and two level surgery',
          '85% of patients return to normal activity within three months',
          'Most major insurance accepted',
        ]}
        imageSrc="/images/header.jpg"
        imageAlt="Cervical spine three dimensional render"
      />

      {/* Authority strip */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 border-y border-stone-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">4,000+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Surgeries Performed</p>
          </div>
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">98%</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Patient Recommendation</p>
          </div>
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">20+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Years in Practice</p>
          </div>
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">3</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Hospital Appointments</p>
          </div>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Conditions We Treat</p>
          <h2 className="mt-4 font-heading text-h2">From neck pain to myelopathy.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.map((c, i) => (
            <AnimateOnScroll key={c.title} animation="up" delay={i * 80}>
              <Link
                href={c.href}
                className="group block border border-stone-200 hover:border-iss-teal p-6 h-full transition-colors"
              >
                <p className="font-heading text-xl font-bold text-iss-ink uppercase tracking-tight group-hover:text-iss-teal">
                  {c.title}
                </p>
                <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{c.blurb}</p>
                <p className="mt-4 text-iss-teal text-xs font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2">
                  Learn more <span>→</span>
                </p>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Procedures */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Procedures</p>
            <h2 className="mt-4 font-heading text-h2">Two primary anterior approaches.</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed max-w-md">
              For patients who need surgery, Dr. Abrahams most often performs ACDF or anterior cervical disc replacement, selecting
              the right approach based on level count, neck pain, and cord compression.
            </p>
            <Link
              href="/cervical-center/surgical-options/"
              className="btn-arrow mt-6 inline-flex items-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Compare Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-6 border-t-4 border-iss-teal">
              <p className="font-heading text-xl font-bold text-iss-ink uppercase tracking-tight">ACDF</p>
              <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">
                Anterior cervical discectomy and fusion. The gold standard for decompressing a cervical nerve or spinal cord when
                motion preservation is not required.
              </p>
            </div>
            <div className="bg-white p-6 border-t-4 border-iss-coral">
              <p className="font-heading text-xl font-bold text-iss-ink uppercase tracking-tight">ACDR</p>
              <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">
                Anterior cervical disc replacement. Preserves motion at the treated level. Appropriate for one or two level
                constructs in the right patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="appointment" className="bg-white px-6 lg:px-12 py-12 md:py-16 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Request a Consultation</p>
            <h2 className="mt-4 font-heading text-h2">Speak with our team today.</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed max-w-md">
              Share a few details and our team will reach out within one business day. For urgent matters, call{' '}
              <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
                (914) 948 3008
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  )
}
