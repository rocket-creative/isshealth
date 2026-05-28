import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, webPageSchema } from '@/lib/schema'
import { CompanyCard } from '@/components/CompanyCard'
import { BottomCta } from '@/components/ConditionLayout'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.innovations.title,
  description: PAGE_SEO.innovations.description,
  path: '/innovations/',
})

const companies = [
  {
    name: 'EndoMedix',
    description:
      'A hemostatic sealant for use in brain surgery. Founded over ten years ago and based in Montvale, NJ. The company has received over five million dollars in funding and holds numerous patents related to the technology.',
    logo: '/images/endomedix2.png',
    logoAlt: 'EndoMedix company logo',
  },
  {
    name: 'Capseus',
    description:
      'A bone dust collector that uses a patient&apos;s own bone during surgery rather than cadaver bone. Dr. Abrahams has been using the device for years with excellent results. The company now has a national sales force and is developing other products for spine surgery.',
    logo: '/images/capseus.png',
    logoAlt: 'Capseus company logo',
  },
  {
    name: 'OnCallX',
    description:
      'A seamless after hours call software program that eliminates the need for an operator. It allows patients to contact their provider at any time with immediate response and reduces the cost of the service.',
    logo: '/images/oncallx.png',
    logoAlt: 'OnCallX company logo',
  },
  {
    name: 'Neurobotix',
    description:
      'In 2016, Dr. Abrahams began developing a neurosurgical robot to aid in surgical procedures. Teaming with Honeybee Robotics, a leader in lunar exploration vehicles and tools, he developed a prototype Smart Retractor. A patent was filed in 2019.',
    logo: '/images/neurobotix.png',
    logoAlt: 'Neurobotix company logo',
  },
]

const patents = [
  'US Patent 9,414,866 B2 — Spinal Implant Apparatuses and Methods of Implanting and Using Same',
  'US Patent 9,731,044 B2 — Biopolymer System for Tissue Sealing',
  'US Patent 9,259,434 B2 — Biopolymer System for Tissue Sealing',
  'US Patent 8,679,088 B2 — Cranial Evacuation System and Use Thereof',
  'US Patent 8,636,774 B2 — Spinal Implant Apparatuses and Methods of Implanting and Using Same',
  'US Patent 8,591,856 B2 — Spinal Implant Apparatuses and Methods of Implanting and Using Same',
  'US Patent 8,513,217 B2 — Biopolymer System for Tissue Sealing',
  'US Patent 9,387,029 B2 — Spring Screw Apparatuses and Methods Using the Same',
  'US Patent 7,854,923 B2 — Biopolymer System for Tissue Sealing',
  'US Patent 7,829,377 B2 — Diamond Medical Devices',
  'CA Patent 2,808,235 — Systeme De Biopolymeres Pour Reparer De Tissus',
  'CA Patent 2,858,696 — Systeme De Biopolymeres Pour Reparer De Tissus',
  'EP Patent 2,013,237 B1 — Biopolymer System for Tissue Sealing',
  'WO2007149130A1 — Composition and Method for Vascularization',
  'WO2009017753A2 — Chitosan Based Biopolymer System for Treating Degenerative Disc Disease',
  'WO2006076354A3 — Diamond Medical Devices',
]

const pending = [
  'US Patent 15/206,698 — Spring and Screw Apparatus and Methods of Using the Same',
  'US Patent 15/328,671 — Anatomical Specimen Collection Device and System',
  'US Patent 20,200,222,136 A1 — Smart Robot Assisted Brain and Spine Surgical System',
]

export default function InnovationsPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema('/innovations/'),
          webPageSchema({
            name: PAGE_SEO.innovations.title,
            description: PAGE_SEO.innovations.description,
            url: toCanonicalUrl('/innovations/'),
          }),
        ]}
      />

      <header className="relative bg-iss-ink text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image src="/images/innovations.jpg" alt="" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-iss-ink via-iss-ink/70 to-transparent" />
        </div>
        <div className="relative px-6 lg:px-12 pt-10 pb-12 md:pt-14 md:pb-16">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-white/70 mb-6">
            <Link href="/" className="hover:text-iss-coral">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Innovations</span>
          </nav>
          <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Innovation</p>
          <h1 className="mt-4 font-gotham font-bold text-white text-h1 uppercase">
            Medical devices built to change spine care.
          </h1>
          <p className="mt-5 max-w-prose text-white/80 text-lg font-light leading-relaxed">
            Dr. Abrahams has founded multiple medical device companies and authored dozens of patents spanning hemostatic sealants,
            bone preservation, surgical robotics, and after hours care.
          </p>
        </div>
      </header>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="mb-12 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Companies Founded</p>
          <h2 className="mt-4 font-heading text-h2">Four ventures moving patient care forward.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {companies.map((c, i) => (
            <AnimateOnScroll key={c.name} animation="up" delay={i * 100}>
              <CompanyCard {...c} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patents Awarded</p>
            <h2 className="mt-4 font-heading text-h2">A record of inventive spine surgery.</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed max-w-md">
              Sixteen granted patents across the United States, Canada, and Europe covering implants, biopolymers, surgical
              robotics, and medical devices.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3 text-iss-body font-light text-sm md:text-base list-none border-l-2 border-iss-teal pl-6">
              {patents.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-coral font-bold">Pending</p>
            <h2 className="mt-4 font-heading text-h2">Work in progress.</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3 text-iss-body font-light text-sm md:text-base list-none border-l-2 border-iss-coral pl-6">
              {pending.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  )
}
