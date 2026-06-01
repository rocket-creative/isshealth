import { Phone, MapPin, Printer } from 'lucide-react'

interface LocationsSectionProps {
  variant?: 'full' | 'compact'
}

export function LocationsSection({ variant = 'full' }: LocationsSectionProps) {
  const Wrapper = variant === 'full' ? 'section' : 'div'
  return (
    <Wrapper className={variant === 'full' ? 'bg-iss-alt py-14 md:py-20 px-6 lg:px-12' : ''}>
      {variant === 'full' && (
        <div className="mb-12">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Location</p>
          <h2 className="mt-4 font-heading text-h2">Visit our West Harrison office.</h2>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="bg-white border-l-4 border-iss-teal p-8 md:p-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-coral font-bold">Main Office</p>
          <p className="mt-3 font-heading text-2xl md:text-3xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
            Institute For Spine Surgery
          </p>
          <div className="mt-6 space-y-4 text-iss-body font-light">
            <div className="flex gap-3">
              <MapPin size={18} className="flex-shrink-0 text-iss-teal mt-1" aria-hidden="true" />
              <address className="not-italic">
                244 Westchester Avenue, Suite 209
                <br />
                West Harrison, NY 10604
              </address>
            </div>
            <div className="flex gap-3">
              <Phone size={18} className="flex-shrink-0 text-iss-teal mt-1" aria-hidden="true" />
              <a href="tel:+19149483008" className="link-underline hover:text-iss-teal font-bold">
                (914) 948 3008
              </a>
            </div>
            <div className="flex gap-3">
              <Printer size={18} className="flex-shrink-0 text-iss-teal mt-1" aria-hidden="true" />
              <span>(914) 992 7401</span>
            </div>
          </div>
        </div>
        <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] relative overflow-hidden">
          <iframe
            title="Map to Institute For Spine Surgery"
            src="https://www.google.com/maps?q=244+Westchester+Avenue+Suite+209+West+Harrison+NY+10604&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Wrapper>
  )
}
