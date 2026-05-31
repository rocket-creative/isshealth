import type { ReactNode } from 'react'

/** Content is approved; renders children with no review highlight. */
export function Highlight({ children }: { children: ReactNode }) {
  return <>{children}</>
}
