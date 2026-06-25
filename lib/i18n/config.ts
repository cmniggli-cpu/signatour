export const locales = ['de', 'fr', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'de'

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  fr: 'Français',
  en: 'English',
}

export const localeLabels: Record<Locale, string> = {
  de: 'DE',
  fr: 'FR',
  en: 'EN',
}

// HTML-lang / og:locale-Werte pro Sprache
export const localeHtml: Record<Locale, string> = {
  de: 'de-CH',
  fr: 'fr-CH',
  en: 'en',
}

export const localeOg: Record<Locale, string> = {
  de: 'de_CH',
  fr: 'fr_CH',
  en: 'en_US',
}

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

// Sprache aus einem Pfad ableiten (/fr/…, /en/… → sonst Deutsch).
export function localeFromPathname(pathname: string): Locale {
  const seg = pathname.split('/')[1]
  return isLocale(seg) ? seg : defaultLocale
}

// Pfad ohne Sprachpräfix (für Sprachwechsel-Links und Aktiv-Markierung).
export function stripLocale(pathname: string): string {
  const seg = pathname.split('/')[1]
  if (seg === 'fr' || seg === 'en') {
    return pathname.slice(seg.length + 1) || '/'
  }
  return pathname
}

// Internen Href in die gewünschte Sprache übersetzen (Deutsch ohne Präfix).
export function localizedHref(href: string, locale: Locale): string {
  if (!href.startsWith('/')) return href
  if (locale === defaultLocale) return href
  if (href === '/') return `/${locale}`
  return `/${locale}${href}`
}
