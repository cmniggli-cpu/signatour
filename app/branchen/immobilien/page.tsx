import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['immobilien']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/branchen/immobilien',
    languages: { 'de-CH': '/branchen/immobilien', 'fr-CH': '/fr/branchen/immobilien', en: '/en/branchen/immobilien', 'x-default': '/branchen/immobilien' },
  },
}

export default function ImmobilienPage() {
  return <BranchenTemplate data={data} />
}
