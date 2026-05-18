import type { Metadata } from 'next'

const SITE_URL = 'https://iss.health'
const SITE_NAME = 'Institute For Spine Surgery'

type PageMeta = {
  title: string
  description: string
  path: string
  image?: string
}

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const canonical = `${SITE_URL}${path}`
  const ogImage = image ?? `${SITE_URL}/images/header.jpg`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
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
    robots: { index: true, follow: true },
  }
}

export { SITE_URL, SITE_NAME }
