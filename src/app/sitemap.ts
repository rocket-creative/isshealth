import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'
import { allCervicalSlugs, allLumbarSlugs } from '@/content/conditions'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    '/',
    '/providers/',
    '/locations/',
    '/appointments/',
    '/innovations/',
    '/in-the-news/',
    '/cervical-center/',
    '/cervical-center/surgical-options/',
    '/cervical-center/non-surgical-options/',
    '/the-lumbar-center/',
    '/the-lumbar-center/surgical-options/',
    '/the-lumbar-center/non-surgical-options/',
    '/cervical-spine/',
    '/lumbar-spine/',
    '/meet-dr-abrahams/',
  ]

  const cervical = allCervicalSlugs().map((s) => `/cervical-center/${s}/`)
  const lumbar = allLumbarSlugs().map((s) => `/common-diagnosis/${s}/`)

  return [...staticRoutes, ...cervical, ...lumbar].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/common-diagnosis/') || path.startsWith('/cervical-center/') ? 0.7 : 0.8,
  }))
}
