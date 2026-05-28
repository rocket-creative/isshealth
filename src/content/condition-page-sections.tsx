import type { ReactNode } from 'react'
import { ConditionSection } from '@/components/ConditionSection'
import { ContentPlaceholder } from '@/components/ContentPlaceholder'

export function buildOverview(paragraphs: string[]): ReactNode {
  const wordCount = paragraphs.join(' ').split(/\s+/).filter(Boolean).length
  const all = [...paragraphs]

  if (wordCount < 150) {
    all.push(
      'Additional clinical overview content is pending medical review by Dr. Abrahams and the clinical team.',
    )
  }

  return all.map((paragraph, index) => <p key={index}>{paragraph}</p>)
}

type ConditionPageSectionsProps = {
  overview: ReactNode
  nonSurgical: ReactNode
  surgical: ReactNode
}

export function ConditionPageSections({ overview, nonSurgical, surgical }: ConditionPageSectionsProps) {
  return (
    <>
      <ConditionSection title="Overview">{overview}</ConditionSection>

      <ConditionSection title="Symptoms">
        <ContentPlaceholder section="Symptoms" />
      </ConditionSection>

      <ConditionSection title="Causes">
        <ContentPlaceholder section="Causes" />
      </ConditionSection>

      <ConditionSection title="When to see a specialist">
        <ContentPlaceholder section="When to see a specialist" />
      </ConditionSection>

      <ConditionSection title="Non surgical treatment options">{nonSurgical}</ConditionSection>

      <ConditionSection title="Surgical options">{surgical}</ConditionSection>

      <ConditionSection title="Recovery">
        <ContentPlaceholder section="Recovery" />
      </ConditionSection>
    </>
  )
}
