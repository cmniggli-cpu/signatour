import type { Metadata } from 'next'
import UeberUnsPageClient from '@/app/ueber-uns/UeberUnsPageClient'

export const metadata: Metadata = {
  title: 'About us – Your Swiss partner',
  description: 'Your Swiss partner for digital sales experiences: done-for-you, personal, transparent, GDPR-compliant.',
  alternates: {
    canonical: '/en/ueber-uns',
    languages: { 'de-CH': '/ueber-uns', 'fr-CH': '/fr/ueber-uns', en: '/en/ueber-uns', 'x-default': '/ueber-uns' },
  },
}

export default function UeberUnsPageEn() {
  return <UeberUnsPageClient locale="en" />
}
