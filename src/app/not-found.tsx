import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="px-6 lg:px-12 py-24 md:py-32 min-h-[60vh] flex flex-col items-start justify-center max-w-3xl">
      <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">Error 404</p>
      <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">Page not found.</h1>
      <p className="mt-5 text-iss-body text-lg font-light leading-relaxed">
        The page you are looking for may have moved or no longer exists. Try the homepage, or call{' '}
        <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
          (914) 948 3008
        </a>{' '}
        if you need help.
      </p>
      <Link
        href="/"
        className="btn-arrow mt-8 inline-flex items-center gap-3 bg-iss-teal hover:bg-iss-teal-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
      >
        <span>Back to home</span>
        <span className="arrow">→</span>
      </Link>
    </section>
  )
}
