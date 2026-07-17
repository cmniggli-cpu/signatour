import type { Metadata } from 'next'
import PaketePageClient from '@/app/pakete/PaketePageClient'

export const metadata: Metadata = {
  title: 'Packages & pricing – 360° tours from CHF 990',
  description: 'Transparent pricing for 360° virtual tours: Basic CHF 990, Signature CHF 2\'497, Pro from CHF 4\'497. The tour is yours – one-time price, no subscription.',
  alternates: {
    canonical: '/en/pakete',
    languages: { 'de-CH': '/pakete', 'fr-CH': '/fr/pakete', en: '/en/pakete', 'x-default': '/pakete' },
  },
}

export default function PaketePageEn() {
  return <PaketePageClient locale="en" />
}
