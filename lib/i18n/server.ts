import 'server-only'
import { headers } from 'next/headers'
import { defaultLocale, isLocale, type Locale } from './config'
import { dictionaries, type Dictionary } from './dictionaries'

export async function getLocale(): Promise<Locale> {
  const h = await headers()
  const value = h.get('x-locale')
  return isLocale(value) ? value : defaultLocale
}

export async function getDictionary(): Promise<{ locale: Locale; t: Dictionary }> {
  const locale = await getLocale()
  return { locale, t: dictionaries[locale] }
}
