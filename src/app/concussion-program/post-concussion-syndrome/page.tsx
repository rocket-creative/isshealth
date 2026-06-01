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

const PATH = '/concussion-program/post-concussion-syndrome/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionPostSyndrome.title,
  description: PAGE_SEO.concussionPostSyndrome.description,
  path: PATH,
})

const faqs: QA[] = [
  {
    q: 'What is post concussion syndrome?',
    a: 'It is the term for concussion symptoms that continue beyond the usual recovery window. It is recognized, it is common, and it can be addressed with a structured, individualized plan.',
  },
  {
    q: 'Can lingering symptoms still improve months later?',
    a: 'Many people see meaningful improvement with a structured plan even when symptoms have lasted a while. A clinician can discuss what is reasonable to expect in your situation.',
  },
  {
    q: 'Do you only treat sports concussions?',
    a: 'No. We care for patients whose concussion came from any cause, including falls, accidents, and work injuries.',
  },
  {
    q: 'How is this different from rest and wait?',
    a: 'Concussion care has moved beyond extended rest. Current management favors structured assessment and a guided, gradual return to activity directed by a clinician.',
  },
  {
    q: 'Where are you located?',
    a: 'Institute For Spine Surgery, 244 Westchester Avenue, Suite 209, West Harrison, NY 10604. Call (914) 948 3008.',
  },
]

export default function PostConcussionSyndromePage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          name: PAGE_SEO.concussionPostSyndrome.title,
          description: PAGE_SEO.concussionPostSyndrome.description,
          url: toCanonicalUrl(PATH),
          about: 'Post Concussion Syndrome',
        })}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Concussion Program', url: '/concussion-program/' },
            { name: 'Post Concussion Syndrome', url: PATH },
          ]}
        />
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Post Concussion Syndrome
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Post Concussion Syndrome Care in Westchester, NY
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            Most people recover from a concussion within a few weeks. When symptoms last longer, that does not mean nothing
            can be done. Persistent symptoms such as headache, brain fog, dizziness, fatigue, sleep trouble, and changes in
            mood are common, recognized, and respond to a focused, structured plan.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <AnimateOnScroll animation="up" className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">When symptoms do not follow the timeline</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Prolonged symptoms can come from several overlapping sources at once, including the vestibular system, the neck,
              vision, sleep, and mood. A careful assessment of what is driving your symptoms matters more than a single
              standard plan.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">How we evaluate persistent symptoms</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We establish a baseline through a structured history, a neurological and vestibular examination, cognitive
              testing, and validated questionnaires that measure symptom burden, headache impact, mood, anxiety, and sleep.
              Standardized symptom scales are the appropriate way to assess symptoms that persist after a concussion.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">What care can involve</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Care is individualized and may include guided, gradually increasing aerobic activity kept below the level that
              provokes symptoms, rehabilitation directed at the vestibular system and the neck when those are contributing,
              attention to sleep and mood, and a stepwise return to your activities. Your clinician directs the plan and
              adjusts it against your tracked progress.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">Supported by structured tracking</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Brief check ins between visits let your care team follow the trend in your symptoms. Kavera organizes this
              tracking as a support tool. It is not a treatment and it does not prescribe.
            </p>
          </div>
          <p className="text-iss-body font-light leading-relaxed">
            Learn about{' '}
            <Link href="/concussion-program/" className="text-iss-teal font-bold link-underline">
              our full concussion program
            </Link>
            , review{' '}
            <Link href="/concussion-program/concussion-symptoms/" className="text-iss-teal font-bold link-underline">
              concussion symptoms
            </Link>
            , or read about{' '}
            <Link href="/concussion-program/concussion-after-car-accident/" className="text-iss-teal font-bold link-underline">
              concussion after a car accident
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
