import { Phone, MapPin, Printer } from 'lucide-react'

interface LocationsSectionProps {
  variant?: 'full' | 'compact'
}

interface Office {
  label: string
  addressLine1: string
  addressLine2: string
  phone?: string
  phoneHref?: string
  fax?: string
  mapQuery: string
  mapTitle: string
}

const offices: Office[] = [
  {
    label: 'Main Office',
    addressLine1: '244 Westchester Avenue, Suite 209',
    addressLine2: 'West Harrison, NY 10604',
    phone: '(914) 948 3008',
    phoneHref: 'tel:+19149483008',
    fax: '(914) 992 7401',
    mapQuery: '244+Westchester+Avenue+Suite+209+West+Harrison+NY+10604',
    mapTitle: 'Map to Institute For Spine Surgery, West Harrison',
  },
  {
    label: 'Concussion Center',
    addressLine1: '1985 Crompond Road, Suite B2',
    addressLine2: 'Cortlandt Manor, NY 10567',
    phone: '(914) 948 3008',
    phoneHref: 'tel:+19149483008',
    mapQuery: '1985+Crompond+Road+Suite+B2+Cortlandt+Manor+NY+10567',
    mapTitle: 'Map to Institute For Spine Surgery, Cortlandt Manor',
  },
]

export function LocationsSection({ variant = 'full' }: LocationsSectionProps) {
  const Wrapper = variant === 'full' ? 'section' : 'div'
  return (
    <Wrapper className={variant === 'full' ? 'bg-iss-alt py-14 md:py-20 px-6 lg:px-12' : ''}>
      {variant === 'full' && (
        <div className="mb-12">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Locations</p>
          <h2 className="mt-4 font-heading text-h2">Two offices across Westchester County.</h2>
        </div>
      )}
      <div className="space-y-10 md:space-y-16">
        {offices.map((office) => (
          <div key={office.label} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="bg-white border-l-4 border-iss-teal p-8 md:p-10">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-coral font-bold">{office.label}</p>
              <p className="mt-3 font-heading text-2xl md:text-3xl font-bold text-iss-ink uppercase tracking-tight leading-tight">
                Institute For Spine Surgery
              </p>
              <div className="mt-6 space-y-4 text-iss-body font-light">
                <div className="flex gap-3">
                  <MapPin size={18} className="flex-shrink-0 text-iss-teal mt-1" aria-hidden="true" />
                  <address className="not-italic">
                    {office.addressLine1}
                    <br />
                    {office.addressLine2}
                  </address>
                </div>
                {office.phone && office.phoneHref && (
                  <div className="flex gap-3">
                    <Phone size={18} className="flex-shrink-0 text-iss-teal mt-1" aria-hidden="true" />
                    <a href={office.phoneHref} className="link-underline hover:text-iss-teal font-bold">
                      {office.phone}
                    </a>
                  </div>
                )}
                {office.fax && (
                  <div className="flex gap-3">
                    <Printer size={18} className="flex-shrink-0 text-iss-teal mt-1" aria-hidden="true" />
                    <span>{office.fax}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] relative overflow-hidden">
              <iframe
                title={office.mapTitle}
                src={`https://www.google.com/maps?q=${office.mapQuery}&output=embed`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
