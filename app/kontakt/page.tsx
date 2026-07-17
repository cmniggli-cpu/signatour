import type { Metadata } from 'next'
import KontaktPageClient from './KontaktPageClient'

export const metadata: Metadata = {
  title: 'Kontakt – Kostenlose Beratung',
  description: 'Unverbindliche Beratung für Ihren 360-Grad-Rundgang. Persönliche Antwort durch den Inhaber innerhalb von 24 Stunden.',
  alternates: {
    canonical: '/kontakt',
    languages: { 'de-CH': '/kontakt', 'fr-CH': '/fr/kontakt', en: '/en/kontakt', 'x-default': '/kontakt' },
  },
}

export default function KontaktPage() {
  return <KontaktPageClient />
}
