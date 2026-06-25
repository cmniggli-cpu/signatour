import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import { defaultLocale, isLocale, localeHtml, localeOg, stripLocale, type Locale } from '@/lib/i18n/config'
import { buildAlternates } from '@/lib/i18n/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

async function requestLocaleAndPath(): Promise<{ locale: Locale; basePath: string }> {
  const h = await headers()
  const value = h.get('x-locale')
  const locale = isLocale(value) ? value : defaultLocale
  const pathname = h.get('x-pathname') || '/'
  return { locale, basePath: stripLocale(pathname) }
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, basePath } = await requestLocaleAndPath()
  const title = `360°-Touren, die verkaufen – Hotels, Spa, Gastro & Immobilien | ${SITE_NAME}`

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    alternates: buildAlternates(basePath, locale),
    verification: {
      google: 'rFUfyoAdrSXUBMgwPDBZiswiultn5Wt40t7Bvs2Kji0',
    },
    openGraph: {
      type: 'website',
      locale: localeOg[locale],
      url: `${SITE_URL}${basePath === '/' ? '' : basePath}`,
      siteName: SITE_NAME,
      title,
      description: SITE_DESCRIPTION,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – 360°-Touren, die verkaufen`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: SITE_DESCRIPTION,
      images: ['/og-image.jpg'],
    },
  }
}

const TEL_E164 = CONTACT_PHONE.replace(/[^+\d]/g, '')

const BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: 'Niggli 360 Signature Tours',
  url: SITE_URL,
  logo: `${SITE_URL}/niggli-logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  email: CONTACT_EMAIL,
  telephone: TEL_E164,
  description: SITE_DESCRIPTION,
  priceRange: 'CHF 990–10000',
  currenciesAccepted: 'CHF',
  founder: { '@type': 'Person', name: 'Marius Niggli' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Rue de l'Industrie 43",
    postalCode: '2720',
    addressLocality: 'Tramelan',
    addressRegion: 'BE',
    addressCountry: 'CH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.2225,
    longitude: 7.1006,
  },
  areaServed: { '@type': 'Country', name: 'Schweiz' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: TEL_E164,
    contactType: 'customer service',
    availableLanguage: ['German', 'French', 'English'],
  },
  knowsAbout: ['360-Grad-Rundgänge', 'Virtuelle Touren', 'Google Street View', 'Digitales Marketing'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '360°-Touren Pakete',
    itemListElement: [
      {
        '@type': 'Offer',
        price: '990',
        priceCurrency: 'CHF',
        itemOffered: {
          '@type': 'Service',
          name: 'Basic – 360°-Tour',
          description: 'Einstiegspaket für kleinere Räume und Betriebe',
        },
      },
      {
        '@type': 'Offer',
        price: '2497',
        priceCurrency: 'CHF',
        itemOffered: {
          '@type': 'Service',
          name: 'Signature – 360°-Tour',
          description: 'Premium-Tour mit Corporate Design, Hotspots und Mehrsprachigkeit',
        },
      },
      {
        '@type': 'Offer',
        price: '4497',
        priceCurrency: 'CHF',
        itemOffered: {
          '@type': 'Service',
          name: 'Pro – 360°-Tour',
          description: "Grossprojekte ab CHF 4'497.– mit Buchungsintegration (Einzelofferte)",
        },
      },
    ],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale } = await requestLocaleAndPath()
  return (
    <html lang={localeHtml[locale]} className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSONLD) }} />
      </body>
    </html>
  )
}
