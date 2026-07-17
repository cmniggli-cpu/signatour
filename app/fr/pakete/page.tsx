import type { Metadata } from 'next'
import PaketePageClient from '@/app/pakete/PaketePageClient'

export const metadata: Metadata = {
  title: 'Forfaits & prix – Visites 360° dès CHF 990',
  description: 'Des prix transparents pour les visites à 360° : Basic CHF 990, Signature CHF 2\'497, Pro dès CHF 4\'497. La visite vous appartient – prix unique, pas d\'abonnement.',
  alternates: {
    canonical: '/fr/pakete',
    languages: { 'de-CH': '/pakete', 'fr-CH': '/fr/pakete', en: '/en/pakete', 'x-default': '/pakete' },
  },
}

export default function PaketePageFr() {
  return <PaketePageClient locale="fr" />
}
