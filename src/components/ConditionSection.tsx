import type { ReactNode } from 'react'

type ConditionSectionProps = {
  title: string
  id?: string
  children: ReactNode
}

export function ConditionSection({ title, id, children }: ConditionSectionProps) {
  const sectionId = id ?? title.toLowerCase().replace(/\s+/g, '-')

  return (
    <section id={sectionId} className="scroll-mt-28" aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`}>{title}</h2>
      {children}
    </section>
  )
}
