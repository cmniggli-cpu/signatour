import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-black tracking-tight uppercase">
              Signa<span className="text-accent-500">tour</span>
            </Link>
            <p className="mt-5 text-primary-400 text-sm leading-relaxed">
              Professionelle 360-Grad-Rundgänge für KMUs im DACH-Raum. Done-for-You, kein Abo, kein Vertrag.
            </p>
          </div>

          {/* Branchen */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">Branchen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Hotels', href: '/branchen/hotel' },
                { label: 'Restaurants', href: '/branchen/restaurant' },
                { label: 'Spa & Wellness', href: '/branchen/spa-wellness' },
                { label: 'Fitnessstudios', href: '/branchen/fitnessstudio' },
                { label: 'Immobilien', href: '/branchen/immobilien' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">Informationen</h3>
            <ul className="space-y-3">
              {[
                { label: 'Pakete & Preise', href: '/pakete' },
                { label: 'Über uns', href: '/ueber-uns' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Matterport Alternative', href: '/vergleich/matterport-alternative' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <Mail className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <Phone className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 shrink-0" />
                <span>Deutschsprachige Schweiz & DACH-Region</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-500">
            © {new Date().getFullYear()} Signatour. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-sm text-primary-500">
            <Link href="#" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="#" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="#" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
