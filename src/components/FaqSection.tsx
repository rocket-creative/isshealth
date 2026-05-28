import { Accordion, type AccordionItem } from '@/components/Accordion'
import { Highlight } from '@/components/Highlight'

export type FaqItem = { question: string; answer: string }

type FaqSectionProps = {
  id: string
  headingId: string
  title: string
  subtitle?: string
  items: FaqItem[]
  highlightAnswers?: boolean
  className?: string
}

export function FaqSection({
  id,
  headingId,
  title,
  subtitle,
  items,
  highlightAnswers = true,
  className = 'bg-iss-alt px-6 lg:px-12 py-12 md:py-16',
}: FaqSectionProps) {
  const accordionItems: AccordionItem[] = items.map((item) => ({
    question: item.question,
    answer: highlightAnswers ? (
      <Highlight>{item.answer}</Highlight>
    ) : (
      item.answer
    ),
  }))

  return (
    <section id={id} className={className} aria-labelledby={headingId}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patient questions</p>
          <h2 id={headingId} className="mt-4 font-heading text-h2">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-6 text-iss-body font-light leading-relaxed">{subtitle}</p>
          ) : null}
        </div>
        <div className="lg:col-span-8">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  )
}
