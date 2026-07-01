import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-marine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/niggli-logo.png" alt="Niggli 360 Signature Tours" className="w-14 h-14" />
              <span className="flex flex-col leading-none">
                <span className="text-[10px] tracking-[0.26em] uppercase text-primary-400 font-semibold">Niggli</span>
                <span className="text-base tracking-[0.05em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C8901C' }}>360° Signature Tours</span>
              </span>
            </Link>
            <p className="mt-5 text-primary-400 text-sm leading-relaxed">
              Wir verwandeln Räume in digitale Verkaufserlebnisse – damit aus Besuchern Kunden werden.
            </p>
            <ul className="mt-5 space-y-1.5 text-xs text-primary-500">
              <li>✓ Schweizer Anbieter, persönlicher Ansprechpartner</li>
              <li>✓ Einmalpreis, kein Abo – die Tour gehört Ihnen</li>
              <li>✓ DSGVO-konformes Hosting in CH/EU</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">Branchen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Hotels', href: '/branchen/hotel' },
                { label: 'Restaurants', href: '/branchen/restaurant' },
                { label: 'Spa & Wellness', href: '/branchen/spa-wellness' },
                { label: 'Fitnessstudios', href: '/branchen/fitnessstudio' },
                { label: 'Immobilien', href: '/branchen/immobilien' },
                { label: 'Banken & Kanzleien', href: '/branchen/banken-versicherungen' },
                { label: 'Eventlocations & Showrooms', href: '/branchen/eventlocations' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-400 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">Informationen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Pakete & Preise', href: '/pakete' },
                { label: 'Über uns', href: '/ueber-uns' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-400 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">Kontakt</h3>
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
              <li className="text-xs text-primary-500">Beratung auf Deutsch & Französisch · Aufträge auch auf Englisch</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-500">© {new Date().getFullYear()} Niggli – 360° Signature Tours. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8 text-sm text-primary-500">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
