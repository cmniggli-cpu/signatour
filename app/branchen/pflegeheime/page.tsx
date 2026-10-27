import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['pflegeheime']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/branchen/pflegeheime',
    languages: { 'de-CH': '/branchen/pflegeheime', 'fr-CH': '/fr/branchen/pflegeheime', en: '/en/branchen/pflegeheime', 'x-default': '/branchen/pflegeheime' },
  },
}

export default function PflegeheimePage() {
  return <BranchenTemplate data={data} />
}
