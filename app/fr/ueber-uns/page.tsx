import type { Metadata } from 'next'
import UeberUnsPageClient from '@/app/ueber-uns/UeberUnsPageClient'

export const metadata: Metadata = {
  title: 'À propos – Votre partenaire suisse',
  description: 'Votre partenaire suisse pour des expériences de vente numériques : clé en main, personnel, transparent, conforme au RGPD.',
  alternates: {
    canonical: '/fr/ueber-uns',
    languages: { 'de-CH': '/ueber-uns', 'fr-CH': '/fr/ueber-uns', en: '/en/ueber-uns', 'x-default': '/ueber-uns' },
  },
}

export default function UeberUnsPageFr() {
  return <UeberUnsPageClient locale="fr" />
}
