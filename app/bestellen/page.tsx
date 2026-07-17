import type { Metadata } from 'next'
import BestellenPageClient from './BestellenPageClient'

export const metadata: Metadata = {
  title: 'Paket bestellen',
  description: 'Bestellen Sie Ihre 360°-Signature-Tour in einem Schritt. Verbindliche Offerte innert 24 Stunden, 50% Anzahlung erst bei Auftragsbestätigung. Kein Abo.',
  alternates: {
    canonical: '/bestellen',
    languages: { 'de-CH': '/bestellen', 'fr-CH': '/fr/bestellen', en: '/en/bestellen', 'x-default': '/bestellen' },
  },
}

export default function BestellenPage() {
  return <BestellenPageClient />
}
