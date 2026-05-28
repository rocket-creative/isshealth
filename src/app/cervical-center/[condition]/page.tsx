import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { CONDITION_SEO } from '@/content/page-seo'
import { getConditionFaqs } from '@/content/clinical-faqs'
import { getConditionSchemaDetails } from '@/content/condition-schema'
import { ConditionLayout } from '@/components/ConditionLayout'
import { cervicalConditions, allCervicalSlugs } from '@/content/conditions'
import { cervicalConditionContent } from '@/content/cervical-condition-content'

type Params = { condition: string }

export function generateStaticParams() {
  return allCervicalSlugs().map((condition) => ({ condition }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { condition } = await params
  const c = cervicalConditions[condition]
  if (!c) return {}
  const seo = CONDITION_SEO[condition]
  return buildMetadata({
    title: seo?.title ?? c.metaTitle,
    description: seo?.description ?? c.metaDescription,
    path: `/cervical-center/${condition}/`,
  })
}

export default async function CervicalConditionPage({ params }: { params: Promise<Params> }) {
  const { condition } = await params
  const c = cervicalConditions[condition]
  const content = cervicalConditionContent[condition]
  if (!c || !content) notFound()

  const related = Object.values(cervicalConditions)
    .filter((x) => x.slug !== c.slug)
    .map((x) => ({ label: x.title, href: `/cervical-center/${x.slug}/` }))

  related.push({ label: 'Non Surgical Options', href: '/cervical-center/non-surgical-options/' })
  related.push({ label: 'Surgical Options', href: '/cervical-center/surgical-options/' })

  return (
    <ConditionLayout
      eyebrow="Cervical Center"
      title={c.title}
      intro={c.intro}
      canonicalPath={`/cervical-center/${c.slug}/`}
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Cervical Center', url: '/cervical-center/' },
        { name: c.title, url: `/cervical-center/${c.slug}/` },
      ]}
      related={related}
      faqs={getConditionFaqs(c.title)}
      faqHeading="Frequently asked questions"
      schemaDetails={getConditionSchemaDetails(c.slug)}
    >
      {content}
    </ConditionLayout>
  )
}
