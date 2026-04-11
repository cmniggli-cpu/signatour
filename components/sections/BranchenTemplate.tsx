'use client'

import { Check, ArrowRight } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import StatsBar from '@/components/sections/StatsBar'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import FAQAccordion from '@/components/features/FAQAccordion'
import CTASection from '@/components/sections/CTASection'
import type { BranchenPageData } from '@/lib/branchen-data'

interface BranchenTemplateProps {
  data: BranchenPageData
}

export default function BranchenTemplate({ data }: BranchenTemplateProps) {
  return (
    <>
      <PageHero
        badge={data.badge}
        title={data.headline}
        subtitle={data.tagline}
      />

      {/* Challenges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Die Herausforderung</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-primary-900 tracking-tight">
              Kennen Sie das?
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.challenges.map((challenge, i) => (
              <StaggerItem key={i}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-primary-900">{challenge.title}</h3>
                  <p className="mt-3 text-primary-500 leading-relaxed text-sm">{challenge.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <StatsBar stats={data.stats} />

      {/* What We Capture */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Umfang</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-primary-900 tracking-tight">
              Was wir erfassen
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.captures.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-200/60 card-shadow">
                  <Check className="w-5 h-5 text-success shrink-0" />
                  <span className="text-primary-700 font-medium text-sm">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Extra Section */}
      {data.extraSection && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-primary-900 tracking-tight">
                {data.extraSection.title}
              </h2>
              <p className="mt-4 text-primary-500 max-w-2xl mx-auto">{data.extraSection.description}</p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-3">
                {data.extraSection.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                    <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-primary-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Comparison */}
      {data.comparisonRows && (
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-primary-900 tracking-tight">
                {data.comparisonTitle}
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-2xl border border-primary-200/60 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-900 text-white">
                      <th className="text-left p-5 font-semibold text-sm">Kriterium</th>
                      <th className="p-5 font-semibold text-sm">Ohne 360-Tour</th>
                      <th className="p-5 font-semibold text-sm text-accent-500">Mit Signatour</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonRows.map((row, i) => (
                      <tr key={i} className={`border-b border-primary-100 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                        <td className="p-5 font-medium text-primary-800 text-sm">{row.label}</td>
                        <td className="p-5 text-center text-primary-400 text-sm">{row.without}</td>
                        <td className="p-5 text-center font-semibold text-primary-900 text-sm">
                          <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">{row.with}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ROI */}
      {data.roiTitle && (
        <section className={`py-24 ${data.comparisonRows ? 'bg-white' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="bg-cream rounded-3xl p-8 sm:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">ROI</span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-black text-primary-900 tracking-tight">{data.roiTitle}</h2>
                <p className="mt-4 text-primary-500 leading-relaxed max-w-2xl mx-auto text-sm">{data.roiDescription}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Package */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary-900 rounded-3xl p-8 sm:p-12 text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Empfohlen
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">{data.packageName}</h2>
              <div className="mt-2 text-4xl font-black text-white">{data.packagePrice}</div>

              <ul className="mt-6 space-y-3">
                {data.packageFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-200 text-sm">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/kontakt" variant="accent" size="lg" className="w-full sm:w-auto">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">FAQ</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-primary-900 tracking-tight">
              Häufige Fragen
            </h2>
          </AnimatedSection>

          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
