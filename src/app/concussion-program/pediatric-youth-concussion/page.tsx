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

const PATH = '/concussion-program/pediatric-youth-concussion/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionPediatric.title,
  description: PAGE_SEO.concussionPediatric.description,
  path: PATH,
})

const faqs: QA[] = [
  {
    q: 'My child hit their head. When should they be seen?',
    a: 'If a blow or jolt is followed by headache, dizziness, nausea, confusion, or sensitivity to light or sound, an evaluation is reasonable. Seek emergency care for the warning signs listed above.',
  },
  {
    q: 'Should my child return to school before returning to sport?',
    a: 'Yes. Return to learn comes first, and return to sport follows a graded, supervised progression.',
  },
  {
    q: 'How long does a young person take to recover?',
    a: 'It varies. Children and teenagers can take longer than adults, and a clinician guides the plan and the timeline.',
  },
  {
    q: 'Where are you located?',
    a: 'Institute For Spine Surgery, 244 Westchester Avenue, Suite 209, West Harrison, NY 10604. Call (914) 948 3008.',
  },
]

export default function PediatricYouthConcussionPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          name: PAGE_SEO.concussionPediatric.title,
          description: PAGE_SEO.concussionPediatric.description,
          url: toCanonicalUrl(PATH),
          about: 'Concussion',
        })}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Concussion Program', url: '/concussion-program/' },
            { name: 'Youth and Pediatric Concussion Care', url: PATH },
          ]}
        />
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Youth and Pediatric Concussion
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Youth and Pediatric Concussion Care in Westchester, NY
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            When a child or teenager has a concussion, parents want clear answers and a plan they can trust. Young people can
            take longer to recover than adults, and they need to return to the classroom before they return to sport.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <AnimateOnScroll animation="up" className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">How we evaluate children and teenagers</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We use an age appropriate history, a neurological and vestibular examination, cognitive testing, and validated
              symptom scales completed by the young person and, where helpful, the parent. The goal is a clear baseline and a
              plan matched to your child.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Return to learn comes before return to sport</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              School comes first. We help families understand reasonable academic adjustments during recovery, and with
              permission we coordinate with the school. Return to sport follows a graded, clinician supervised progression
              once the earlier steps are tolerated.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Warning signs that need emergency care</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Seek emergency care if your child has a worsening or severe headache, repeated vomiting, seizures, weakness or
              numbness, slurred speech, unusual confusion, or difficulty staying awake.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Tracking that supports recovery</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Brief check ins between visits help the care team follow how your child is doing. Kavera organizes this tracking
              as a support tool used by the clinician. It is not a treatment.
            </p>
          </div>
          <p className="text-iss-body font-light leading-relaxed">
            Explore{' '}
            <Link href="/concussion-program/" className="text-iss-teal font-bold link-underline">
              our full concussion program
            </Link>
            , read about{' '}
            <Link href="/concussion-program/sports-concussion-return-to-play/" className="text-iss-teal font-bold link-underline">
              sports concussion and return to play
            </Link>
            , or review{' '}
            <Link href="/concussion-program/concussion-symptoms/" className="text-iss-teal font-bold link-underline">
              concussion symptoms
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
