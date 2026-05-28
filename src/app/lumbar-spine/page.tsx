import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, medicalServiceSchema } from '@/lib/schema'
import { LandingHero } from '@/components/LandingHero'
import { AppointmentForm } from '@/components/AppointmentForm'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { BottomCta } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.lumbarSpineLanding.title,
  description: PAGE_SEO.lumbarSpineLanding.description,
  path: '/lumbar-spine/',
})

const conditions = [
  { title: 'Lumbar Disc Herniation', href: '/common-diagnosis/lumbar-disc-herniation/', blurb: 'Disc fragment compressing a nerve, producing radiating leg pain.' },
  { title: 'Lumbar Stenosis', href: '/common-diagnosis/lumbar-stenosis/', blurb: 'Narrowing of the lumbar canal causing neurogenic claudication.' },
  { title: 'Neurogenic Claudication', href: '/common-diagnosis/neurogenic-claudication/', blurb: 'Back and leg pain with standing or walking, relieved by sitting or leaning forward.' },
  { title: 'Lumbar Spondylolisthesis', href: '/common-diagnosis/lumbar-spondylolisthesis/', blurb: 'One vertebra slips relative to another, producing back and leg pain.' },
  { title: 'Foot Drop', href: '/common-diagnosis/foot-drop/', blurb: 'L5 nerve compression producing a dragging foot and high stepping gait.' },
  { title: 'Low Back Pain', href: '/common-diagnosis/low-back-pain/', blurb: 'The most common lumbar spine condition, affecting millions of Americans each year.' },
]

export default function LumbarSpineLandingPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema('/lumbar-spine/'),
          medicalServiceSchema({
            name: 'Lumbar Spine Surgery',
            description: PAGE_SEO.lumbarSpineLanding.description,
            url: toCanonicalUrl('/lumbar-spine/'),
          }),
        ]}
      />

      <LandingHero
        eyebrow="Lumbar Spine and Lower Back"
        headline="Relief from back pain, sciatica, and leg weakness."
        body="Board certified neurosurgical care for lumbar spine disorders. We start with non surgical care. Surgery is recommended only when it will help."
        bullets={[
          '85% of patients return to normal activity within three months',
          'Minimally invasive microdiscectomy, laminectomy, and fusion',
          '90% reduction in postoperative complications',
        ]}
        imageSrc="/images/care.jpg"
        imageAlt="Surgeon reviewing lumbar spine imaging"
      />

      <section className="bg-iss-alt px-6 lg:px-12 py-12 border-y border-stone-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">4,000+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Surgeries Performed</p>
          </div>
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">95%</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Patient Satisfaction</p>
          </div>
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">85%</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Return to Activity</p>
          </div>
          <div>
            <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">150+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">Procedures Per Year</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Conditions We Treat</p>
          <h2 className="mt-4 font-heading text-h2">Common lumbar diagnoses.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.map((c, i) => (
            <AnimateOnScroll key={c.title} animation="up" delay={i * 70}>
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

      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Procedures</p>
            <h2 className="mt-4 font-heading text-h2">From microdiscectomy to fusion.</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed max-w-md">
              Dr. Abrahams performs the full range of lumbar procedures. Most are outpatient, minimally invasive, and aimed at
              restoring function with the smallest footprint possible.
            </p>
            <Link
              href="/the-lumbar-center/surgical-options/"
              className="btn-arrow mt-6 inline-flex items-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Compare Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { t: 'Microdiscectomy', b: 'A 1.5 inch incision, a microscope, and the disc fragment removed. Approximately 45 minutes. Home the same day.' },
              { t: 'Laminectomy', b: 'For lumbar stenosis with neurogenic claudication. Decompresses nerves and thecal sac. Approximately 45 minutes.' },
              { t: 'Foraminotomy', b: 'Enlarges the foramen to relieve nerve compression without the need for fusion. 60 to 90 minutes.' },
              { t: 'TLIF', b: 'Transforaminal lumbar interbody fusion for spondylolisthesis or instability with radicular symptoms.' },
            ].map((p) => (
              <div key={p.t} className="bg-white p-6 border-t-4 border-iss-teal">
                <p className="font-heading text-xl font-bold text-iss-ink uppercase tracking-tight">{p.t}</p>
                <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
