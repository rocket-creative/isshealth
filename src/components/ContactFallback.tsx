import { Phone, Mail, Download } from 'lucide-react'

type ContactFallbackProps = {
  eyebrow?: string
  heading: string
  body: string
  download?: { href: string; label: string }
  note?: string
}

export function ContactFallback({ eyebrow, heading, body, download, note }: ContactFallbackProps) {
  return (
    <div className="bg-iss-alt p-8 md:p-10">
      {eyebrow ? (
        <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">{eyebrow}</p>
      ) : null}
      <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-iss-ink">{heading}</h3>
      <p className="mt-4 text-iss-body font-light leading-relaxed max-w-prose">{body}</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="tel:+19149483008"
          className="btn-arrow inline-flex items-center justify-center gap-3 bg-iss-teal hover:bg-iss-teal-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none min-h-[44px]"
        >
          <Phone size={18} aria-hidden="true" />
          <span>(914) 948 3008</span>
        </a>
        <a
          href="mailto:info@nybrainspine.com"
          className="btn-arrow inline-flex items-center justify-center gap-3 border border-iss-teal text-iss-teal hover:bg-iss-teal hover:text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none min-h-[44px]"
        >
          <Mail size={18} aria-hidden="true" />
          <span>info@nybrainspine.com</span>
        </a>
      </div>

      {download ? (
        <a
          href={download.href}
          download
          className="mt-4 inline-flex items-center gap-2 text-iss-teal font-bold text-sm link-underline"
        >
          <Download size={16} aria-hidden="true" />
          <span>{download.label}</span>
        </a>
      ) : null}

      {note ? <p className="mt-6 text-iss-body/70 text-xs font-light max-w-prose">{note}</p> : null}
    </div>
  )
}
