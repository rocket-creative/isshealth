import Image from 'next/image'
import Link from 'next/link'

type Service = {
  title: string
  description: string
  image: string
  imageAlt: string
  href?: string
}

const services: Service[] = [
  {
    title: 'Minimally Invasive Spine Surgery',
    description:
      'Advanced minimally invasive techniques deliver quicker recovery times and less postoperative pain.',
    image: '/images/minimally-invasive-spine-surgery.jpg',
    imageAlt: 'Minimally invasive spine surgery in operating room',
    href: '/cervical-center/surgical-options/',
  },
  {
    title: 'Spinal Fusion',
    description:
      'Spinal fusion procedures stabilize the spine and relieve chronic pain effectively.',
    image: '/images/spinal_fusion.jpg',
    imageAlt: 'Spinal fusion illustration',
    href: '/the-lumbar-center/surgical-options/',
  },
  {
    title: 'Physical Therapy and Rehabilitation',
    description:
      'Tailored rehabilitation programs help patients regain strength and mobility post surgery.',
    image: '/images/physical_therapy.jpg',
    imageAlt: 'Physical therapy rehabilitation session',
    href: '/the-lumbar-center/non-surgical-options/',
  },
  {
    title: 'Pain Management',
    description:
      'Comprehensive pain management strategies improve quality of life for patients with chronic spine conditions.',
    image: '/images/pain_management.jpg',
    imageAlt: 'Pain management consultation',
    href: '/cervical-center/non-surgical-options/',
  },
]

export function ServicesGrid() {
  return (
    <section className="bg-white py-14 md:py-20 px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">
            Our Leading Edge Approach
          </p>
          <h2 className="mt-4 font-heading text-h2">Comprehensive spine care, from assessment to recovery.</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {services.map((service) => (
          <article key={service.title} className="group">
            <Link href={service.href ?? '/appointments/'} className="block img-card relative aspect-[4/3] bg-iss-alt">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 810px) 100vw, 50vw"
                className="object-cover"
              />
            </Link>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div className="max-w-md">
                <h3 className="font-heading font-bold text-iss-ink text-xl md:text-2xl uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-iss-body font-light text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.href ?? '/appointments/'}
                aria-label={`Learn more about ${service.title}`}
                className="btn-arrow flex-shrink-0 inline-flex items-center justify-center w-12 h-12 border border-iss-teal text-iss-teal hover:bg-iss-teal hover:text-white transition-colors"
              >
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
