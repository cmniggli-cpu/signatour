'use client'

import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import ContactForm from '@/components/features/ContactForm'
import CTASection from '@/components/sections/CTASection'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import { kontaktContent } from '@/lib/i18n/content/kontakt'
import type { Locale } from '@/lib/i18n/config'

export default function KontaktPageClient({ locale = 'de' }: { locale?: Locale }) {
  const c = kontaktContent[locale]

  const contactInfo = [
    { icon: Phone, title: c.info.telefonTitle, description: CONTACT_PHONE, sub: c.info.telefonSub },
    { icon: Mail, title: c.info.emailTitle, description: CONTACT_EMAIL, sub: c.info.emailSub },
    { icon: MapPin, title: c.info.gebietTitle, description: c.info.gebietText, sub: c.info.gebietSub },
    { icon: Clock, title: c.info.antwortTitle, description: c.info.antwortText, sub: '' },
    { icon: Heart, title: c.info.versprechenTitle, description: c.info.versprechenText, sub: '' },
  ]

  return (
    <>
      <PageHero badge={c.hero.badge} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl cd-serif text-primary-900 mb-6">{c.formTitle}</h2>
                <ContactForm locale={locale} />
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2 space-y-4" direction="right">
              {contactInfo.map((item, i) => (
                <Card key={i} hover={false} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    {item.sub && <p className="text-gray-400 text-xs mt-1">{item.sub}</p>}
                  </div>
                </Card>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        buttonText={c.cta.buttonText}
        buttonHref={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
      />
    </>
  )
}
