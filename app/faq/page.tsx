import type { Metadata } from 'next'
import FAQPageClient from './FAQPageClient'
import { FAQ_GENERAL, FAQ_COSTS, FAQ_TECH, FAQ_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen',
  description: 'Antworten auf die häufigsten Fragen zu 360-Grad-Rundgängen: Kosten, Technik, Datenschutz und mehr.',
  alternates: { canonical: '/faq' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...FAQ_GENERAL, ...FAQ_COSTS, ...FAQ_TECH, ...FAQ_DATA].map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FAQPage() {
  return (
    <>
      <FAQPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  )
}
