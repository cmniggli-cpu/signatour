import type { Metadata } from 'next'
import ReferenztourLead from '@/components/features/ReferenztourLead'
import { getReferenztourTours } from '@/lib/referenztour-tours'

export const metadata: Metadata = {
  title: 'View a reference tour for your industry',
  description: 'Choose your industry, two quick details – and immediately experience a real 360° Signature Tour from your industry. No-obligation quote within 24 hours.',
  alternates: {
    canonical: '/en/referenztour',
    languages: { 'de-CH': '/referenztour', 'fr-CH': '/fr/referenztour', en: '/en/referenztour', 'x-default': '/referenztour' },
  },
}

export default function ReferenztourPageEn() {
  return (
    <div className="nigpage" style={{ paddingTop: 64 }}>
      <ReferenztourLead locale="en" tours={getReferenztourTours('en')} heading="h1" readQueryParam />
    </div>
  )
}
