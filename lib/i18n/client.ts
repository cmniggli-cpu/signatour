'use client'

import { usePathname } from 'next/navigation'
import { localeFromPathname, type Locale } from './config'
import { dictionaries, type Dictionary } from './dictionaries'

export { localeFromPathname, stripLocale, localizedHref } from './config'

export function useLocale(): Locale {
  return localeFromPathname(usePathname())
}

export function useDictionary(): { locale: Locale; t: Dictionary } {
  const locale = useLocale()
  return { locale, t: dictionaries[locale] }
}
