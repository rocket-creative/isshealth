'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export type AccordionItem = {
  question: string
  answer: string | React.ReactNode
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
      {items.map((item, i) => {
        const expanded = openIndex === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(expanded ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left hover:text-iss-teal transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
              aria-expanded={expanded}
            >
              <span className="font-heading text-lg md:text-2xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
                {item.question}
              </span>
              <span className="flex-shrink-0 w-10 h-10 border border-iss-teal text-iss-teal flex items-center justify-center">
                {expanded ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
              </span>
            </button>
            {expanded && (
              <div className="pb-8 pr-10 max-w-prose text-iss-body font-light text-base md:text-lg leading-relaxed">
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
