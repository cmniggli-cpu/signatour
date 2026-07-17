import { de, type Dictionary } from './de'
import { fr } from './fr'
import { en } from './en'
import type { Locale } from '../config'

export type { Dictionary }

export const dictionaries: Record<Locale, Dictionary> = { de, fr, en }
