'use client'

import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import ContactForm from '@/components/features/ContactForm'
import CTASection from '@/components/sections/CTASection'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'

const contactInfo = [
  { icon: Phone, title: 'Telefon', description: CONTACT_PHONE, sub: 'Beratung verfügbar' },
  { icon: Mail, title: 'E-Mail', description: CONTACT_EMAIL, sub: 'Antwort innert Stunden' },
  { icon: MapPin, title: 'Servicegebiet', description: 'Deutschschweiz & DACH-Region', sub: '' },
  { icon: Clock, title: 'Antwortzeit', description: 'Innerhalb von 24 Stunden', sub: '' },
  { icon: Heart, title: 'Unser Versprechen', description: 'Unverbindlich, ehrliche Beratung – auch wenn eine Tour gerade keinen Sinn macht.', sub: '' },
]

export default function KontaktPageClient() {
  return (
    <>
      <PageHero
        badge="Kostenlose Beratung"
        title="Lassen Sie uns sprechen"
        subtitle="Unverbindlich und ehrlich: Wir klären gemeinsam, ob sich eine Signature Tour für Ihren Betrieb rechnet – Antwort innert 24 Stunden, persönlich durch den Inhaber."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Anfrage senden</h2>
                <ContactForm />
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
        title="Lieber direkt sprechen?"
        subtitle="Rufen Sie uns an oder schreiben Sie eine E-Mail."
        buttonText="Jetzt anrufen"
        buttonHref={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
      />
    </>
  )
}
