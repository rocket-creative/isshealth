import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs'
import { JsonLd, webPageSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Appointment Request Received | ISS',
  description:
    'Your appointment request was received. Our care team will reach out within one business day. Call (914) 948 3008 Monday through Friday, 8am to 5pm ET for immediate assistance.',
  path: '/appointments/confirmed/',
  robots: { index: false, follow: false },
})

export default function AppointmentConfirmedPage() {
  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema('/appointments/confirmed/', {
            confirmed: 'Request Received',
          }),
          webPageSchema({
            name: 'Appointment Request Received',
            description: 'Confirmation page after submitting an appointment request.',
            url: toCanonicalUrl('/appointments/confirmed/'),
          }),
        ]}
      />

      <section className="bg-white px-6 lg:px-12 py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Appointments</p>
          <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">We received your request.</h1>
          <p className="mt-6 text-iss-body text-lg font-light leading-relaxed">
            A member of our care team will reach out within one business day to confirm your appointment. If you need
            immediate assistance, call{' '}
            <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
              (914) 948 3008
            </a>
            , Monday through Friday, 8am to 5pm ET.
          </p>
          <Link
            href="/"
            className="btn-arrow mt-10 inline-flex items-center gap-3 bg-iss-teal hover:bg-iss-teal-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
          >
            <span>Return Home</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
