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

const PATH = '/concussion-program/concussion-after-car-accident/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionCarAccident.title,
  description: PAGE_SEO.concussionCarAccident.description,
  path: PATH,
})

const faqs: QA[] = [
  {
    q: 'Can you have a concussion without hitting your head?',
    a: 'Yes. The rapid motion of the head and neck in a collision can move the brain inside the skull even without a direct impact.',
  },
  {
    q: 'How soon should I be evaluated after an accident?',
    a: 'Promptly is reasonable, and it is worth being evaluated even if symptoms are mild or delayed, because concussion symptoms can develop over hours and days.',
  },
  {
    q: 'Do you treat both the concussion and the neck symptoms?',
    a: 'Our assessment considers both the brain and the neck, since they are frequently affected together after a collision.',
  },
  {
    q: 'Where are you located?',
    a: 'Institute For Spine Surgery, 244 Westchester Avenue, Suite 209, West Harrison, NY 10604. Call (914) 948 3008.',
  },
]

export default function ConcussionAfterCarAccidentPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          name: PAGE_SEO.concussionCarAccident.title,
          description: PAGE_SEO.concussionCarAccident.description,
          url: toCanonicalUrl(PATH),
          about: 'Concussion',
        })}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Concussion Program', url: '/concussion-program/' },
            { name: 'Concussion After a Car Accident', url: PATH },
          ]}
        />
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Concussion After a Car Accident
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Concussion After a Car Accident in Westchester, NY
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            A car accident can cause a concussion even when your head does not strike anything. The same forces that cause
            whiplash can move the brain inside the skull, and symptoms sometimes appear hours or days after the collision.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <AnimateOnScroll animation="up" className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">Why a collision can injure the brain and the neck together</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              The neck and the brain are often affected at the same time and can share symptoms such as headache, dizziness,
              and difficulty concentrating. An evaluation that considers both supports an accurate picture and a clear plan.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Symptoms to watch for after an accident</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Headache, neck pain, dizziness, nausea, fatigue, sensitivity to light or sound, trouble concentrating or
              remembering, and changes in sleep or mood. These do not always appear the same day. Seek emergency care for a
              severe or worsening headache, repeated vomiting, seizures, weakness or numbness, slurred speech, or difficulty
              staying awake.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">How we evaluate</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We establish a baseline through a structured history, a neurological and vestibular examination, cognitive
              testing, and validated questionnaires. The neck is part of the assessment when it is contributing to symptoms,
              and findings are organized into a clear record.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Ongoing, tracked recovery</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Brief check ins between visits let your care team follow your recovery, and telehealth follow up can reduce
              travel. Kavera organizes the tracking and does not provide treatment.
            </p>
          </div>
          <p className="text-iss-body font-light leading-relaxed">
            Learn about{' '}
            <Link href="/concussion-program/" className="text-iss-teal font-bold link-underline">
              our full concussion program
            </Link>
            , read about{' '}
            <Link href="/concussion-program/post-concussion-syndrome/" className="text-iss-teal font-bold link-underline">
              post concussion syndrome care
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
