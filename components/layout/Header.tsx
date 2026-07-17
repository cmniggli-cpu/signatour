'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useDictionary } from '@/lib/i18n/client'
import { localizedHref } from '@/lib/i18n/config'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'
import SiteSearch from '@/components/features/SiteSearch'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { locale, t } = useDictionary()
  const lp = (href: string) => localizedHref(href, locale)

  const navItems = [
    { label: t.nav.home, href: '/' },
    {
      label: t.nav.branchen,
      href: '#',
      children: [
        { label: t.branchenLabels.hotel, href: '/branchen/hotel' },
        { label: t.branchenLabels.restaurant, href: '/branchen/restaurant' },
        { label: t.branchenLabels.spa, href: '/branchen/spa-wellness' },
        { label: t.branchenLabels.fitness, href: '/branchen/fitnessstudio' },
        { label: t.branchenLabels.immobilien, href: '/branchen/immobilien' },
        { label: t.branchenLabels.banken, href: '/branchen/banken-versicherungen' },
        { label: t.branchenLabels.events, href: '/branchen/eventlocations' },
      ],
    },
    { label: t.nav.pakete, href: '/pakete' },
    { label: t.nav.ueberUns, href: '/ueber-uns' },
    { label: t.nav.faq, href: '/faq' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass py-3' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href={lp('/')} className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/niggli-logo.png" alt="Niggli 360 Signature Tours" className="w-11 h-11" />
            <span className="flex flex-col leading-none">
              <span className="text-[10px] tracking-[0.26em] uppercase text-primary-400 font-semibold">Niggli</span>
              <span className="text-base sm:text-lg tracking-[0.05em] uppercase text-primary-900" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C8901C' }}>360° Signature Tours</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                        'text-primary-600 hover:text-primary-900 hover:bg-primary-100/50'
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-xl border border-primary-100 py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={lp(child.href)}
                            className={cn(
                              'block px-5 py-2.5 text-sm text-primary-600 hover:bg-cream hover:text-primary-900 transition-colors',
                              pathname === lp(child.href) && 'text-primary-900 bg-cream font-medium'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={lp(item.href)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                      'text-primary-600 hover:text-primary-900 hover:bg-primary-100/50',
                      pathname === lp(item.href) && 'text-primary-900 bg-primary-100/50'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <SiteSearch />
            <LanguageSwitcher />
            <Button href={lp('/kontakt')} variant="primary" size="sm">{t.nav.beratungCta}</Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <SiteSearch />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-primary-900 hover:bg-primary-100 transition-colors"
              aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
