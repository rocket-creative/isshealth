import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { BottomCta } from '@/components/ConditionLayout'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export const metadata: Metadata = buildMetadata({
  title: 'In The News | Institute For Spine Surgery',
  description:
    'News, publications, and announcements from Dr. John M. Abrahams and the Institute For Spine Surgery.',
  path: '/in-the-news/',
})

const articles = [
  {
    title: 'Neurosurgeons Navigate Changing Landscape: Balancing Costs, Reimbursements, and Private Equity',
    date: 'November 28, 2023',
    location: 'West Harrison, NY',
    summary:
      'In a rapidly evolving healthcare landscape, neurosurgery is undergoing significant transformations. The article "The Future of Private Practice Neurosurgery and the Pitfalls of Private Equity," authored by John M. Abrahams, MD, sheds light on the changing dynamics within the neurosurgical field, addressing critical issues surrounding costs, reimbursements, and the growing influence of private equity in healthcare.',
    image: '/images/grand-opening.jpeg',
    alt: 'Press event at Institute For Spine Surgery',
  },
]

export default function NewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'In The News', url: `${SITE_URL}/in-the-news/` },
        ])}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6">
          <Link href="/" className="hover:text-iss-teal">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-iss-ink font-bold">In The News</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Newsroom</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">In the news.</h1>
      </header>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {articles.map((a) => (
            <AnimateOnScroll key={a.title} animation="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden bg-iss-alt">
                <Image src={a.image} alt={a.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <article className="lg:col-span-7 max-w-prose">
                <p className="font-body text-xs uppercase tracking-[0.18em] text-iss-coral font-bold">
                  {a.date} · {a.location}
                </p>
                <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
                  {a.title}
                </h2>
                <p className="mt-5 text-iss-body font-light text-base md:text-lg leading-relaxed">{a.summary}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <BottomCta />
    </>
  )
}
