import type { Metadata } from 'next'
import KontaktPageClient from '@/app/kontakt/KontaktPageClient'

export const metadata: Metadata = {
  title: 'Contact – Conseil gratuit',
  description: 'Conseil sans engagement pour votre visite à 360°. Réponse personnelle du propriétaire sous 24 heures.',
  alternates: {
    canonical: '/fr/kontakt',
    languages: { 'de-CH': '/kontakt', 'fr-CH': '/fr/kontakt', en: '/en/kontakt', 'x-default': '/kontakt' },
  },
}

export default function KontaktPageFr() {
  return <KontaktPageClient locale="fr" />
}
