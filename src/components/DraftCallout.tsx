import type { ReactNode } from 'react'

type DraftCalloutProps = {
  children: ReactNode
  source?: string
  type?: 'approve' | 'supply'
  className?: string
}

/** Content is approved; renders children inline with no draft callout styling. */
export function DraftCallout({ children, className = '' }: DraftCalloutProps) {
  return <div className={`font-light ${className}`}>{children}</div>
}
