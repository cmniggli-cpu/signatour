import type { Metadata } from 'next'
import BestellenPageClient from '@/app/bestellen/BestellenPageClient'

export const metadata: Metadata = {
  title: 'Order a package',
  description: 'Order your 360° Signature Tour in a single step. Binding offer within 24 hours, 50% deposit only upon confirmation. No subscription.',
  alternates: {
    canonical: '/en/bestellen',
    languages: { 'de-CH': '/bestellen', 'fr-CH': '/fr/bestellen', en: '/en/bestellen', 'x-default': '/bestellen' },
  },
}

export default function BestellenPageEn() {
  return <BestellenPageClient locale="en" />
}
