import { toCanonicalUrl } from './metadata'
import { breadcrumbSchema } from './schema'

export type BreadcrumbItem = { name: string; url: string }

const DEFAULT_SEGMENT_LABELS: Record<string, string> = {
  providers: 'Providers',
  locations: 'Locations',
  appointments: 'Appointments',
  innovations: 'Innovations',
  'in-the-news': 'In The News',
  'meet-dr-abrahams': 'Meet Dr. Abrahams',
  'cervical-center': 'Cervical Center',
  'the-lumbar-center': 'The Lumbar Center',
  'cervical-spine': 'Cervical Spine',
  'lumbar-spine': 'Lumbar Spine',
  'concussion-program': 'Concussion Program',
  'non-surgical-options': 'Non Surgical Options',
  'surgical-options': 'Surgical Options',
}

function titleCaseSegment(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/** Build breadcrumb items from a URL pathname and optional segment label overrides. */
export function generateBreadcrumbs(pathname: string, segmentLabels?: Record<string, string>): BreadcrumbItem[] {
  const labels = { ...DEFAULT_SEGMENT_LABELS, ...segmentLabels }
  const normalized = pathname.replace(/^\/+|\/+$/g, '')

  if (!normalized) {
    return [{ name: 'Home', url: toCanonicalUrl('/') }]
  }

  const segments = normalized.split('/')
  const items: BreadcrumbItem[] = [{ name: 'Home', url: toCanonicalUrl('/') }]

  if (segments[0] === 'common-diagnosis' && segments.length >= 2) {
    items.push({ name: 'The Lumbar Center', url: toCanonicalUrl('/the-lumbar-center/') })
    const conditionSlug = segments[1]
    items.push({
      name: labels[conditionSlug] ?? titleCaseSegment(conditionSlug),
      url: toCanonicalUrl(`/common-diagnosis/${conditionSlug}/`),
    })
    return items
  }

  let path = ''
  for (const segment of segments) {
    path += `/${segment}`
    items.push({
      name: labels[segment] ?? titleCaseSegment(segment),
      url: toCanonicalUrl(`${path}/`),
    })
  }

  return items
}

export function generateBreadcrumbSchema(pathname: string, segmentLabels?: Record<string, string>) {
  return breadcrumbSchema(generateBreadcrumbs(pathname, segmentLabels))
}
