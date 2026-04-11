'use client'

import PageHero from '@/components/sections/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FAQAccordion from '@/components/features/FAQAccordion'
import CTASection from '@/components/sections/CTASection'
import { FAQ_GENERAL, FAQ_COSTS, FAQ_TECH, FAQ_DATA } from '@/lib/constants'

const sections = [
  { title: 'Allgemein', faqs: FAQ_GENERAL },
  { title: 'Kosten & Ablauf', faqs: FAQ_COSTS },
  { title: 'Technik & Integration', faqs: FAQ_TECH },
  { title: 'Datenschutz & Änderungen', faqs: FAQ_DATA },
]

export default function FAQPageClient() {
  return (
    <>
      <PageHero
        badge="FAQ"
        title="Häufige Fragen"
        subtitle="Alles, was Sie über 360-Grad-Rundgänge wissen müssen."
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-primary-800 mb-6">{section.title}</h2>
              </AnimatedSection>
              <FAQAccordion faqs={section.faqs} />
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Frage nicht gefunden?"
        subtitle="Kontaktieren Sie uns – wir antworten persönlich und ehrlich."
        buttonText="Kontakt aufnehmen"
      />
    </>
  )
}
