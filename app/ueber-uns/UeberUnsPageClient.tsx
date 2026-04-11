'use client'

import { Cpu, Heart, HandshakeIcon } from 'lucide-react'
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
        title="Ihr lokaler Partner für 360-Grad-Rundgänge"
      />

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Unsere Mission</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-primary-800">
              Wir machen das stärkste Verkaufsargument von KMUs – ihre Räumlichkeiten – online erlebbar.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              KMU-Inhaberinnen und Inhaber haben 14-Stunden-Tage. Sie verdienen einen Partner, der kommt, professionell arbeitet und ein fertiges Ergebnis liefert.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 6 Reasons */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Warum Signatour</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary-800">
              6 Gründe für Signatour
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {UEBER_UNS_REASONS.map((reason) => (
              <StaggerItem key={reason.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-primary-800">{reason.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{reason.description}</p>
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
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-primary-800">
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
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary-800">
              Woran wir glauben
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UEBER_UNS_VALUES.map((value, i) => {
              const Icon = valueIcons[i]
              return (
                <StaggerItem key={value.title}>
                  <Card className="h-full text-center">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-800/20">
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
