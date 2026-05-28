import Image from 'next/image'
import Link from 'next/link'
import { Phone, Check } from 'lucide-react'

interface LandingHeroProps {
  eyebrow: string
  headline: string
  body: string
  bullets: string[]
  imageSrc: string
  imageAlt: string
}

export function LandingHero({ eyebrow, headline, body, bullets, imageSrc, imageAlt }: LandingHeroProps) {
  return (
    <section className="relative bg-[#0B8FB8] overflow-hidden">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-iss-teal-dark/95 via-iss-teal/80 to-iss-teal/30" />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="md:col-span-7 lg:col-span-7">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">{eyebrow}</p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[18ch]">{headline}</h1>
          <p className="mt-5 max-w-lg text-white/90 text-base md:text-lg font-light leading-relaxed">{body}</p>
          <ul className="mt-6 space-y-2.5 list-none max-w-xl">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white text-sm md:text-base font-light">
                <span className="flex-shrink-0 mt-1 w-5 h-5 bg-iss-coral flex items-center justify-center">
                  <Check size={12} className="text-white" aria-hidden="true" />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="#appointment"
              className="btn-arrow inline-flex items-center gap-3 bg-iss-coral-dark hover:bg-iss-coral text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              <span>Request Consultation</span>
              <span className="arrow">→</span>
            </Link>
            <a
              href="tel:+19149483008"
              className="inline-flex items-center gap-3 bg-white hover:bg-iss-alt text-iss-teal-dark px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              (914) 948 3008
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
