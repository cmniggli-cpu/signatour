import type { Metadata } from 'next'
import KontaktPageClient from '@/app/kontakt/KontaktPageClient'

export const metadata: Metadata = {
  title: 'Contact – Free consultation',
  description: 'No-obligation consultation for your 360° virtual tour. Personal reply from the owner within 24 hours.',
  alternates: {
    canonical: '/en/kontakt',
    languages: { 'de-CH': '/kontakt', 'fr-CH': '/fr/kontakt', en: '/en/kontakt', 'x-default': '/kontakt' },
  },
}

export default function KontaktPageEn() {
  return <KontaktPageClient locale="en" />
}
