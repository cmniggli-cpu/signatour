import type { Metadata } from 'next'
import ReferenztourLead from '@/components/features/ReferenztourLead'
import { getReferenztourTours } from '@/lib/referenztour-tours'

export const metadata: Metadata = {
  title: 'Voir une visite de référence de votre secteur',
  description: 'Choisissez votre secteur, deux indications – et découvrez immédiatement une vraie visite 360° Signature de votre secteur. Offre sans engagement sous 24 heures.',
  alternates: {
    canonical: '/fr/referenztour',
    languages: { 'de-CH': '/referenztour', 'fr-CH': '/fr/referenztour', en: '/en/referenztour', 'x-default': '/referenztour' },
  },
}

export default function ReferenztourPageFr() {
  return (
    <div className="nigpage" style={{ paddingTop: 64 }}>
      <ReferenztourLead locale="fr" tours={getReferenztourTours('fr')} heading="h1" readQueryParam />
    </div>
  )
}
