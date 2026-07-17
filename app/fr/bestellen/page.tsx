import type { Metadata } from 'next'
import BestellenPageClient from '@/app/bestellen/BestellenPageClient'

export const metadata: Metadata = {
  title: 'Commander un forfait',
  description: 'Commandez votre Signature Tour 360° en une seule étape. Offre ferme sous 24 heures, acompte de 50% seulement à la confirmation. Sans abonnement.',
  alternates: {
    canonical: '/fr/bestellen',
    languages: { 'de-CH': '/bestellen', 'fr-CH': '/fr/bestellen', en: '/en/bestellen', 'x-default': '/bestellen' },
  },
}

export default function BestellenPageFr() {
  return <BestellenPageClient locale="fr" />
}
