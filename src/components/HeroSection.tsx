import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  eyebrow: string
  headline: string
  body: string
  ctaLabel?: string
  ctaHref?: string
  imageSrc: string
  imageAlt: string
}

export function HeroSection({
  eyebrow,
  headline,
  body,
  ctaLabel = 'Learn More',
  ctaHref = '/appointments/',
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B8FB8]">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#034862]/90 via-[#05668D]/70 to-transparent" />
      </div>

      <div className="relative grid grid-cols-12 px-6 lg:px-12 py-12 md:py-16 lg:py-20 items-center">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <p className="font-body text-[11px] sm:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[18ch]">
            {headline}
          </h1>
          <p className="mt-5 max-w-lg text-white/90 text-base md:text-lg font-light leading-relaxed">
            {body}
          </p>
          <Link
            href={ctaHref}
            className="btn-arrow mt-7 inline-flex items-center gap-3 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            <span>{ctaLabel}</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
