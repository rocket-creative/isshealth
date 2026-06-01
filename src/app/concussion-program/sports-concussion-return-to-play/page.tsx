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

const PATH = '/concussion-program/sports-concussion-return-to-play/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionReturnToPlay.title,
  description: PAGE_SEO.concussionReturnToPlay.description,
  path: PATH,
})

const faqs: QA[] = [
  {
    q: 'How long before my athlete can return to sport?',
    a: 'There is no single timeline. The clinician determines readiness through a stepwise process and clears each stage based on how the athlete responds.',
  },
  {
    q: 'Should my athlete return to school before sport?',
    a: 'Yes. Return to learn comes before the later stages of return to sport.',
  },
  {
    q: 'Do you provide baseline or follow up testing?',
    a: 'Yes. We use structured assessments to establish a baseline and to follow recovery over time.',
  },
  {
    q: 'Who clears the athlete to return?',
    a: 'A clinician clears the athlete, based on the full evaluation and the graded progression, not a single test or an app.',
  },
  {
    q: 'Where are you located?',
    a: 'Institute For Spine Surgery, 244 Westchester Avenue, Suite 209, West Harrison, NY 10604. Call (914) 948 3008.',
  },
]

export default function SportsConcussionReturnToPlayPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          name: PAGE_SEO.concussionReturnToPlay.title,
          description: PAGE_SEO.concussionReturnToPlay.description,
          url: toCanonicalUrl(PATH),
          about: 'Sport Related Concussion',
        })}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Concussion Program', url: '/concussion-program/' },
            { name: 'Sports Concussion and Return to Play', url: PATH },
          ]}
        />
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Sports Concussion
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Sports Concussion and Return to Play in Westchester, NY
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            Getting an athlete back safely takes a clear baseline, a stepwise plan, and clinician clearance at each stage.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <AnimateOnScroll animation="up" className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">Why return to play is a graded process</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Current consensus on sport related concussion supports a graded, stepwise return to sport supervised by a
              medical professional, with return to learn coming first for students. An athlete advances to the next step only
              when the previous step does not bring symptoms back. The goal is a safe return, not the fastest one.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">How we assess athletes</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We establish a baseline with a structured history, a neurological and vestibular examination, cognitive testing,
              and validated symptom scales. Where appropriate, a clinician supervised graded activity assessment helps inform
              the plan.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Return to learn comes first</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              The classroom comes before the field. We help families, and with permission their schools, understand
              reasonable academic adjustments while a student recovers.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Supported by structured tracking</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Kavera organizes the between visit check ins so the care team can follow recovery. It does not replace the
              clinician&apos;s clearance decision.
            </p>
          </div>
          <p className="text-iss-body font-light leading-relaxed">
            Learn about{' '}
            <Link href="/concussion-program/" className="text-iss-teal font-bold link-underline">
              our full concussion program
            </Link>
            , read about{' '}
            <Link href="/concussion-program/pediatric-youth-concussion/" className="text-iss-teal font-bold link-underline">
              youth and pediatric concussion care
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
