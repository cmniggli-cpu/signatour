'use client'

import { AlertTriangle, Check, X, ArrowRight } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { MATTERPORT_REASONS, MATTERPORT_COMPARISON } from '@/lib/constants'

export default function MatterportPageClient() {
  return (
    <>
      <PageHero
        badge="Vergleich"
        title="Matterport Alternative für die Schweiz"
        subtitle="Professionelle 360-Grad-Touren ohne Abo, ohne Kamera-Kauf, ohne Vendor Lock-in."
      />

      {/* Definition */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-primary-800">
              Was ist eine Matterport Alternative?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ein Anbieter oder eine Lösung für virtuelle 360-Grad-Touren ohne die typischen Matterport-Nachteile:
              kein teures Kamera-Equipment, kein monatliches Abo, keine USD-Preise, kein Vendor Lock-in.
              Für KMUs in der Schweiz und im DACH-Raum: professionelle Ergebnisse zum Einmalpreis mit lokalem, deutschsprachigem Support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Search for Alternative */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">Warum wechseln?</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary-800">
              6 Gründe für eine Alternative
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATTERPORT_REASONS.map((reason) => (
              <StaggerItem key={reason.title}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-800">{reason.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{reason.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-800">
              Detaillierter Vergleich
            </h2>
            <p className="mt-3 text-gray-600">Signatour vs. Matterport – Punkt für Punkt.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl shadow-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left p-4 font-bold">Kriterium</th>
                    <th className="p-4 font-bold text-accent-400">Signatour</th>
                    <th className="p-4 font-bold">Matterport</th>
                  </tr>
                </thead>
                <tbody>
                  {MATTERPORT_COMPARISON.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-primary-50/50 transition-colors`}
                    >
                      <td className="p-4 font-medium text-gray-800 text-sm">{row.feature}</td>
                      <td className="p-4 text-center text-sm">
                        <span className={row.signatourWins ? 'bg-accent-100 text-accent-700 px-2 py-1 rounded-lg font-semibold' : 'text-gray-700'}>
                          {row.signatour}
                        </span>
                      </td>
                      <td className="p-4 text-center text-sm text-gray-500">{row.matterport}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* When Matterport is better / When Signatour is better */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-800">
              Ehrlicher Vergleich
            </h2>
            <p className="mt-3 text-gray-600">Wir sagen Ihnen auch, wann Matterport die bessere Wahl ist.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl p-8 card-shadow h-full">
                <h3 className="text-xl font-bold text-gray-700 mb-6">Matterport ist besser, wenn Sie...</h3>
                <ul className="space-y-3">
                  {[
                    'Hunderte Objekte jährlich scannen (grosse Immobilien-Portfolios)',
                    'In der AEC-Branche 3D-Modelle und Punktwolken für BIM benötigen',
                    'Enterprise-Teams mit eigenen IT-Ressourcen haben',
                    'Digitale Zwillinge für Architektur, Engineering, Construction brauchen',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <X className="w-4 h-4 mt-1 text-gray-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl p-8 card-shadow ring-2 ring-accent-400 h-full">
                <h3 className="text-xl font-bold text-primary-800 mb-6">Signatour ist besser, wenn Sie...</h3>
                <ul className="space-y-3">
                  {[
                    'Ein KMU mit einem oder wenigen Standorten sind',
                    'Keine Kamera kaufen und Software lernen wollen',
                    'Im DACH-Raum sind und deutschen Support schätzen',
                    'Ehrliche Beratung statt Verkaufsdruck wollen',
                    'Keine Langzeitverpflichtungen eingehen können',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-4 h-4 mt-1 text-success shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        title="Bereit für die bessere Alternative?"
        subtitle="Kostenlose Beratung – wir zeigen Ihnen, ob Signatour für Sie passt."
      />
    </>
  )
}
