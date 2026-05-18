import Link from 'next/link'
import { JsonLd, breadcrumbSchema, medicalConditionSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/metadata'

export type Breadcrumb = { name: string; url: string }

export type RelatedLink = { label: string; href: string }

interface ConditionLayoutProps {
  eyebrow: string
  title: string
  intro: string
  breadcrumbs: Breadcrumb[]
  related?: RelatedLink[]
  canonicalPath: string
  children: React.ReactNode
}

export function ConditionLayout({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  related = [],
  canonicalPath,
  children,
}: ConditionLayoutProps) {
  const canonical = `${SITE_URL}${canonicalPath}`
  return (
    <article>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: `${SITE_URL}${b.url}` }))),
          medicalConditionSchema({ name: title, description: intro, url: canonical }),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6 flex flex-wrap gap-2">
          {breadcrumbs.map((b, i) => (
            <span key={b.url} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === breadcrumbs.length - 1 ? (
                <span className="text-iss-ink font-bold">{b.name}</span>
              ) : (
                <Link href={b.url} className="link-underline hover:text-iss-teal">
                  {b.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">{eyebrow}</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">{title}</h1>
        <p className="mt-5 max-w-prose text-iss-body text-base md:text-lg font-light leading-relaxed">{intro}</p>
      </header>

      <div className="px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="prose-iss lg:col-span-8 max-w-prose">{children}</div>

        {related.length > 0 && (
          <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Related</p>
            <ul className="mt-4 flex flex-col divide-y divide-stone-200 border-t border-b border-stone-200 list-none">
              {related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block py-4 text-iss-ink hover:text-iss-teal font-body text-sm uppercase tracking-wide font-bold transition-colors"
                  >
                    {r.label} →
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-iss-teal text-white p-6">
              <p className="font-heading text-xl font-bold uppercase tracking-tight">Schedule a consultation</p>
              <p className="mt-2 font-light text-sm leading-relaxed">
                Our team evaluates your condition and recommends the right path, surgical or non surgical.
              </p>
              <Link
                href="/appointments/"
                className="btn-arrow mt-4 inline-flex items-center gap-2 bg-white text-iss-teal px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-iss-alt transition-colors"
              >
                <span>Request Appointment</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </aside>
        )}
      </div>

      <BottomCta />
    </article>
  )
}

export function BottomCta() {
  return (
    <section className="bg-iss-ink text-white px-6 lg:px-12 py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Start your recovery</p>
        <h2 className="mt-4 font-heading text-h2 text-white">Discover advanced spine care solutions.</h2>
        <p className="mt-5 text-white/80 text-lg font-light leading-relaxed">
          Take the first step toward a pain free life. Schedule a consultation to explore leading edge spine surgery options at the
          Institute For Spine Surgery. Our expert team guides you through a personalized plan for optimal recovery.
        </p>
        <Link
          href="/appointments/"
          className="btn-arrow mt-8 inline-flex items-center gap-3 bg-iss-coral hover:bg-iss-coral/90 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
        >
          <span>Schedule Your Consultation</span>
          <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
