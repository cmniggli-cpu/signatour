import type { Metadata } from 'next'
import PaketePageClient from './PaketePageClient'

export const metadata: Metadata = {
  title: 'Pakete & Preise – 360°-Touren ab CHF 990',
  description: 'Transparente Preise für 360-Grad-Rundgänge: Basic CHF 990, Signature CHF 2\'497, Pro ab CHF 4\'497. Einmalpreis pro Tour, kein Abo, kein Vertrag.',
  alternates: { canonical: '/pakete' },
}

export default function PaketePage() {
  return <PaketePageClient />
}
