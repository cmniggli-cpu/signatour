import type { Metadata } from 'next'
import FAQPageClient from '@/app/faq/FAQPageClient'
import { faqContent } from '@/lib/i18n/content/faq'

export const metadata: Metadata = {
  title: 'FAQ – Frequently asked questions',
  description: 'Answers to the most common questions about 360° virtual tours: costs, technology, privacy and more.',
  alternates: {
    canonical: '/en/faq',
    languages: { 'de-CH': '/faq', 'fr-CH': '/fr/faq', en: '/en/faq', 'x-default': '/faq' },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqContent.en.sections.flatMap((s) => s.faqs).map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FAQPageEn() {
  return (
    <>
      <FAQPageClient locale="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  )
}
