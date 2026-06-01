import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import {
  JsonLd,
  physicianSchema,
  medicalWebPageSchema,
  concussionClinicSchema,
} from '@/lib/schema'
import { AppointmentForm } from '@/components/AppointmentForm'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Breadcrumbs } from '@/components/concussion/Breadcrumbs'
import { ClusterNav } from '@/components/concussion/ClusterNav'
import { CtaBlock } from '@/components/concussion/CtaBlock'
import { Faq, type QA } from '@/components/concussion/Faq'
import { NapBlock } from '@/components/concussion/NapBlock'
import { Disclaimer } from '@/components/concussion/Disclaimer'

const PATH = '/concussion-program/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionProgram.title,
  description: PAGE_SEO.concussionProgram.description,
  path: PATH,
})

const kaveraPoints = [
  {
    title: 'Standardized assessment.',
    body: 'Your first visit establishes a baseline using a structured history, a neurological and vestibular examination, cognitive testing, and validated symptom questionnaires.',
  },
  {
    title: 'Symptom and recovery tracking.',
    body: 'Between visits, brief check ins reach you by email or text so your care team sees how symptoms change without waiting for the next appointment.',
  },
  {
    title: 'Guideline informed planning.',
    body: 'The platform helps our team align recommendations with recognized concussion management guidelines.',
  },
  {
    title: 'Organized documentation.',
    body: 'Every assessment and note is assembled into a clear record for your understanding, coordination with other providers, and school or work documentation.',
  },
]

const audiences = [
  {
    title: 'Persistent post concussion symptoms.',
    linkText: 'post concussion syndrome care',
    href: '/concussion-program/post-concussion-syndrome/',
  },
  {
    title: 'Recent injury or accident.',
    linkText: 'concussion after a car accident',
    href: '/concussion-program/concussion-after-car-accident/',
  },
  {
    title: 'Athletes and return to play.',
    linkText: 'sports concussion and return to play',
    href: '/concussion-program/sports-concussion-return-to-play/',
  },
  {
    title: 'Children, teenagers, and their parents.',
    linkText: 'youth and pediatric concussion care',
    href: '/concussion-program/pediatric-youth-concussion/',
  },
]

const faqs: QA[] = [
  {
    q: 'What is the concussion program at the Institute For Spine Surgery?',
    a: 'It is a clinician led program for the evaluation and management of concussion and post concussion symptoms. Our board certified neurosurgical team pairs hands on assessment with the Kavera platform to deliver structured, guideline informed care and to track recovery over time.',
  },
  {
    q: 'Do I need a referral?',
    a: 'Many patients come to us directly. Others are referred by a primary care doctor, an emergency department, an athletic trainer, or another specialist. You may request a consultation on your own.',
  },
  {
    q: 'When should I be evaluated after a head injury?',
    a: 'If a blow to the head or body is followed by headache, confusion, dizziness, nausea, or sensitivity to light or sound, an evaluation is reasonable. Seek emergency care for repeated vomiting, a worsening or severe headache, seizures, weakness or numbness, slurred speech, or difficulty staying awake.',
  },
  {
    q: 'Where are you located?',
    a: 'Institute For Spine Surgery, 244 Westchester Avenue, Suite 209, West Harrison, NY 10604, serving White Plains and Westchester County. Call (914) 948 3008.',
  },
  {
    q: 'Is the Kavera platform a treatment?',
    a: 'No. It is a clinical decision support and tracking tool used by our care team. Your treatment plan is determined by your clinician.',
  },
]

export default function ConcussionProgramPage() {
  return (
    <>
      <JsonLd
        data={[
          concussionClinicSchema(),
          physicianSchema(),
          medicalWebPageSchema({
            name: PAGE_SEO.concussionProgram.title,
            description: PAGE_SEO.concussionProgram.description,
            url: toCanonicalUrl(PATH),
            about: 'Concussion',
          }),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Concussion Program', url: PATH },
          ]}
        />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Concussion and Brain Injury Program
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Concussion and Brain Injury Program in Westchester, NY
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            A concussion deserves more than a single visit and a wait and see plan. Our neurosurgical team at the Institute
            For Spine Surgery evaluates and manages concussion and post concussion symptoms with a structured program that
            follows recognized clinical guidelines and tracks your recovery from the first visit through your return to daily
            life.
          </p>
        </div>
      </section>

      <CtaBlock requestHref="#appointment" />

      {/* Care led by a board certified neurosurgeon */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16" aria-labelledby="leadership-heading">
        <AnimateOnScroll animation="up" className="max-w-3xl">
          <h2 id="leadership-heading" className="font-heading text-h2">
            Care led by a board certified neurosurgeon
          </h2>
          <p className="mt-5 text-iss-body font-light leading-relaxed">
            Directed by John M. Abrahams, MD, a board certified neurosurgeon who has practiced in Westchester County for more
            than two decades. The program grew out of years of hands on neurological practice at the Institute For Spine
            Surgery and a clear need for evaluation that is consistent, well documented, and steady over the full course of
            recovery.
          </p>
        </AnimateOnScroll>
      </section>

      {/* A structured approach, supported by Kavera */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16" aria-labelledby="approach-heading">
        <AnimateOnScroll animation="up" className="max-w-3xl">
          <h2 id="approach-heading" className="font-heading text-h2">
            A structured approach, supported by Kavera
          </h2>
          <p className="mt-5 text-iss-body font-light leading-relaxed">
            Our program pairs experienced clinical judgment with Kavera, a concussion assessment and recovery platform built
            by our founder for use in this practice. Kavera is a tool our clinicians use. It does not replace medical judgment
            and does not prescribe.
          </p>
        </AnimateOnScroll>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {kaveraPoints.map((point, i) => (
            <AnimateOnScroll key={point.title} animation="up" delay={i * 70} className="h-full">
              <div className="h-full bg-white p-6 border-t-4 border-iss-teal">
                <h3 className="font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">{point.title}</h3>
                <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{point.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Who the program is for */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16" aria-labelledby="audience-heading">
        <AnimateOnScroll animation="up" className="max-w-3xl">
          <h2 id="audience-heading" className="font-heading text-h2">
            Who the program is for
          </h2>
        </AnimateOnScroll>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {audiences.map((aud, i) => (
            <AnimateOnScroll key={aud.href} animation="up" delay={i * 70} className="h-full">
              <div className="h-full bg-iss-alt p-6 border-l-4 border-iss-teal">
                <h3 className="font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">{aud.title}</h3>
                <Link href={aud.href} className="btn-arrow mt-4 inline-flex items-center gap-2 min-h-[44px] text-iss-teal font-bold text-sm uppercase tracking-wide link-underline">
                  <span>{aud.linkText}</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-iss-ink text-white px-6 lg:px-12 py-12 md:py-16" aria-labelledby="expect-heading">
        <AnimateOnScroll animation="up" className="max-w-3xl">
          <h2 id="expect-heading" className="font-heading text-h2 text-white">
            What to expect
          </h2>
        </AnimateOnScroll>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/15">
          <div className="bg-iss-ink p-6 md:p-7">
            <h3 className="font-heading text-xl text-white">Initial evaluation.</h3>
            <p className="mt-3 text-white/75 font-light text-sm leading-relaxed">
              A thorough neurological evaluation establishes your baseline and identifies the symptoms and factors most
              relevant to your recovery.
            </p>
          </div>
          <div className="bg-iss-ink p-6 md:p-7">
            <h3 className="font-heading text-xl text-white">Feedback visit.</h3>
            <p className="mt-3 text-white/75 font-light text-sm leading-relaxed">
              About two weeks later, you and your clinician review your testing together, confirm the plan, and set up the
              between visit recovery work.
            </p>
          </div>
          <div className="bg-iss-ink p-6 md:p-7">
            <h3 className="font-heading text-xl text-white">Ongoing monitoring.</h3>
            <p className="mt-3 text-white/75 font-light text-sm leading-relaxed">
              Structured check ins and, where appropriate, telehealth visits keep your care responsive as recovery evolves.{' '}
              <Link href="/concussion-program/telehealth-concussion-care/" className="text-iss-coral font-bold link-underline">
                telehealth concussion care
              </Link>
            </p>
          </div>
          <div className="bg-iss-ink p-6 md:p-7">
            <h3 className="font-heading text-xl text-white">Re evaluation.</h3>
            <p className="mt-3 text-white/75 font-light text-sm leading-relaxed">
              Progress is reviewed against your baseline, and the plan is adjusted toward a safe return to daily activity,
              work, school, or sport.
            </p>
          </div>
        </div>
      </section>

      <ClusterNav currentPath={PATH} />

      <Faq items={faqs} title="Concussion care questions." />

      {/* Appointment */}
      <section id="appointment" className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16 scroll-mt-32" aria-labelledby="appointment-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Request a Consultation</p>
            <h2 id="appointment-heading" className="mt-4 font-heading text-h2">
              Take the next step toward recovery.
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
