import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: `360°-Touren, die verkaufen – Hotels, Spa, Gastro & Immobilien | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  verification: {
    google: 'rFUfyoAdrSXUBMgwPDBZiswiultn5Wt40t7Bvs2Kji0',
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    siteName: SITE_NAME,
    title: `360°-Touren, die verkaufen – Hotels, Spa, Gastro & Immobilien | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
}

const BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Rue de l'Industrie 43",
    postalCode: '2720',
    addressLocality: 'Tramelan',
    addressCountry: 'CH',
  },
  areaServed: 'Schweiz',
  priceRange: 'CHF 990 – CHF 4\'497',
  founder: { '@type': 'Person', name: 'Marius Niggli' },
  knowsAbout: ['360-Grad-Rundgänge', 'Virtuelle Touren', 'Google Street View', 'Digitales Marketing'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
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
