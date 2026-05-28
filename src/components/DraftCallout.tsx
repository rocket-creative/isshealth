import type { ReactNode } from 'react'

type DraftCalloutProps = {
  children: ReactNode
  source?: string
  type?: 'approve' | 'supply'
  className?: string
}

const typeLabels: Record<NonNullable<DraftCalloutProps['type']>, string> = {
  approve: 'Dr. Abrahams to approve',
  supply: 'Dr. Abrahams to supply',
}

/** Visible draft callout for content pending review or supply. Not hidden on staging. */
export function DraftCallout({ children, source, type = 'approve', className = '' }: DraftCalloutProps) {
  return (
    <aside
      className={`my-6 border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-iss-body ${className}`}
      role="note"
      aria-label={`Draft content: ${typeLabels[type]}`}
    >
      <p className="font-body text-[10px] uppercase tracking-[0.18em] font-bold text-amber-800">
        {typeLabels[type]}
        {source ? ` · ${source}` : ''}
      </p>
      <div className="mt-2 font-light">{children}</div>
    </aside>
  )
}
