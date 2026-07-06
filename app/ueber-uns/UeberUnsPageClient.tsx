'use client'

import { Cpu, Heart, HandshakeIcon, Phone, Mail } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import PageHero from '@/components/sections/PageHero'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import CTASection from '@/components/sections/CTASection'
import { UEBER_UNS_REASONS, UEBER_UNS_VALUES } from '@/lib/constants'

const valueIcons = [Heart, Cpu, HandshakeIcon]

export default function UeberUnsPageClient() {
  return (
    <>
      <PageHero
        badge="Über Signatour"
        title="Ihr Schweizer Partner für digitale Verkaufserlebnisse"
        subtitle="Wir verkaufen keine Technik. Wir machen Ihr stärkstes Verkaufsargument – Ihre Räumlichkeiten – online erlebbar, damit aus Besuchern Kunden werden."
      />

      {/* Mission */}
      <section className="py-20 bg-marine-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">Unsere Mission</span>
            <h2 className="mt-3 text-3xl sm:text-4xl cd-serif text-white">
              Wir machen das stärkste Verkaufsargument von KMUs – ihre Räumlichkeiten – online erlebbar.
            </h2>
            <p className="mt-6 text-lg text-primary-300 leading-relaxed">
              KMU-Inhaberinnen und Inhaber haben 14-Stunden-Tage. Sie verdienen einen Partner, der kommt, professionell arbeitet und ein fertiges Ergebnis liefert.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Persönlicher Ansprechpartner */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-marine-900 rounded-3xl p-8 sm:p-12 text-center text-white">
              <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">Ihr Ansprechpartner</span>
              <h2 className="mt-3 text-2xl sm:text-3xl cd-serif">Marius Niggli – Gründer & Inhaber</h2>
              <p className="mt-4 text-primary-300 leading-relaxed max-w-2xl mx-auto">
                Vom ersten Gespräch über das Shooting bis zur fertigen Tour: Sie sprechen immer mit derselben Person – kein Callcenter, kein Ticket-System. Wer mit Herzblut arbeitet, bindet Kunden durch Qualität, nicht durch Verträge.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 text-accent-400 hover:text-accent-300 transition-colors">
                  <Phone className="w-4 h-4" /> {CONTACT_PHONE}
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 text-accent-400 hover:text-accent-300 transition-colors">
                  <Mail className="w-4 h-4" /> {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6 Reasons */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Warum Signatour</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              6 Gründe für Signatour
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {UEBER_UNS_REASONS.map((reason, i) => (
              <StaggerItem key={reason.title}>
                <Card className="h-full bg-cream border-accent-200/70">
                  <div className="flex items-baseline gap-3">
                    <span className="cd-serif text-3xl text-accent-600 leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-lg font-bold text-primary-900">{reason.title}</h3>
                  </div>
                  <p className="mt-3 text-primary-600 leading-relaxed">{reason.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Technologie</span>
            <h2 className="mt-3 text-3xl sm:text-4xl cd-serif text-primary-800">
              Professionelle Software aus Europa
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Wir arbeiten mit <strong>Pano2VR von Garden Gnome Software</strong> – einem Wiener Unternehmen mit über 15 Jahren Entwicklungserfahrung.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Keine Cloud-Abhängigkeit',
                'Kein Vendor Lock-in',
                'Volle Datenkontrolle',
                'Europäische Software mit DSGVO-Konformität',
                'Überlegene Tour-Qualität vs. Cloud-Lösungen',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-accent-400 shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Unsere Werte</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              Woran wir glauben
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UEBER_UNS_VALUES.map((value, i) => {
              const Icon = valueIcons[i]
              return (
                <StaggerItem key={value.title}>
                  <Card className="h-full text-center bg-cream border-accent-200/70">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-[#1a1304] shadow-lg shadow-accent-600/30">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-primary-800">{value.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{value.description}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
