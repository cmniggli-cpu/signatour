import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['fitnessstudio']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/branchen/fitnessstudio',
    languages: { 'de-CH': '/branchen/fitnessstudio', 'fr-CH': '/fr/branchen/fitnessstudio', en: '/en/branchen/fitnessstudio', 'x-default': '/branchen/fitnessstudio' },
  },
}

export default function FitnessstudioPage() {
  return <BranchenTemplate data={data} />
}
