'use client'

import { Cpu, Heart, HandshakeIcon, Phone, Mail } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import PageHero from '@/components/sections/PageHero'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import CTASection from '@/components/sections/CTASection'
import { ueberUnsContent } from '@/lib/i18n/content/ueber-uns'
import type { Locale } from '@/lib/i18n/config'

const valueIcons = [Heart, Cpu, HandshakeIcon]

export default function UeberUnsPageClient({ locale = 'de' }: { locale?: Locale }) {
  const c = ueberUnsContent[locale]
  return (
    <>
      <PageHero badge={c.hero.badge} title={c.hero.title} subtitle={c.hero.subtitle} />

      {/* Mission */}
      <section className="py-20 bg-marine-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">{c.mission.kicker}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl cd-serif text-white">
              {c.mission.title}
            </h2>
            <p className="mt-6 text-lg text-primary-300 leading-relaxed">
              {c.mission.text}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Persönlicher Ansprechpartner */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl p-8 sm:p-12 text-center" style={{ background: 'linear-gradient(135deg,#F7DC8A 0%,#E3B23A 55%,#C8901C 100%)' }}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#5a430f' }}>{c.partner.kicker}</span>
              <h2 className="mt-3 text-2xl sm:text-3xl cd-serif" style={{ color: '#231703' }}>{c.partner.title}</h2>
              <p className="mt-4 leading-relaxed max-w-2xl mx-auto" style={{ color: '#3c2c08' }}>
                {c.partner.text}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-sm font-semibold">
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 transition-opacity hover:opacity-75" style={{ color: '#231703' }}>
                  <Phone className="w-4 h-4" /> {CONTACT_PHONE}
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center justify-center gap-2 transition-opacity hover:opacity-75" style={{ color: '#231703' }}>
                  <Mail className="w-4 h-4" /> {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9 Reasons */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">{c.reasons.kicker}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              {c.reasons.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.reasons.items.map((reason, i) => (
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
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">{c.tech.kicker}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl cd-serif text-primary-800">
              {c.tech.title}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {c.tech.intro}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.tech.points.map((item, i) => (
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
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">{c.values.kicker}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl cd-serif text-primary-800">
              {c.values.title}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.values.items.map((value, i) => {
              const Icon = valueIcons[i]
              return (
                <StaggerItem key={value.title}>
                  <Card className="h-full text-center bg-marine-900 border-marine-900 text-white">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-white/5 border border-accent-400/40 flex items-center justify-center text-accent-400">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{value.title}</h3>
                    <p className="mt-3 text-primary-300 leading-relaxed">{value.description}</p>
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
