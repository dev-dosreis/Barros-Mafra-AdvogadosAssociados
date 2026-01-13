'use client'

import Script from 'next/script'
import { siteContent } from '@/content/site'

export function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://barrosmafra.adv.br/#organization',
    name: siteContent.firmFullName,
    alternateName: siteContent.firmName,
    description: siteContent.hero.subtitle,
    url: 'https://barrosmafra.adv.br',
    logo: 'https://barrosmafra.adv.br/logo.svg',
    image: 'https://barrosmafra.adv.br/og-image.jpg',
    telephone: siteContent.contact.phone,
    email: siteContent.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    priceRange: '$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      // Add social media URLs when available
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Jurídicos',
      itemListElement: siteContent.practiceAreas.map((area, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: area.title,
          description: area.description,
        },
        position: index + 1,
      })),
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://barrosmafra.adv.br/#website',
    url: 'https://barrosmafra.adv.br',
    name: siteContent.firmFullName,
    publisher: {
      '@id': 'https://barrosmafra.adv.br/#organization',
    },
    inLanguage: 'pt-BR',
  }

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
