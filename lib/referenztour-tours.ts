import { BRANCHEN_DATA } from '@/lib/branchen-data'
import { BRANCHEN_DATA_FR } from '@/lib/branchen-data-fr'
import { BRANCHEN_DATA_EN } from '@/lib/branchen-data-en'
import type { BranchenPageData } from '@/lib/branchen-data'
import type { Locale } from '@/lib/i18n/config'
import { REFERENZTOUR_BRANCHEN, type ReferenztourBranche, type ReferenztourTours } from '@/lib/i18n/content/referenztour'

// Nur auf dem Server verwenden (Seiten reichen das Ergebnis als Prop an das
// Client-Modul weiter), damit die grossen Branchen-Daten nicht ins
// Client-Bundle wandern.

const DATA_BY_LOCALE: Record<Locale, Record<string, BranchenPageData>> = {
  de: BRANCHEN_DATA,
  fr: BRANCHEN_DATA_FR,
  en: BRANCHEN_DATA_EN,
}

// Ähnlichstes Referenzobjekt, falls die Branche (noch) kein eigenes
// demoTour-Feld in branchen-data hat – z.B. Pflegeheime, bis die
// Aliziers-URL eingetragen ist. Sobald dort ein demoTour-Feld steht,
// gewinnt automatisch die echte Branchen-Tour.
const FALLBACK_SLUG: Record<ReferenztourBranche, string> = {
  hotel: 'spa-wellness',
  restaurant: 'spa-wellness',
  'spa-wellness': 'spa-wellness',
  fitnessstudio: 'spa-wellness',
  immobilien: 'immobilien',
  'banken-versicherungen': 'immobilien',
  eventlocations: 'spa-wellness',
  pflegeheime: 'immobilien',
  andere: 'immobilien',
}

export function getReferenztourTours(locale: Locale): ReferenztourTours {
  const data = DATA_BY_LOCALE[locale]
  const result = {} as ReferenztourTours
  for (const branche of REFERENZTOUR_BRANCHEN) {
    const own = data[branche]?.demoTour
    if (own) {
      result[branche] = { ...own, fallback: false }
      continue
    }
    const fallback =
      data[FALLBACK_SLUG[branche]]?.demoTour ??
      data['spa-wellness']?.demoTour ??
      data['immobilien']?.demoTour
    result[branche] = fallback ? { ...fallback, fallback: true } : null
  }
  return result
}
