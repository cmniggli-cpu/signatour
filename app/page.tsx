'use client'

import Link from 'next/link'
import {
  BadgeCheck, Handshake, Shield, Database, MapPin, User, ArrowRight,
  Hotel, UtensilsCrossed, Sparkles, Dumbbell, Building2, HelpCircle,
} from 'lucide-react'
import Hero from '@/components/sections/Hero'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ProcessSteps from '@/components/sections/ProcessSteps'
import StatsBar from '@/components/sections/StatsBar'
import PricingCard from '@/components/sections/PricingCard'
import ComparisonTable from '@/components/sections/ComparisonTable'
import FAQAccordion from '@/components/features/FAQAccordion'
import LeadMagnetForm from '@/components/features/LeadMagnetForm'
import CTASection from '@/components/sections/CTASection'
import {
  PROBLEM_CARDS, BRANCHEN_OVERVIEW, BENEFITS, MARKET_STATS,
  PRICING_TIERS, COMPARISON_ROWS, HOMEPAGE_FAQS,
} from '@/lib/constants'

const branchenIcons: Record<string, React.ElementType> = {
  Hotel, UtensilsCrossed, Sparkles, Dumbbell, Building2,
}

const benefitIcons: Record<string, React.ElementType> = {
  BadgeCheck, Handshake, Shield, Database, MapPin, User,
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Das Problem</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">
              Ihre Räume können<br />online mehr
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROBLEM_CARDS.map((card, i) => (
              <StaggerItem key={i}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-primary-900">{card.title}</h3>
                  <p className="mt-3 text-primary-500 leading-relaxed text-sm">{card.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Branchen Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Branchen</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">
              Für jede Branche<br />die passende Tour
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHEN_OVERVIEW.map((branche) => {
              const Icon = branchenIcons[branche.icon]
              return (
                <StaggerItem key={branche.slug}>
                  <Link href={`/branchen/${branche.slug}`}>
                    <Card className="h-full group cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-primary-900 flex items-center justify-center text-white">
                        {Icon && <Icon className="w-7 h-7" />}
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors">
                        {branche.title}
                      </h3>
                      <div className="mt-2">
                        <span className="text-2xl font-black text-accent-500">{branche.stat}</span>
                        <span className="ml-2 text-sm text-primary-400">{branche.statLabel}</span>
                      </div>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-accent-500 transition-colors">
                        Mehr erfahren <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                </StaggerItem>
              )
            })}

            <StaggerItem>
              <Link href="/kontakt">
                <Card className="h-full group cursor-pointer !border-dashed !border-primary-300 !bg-cream">
                  <div className="w-14 h-14 rounded-2xl bg-primary-200 flex items-center justify-center text-primary-500">
                    <HelpCircle className="w-7 h-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary-600 group-hover:text-primary-900 transition-colors">
                    Andere Branche?
                  </h3>
                  <p className="mt-2 text-sm text-primary-400">
                    Wir erstellen 360-Grad-Touren für jeden Betrieb mit sehenswerten Räumlichkeiten.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-accent-500 transition-colors">
                    Kontakt aufnehmen <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Referenzprojekte */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Referenzprojekte</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">
              Sehen Sie selbst
            </h2>
            <p className="mt-4 text-primary-500 max-w-2xl mx-auto">
              Erkunden Sie unsere 360-Grad-Touren direkt im Browser.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              'https://vtour.cloud/cxfvy',
              'https://vtour.cloud/8p3cb',
            ].map((url, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <div className="rounded-2xl overflow-hidden border border-primary-200/60 aspect-[16/10]">
                  <iframe
                    src={url}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={`Referenzprojekt ${i + 1}`}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Warum Signatour</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">
              6 gute Gründe
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => {
              const Icon = benefitIcons[benefit.icon]
              return (
                <StaggerItem key={benefit.title}>
                  <Card className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center">
                      {Icon && <Icon className="w-6 h-6 text-primary-900" />}
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-primary-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-primary-500 leading-relaxed">{benefit.description}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Market Stats */}
      <StatsBar stats={MARKET_STATS} />

      {/* Pricing Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Transparente Preise</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">
              Einmalpreis. Kein Abo.
            </h2>
            <p className="mt-4 text-primary-500 max-w-2xl mx-auto">
              Alle Pakete inklusive Shooting, Nachbearbeitung und Hosting. Keine versteckten Kosten.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} index={i} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button href="/pakete" variant="outline" size="lg">
              Alle Pakete & Details
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable
        rows={COMPARISON_ROWS}
        title="Signatour vs. Matterport vs. Ogulo"
        subtitle="Transparenter Vergleich: Warum immer mehr KMUs zu Signatour wechseln."
      />

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">FAQ</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">
              Häufige Fragen
            </h2>
          </AnimatedSection>

          <FAQAccordion faqs={HOMEPAGE_FAQS} />

          <AnimatedSection className="text-center mt-10">
            <Button href="/faq" variant="outline" size="md">
              Alle FAQ ansehen
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnetForm />

      {/* CTA */}
      <CTASection />
    </>
  )
}
