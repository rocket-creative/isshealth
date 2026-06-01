import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Brain, MonitorSmartphone, LineChart } from 'lucide-react'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, medicalServiceSchema, faqSchema } from '@/lib/schema'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { AppointmentForm } from '@/components/AppointmentForm'
import { FaqSection, type FaqItem } from '@/components/FaqSection'
import { BottomCta } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.concussionProgram.title,
  description: PAGE_SEO.concussionProgram.description,
  path: '/concussion-program/',
})

const stats = [
  { num: '500+', label: 'Concussion Patients Treated' },
  { num: '24/7', label: 'Telehealth Enabled Access' },
  { num: 'AI', label: 'Guideline Supported Management' },
  { num: '1', label: 'Coordinated Care Team' },
]

const approachPoints = [
  'Structured neurological assessment of concussion and post concussion symptoms',
  'Standardized symptom tracking over the course of recovery',
  'AI assisted, guideline informed treatment recommendations',
  'Telehealth access that reduces barriers to timely follow up',
  'Consistent, organized clinical documentation',
]

const pillars = [
  {
    icon: Brain,
    title: 'AI Assisted Guidance',
    body: 'The platform helps surface recommended treatment pathways aligned with recognized concussion management guidelines, supporting clinicians in delivering consistent, evidence informed care.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Integrated Telehealth',
    body: 'Secure virtual visits make timely assessment and follow up easier for patients, supporting continuity of care between in person appointments and throughout recovery.',
  },
  {
    icon: LineChart,
    title: 'Structured Tracking',
    body: 'Standardized symptom monitoring captures recovery over time in an organized, reviewable format, giving clinicians a clear, longitudinal view of each patient progress.',
  },
]

const journey = [
  { n: 'Step 01', title: 'Assessment', body: 'A thorough neurological evaluation establishes a baseline and identifies the symptoms and factors most relevant to your recovery.' },
  { n: 'Step 02', title: 'Care Plan', body: 'Your clinician develops an individualized plan, with the platform helping align recommendations to established concussion guidelines.' },
  { n: 'Step 03', title: 'Monitoring', body: 'Structured symptom tracking and telehealth check ins keep your care responsive as your recovery evolves.' },
  { n: 'Step 04', title: 'Recovery', body: 'Progress is reviewed against your baseline, with care adjusted toward a safe return to daily activity, work, or sport.' },
]

const services = [
  { title: 'Acute Concussion Evaluation', body: 'Prompt neurological assessment following a head injury, with clear guidance on next steps and what to monitor.' },
  { title: 'Post Concussion Syndrome', body: 'Structured management for patients with persistent symptoms such as headache, cognitive difficulty, dizziness, or fatigue.' },
  { title: 'Symptom Monitoring', body: 'Standardized, longitudinal tracking of recovery through the Kavera platform between and during visits.' },
  { title: 'Telehealth Follow Up', body: 'Convenient virtual visits that support timely reassessment and continuity of care throughout the recovery period.' },
  { title: 'Return to Activity Guidance', body: 'Clinician directed planning for a safe, stepwise return to work, school, or athletic activity.' },
  { title: 'Coordinated Documentation', body: 'Organized, consistent clinical records that clearly capture assessment, progress, and management over time.' },
]

const audiences = [
  { title: 'Injury and Accident Patients', body: 'Individuals who have sustained a concussion from a fall, motor vehicle accident, or other injury and need thorough evaluation and ongoing management.' },
  { title: 'Athletes', body: 'Patients requiring careful assessment and structured return to play planning after a sports related head injury.' },
  { title: 'Persistent Symptom Patients', body: 'Those experiencing prolonged or post concussion symptoms who benefit from coordinated, longitudinal care.' },
]

const concussionFaqs: FaqItem[] = [
  {
    question: 'What is the concussion program at the Institute For Spine Surgery?',
    answer:
      'It is a clinician led program for the evaluation and management of concussion and post concussion symptoms. Our neurological team pairs hands on assessment with the Kavera telehealth and AI platform to deliver structured, evidence informed care.',
  },
  {
    question: 'What is Kavera?',
    answer:
      'Kavera is an automated concussion management platform that integrates telehealth and artificial intelligence. It supports clinicians with assessment, symptom tracking, and recommended treatment pathways consistent with established concussion guidelines. It is a clinical decision support tool and does not replace professional medical judgment.',
  },
  {
    question: 'When should I be evaluated after a head injury?',
    answer:
      'Seek prompt medical evaluation after any head injury, especially with symptoms such as headache, dizziness, confusion, nausea, sensitivity to light, or difficulty concentrating. Early assessment helps establish a baseline and guides safe recovery.',
  },
  {
    question: 'Do you treat post concussion syndrome?',
    answer:
      'Yes. We provide structured management for patients with persistent symptoms such as headache, cognitive difficulty, dizziness, or fatigue, using longitudinal symptom tracking and coordinated follow up.',
  },
  {
    question: 'Can concussion care be done through telehealth?',
    answer:
      'Many follow up visits can be completed through secure telehealth, which supports timely reassessment and continuity of care. Your clinician will advise when an in person visit is needed.',
  },
  {
    question: 'How do I request a consultation?',
    answer:
      'Request a consultation online through our appointment form or call (914) 948 3008. Our team responds within one business day.',
  },
]

export default function ConcussionProgramPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema('/concussion-program/'),
          medicalServiceSchema({
            name: 'Concussion Program',
            description: PAGE_SEO.concussionProgram.description,
            url: toCanonicalUrl('/concussion-program/'),
          }),
          faqSchema(concussionFaqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            Concussion and Brain Injury Program
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[20ch]">
            Expert concussion care, guided by intelligent technology.
          </h1>
          <p className="mt-5 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            Our neurological team combines clinical expertise with Kavera, an AI and telehealth platform built to
            support structured assessment, monitoring, and evidence based management of concussion and post concussion syndrome.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="#appointment"
              className="btn-arrow inline-flex items-center gap-3 bg-iss-coral-dark hover:bg-iss-coral text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <span>Request Consultation</span>
              <span className="arrow">→</span>
            </Link>
            <a
              href="tel:+19149483008"
              className="inline-flex items-center gap-3 bg-white hover:bg-iss-alt text-iss-teal-dark px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              (914) 948 3008
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 border-y border-stone-200" aria-label="Program at a glance">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-iss-teal text-4xl md:text-5xl leading-none">{s.num}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-iss-body/70 font-bold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / The Program */}
      <section id="program" className="bg-white px-6 lg:px-12 py-12 md:py-16 scroll-mt-32" aria-labelledby="program-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">The Program</p>
            <h2 id="program-heading" className="mt-4 font-heading text-h2">
              Built from real clinical experience.
            </h2>
            <div className="mt-5 space-y-4 text-iss-body font-light leading-relaxed max-w-xl">
              <p>
                The concussion program at the Institute For Spine Surgery grew out of years of hands on neurological practice at
                New York Brain and Spine Surgery. Having evaluated and managed concussion across a wide range of patients, our team
                developed a more structured, technology supported approach to care.
              </p>
              <p>
                That experience became the foundation for Kavera, an automated platform that integrates telehealth and
                artificial intelligence to assist clinicians with assessment, symptom tracking, and recommended treatment pathways
                consistent with established concussion guidelines.
              </p>
              <p>
                The result is a program that pairs experienced clinical judgment with tools designed to bring consistency,
                structure, and clear documentation to every stage of recovery.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-iss-ink text-white p-8 md:p-10">
              <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Our Approach</p>
              <h3 className="mt-3 font-heading text-2xl text-white">Clinician led. Technology supported.</h3>
              <ul className="mt-6 space-y-0 list-none">
                {approachPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 py-3 border-t border-white/15 text-white/85 text-sm font-light leading-relaxed first:border-t-0"
                  >
                    <span className="text-iss-coral font-bold" aria-hidden="true">
                      ›
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform / Kavera */}
      <section id="platform" className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16 scroll-mt-32" aria-labelledby="platform-heading">
        <div className="mb-10 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Kavera</p>
          <h2 id="platform-heading" className="mt-4 font-heading text-h2">
            The technology behind the program.
          </h2>
          <p className="mt-5 text-iss-body font-light leading-relaxed">
            Kavera is an automated concussion management platform that supports, never replaces, clinical decision making,
            helping our team deliver structured, consistent care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <AnimateOnScroll key={p.title} animation="up" delay={i * 70}>
                <div className="bg-white p-8 h-full border-t-4 border-iss-teal">
                  <span className="inline-flex w-12 h-12 items-center justify-center bg-iss-teal text-white">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-iss-ink uppercase tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </section>

      {/* Patient Journey */}
      <section id="journey" className="bg-iss-ink text-white px-6 lg:px-12 py-12 md:py-16 scroll-mt-32" aria-labelledby="journey-heading">
        <div className="mb-10 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-coral font-bold">Patient Journey</p>
          <h2 id="journey-heading" className="mt-4 font-heading text-h2 text-white">
            What to expect.
          </h2>
          <p className="mt-5 text-white/80 font-light leading-relaxed">
            A clear, coordinated pathway from first assessment through recovery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15">
          {journey.map((step) => (
            <div key={step.n} className="bg-iss-ink p-6 md:p-7">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-iss-coral">{step.n}</p>
              <h3 className="mt-3 font-heading text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-white/75 font-light text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-6 lg:px-12 py-12 md:py-16 scroll-mt-32" aria-labelledby="services-heading">
        <div className="mb-10 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Services</p>
          <h2 id="services-heading" className="mt-4 font-heading text-h2">
            Comprehensive concussion care.
          </h2>
          <p className="mt-5 text-iss-body font-light leading-relaxed">
            From acute evaluation to management of persistent symptoms, our program supports patients across the full course of
            recovery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <AnimateOnScroll key={svc.title} animation="up" delay={i * 60}>
              <div className="bg-iss-alt p-6 h-full border-t-4 border-iss-teal">
                <h3 className="font-heading text-xl font-bold text-iss-ink uppercase tracking-tight">{svc.title}</h3>
                <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{svc.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16" aria-labelledby="audience-heading">
        <div className="mb-8 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Who We Help</p>
          <h2 id="audience-heading" className="mt-4 font-heading text-h2">
            Care for a range of concussion patients.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((aud) => (
            <div key={aud.title} className="bg-white p-6 border-l-4 border-iss-teal">
              <h3 className="font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">{aud.title}</h3>
              <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{aud.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        id="faq"
        headingId="faq-heading"
        title="Concussion care questions."
        subtitle="Answers to common questions about our concussion program and the Kavera platform."
        items={concussionFaqs}
        className="bg-white px-6 lg:px-12 py-12 md:py-16"
      />

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
            <p className="mt-6 text-iss-body/70 font-light text-xs leading-relaxed max-w-md">
              This page is for general informational purposes only and does not constitute medical advice. Kavera is a
              clinical decision support tool used by our care team and does not replace professional medical judgment. If you have
              experienced a head injury, seek appropriate medical evaluation.
            </p>
          </div>
          <div className="lg:col-span-7">
            <AppointmentForm formType="concussion" />
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  )
}
