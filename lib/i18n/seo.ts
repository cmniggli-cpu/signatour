import { SITE_URL } from '@/lib/constants'
import { localizedHref, type Locale } from './config'

// Baut canonical + hreflang-Alternates für einen Pfad (deutsche Basis ohne Präfix).
export function buildAlternates(basePath: string, locale: Locale) {
  const abs = (l: Locale) => `${SITE_URL}${localizedHref(basePath, l)}`
  return {
    canonical: abs(locale),
    languages: {
      'de-CH': abs('de'),
      'fr-CH': abs('fr'),
      en: abs('en'),
      'x-default': abs('de'),
    },
  }
}
