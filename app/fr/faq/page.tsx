import type { Metadata } from 'next'
import FAQPageClient from '@/app/faq/FAQPageClient'
import { faqContent } from '@/lib/i18n/content/faq'

export const metadata: Metadata = {
  title: 'FAQ – Questions fréquentes',
  description: 'Réponses aux questions les plus fréquentes sur les visites à 360° : coûts, technique, confidentialité et plus.',
  alternates: {
    canonical: '/fr/faq',
    languages: { 'de-CH': '/faq', 'fr-CH': '/fr/faq', en: '/en/faq', 'x-default': '/faq' },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqContent.fr.sections.flatMap((s) => s.faqs).map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FAQPageFr() {
  return (
    <>
      <FAQPageClient locale="fr" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  )
}
