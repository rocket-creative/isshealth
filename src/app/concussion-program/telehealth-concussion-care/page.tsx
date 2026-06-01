import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { JsonLd, medicalWebPageSchema } from '@/lib/schema'
import { AppointmentForm } from '@/components/AppointmentForm'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Breadcrumbs } from '@/components/concussion/Breadcrumbs'
import { ClusterNav } from '@/components/concussion/ClusterNav'
import { CtaBlock } from '@/components/concussion/CtaBlock'
import { Faq, type QA } from '@/components/concussion/Faq'
import { NapBlock } from '@/components/concussion/NapBlock'
import { Disclaimer } from '@/components/concussion/Disclaimer'

const PATH = '/concussion-program/telehealth-concussion-care/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionTelehealth.title,
  description: PAGE_SEO.concussionTelehealth.description,
  path: PATH,
})

const faqs: QA[] = [
  {
    q: 'Can concussion care be done by telehealth?',
    a: 'Virtual visits can support assessment and follow up. Your clinician decides which parts of your care are appropriate for telehealth and which require an in person visit.',
  },
  {
    q: 'Is a telehealth visit a replacement for in person care?',
    a: 'No. It complements in person care and supports continuity between visits.',
  },
  {
    q: 'Do you prescribe medication online?',
    a: 'This page is about virtual evaluation and follow up. Any treatment decisions are made by your clinician through your overall plan of care.',
  },
  {
    q: 'Where are you located?',
    a: 'Institute For Spine Surgery, 244 Westchester Avenue, Suite 209, West Harrison, NY 10604. Call (914) 948 3008.',
  },
]

export default function TelehealthConcussionCarePage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          name: PAGE_SEO.concussionTelehealth.title,
          description: PAGE_SEO.concussionTelehealth.description,
          url: toCanonicalUrl(PATH),
          about: 'Concussion',
        })}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Concussion Program', url: '/concussion-program/' },
            { name: 'Telehealth Concussion Care', url: PATH },
          ]}
        />
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Telehealth Concussion Care
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Telehealth Concussion Care in Westchester, NY
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            Telehealth makes it easier to stay on track with concussion recovery between in person visits. Secure virtual
            visits support timely assessment and follow up, and they reduce the travel that can be hard when symptoms are
            still present.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <AnimateOnScroll animation="up" className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">How virtual visits fit into your care</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Telehealth supports continuity of care alongside your in person evaluation. Your clinician decides what can be
              handled virtually and what calls for an in person visit. Telehealth here is for evaluation and follow up. It is
              not online prescribing and it does not replace clinical care.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Tracking that reaches you at home</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Between visits, brief symptom check ins reach you by email or text and flow back to your care team for review.
              Kavera organizes this tracking as a support tool. It does not provide treatment and it does not prescribe.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">When an in person visit is needed</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Some assessments are best done in the office. Your clinician will tell you when an in person evaluation is the
              right step, and the West Harrison office is available for that care.
            </p>
          </div>
          <p className="text-iss-body font-light leading-relaxed">
            Explore{' '}
            <Link href="/concussion-program/" className="text-iss-teal font-bold link-underline">
              our full concussion program
            </Link>{' '}
            or read about{' '}
            <Link href="/concussion-program/post-concussion-syndrome/" className="text-iss-teal font-bold link-underline">
              post concussion syndrome care
            </Link>
            .
          </p>
        </AnimateOnScroll>
      </section>

      <ClusterNav currentPath={PATH} />
      <Faq items={faqs} />
      <CtaBlock requestHref="#appointment" />

      <section id="appointment" className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16 scroll-mt-32" aria-labelledby="appointment-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Request a Consultation</p>
            <h2 id="appointment-heading" className="mt-4 font-heading text-h2">
              Request your concussion consultation.
            </h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed max-w-md">
              Share a few details and our team will reach out within one business day. For urgent matters, call{' '}
              <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
                (914) 948 3008
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-7">
            <AppointmentForm formType="concussion" />
          </div>
        </div>
      </section>

      <NapBlock />
      <Disclaimer />
    </>
  )
}
