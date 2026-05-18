import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { AppointmentForm } from '@/components/AppointmentForm'
import { LocationsSection } from '@/components/LocationsSection'
import { Phone } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Request an Appointment | Institute For Spine Surgery',
  description:
    'Request a consultation with the Institute For Spine Surgery in West Harrison, NY. Fill the secure form or call (914) 948 3008.',
  path: '/appointments/',
})

export default function AppointmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Appointments', url: `${SITE_URL}/appointments/` },
        ])}
      />

      <header className="relative bg-iss-ink text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/appointments.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-iss-ink via-iss-ink/80 to-transparent" />
        </div>
        <div className="relative px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-white/70 mb-6">
            <Link href="/" className="hover:text-iss-coral">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Appointments</span>
          </nav>
          <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Appointments</p>
          <h1 className="mt-4 font-gotham font-bold text-white text-h1 uppercase">Make an appointment.</h1>
          <p className="mt-5 max-w-prose text-white/80 text-lg font-light leading-relaxed">
            Please complete the form to connect with us. You can also call our main office at{' '}
            <a href="tel:+19149483008" className="text-iss-coral font-bold link-underline">
              (914) 948 3008
            </a>
            .
          </p>
        </div>
      </header>

      <section className="bg-white px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Secure Form</p>
          <h2 className="mt-4 font-heading text-h2">Request a consultation.</h2>
          <p className="mt-4 text-iss-body font-light leading-relaxed max-w-prose">
            We reply within one business day. Your information is transmitted securely and is never shared.
          </p>
          <div className="mt-10">
            <AppointmentForm />
          </div>
        </div>

        <aside className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-6">
          <div className="bg-iss-alt p-8">
            <p className="font-body text-xs uppercase tracking-[0.18em] text-iss-coral font-bold">Or call us directly</p>
            <a
              href="tel:+19149483008"
              className="mt-3 flex items-center gap-3 text-iss-teal font-heading text-3xl md:text-4xl font-bold hover:text-iss-teal-dark transition-colors"
            >
              <Phone size={28} aria-hidden="true" />
              (914) 948 3008
            </a>
            <p className="mt-2 text-iss-body/70 text-sm font-light">Monday through Friday, 8am to 5pm ET.</p>
          </div>
          <div className="bg-iss-teal text-white p-8">
            <p className="font-body text-xs uppercase tracking-[0.18em] font-bold">Main Office</p>
            <p className="mt-3 font-heading text-xl font-bold uppercase tracking-tight">New York Brain and Spine Surgery, P.C.</p>
            <address className="mt-3 not-italic text-white/90 font-light text-sm leading-relaxed">
              244 Westchester Avenue, Suite 209
              <br />
              West Harrison, NY 10604
              <br />
              Fax: (914) 992 7401
            </address>
          </div>
        </aside>
      </section>

      <LocationsSection />
    </>
  )
}
