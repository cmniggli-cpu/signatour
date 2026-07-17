'use client'

import PageHero from '@/components/sections/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FAQAccordion from '@/components/features/FAQAccordion'
import CTASection from '@/components/sections/CTASection'
import { faqContent } from '@/lib/i18n/content/faq'
import { localizedHref, type Locale } from '@/lib/i18n/config'

export default function FAQPageClient({ locale = 'de' }: { locale?: Locale }) {
  const c = faqContent[locale]
  return (
    <>
      <PageHero badge={c.hero.badge} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {c.sections.map((section) => (
            <div key={section.title}>
              <AnimatedSection>
                <h2 className="text-3xl cd-serif text-primary-900 mb-6">{section.title}</h2>
              </AnimatedSection>
              <FAQAccordion faqs={section.faqs} />
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        buttonText={c.cta.buttonText}
        buttonHref={localizedHref('/kontakt', locale)}
      />
    </>
  )
}
