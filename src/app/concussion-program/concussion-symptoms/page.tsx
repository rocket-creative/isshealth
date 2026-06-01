import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { JsonLd, medicalWebPageSchema } from '@/lib/schema'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Breadcrumbs } from '@/components/concussion/Breadcrumbs'
import { ClusterNav } from '@/components/concussion/ClusterNav'
import { CtaBlock } from '@/components/concussion/CtaBlock'
import { Faq, type QA } from '@/components/concussion/Faq'
import { NapBlock } from '@/components/concussion/NapBlock'
import { Disclaimer } from '@/components/concussion/Disclaimer'

const PATH = '/concussion-program/concussion-symptoms/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionSymptoms.title,
  description: PAGE_SEO.concussionSymptoms.description,
  path: PATH,
})

const symptomGroups = [
  {
    title: 'Physical.',
    body: 'Headache, dizziness, nausea, balance problems, sensitivity to light or sound, blurred vision, and fatigue.',
  },
  {
    title: 'Thinking.',
    body: 'Feeling foggy or slowed down, and trouble concentrating or remembering.',
  },
  {
    title: 'Mood.',
    body: 'Irritability, sadness, or feeling more nervous than usual.',
  },
  {
    title: 'Sleep.',
    body: 'Sleeping more or less than usual, or trouble falling asleep.',
  },
]

const faqs: QA[] = [
  {
    q: 'Is it a concussion or just a headache?',
    a: 'A headache can be one symptom of a concussion, especially after a blow or jolt to the head or body. An evaluation can help tell the difference and identify what is driving the symptom.',
  },
  {
    q: 'Do you have to lose consciousness to have a concussion?',
    a: 'No. Most concussions happen without any loss of consciousness.',
  },
  {
    q: 'Can concussion symptoms be delayed?',
    a: 'Yes. Symptoms can appear hours or days after the injury.',
  },
  {
    q: 'When should symptoms prompt a visit to a specialist?',
    a: 'When they persist beyond a week or two, interfere with daily life, or return with activity.',
  },
  {
    q: 'Where are you located?',
    a: 'Institute For Spine Surgery, 244 Westchester Avenue, Suite 209, West Harrison, NY 10604. Call (914) 948 3008.',
  },
]

export default function ConcussionSymptomsPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          name: PAGE_SEO.concussionSymptoms.title,
          description: PAGE_SEO.concussionSymptoms.description,
          url: toCanonicalUrl(PATH),
          about: 'Concussion',
        })}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Concussion Program', url: '/concussion-program/' },
            { name: 'Concussion Symptoms', url: PATH },
          ]}
        />
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Concussion Symptoms
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Concussion Symptoms and When to See a Specialist
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            A concussion is a mild traumatic brain injury caused by a blow or a jolt that briefly disrupts how the brain
            works. You do not have to lose consciousness to have one.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16" aria-labelledby="common-symptoms-heading">
        <div className="max-w-3xl">
          <h2 id="common-symptoms-heading" className="font-heading text-h2">
            Common concussion symptoms
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {symptomGroups.map((group, i) => (
            <AnimateOnScroll key={group.title} animation="up" delay={i * 70} className="h-full">
              <div className="h-full bg-iss-alt p-6 border-t-4 border-iss-teal">
                <h3 className="font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">{group.title}</h3>
                <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{group.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-iss-body font-light leading-relaxed">
          Symptoms can begin right away or develop over the hours and days after an injury.
        </p>
      </section>

      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <AnimateOnScroll animation="up" className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">When to seek emergency care</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Go to an emergency department for a worsening or persistent headache, repeated vomiting, seizures, weakness or
              numbness or trouble with coordination, slurred speech, unusual confusion, or difficulty waking up.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">When to see a concussion specialist</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Consider a specialist when symptoms last beyond a week or two, interfere with work, school, or sport, include
              persistent dizziness or neck pain, or return when you try to resume activity.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-h2">How long do concussion symptoms last?</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Many people recover within a few weeks. A meaningful number have symptoms that last longer, and those can be
              addressed with a focused plan.{' '}
              <Link href="/concussion-program/post-concussion-syndrome/" className="text-iss-teal font-bold link-underline">
                post concussion syndrome care
              </Link>
            </p>
          </div>
          <p className="text-iss-body font-light leading-relaxed">
            Explore{' '}
            <Link href="/concussion-program/" className="text-iss-teal font-bold link-underline">
              our full concussion program
            </Link>
            , read about{' '}
            <Link href="/concussion-program/concussion-after-car-accident/" className="text-iss-teal font-bold link-underline">
              concussion after a car accident
            </Link>
            , or learn about{' '}
            <Link href="/concussion-program/telehealth-concussion-care/" className="text-iss-teal font-bold link-underline">
              telehealth concussion care
            </Link>
            .
          </p>
        </AnimateOnScroll>
      </section>

      <ClusterNav currentPath={PATH} />
      <Faq items={faqs} />
      <CtaBlock />
      <NapBlock />
      <Disclaimer />
    </>
  )
}
