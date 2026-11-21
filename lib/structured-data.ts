import {
  BUILD_PRICE_AMOUNT,
  CONTACT_EMAIL,
  LINKEDIN_URL,
  MONTHLY_PRICE_AMOUNT,
  SITE_NAME,
  SITE_URL,
  X_URL,
  type Faq,
} from './site'
import { absoluteUrl } from './metadata'

const organizationSameAs = [LINKEDIN_URL, X_URL]
const personSameAs = [X_URL]

export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: 'Custom websites and tools for real estate agents anywhere in the United States.',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}/brand/badge.png`,
      image: `${SITE_URL}/og-image.png`,
      founder: { '@id': `${SITE_URL}/#matt-salit` },
      sameAs: organizationSameAs,
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#matt-salit`,
      name: 'Matt Salit',
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/matt-salit.webp`,
      jobTitle: 'Licensed Realtor and Web Developer',
      sameAs: personSameAs,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      image: `${SITE_URL}/og-image.png`,
      description:
        'Custom websites and tools for real estate agents anywhere in the United States, built by a licensed realtor.',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      provider: { '@id': `${SITE_URL}/#organization` },
      founder: { '@id': `${SITE_URL}/#matt-salit` },
      makesOffer: [
        {
          '@type': 'Offer',
          name: 'Custom real estate agent website',
          price: BUILD_PRICE_AMOUNT,
          priceCurrency: 'USD',
          url: `${SITE_URL}/pricing`,
          description:
            'One-time custom website build for a real estate agent, including the standard stack.',
        },
        {
          '@type': 'Offer',
          name: 'Hosting, maintenance, domain management, and back-end support',
          url: `${SITE_URL}/pricing`,
          description:
            'Monthly plan included with the site. Month to month. Cancel anytime. No cancellation fee.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: MONTHLY_PRICE_AMOUNT,
            priceCurrency: 'USD',
            unitText: 'MONTH',
          },
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#website-build`,
      name: 'Custom real estate agent website',
      serviceType: 'Real estate agent website design',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Custom real estate agent website',
          price: BUILD_PRICE_AMOUNT,
          priceCurrency: 'USD',
          url: `${SITE_URL}/pricing`,
          description: 'One-time custom website build for a real estate agent.',
        },
        {
          '@type': 'Offer',
          name: 'Hosting, maintenance, domain management, and back-end support',
          price: MONTHLY_PRICE_AMOUNT,
          priceCurrency: 'USD',
          url: `${SITE_URL}/pricing`,
          description: 'Monthly plan included with the site. Month to month. Cancel anytime. No cancellation fee.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: MONTHLY_PRICE_AMOUNT,
            priceCurrency: 'USD',
            unitText: 'MONTH',
          },
        },
      ],
    },
  ],
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  const url = absoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `${title} | ${SITE_NAME}`,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  }
}

export function breadcrumbJsonLd(path: string, name: string) {
  const url = absoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: url,
      },
    ],
  }
}

export function faqJsonLd(faqs: Faq[], path: string) {
  const url = absoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
