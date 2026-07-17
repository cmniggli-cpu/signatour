'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/lib/constants'
import { useDictionary } from '@/lib/i18n/client'
import { localizedHref } from '@/lib/i18n/config'
import LanguageSwitcher from './LanguageSwitcher'

export default function Footer() {
  const { locale, t } = useDictionary()
  const lp = (href: string) => localizedHref(href, locale)

  const branchenLinks = [
    { label: t.branchenLabels.hotel, href: '/branchen/hotel' },
    { label: t.branchenLabels.restaurant, href: '/branchen/restaurant' },
    { label: t.branchenLabels.spa, href: '/branchen/spa-wellness' },
    { label: t.branchenLabels.fitness, href: '/branchen/fitnessstudio' },
    { label: t.branchenLabels.immobilien, href: '/branchen/immobilien' },
    { label: t.branchenLabels.banken, href: '/branchen/banken-versicherungen' },
    { label: t.branchenLabels.events, href: '/branchen/eventlocations' },
  ]

  const infoLinks = [
    { label: t.footer.linkPakete, href: '/pakete' },
    { label: t.footer.linkUeberUns, href: '/ueber-uns' },
    { label: t.footer.linkFaq, href: '/faq' },
    { label: t.footer.linkKontakt, href: '/kontakt' },
  ]

  return (
    <footer className="bg-marine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href={lp('/')} className="inline-flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/niggli-logo.png" alt="Niggli 360 Signature Tours" className="w-14 h-14" />
              <span className="flex flex-col leading-none">
                <span className="text-[10px] tracking-[0.26em] uppercase text-primary-400 font-semibold">Niggli</span>
                <span className="text-base tracking-[0.05em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C8901C' }}>360° Signature Tours</span>
              </span>
            </Link>
            <p className="mt-5 text-primary-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <ul className="mt-5 space-y-1.5 text-xs text-primary-500">
              <li>✓ {t.footer.bullet1}</li>
              <li>✓ {t.footer.bullet2}</li>
              <li>✓ {t.footer.bullet3}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">{t.footer.branchenTitle}</h3>
            <ul className="space-y-3">
              {branchenLinks.map((link) => (
                <li key={link.href}>
                  <Link href={lp(link.href)} className="text-primary-400 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">{t.footer.infoTitle}</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={lp(link.href)} className="text-primary-400 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">{t.footer.kontaktTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <Phone className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <Mail className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <span>{CONTACT_ADDRESS}</span>
              </li>
              <li className="text-xs text-primary-500">
                <span className="block">{t.footer.languagesLabel}</span>
                <span className="block mt-1">{t.footer.languagesValue}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-500">© {new Date().getFullYear()} Niggli – 360° Signature Tours. {t.footer.rights}</p>
          <div className="flex gap-8 text-sm text-primary-500">
            <Link href="/impressum" className="hover:text-white transition-colors">{t.footer.impressum}</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">{t.footer.datenschutz}</Link>
            <Link href="/agb" className="hover:text-white transition-colors">{t.footer.agb}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
