import Image from 'next/image'

interface CompanyCardProps {
  name: string
  description: string
  logo?: string
  logoAlt?: string
}

export function CompanyCard({ name, description, logo, logoAlt }: CompanyCardProps) {
  return (
    <article className="bg-white border border-stone-200 p-8 md:p-10 flex flex-col">
      {logo ? (
        <>
          <div className="h-20 flex items-center">
            <Image
              src={logo}
              alt={logoAlt ?? `${name} company logo`}
              width={200}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="mt-6 font-heading text-2xl font-bold text-iss-ink uppercase tracking-tight">{name}</p>
        </>
      ) : (
        <div className="h-20 flex items-center">
          <p className="font-heading text-3xl md:text-4xl font-bold text-iss-ink uppercase tracking-tight">{name}</p>
        </div>
      )}
      <p className="mt-4 text-iss-body font-light leading-relaxed text-sm md:text-base">{description}</p>
    </article>
  )
}
