import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata, toCanonicalUrl, SITE_URL } from '@/lib/metadata'
import { JsonLd, articleSchema, breadcrumbSchema } from '@/lib/schema'
import { BottomCta } from '@/components/ConditionLayout'
import { Highlight } from '@/components/Highlight'
import { allArticleSlugs, articlesByDate, getArticle, type NewsArticle } from '@/content/news'

type Params = { slug: string }

export function generateStaticParams() {
  return allArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return buildMetadata({
    title: `${article.title} | ISS`,
    description: article.summary,
    path: `/in-the-news/${article.slug}/`,
    image: `${SITE_URL}${article.image}`,
  })
}

function ArticleBody({ article }: { article: NewsArticle }) {
  return (
    <div className="prose-iss max-w-prose">
      {article.body.map((block, i) => {
        if (block.type === 'heading') {
          return <h2 key={i}>{block.text}</h2>
        }
        if (block.type === 'list') {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i}>
            <Highlight>{block.text}</Highlight>
          </p>
        )
      })}

      {article.externalUrl ? (
        <p className="not-prose mt-8">
          <a
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arrow inline-flex items-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
          >
            <span>Read the full publication</span>
            <span className="arrow">→</span>
          </a>
        </p>
      ) : null}
    </div>
  )
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const canonical = toCanonicalUrl(`/in-the-news/${article.slug}/`)
  const breadcrumbs = [
    { name: 'Home', url: toCanonicalUrl('/') },
    { name: 'In The News', url: toCanonicalUrl('/in-the-news/') },
    { name: article.title, url: canonical },
  ]

  const related = articlesByDate()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  return (
    <article>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            headline: article.title,
            description: article.summary,
            url: canonical,
            image: `${SITE_URL}${article.image}`,
            datePublished: article.datePublished,
            dateModified: article.datePublished,
          }),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body mb-6 flex flex-wrap gap-2">
          <Link href="/" className="link-underline hover:text-iss-teal">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/in-the-news/" className="link-underline hover:text-iss-teal">
            In The News
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-iss-ink font-bold">{article.title}</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
          <time dateTime={article.datePublished}>{article.dateDisplay}</time> · {article.location}
        </p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">{article.title}</h1>
        <p className="mt-4 text-sm text-iss-body">
          By{' '}
          <Link href="/providers/" className="font-bold text-iss-teal link-underline">
            Dr. John M. Abrahams, MD
          </Link>
        </p>
      </header>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/9] overflow-hidden bg-iss-alt mb-10">
              <Image src={article.image} alt={article.alt} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" priority />
            </div>
            <ArticleBody article={article} />
          </div>

          {related.length > 0 ? (
            <aside className="lg:col-span-4 lg:sticky lg:top-36 h-fit">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">More from the newsroom</p>
              <ul className="mt-4 flex flex-col divide-y divide-stone-200 border-t border-b border-stone-200 list-none">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/in-the-news/${r.slug}/`}
                      className="block py-4 text-iss-ink hover:text-iss-teal font-body text-sm font-bold leading-snug transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
                    >
                      {r.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </section>

      <BottomCta />
    </article>
  )
}
