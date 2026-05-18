import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { ConditionLayout } from '@/components/ConditionLayout'
import { PostSurgerySection } from '@/components/PostSurgerySection'
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
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
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
    .slice(0, 4)
    .map((x) => ({ label: x.title, href: `/cervical-center/${x.slug}/` }))

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
    >
      {content}
      <PostSurgerySection kind="cervical" />
    </ConditionLayout>
  )
}
