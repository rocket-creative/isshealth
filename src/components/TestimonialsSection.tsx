export type Testimonial = {
  firstName: string
  lastInitial: string
  condition: string
  quote: string
}

/** Placeholder until Dr. Abrahams supplies approved patient testimonials. */
export const testimonials: Testimonial[] = []

export function TestimonialsSection() {
  return (
    <section className="bg-iss-alt py-14 md:py-20 px-6 lg:px-12" aria-labelledby="testimonials-heading">
      <div className="max-w-3xl">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patient Stories</p>
        <h2 id="testimonials-heading" className="mt-4 font-heading text-h2">
          What do patients say about our care?
        </h2>
      </div>
      <div className="mt-10 max-w-2xl">
        {testimonials.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
            {testimonials.map((item) => (
              <li key={`${item.firstName}-${item.lastInitial}`} className="bg-white border-t-4 border-iss-teal p-8">
                <blockquote className="text-iss-body font-light leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="mt-6 font-body text-xs uppercase tracking-[0.14em] font-bold text-iss-teal">
                  {item.firstName} {item.lastInitial}. · {item.condition}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="bg-white border-t-4 border-iss-teal p-8 md:p-10">
            <p className="font-heading text-xl md:text-2xl font-bold text-iss-ink uppercase tracking-tight">
              Testimonials pending approval from Dr. Abrahams
            </p>
            <p className="mt-4 text-iss-body font-light leading-relaxed max-w-prose">
              Patient stories will appear here once reviewed and approved by our clinical team.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
