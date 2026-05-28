import type { Metadata } from 'next'

const SITE_URL = 'https://iss.health'
const SITE_NAME = 'Institute For Spine Surgery'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/header.jpg`

type PageMeta = {
  title: string
  description: string
  path: string
  image?: string
  robots?: Metadata['robots']
}

export function toCanonicalUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized.endsWith('/') ? normalized : `${normalized}/`}`
}

export function buildMetadata({ title, description, path, image, robots }: PageMeta): Metadata {
  const canonicalUrl = toCanonicalUrl(path)
  const ogImage = image ?? DEFAULT_OG_IMAGE

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: robots ?? { index: true, follow: true },
  }
}

export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE }
