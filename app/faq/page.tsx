import type { Metadata } from 'next'
import FAQPageClient from './FAQPageClient'

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen',
  description: 'Antworten auf die häufigsten Fragen zu 360-Grad-Rundgängen: Kosten, Technik, Datenschutz und mehr.',
}

export default function FAQPage() {
  return <FAQPageClient />
}
