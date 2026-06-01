import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, webPageSchema } from '@/lib/schema'
import { BottomCta } from '@/components/ConditionLayout'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Highlight } from '@/components/Highlight'
import { articlesByDate } from '@/content/news'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.inTheNews.title,
  description: PAGE_SEO.inTheNews.description,
  path: '/in-the-news/',
})

const articles = articlesByDate()

export default function NewsPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema('/in-the-news/'),
          webPageSchema({
            name: PAGE_SEO.inTheNews.title,
            description: PAGE_SEO.inTheNews.description,
            url: toCanonicalUrl('/in-the-news/'),
          }),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body mb-6">
          <Link href="/" className="hover:text-iss-teal">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-iss-ink font-bold">In The News</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Newsroom</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">In the news.</h1>
      </header>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16" aria-labelledby="news-articles-heading">
        <h2 id="news-articles-heading" className="sr-only">
          News articles
        </h2>
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {articles.map((a) => (
            <AnimateOnScroll key={a.slug} animation="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              <Link href={`/in-the-news/${a.slug}/`} className="lg:col-span-5 relative aspect-[4/3] overflow-hidden bg-iss-alt group">
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <article className="lg:col-span-7 max-w-prose">
                <p className="font-body text-xs uppercase tracking-[0.18em] text-iss-coral font-bold">
                  <time dateTime={a.datePublished}>{a.dateDisplay}</time> · {a.location}
                </p>
                <p className="mt-3 text-sm text-iss-body">
                  By{' '}
                  <Link href="/providers/" className="font-bold text-iss-teal link-underline">
                    Dr. John M. Abrahams, MD
                  </Link>
                </p>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
                  <Link href={`/in-the-news/${a.slug}/`} className="hover:text-iss-teal transition-colors">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-5 text-iss-body font-light text-base md:text-lg leading-relaxed">
                  <Highlight>{a.summary}</Highlight>
                </p>
                <Link
                  href={`/in-the-news/${a.slug}/`}
                  className="btn-arrow mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-iss-teal hover:text-iss-teal-dark transition-colors"
                >
                  <span>Read Article</span>
                  <span className="arrow">→</span>
                </Link>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <BottomCta />
    </>
  )
}
