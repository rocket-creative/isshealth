import type { ReactNode } from 'react'

/** Wraps copy that needs human review before publish. */
export function Highlight({ children }: { children: ReactNode }) {
  return <span className="bg-yellow-100 dark:bg-yellow-900/40">{children}</span>
}
