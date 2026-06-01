import Link from 'next/link'
import { JsonLd, breadcrumbSchema } from '@/lib/schema'
import { toCanonicalUrl } from '@/lib/metadata'

export type Crumb = { name: string; url: string }

/**
 * Visible Home > Concussion Program > [current] breadcrumb trail plus a
 * matching BreadcrumbList JSON-LD built from the same items.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.url.startsWith('http') ? item.url : toCanonicalUrl(item.url),
  }))

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Breadcrumb"
        className="text-xs uppercase tracking-[0.18em] text-iss-body flex flex-wrap gap-2"
      >
        {items.map((b, i) => (
          <span key={b.url} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className="text-iss-ink font-bold">{b.name}</span>
            ) : (
              <Link href={b.url} className="link-underline hover:text-iss-teal">
                {b.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
