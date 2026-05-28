'use client'

import { useId, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export type AccordionItem = {
  question: string
  answer: string | React.ReactNode
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
      {items.map((item, i) => {
        const expanded = openIndex === i
        const buttonId = `${baseId}-button-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={buttonId}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIndex(expanded ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left hover:text-iss-teal transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none min-h-[44px]"
                aria-expanded={expanded}
                aria-controls={panelId}
              >
                <span className="font-heading text-lg md:text-2xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 w-11 h-11 border border-iss-teal text-iss-teal flex items-center justify-center"
                  aria-hidden="true"
                >
                  {expanded ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="pb-8 pr-10 max-w-prose text-iss-body font-light text-base md:text-lg leading-relaxed"
            >
              {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
