import { SITE_URL } from './metadata'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Institute For Spine Surgery',
  alternateName: 'ISS Health',
  url: SITE_URL,
  logo: `${SITE_URL}/images/iss-logo.png`,
  telephone: '+1-914-948-3008',
  email: 'info@nybrainspine.com',
  medicalSpecialty: ['Neurosurgery', 'Orthopedic Surgery', 'Pain Management'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '244 Westchester Avenue, Suite 209',
    addressLocality: 'West Harrison',
    addressRegion: 'NY',
    postalCode: '10604',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-914-948-3008',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Institute For Spine Surgery',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export function physicianSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. John M. Abrahams, MD',
    medicalSpecialty: 'Neurosurgery',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/providers/`,
    image: `${SITE_URL}/images/dr-john-abrahams.jpg`,
    hospitalAffiliation: [
      { '@type': 'Hospital', name: 'Northern Westchester Hospital', address: 'Mt. Kisco, NY' },
      { '@type': 'Hospital', name: 'Westchester Medical Center', address: 'Valhalla, NY' },
      { '@type': 'Hospital', name: 'White Plains Hospital', address: 'White Plains, NY' },
    ],
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

export function serviceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url,
    provider: { '@id': `${SITE_URL}/#organization` },
  }
}

export function medicalConditionSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name,
    description,
    url,
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Spine' },
  }
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

export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
