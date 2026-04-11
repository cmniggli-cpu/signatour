import type { Metadata } from 'next'
import KontaktPageClient from './KontaktPageClient'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Unverbindliche Beratung für Ihren 360-Grad-Rundgang. Wir melden uns innerhalb von 24 Stunden.',
}

export default function KontaktPage() {
  return <KontaktPageClient />
}
