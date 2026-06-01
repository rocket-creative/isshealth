import { AnimateOnScroll } from '@/components/AnimateOnScroll'

/**
 * Name, address, phone block. Kept byte identical everywhere it appears and in
 * the clinic schema so the practice NAP stays consistent for local search.
 */
export function NapBlock() {
  return (
    <section
      className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16 border-t border-stone-200"
      aria-labelledby="nap-heading"
    >
      <AnimateOnScroll animation="up">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Visit us</p>
        <h2 id="nap-heading" className="mt-3 font-heading text-h2">
          Our location.
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
        <div>
          <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-body/70">Office</p>
          <address className="mt-2 not-italic text-iss-body font-light leading-relaxed">
            Institute For Spine Surgery
            <br />
            244 Westchester Avenue, Suite 209
            <br />
            West Harrison, NY 10604
          </address>
        </div>
        <div>
          <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-body/70">Phone</p>
          <a href="tel:+19149483008" className="mt-2 inline-block text-iss-teal font-bold link-underline">
            (914) 948 3008
          </a>
        </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
