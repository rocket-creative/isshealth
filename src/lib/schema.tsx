import { SITE_URL } from './metadata'
import { testimonials } from '@/components/TestimonialsSection'

const reviewSchema = testimonials.map((item) => ({
  '@type': 'Review',
  reviewBody: item.quote,
  author: { '@type': 'Person', name: item.name },
  reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5, worstRating: 1 },
}))

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Institute For Spine Surgery',
  alternateName: 'ISS Health',
  url: SITE_URL,
  logo: `${SITE_URL}/images/iss-logo.png`,
  image: `${SITE_URL}/images/header.jpg`,
  description:
    'World renowned neurosurgery team treating disorders of the spine. Over 4,000 successful surgeries. 98% of patients recommend our care.',
  telephone: '+1-914-948-3008',
  email: 'info@nybrainspine.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '244 Westchester Avenue, Suite 209',
    addressLocality: 'West Harrison',
    addressRegion: 'NY',
    postalCode: '10604',
    addressCountry: 'US',
  },
  // [DR. ABRAHAMS TO APPROVE] — verify geo coordinates and office hours before launch
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0176,
    longitude: -73.7879,
  },
  // [DR. ABRAHAMS TO APPROVE] — confirm Mon–Fri 08:00–17:00 hours are current
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  medicalSpecialty: ['https://schema.org/Neurological', 'https://schema.org/Musculoskeletal'],
  hasMap: 'https://www.google.com/maps?q=244+Westchester+Avenue+Suite+209+West+Harrison+NY+10604',
  sameAs: [
    'https://www.linkedin.com/company/institute-for-spine-surgery/',
    'https://www.instagram.com/instituteforspinesurgery',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-914-948-3008',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  review: reviewSchema,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    bestRating: 5,
    worstRating: 1,
    reviewCount: reviewSchema.length,
  },
}

/** @deprecated Use organizationSchema — same combined MedicalClinic + LocalBusiness entity */
export const homepageSchema = organizationSchema

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Institute For Spine Surgery',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export function physicianSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/providers/#dr-abrahams`,
    name: 'Dr. John M. Abrahams, MD',
    givenName: 'John',
    familyName: 'Abrahams',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'MD',
    jobTitle: 'Neurosurgeon',
    description:
      'Dr. Abrahams is one of the busiest neurosurgeons performing spinal surgery in the Hudson Valley of Lower New York. He has been in practice since 2002 and routinely performs over 150 surgical procedures per year.',
    image: `${SITE_URL}/images/dr-john-abrahams.jpg`,
    url: `${SITE_URL}/providers/`,
    telephone: '+1-914-948-3008',
    medicalSpecialty: ['https://schema.org/Neurological', 'https://schema.org/Musculoskeletal'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'BoardCertification',
        name: 'Board Certified Neurosurgeon',
      },
    ],
    affiliation: [
      {
        '@type': 'Hospital',
        name: 'Northern Westchester Hospital',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mt. Kisco',
          addressRegion: 'NY',
        },
      },
      {
        '@type': 'Hospital',
        name: 'Westchester Medical Center',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Valhalla',
          addressRegion: 'NY',
        },
      },
      {
        '@type': 'Hospital',
        name: 'White Plains Hospital',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'White Plains',
          addressRegion: 'NY',
        },
      },
    ],
    worksFor: { '@id': `${SITE_URL}/#organization` },
    knowsAbout: [
      'Anterior Cervical Discectomy and Fusion',
      'Posterior Lumbar Fusion',
      'Minimally Invasive Spine Surgery',
      'Spinal Cord Tumors',
      'Neurosurgical Robotics',
      'Biomedical Engineering',
    ],
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_URL}/locations/#clinic`,
    name: 'Institute For Spine Surgery',
    url: `${SITE_URL}/locations/`,
    telephone: '+1-914-948-3008',
    image: `${SITE_URL}/images/header.jpg`,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '244 Westchester Avenue, Suite 209',
      addressLocality: 'West Harrison',
      addressRegion: 'NY',
      postalCode: '10604',
      addressCountry: 'US',
    },
    // [DR. ABRAHAMS TO APPROVE] — verify geo coordinates match primary office location
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0176,
      longitude: -73.7879,
    },
    // [DR. ABRAHAMS TO APPROVE] — confirm Mon–Fri 08:00–17:00 hours are current
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Westchester County, New York',
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function webPageSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  }
}

export function medicalServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name,
    description,
    url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Westchester County, New York',
    },
  }
}

/** @deprecated Use medicalServiceSchema */
export function serviceSchema(params: { name: string; description: string; url: string }) {
  return medicalServiceSchema(params)
}

type MedicalConditionSchemaParams = {
  name: string
  description: string
  url: string
  alternateName?: string[]
  associatedAnatomy?: { name: string; bodyLocation?: string }
  possibleTreatment?: string[]
}

export function medicalConditionSchema({
  name,
  description,
  url,
  alternateName,
  associatedAnatomy,
  possibleTreatment,
}: MedicalConditionSchemaParams) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name,
    description,
    url,
    recognizingAuthority: { '@id': `${SITE_URL}/#organization` },
  }

  if (alternateName?.length) {
    schema.alternateName = alternateName
  }

  if (associatedAnatomy) {
    schema.associatedAnatomy = {
      '@type': 'AnatomicalStructure',
      name: associatedAnatomy.name,
      ...(associatedAnatomy.bodyLocation ? { bodyLocation: associatedAnatomy.bodyLocation } : {}),
    }
  }

  if (possibleTreatment?.length) {
    schema.possibleTreatment = possibleTreatment.map((treatment) => ({
      '@type': 'MedicalTherapy',
      name: treatment,
    }))
  }

  return schema
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function articleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author: { '@id': `${SITE_URL}/providers/#dr-abrahams` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
  }
}

export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
