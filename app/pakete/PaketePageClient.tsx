'use client'

import { Check } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import PricingCard from '@/components/sections/PricingCard'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import CTASection from '@/components/sections/CTASection'
import { PRICING_TIERS, ADDON_GROUPS, BRANCHEN_PACKAGES, INCLUDED_BENEFITS, SERVICE_TIERS } from '@/lib/constants'

const ORDER_MAP: Record<string, string> = {
  immobilien: 'immo-einzel', hotel: 'hotel', spa: 'spa', restaurant: 'restaurant',
  fitness: 'fitness', banken: 'banken', events: 'event',
}

export default function PaketePageClient() {
  return (
    <>
      <PageHero
        badge="Transparent & fair"
        title="Transparente Preise. Keine Überraschungen."
        subtitle="Einmalpreis pro Tour, kein Abo – die Tour gehört Ihnen. Kein Vertrag, keine Plattform-Miete."
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
            <div className="max-w-3xl mx-auto rounded-2xl p-6 sm:p-8 text-center" style={{ background: 'linear-gradient(135deg,#F7DC8A 0%,#E3B23A 55%,#C8901C 100%)' }}>
              <h3 className="text-xl cd-serif" style={{ color: '#231703' }}>Doppelte Garantie – minimales Risiko, maximaler Mehrwert</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: '#3c2c08' }}>
                <strong>Qualitäts-Garantie:</strong> Jedes Panorama wird von Hand veredelt – bis zu 3 Korrekturrunden inklusive.
              </p>
              <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#3c2c08' }}>
                <strong>Marken-Garantie:</strong> Ihre Tour trägt Ihre Handschrift – Farben, Logo und Navigation exakt in Ihrem Corporate Design, ohne fremdes Branding (ab Signature Tour).
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
                <Card className="h-full bg-cream border-accent-200/70">
                  <h3 className="text-lg font-bold text-primary-900">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-primary-600 leading-relaxed">{pkg.intro}</p>
                  <ul className="mt-4 space-y-2">
                    {pkg.lines.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-primary-800">
                        <Check className="w-4 h-4 text-accent-600 mt-0.5 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.note && <p className="mt-3 text-xs text-primary-500">{pkg.note}</p>}
                  <a
                    href={`/bestellen?paket=${ORDER_MAP[pkg.cfg] ?? ''}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-marine-900 text-accent-400 px-5 py-2.5 text-sm font-semibold hover:bg-marine-800 transition-colors"
                  >
                    Paket bestellen
                  </a>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Add-ons */}
      <section id="add-ons" className="py-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Zusatzleistungen</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              Optionale Add-ons
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            {/* Desktop: 3-spaltige Tabelle pro Kategorie im hellen Gold-/Pastell-CD */}
            <div className="hidden md:block space-y-12">
              {ADDON_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4 text-xl cd-serif text-primary-800">{group.title}</h3>
                  <div className="bg-white rounded-2xl border border-primary-200/60 card-shadow overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-primary-100">
                          <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-400">Erweiterung</th>
                          <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-400">Nutzen</th>
                          <th className="text-right px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Preis</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.items.map((addon, i) => (
                          <tr key={addon.name} className={`border-b border-primary-50 last:border-0 ${i % 2 === 1 ? 'bg-cream' : 'bg-white'}`}>
                            <td className="px-5 py-4 text-primary-900 font-medium align-top">
                              {addon.name}
                              {addon.hinweis && (
                                <span className="mt-1.5 block">
                                  <span className="inline-block text-xs text-accent-700 bg-accent-100 rounded-full px-3 py-0.5">{addon.hinweis}</span>
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-4 text-primary-500 text-sm align-top">{addon.nutzen}</td>
                            <td className="px-5 py-4 text-right align-top"><span className="text-accent-600 font-semibold">{addon.price}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobil: gestapelte Karten pro Kategorie */}
            <div className="md:hidden space-y-10">
              {ADDON_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4 text-lg cd-serif text-primary-800">{group.title}</h3>
                  <div className="space-y-4">
                    {group.items.map((addon) => (
                      <div key={addon.name} className="bg-white rounded-2xl border border-primary-200/60 card-shadow p-5">
                        <h4 className="font-bold text-primary-900">{addon.name}</h4>
                        {addon.hinweis && (
                          <span className="mt-1.5 inline-block text-xs text-accent-700 bg-accent-100 rounded-full px-3 py-0.5">{addon.hinweis}</span>
                        )}
                        <p className="mt-2 text-sm text-primary-500">{addon.nutzen}</p>
                        <p className="mt-3 text-right font-semibold text-accent-600">{addon.price}</p>
                      </div>
                    ))}
                  </div>
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

      {/* Ablauf */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Ablauf</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              So läuft die Zusammenarbeit
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '1', t: 'Beratung & Offerte', d: 'Unverbindlich – wir klären Ziele, Räume und das passende Paket.' },
              { n: '2', t: 'Bestätigung & Anzahlung', d: 'Auftragsbestätigung und 50% Anzahlung. Erst danach planen wir den Aufnahmetermin.' },
              { n: '3', t: 'Shooting & Produktion', d: 'Aufnahme vor Ort und Produktion Ihrer Signature Tour.' },
              { n: '4', t: 'Freigabe & Go-live', d: 'Sie prüfen Ihre Tour bequem über den Viewer-Link und geben sie frei. Nach der Schlusszahlung erhalten Sie den Embed-Link für Ihre Website – auf Wunsch mit laufendem Wartungsservice.' },
            ].map((step) => (
              <StaggerItem key={step.n}>
                <Card className="h-full bg-cream border-accent-200/70">
                  <span className="cd-serif text-3xl text-accent-600 leading-none">{step.n}</span>
                  <h3 className="mt-2 text-base font-bold text-primary-900">{step.t}</h3>
                  <p className="mt-2 text-sm text-primary-600 leading-relaxed">{step.d}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Servicepakete */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Betreuung & Weiterentwicklung</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              Jährliche Servicepakete
            </h2>
            <p className="mt-4 text-primary-500 max-w-2xl mx-auto">Optional und jederzeit kündbar – damit Ihre Tour aktuell, sicher und messbar bleibt.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICE_TIERS.map((tier) => (
              <StaggerItem key={tier.name}>
                <Card className={`h-full relative ${tier.recommended ? 'border-2 border-accent-500' : ''}`}>
                  {tier.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Empfohlen</span>
                  )}
                  <h3 className="text-lg font-bold text-primary-900">{tier.name}</h3>
                  <div className="mt-2 text-2xl cd-serif text-accent-600">{tier.price}</div>
                  <ul className="mt-5 space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-primary-700">
                        <Check className="w-4 h-4 text-accent-600 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
