'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, localeLabels, defaultLocale, type Locale } from '@/lib/i18n/config'
import { localeFromPathname, stripLocale } from '@/lib/i18n/client'
import { cn } from '@/lib/utils'

function hrefFor(locale: Locale, basePath: string): string {
  if (locale === defaultLocale) return basePath || '/'
  if (basePath === '/' || basePath === '') return `/${locale}`
  return `/${locale}${basePath}`
}

export default function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname()
  const current = localeFromPathname(pathname)
  const base = stripLocale(pathname)

  return (
    <div className={cn('flex items-center gap-0.5 text-xs font-medium', className)} aria-label="Sprache wählen">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="mx-1 text-primary-300" aria-hidden="true">·</span>}
          <Link
            href={hrefFor(locale, base)}
            hrefLang={locale}
            aria-current={locale === current ? 'true' : undefined}
            className={cn(
              'px-1 py-0.5 rounded transition-colors uppercase tracking-wide',
              locale === current
                ? 'text-accent-600 font-semibold'
                : 'text-primary-400 hover:text-primary-900'
            )}
          >
            {localeLabels[locale]}
          </Link>
        </span>
      ))}
    </div>
  )
}
