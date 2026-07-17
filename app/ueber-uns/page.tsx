import type { Metadata } from 'next'
import UeberUnsPageClient from './UeberUnsPageClient'

export const metadata: Metadata = {
  title: 'Über uns – Ihr Schweizer Partner',
  description: 'Ihr Schweizer Partner für digitale Verkaufserlebnisse: Done-for-You, persönlich, transparent, DSGVO-konform.',
  alternates: {
    canonical: '/ueber-uns',
    languages: { 'de-CH': '/ueber-uns', 'fr-CH': '/fr/ueber-uns', en: '/en/ueber-uns', 'x-default': '/ueber-uns' },
  },
}

export default function UeberUnsPage() {
  return <UeberUnsPageClient />
}
