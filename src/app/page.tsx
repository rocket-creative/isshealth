import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { StatsBar } from '@/components/StatsBar'
import { ServicesGrid } from '@/components/ServicesGrid'
import { Accordion } from '@/components/Accordion'
import { BottomCta } from '@/components/ConditionLayout'
import { DraftCallout } from '@/components/DraftCallout'
import { LeadCaptureSection } from '@/components/LeadCaptureSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { buildMetadata } from '@/lib/metadata'
import { JsonLd, faqSchema } from '@/lib/schema'
import { PAGE_SEO } from '@/content/page-seo'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  path: '/',
})

const faqItems = [
  {
    question: 'What conditions do you treat?',
    answer:
      'We treat the full range of cervical and lumbar spine conditions, including disc herniation, stenosis, radiculopathy, myelopathy, fractures, spondylolisthesis, and spinal cord tumors. Our team also manages neck and low back pain, foot drop, and neurogenic claudication.',
  },
  {
    question: 'Do I need surgery for my spine condition?',
    answer:
      'Most patients improve with non surgical care. We begin with conservative options like physical therapy, medication, acupuncture, and epidural injections. Surgery is recommended when a patient has a neurological deficit, progressive symptoms, or has not responded to non surgical treatment.',
  },
  {
    question: 'What is minimally invasive spine surgery?',
    answer:
      'Minimally invasive surgery uses small incisions, specialized instruments, and intraoperative imaging to treat spine conditions with less tissue disruption. Patients typically experience shorter hospital stays, less postoperative pain, and quicker return to normal activity.',
  },
  {
    question: 'How long is recovery after spine surgery?',
    answer:
      'Recovery varies by procedure. Many cervical patients return to normal activity within six weeks. Lumbar fusion patients usually resume normal activity within three months.',
  },
  {
    question: 'What insurance do you accept?',
    answer:
      'Our practice accepts most major insurance plans. Call (914) 948 3008 to confirm coverage before your appointment.',
  },
  {
    question: 'Will I need a second surgery?',
    answer:
      'The risk of needing additional surgery after a first cervical spine surgery is approximately 4 percent over a lifetime, most commonly at the level above or below the initial surgical site. For lumbar procedures, revision risk depends on the diagnosis, procedure, and patient factors.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <HeroSection
        eyebrow="Leaders in the treatment of disorders of the spine"
        headline="The Institute For Spine Surgery"
        body="World renowned doctors dedicated to the highest quality treatment and outcomes for all patients."
        ctaLabel="Learn More"
        ctaHref="/providers/"
        imageSrc="/images/header.jpg"
        imageAlt="Three dimensional spine render on cyan background"
      />

      <StatsBar />

      {/* Commitment to Excellence */}
      <section className="bg-white py-14 md:py-20 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <AnimateOnScroll animation="left" className="lg:col-span-7">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Our Commitment</p>
            <h2 id="commitment-heading" className="mt-4 font-heading text-h2">
              How does the Institute advance spine care?
            </h2>
            <div className="mt-6 max-w-prose space-y-5 text-iss-body font-light text-lg leading-relaxed">
              <p>
                The Institute For Spine Surgery is dedicated to advancing the field of spine care through leading edge research and
                innovative treatment methods. Our mission is to enhance the quality of life for our patients by providing
                comprehensive, evidence based care that ensures the best possible outcomes.
              </p>
              <p>
                We are committed to using the latest technology and evidence based practices to deliver exceptional spine surgery
                services.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/providers/"
                className="btn-arrow inline-flex items-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
              >
                <span>Meet Our Providers</span>
                <span className="arrow">→</span>
              </Link>
              <Link
                href="/innovations/"
                className="btn-arrow inline-flex items-center gap-2 border border-iss-teal text-iss-teal hover:bg-iss-teal hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
              >
                <span>Our Innovations</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="right" className="lg:col-span-5 grid grid-cols-2 gap-4 self-center">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/stethoscope.jpg"
                alt="Stethoscope on medical records"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <Image
                src="/images/xray.jpg"
                alt="Spine x-ray imaging"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
        <DraftCallout type="approve" source="Homepage local SEO">
          <p>
            Serving patients from across Westchester County and the greater New York area, including White Plains, Mt.
            Kisco, Greenwich, Yonkers, and New York City. Our office is located at 244 Westchester Avenue, Suite 209,
            West Harrison, NY 10604, with hospital affiliations at Northern Westchester Hospital, Westchester Medical
            Center, and White Plains Hospital.
          </p>
        </DraftCallout>
      </section>

      {/* Cutting-edge approach cards */}
      <section className="bg-iss-alt py-14 md:py-20 px-6 lg:px-12">
        <div className="max-w-3xl mb-14">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Our Leading Edge Approach</p>
          <h2 className="mt-4 font-heading text-h2">A future forward practice rooted in patient first care.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Driven Precision',
              body:
                'We use artificial intelligence to tailor surgical plans, ensure precision, and minimize recovery time. A future forward practice.',
            },
            {
              title: 'Patient Centered Care',
              body:
                'We put the patient first. Personalized treatment plans address individual needs and promote faster recovery.',
            },
            {
              title: 'World Renowned Experts',
              body:
                'Our world renowned doctors are dedicated to the highest quality treatment and outcomes for all patients.',
            },
          ].map((block, i) => (
            <AnimateOnScroll key={block.title} animation="up" delay={i * 100} className="bg-white border-t-4 border-iss-teal p-8 md:p-10">
              <p className="font-body text-xs uppercase tracking-[0.18em] text-iss-coral font-bold">0{i + 1}</p>
              <h3 className="mt-4 font-heading text-2xl md:text-3xl font-bold text-iss-ink uppercase tracking-tight">{block.title}</h3>
              <p className="mt-4 text-iss-body font-light leading-relaxed">{block.body}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <ServicesGrid />

      <LeadCaptureSection />

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patient Questions</p>
            <h2 id="home-faq-heading" className="mt-4 font-heading text-h2">
              What questions do patients ask most about spine care?
            </h2>
            <p className="mt-6 text-iss-body font-light leading-relaxed">
              Call <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">(914) 948 3008</a> with any question, or request an
              appointment and we will reach out within one business day.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <BottomCta />
    </>
  )
}
