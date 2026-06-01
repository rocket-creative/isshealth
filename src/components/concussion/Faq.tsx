import { JsonLd, faqSchema } from '@/lib/schema'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export type QA = { q: string; a: string }

/**
 * Server rendered FAQ. Each item is a visible h3 question and a paragraph
 * answer. The matching FAQPage JSON-LD is emitted from the same array, so the
 * visible content and the schema share one source of truth.
 */
export function Faq({
  items,
  title = 'Frequently asked questions',
  headingId = 'faq-heading',
}: {
  items: QA[]
  title?: string
  headingId?: string
}) {
  return (
    <section
      id="faq"
      className="bg-white px-6 lg:px-12 py-12 md:py-16"
      aria-labelledby={headingId}
    >
      <JsonLd data={faqSchema(items.map((item) => ({ question: item.q, answer: item.a })))} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patient questions</p>
          <h2 id={headingId} className="mt-4 font-heading text-h2">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8">
          <dl className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {items.map((item, i) => (
              <AnimateOnScroll key={item.q} animation="up" delay={i * 70} className="py-6 md:py-8">
                <dt>
                  <h3 className="font-heading text-lg md:text-2xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
                    {item.q}
                  </h3>
                </dt>
                <dd className="mt-4 max-w-prose text-iss-body font-light text-base md:text-lg leading-relaxed">
                  {item.a}
                </dd>
              </AnimateOnScroll>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
