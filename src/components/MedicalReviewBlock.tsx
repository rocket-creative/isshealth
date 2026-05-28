import Link from 'next/link'
import { Highlight } from '@/components/Highlight'

const REVIEW_DATE = 'May 18, 2026'

export function MedicalReviewBlock() {
  return (
    <aside
      className="not-prose my-10 border-l-4 border-iss-teal bg-iss-alt px-5 py-4 text-sm leading-relaxed text-iss-body"
      aria-label="Medical review"
    >
      <p>
        Medically reviewed by{' '}
        <Link href="/providers/" className="font-bold text-iss-teal link-underline">
          Dr. John M. Abrahams, MD
        </Link>
        ,{' '}
        <Highlight>board certified neurosurgeon and Fellow of the American Association of Neurological Surgeons</Highlight>.
        Last reviewed: <Highlight>{REVIEW_DATE}</Highlight>.
      </p>
    </aside>
  )
}
