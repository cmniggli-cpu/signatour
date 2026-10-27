import type { Metadata } from 'next'
import ReferenztourLead from '@/components/features/ReferenztourLead'
import { getReferenztourTours } from '@/lib/referenztour-tours'

export const metadata: Metadata = {
  title: 'Referenztour für Ihre Branche ansehen',
  description: 'Branche wählen, zwei Angaben – und sofort eine echte 360°-Signature-Tour aus Ihrer Branche erleben. Unverbindliche Offerte innert 24 Stunden.',
  alternates: {
    canonical: '/referenztour',
    languages: { 'de-CH': '/referenztour', 'fr-CH': '/fr/referenztour', en: '/en/referenztour', 'x-default': '/referenztour' },
  },
}

export default function ReferenztourPage() {
  return (
    <div className="nigpage" style={{ paddingTop: 64 }}>
      <ReferenztourLead locale="de" tours={getReferenztourTours('de')} heading="h1" readQueryParam />
    </div>
  )
}
