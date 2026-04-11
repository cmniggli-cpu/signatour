import type { Metadata } from 'next'
import PaketePageClient from './PaketePageClient'

export const metadata: Metadata = {
  title: 'Pakete & Preise',
  description: 'Transparente Preise für 360-Grad-Rundgänge. Einmalpreis pro Tour. Kein Abo. Kein Vertrag. Ab CHF 690.',
}

export default function PaketePage() {
  return <PaketePageClient />
}
