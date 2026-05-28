import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { CONDITION_SEO } from '@/content/page-seo'
import { getConditionFaqs } from '@/content/clinical-faqs'
import { getConditionSchemaDetails } from '@/content/condition-schema'
import { ConditionLayout } from '@/components/ConditionLayout'
import { lumbarConditions, allLumbarSlugs } from '@/content/conditions'
import { lumbarConditionContent } from '@/content/lumbar-condition-content'

type Params = { condition: string }

export function generateStaticParams() {
  return allLumbarSlugs().map((condition) => ({ condition }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { condition } = await params
  const c = lumbarConditions[condition]
  if (!c) return {}
  const seo = CONDITION_SEO[condition]
  return buildMetadata({
    title: seo?.title ?? c.metaTitle,
    description: seo?.description ?? c.metaDescription,
    path: `/common-diagnosis/${condition}/`,
  })
}

export default async function LumbarConditionPage({ params }: { params: Promise<Params> }) {
  const { condition } = await params
  const c = lumbarConditions[condition]
  const content = lumbarConditionContent[condition]
  if (!c || !content) notFound()

  const related = Object.values(lumbarConditions)
    .filter((x) => x.slug !== c.slug)
    .map((x) => ({ label: x.title, href: `/common-diagnosis/${x.slug}/` }))

  related.push({ label: 'Non Surgical Options', href: '/the-lumbar-center/non-surgical-options/' })
  related.push({ label: 'Surgical Options', href: '/the-lumbar-center/surgical-options/' })

  return (
    <ConditionLayout
      eyebrow="Common Diagnosis"
      title={c.title}
      intro={c.intro}
      canonicalPath={`/common-diagnosis/${c.slug}/`}
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'The Lumbar Center', url: '/the-lumbar-center/' },
        { name: c.title, url: `/common-diagnosis/${c.slug}/` },
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
