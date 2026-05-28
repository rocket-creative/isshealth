import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Page Not Found | Spine Care | ISS',
  description:
    'This page could not be found. Return to the Institute For Spine Surgery homepage or call (914) 948 3008 for help scheduling spine care in West Harrison, NY.',
  path: '/404/',
  robots: { index: false, follow: false },
})

export default function NotFound() {
  return (
    <section
      className="px-6 lg:px-12 py-24 md:py-32 min-h-[60vh] flex flex-col items-start justify-center max-w-3xl scroll-mt-28"
      aria-labelledby="not-found-heading"
    >
      <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Error 404</p>
      <h1 id="not-found-heading" className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">
        Page not found.
      </h1>
      <p className="mt-5 text-iss-body text-lg font-light leading-relaxed">
        The page you are looking for may have moved or no longer exists. Try the homepage, or call{' '}
        <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none">
          (914) 948 3008
        </a>{' '}
        if you need help.
      </p>
      <Link
        href="/"
        className="btn-arrow mt-8 inline-flex items-center gap-3 bg-iss-teal hover:bg-iss-teal-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
      >
        <span>Back to home</span>
        <span className="arrow">→</span>
      </Link>
    </section>
  )
}
