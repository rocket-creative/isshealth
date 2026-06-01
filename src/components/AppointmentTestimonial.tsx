/** Real patient review from the practice's public Google profile, shown on the appointments conversion path. */
export function AppointmentTestimonial() {
  return (
    <figure
      className="md:col-span-2 border-t-4 border-iss-teal bg-iss-alt px-6 py-5 text-iss-body"
      aria-label="Patient testimonial"
    >
      <p className="font-body text-xs uppercase tracking-[0.14em] font-bold text-iss-teal">Patient perspective</p>
      <blockquote className="mt-3 font-light leading-relaxed">
        &ldquo;Dr. Abrahams did my surgery and it was a great success. After nearly 8 years of pain, I finally found a
        doctor who could help me. Thank you so much for giving me my life back!&rdquo;
      </blockquote>
      <figcaption className="mt-3 font-body text-xs uppercase tracking-[0.14em] font-bold text-iss-teal">
        Faith Schwenker · Google Review
      </figcaption>
    </figure>
  )
}
