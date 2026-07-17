import type { Metadata } from 'next'
import PaketePageClient from './PaketePageClient'

export const metadata: Metadata = {
  title: 'Pakete & Preise – 360°-Touren ab CHF 990',
  description: 'Transparente Preise für 360-Grad-Rundgänge: Basic CHF 990, Signature CHF 2\'497, Pro ab CHF 4\'497. Die Tour gehört Ihnen – Einmalpreis pro Tour, kein Abo.',
  alternates: {
    canonical: '/pakete',
    languages: { 'de-CH': '/pakete', 'fr-CH': '/fr/pakete', en: '/en/pakete', 'x-default': '/pakete' },
  },
}

export default function PaketePage() {
  return <PaketePageClient />
}
