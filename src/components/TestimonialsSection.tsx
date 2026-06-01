export type Testimonial = {
  name: string
  source: string
  quote: string
}

/** Verbatim patient reviews migrated from the practice's public Google profile (iss.health). */
export const testimonials: Testimonial[] = [
  {
    name: 'Mr Lombardi',
    source: 'Google',
    quote:
      'Excellent remarkable TLIF. The surgical area is perfect. When other surgeons tell me I need surgery I check in with him. His knowledge and conservative approach has helped me avoid unnecessary surgeries. He is the best, no other way to say it!',
  },
  {
    name: 'Faith Schwenker',
    source: 'Google',
    quote:
      'Dr. Abrahams did my surgery and it was a great success. After nearly 8 years of pain, I finally found a doctor who could help me. My sciatica nerve was compressing my L4 and L5, which was giving me pain and a very poor quality of life. Not only does Dr. Abrahams have a great bedside manner, but he certainly knows the complexities of the spine. Thank you so much for giving me my life back!',
  },
  {
    name: 'Kathleen Cully',
    source: 'Google',
    quote:
      'Dr. Abrahams is an extremely compassionate and highly skilled neurosurgeon who, along with Dr. C. Shannon, saved my husband\u2019s life by removing a complicated malignant metastatic brain tumor during a very long surgery. In addition, Dr. Abrahams has been my surgeon for several spinal procedures and I trust him with my life.',
  },
  {
    name: 'Helena Mattis',
    source: 'Google',
    quote:
      'Dr. Abrahams literally saved my life. I went to him back in 2004 in horrible shape after being misdiagnosed by my primary care physician. He went above and beyond in saving my life. I highly recommend him for his skills, ability, his humanity and the love he demonstrates for both his patients and his work.',
  },
  {
    name: 'Anthony',
    source: 'Google',
    quote:
      'Dr. Abrahams is the best, very caring and takes time out to listen instead of rushing. Thanks Doc, I might have to come see you again.',
  },
  {
    name: 'Angelo Troiano',
    source: 'Google',
    quote: 'Very professional and thorough with my surgery.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-iss-alt py-14 md:py-20 px-6 lg:px-12" aria-labelledby="testimonials-heading">
      <div className="max-w-3xl">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patient Stories</p>
        <h2 id="testimonials-heading" className="mt-4 font-heading text-h2">
          What do patients say about our care?
        </h2>
      </div>
      <div className="mt-10">
        {testimonials.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
            {testimonials.map((item) => (
              <li key={item.name} className="bg-white border-t-4 border-iss-teal p-8">
                <blockquote className="text-iss-body font-light leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="mt-6 font-body text-xs uppercase tracking-[0.14em] font-bold text-iss-teal">
                  {item.name} · {item.source} Review
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
