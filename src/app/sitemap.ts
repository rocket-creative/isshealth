import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'
import { allCervicalSlugs, allLumbarSlugs } from '@/content/conditions'
import { allArticleSlugs } from '@/content/news'

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
    '/concussion-program/',
    '/concussion-program/post-concussion-syndrome/',
    '/concussion-program/sports-concussion-return-to-play/',
    '/concussion-program/concussion-after-car-accident/',
    '/concussion-program/concussion-symptoms/',
    '/concussion-program/telehealth-concussion-care/',
    '/concussion-program/pediatric-youth-concussion/',
    '/meet-dr-abrahams/',
    '/privacy-policy/',
  ]

  const cervical = allCervicalSlugs().map((s) => `/cervical-center/${s}/`)
  const lumbar = allLumbarSlugs().map((s) => `/common-diagnosis/${s}/`)
  const news = allArticleSlugs().map((s) => `/in-the-news/${s}/`)

  return [...staticRoutes, ...cervical, ...lumbar, ...news].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/common-diagnosis/') || path.startsWith('/cervical-center/') ? 0.7 : 0.8,
  }))
}
