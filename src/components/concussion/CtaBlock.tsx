import Link from 'next/link'
import { Phone } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

/**
 * Single primary call to action. "Request a Consultation" links to the existing
 * consultation form anchor; a secondary click to call uses the practice line.
 */
export function CtaBlock({
  heading = 'Take the next step toward recovery.',
  line = 'Share a few details and our team will reach out within one business day.',
  requestHref = '/concussion-program/#appointment',
}: {
  heading?: string
  line?: string
  requestHref?: string
}) {
  return (
    <section
      className="bg-iss-ink text-white px-6 lg:px-12 py-14 md:py-20 scroll-mt-28"
      aria-labelledby="cta-block-heading"
    >
      <AnimateOnScroll animation="up" className="max-w-3xl">
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Request a consultation</p>
        <h2 id="cta-block-heading" className="mt-4 font-heading text-h2 text-white">
          {heading}
        </h2>
        <p className="mt-5 text-white/90 text-lg font-light leading-relaxed">{line}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href={requestHref}
            className="btn-arrow inline-flex items-center justify-center gap-3 min-h-[44px] bg-iss-coral-dark hover:bg-iss-coral text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <span>Request a Consultation</span>
            <span className="arrow">→</span>
          </Link>
          <a
            href="tel:+19149483008"
            className="inline-flex items-center justify-center gap-3 min-h-[44px] border border-white/40 hover:bg-white/10 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <Phone size={16} aria-hidden="true" />
            Call (914) 948 3008
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
