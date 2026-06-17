'use client'

import { Check } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import PricingCard from '@/components/sections/PricingCard'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import CTASection from '@/components/sections/CTASection'
import { PRICING_TIERS, ADDONS, BRANCHEN_PACKAGES, INCLUDED_BENEFITS } from '@/lib/constants'

export default function PaketePageClient() {
  return (
    <>
      <PageHero
        badge="Transparent & fair"
        title="Transparente Preise. Keine Überraschungen."
        subtitle="Einmalpreis pro Tour. Kein Abo. Kein Vertrag. Keine versteckten Kosten."
      />

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_TIERS.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} showRange index={i} />
            ))}
          </div>
          <AnimatedSection className="mt-12">
            <div className="max-w-3xl mx-auto bg-primary-900 rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-lg font-bold text-white">Doppelte Garantie – null Risiko</h3>
              <p className="mt-2 text-sm text-primary-300 leading-relaxed">
                Bis zu 3 Korrekturrunden, bis die Tour Ihren Ansprüchen entspricht. Und keine messbare Verbesserung nach 90 Tagen? Wir erstatten 50% des Paketpreises zurück.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Branchenspezifische Pakete */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Spezialpakete</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              Branchenspezifische Pakete
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHEN_PACKAGES.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-primary-800">{pkg.name}</h3>
                  <div className="mt-2 text-3xl cd-serif text-accent-600">{pkg.price}</div>
                  <p className="mt-2 text-sm text-gray-600">{pkg.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Zusatzleistungen</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              Optionale Add-ons
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            {/* Desktop: 3-spaltige Tabelle */}
            <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left p-4 font-bold">Erweiterung</th>
                    <th className="text-left p-4 font-bold">Nutzen</th>
                    <th className="text-right p-4 font-bold">Preis</th>
                  </tr>
                </thead>
                <tbody>
                  {ADDONS.map((addon, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-4 text-gray-800 font-medium align-top">
                        {addon.name}
                        {addon.hinweis && (
                          <span className="mt-1.5 block">
                            <span className="inline-block text-xs text-accent-700 bg-accent-100 rounded-full px-3 py-0.5">{addon.hinweis}</span>
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-gray-600 text-sm align-top">{addon.nutzen}</td>
                      <td className="p-4 text-right font-semibold text-primary-800 align-top">{addon.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobil: gestapelte Karten */}
            <div className="md:hidden space-y-4">
              {ADDONS.map((addon, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-5">
                  <h3 className="font-bold text-primary-800">{addon.name}</h3>
                  {addon.hinweis && (
                    <span className="mt-1.5 inline-block text-xs text-accent-700 bg-accent-100 rounded-full px-3 py-0.5">{addon.hinweis}</span>
                  )}
                  <p className="mt-2 text-sm text-gray-600">{addon.nutzen}</p>
                  <p className="mt-3 text-right font-semibold text-primary-800">{addon.price}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              Bei jedem Paket inklusive
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INCLUDED_BENEFITS.map((benefit, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl card-shadow">
                  <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
