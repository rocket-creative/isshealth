import Link from 'next/link'

/**
 * Medical disclaimer rendered at the bottom of every concussion page, above the
 * footer. Text is exact per the build brief; a linked privacy policy is included.
 */
export function Disclaimer() {
  return (
    <section className="bg-white px-6 lg:px-12 py-10 border-t border-stone-200" aria-label="Medical disclaimer">
      <p className="max-w-prose text-iss-body/70 font-light text-xs leading-relaxed">
        This page is for general information and does not constitute medical advice. Kavera is a clinical decision support
        tool used by our care team and does not replace professional medical judgment. If you have experienced a head injury,
        seek appropriate medical evaluation.
      </p>
      <p className="mt-4 text-iss-body/70 font-light text-xs leading-relaxed">
        Read our{' '}
        <Link href="/privacy-policy/" className="text-iss-teal font-bold link-underline">
          privacy policy
        </Link>
        .
      </p>
    </section>
  )
}
