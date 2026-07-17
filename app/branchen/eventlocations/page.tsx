import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['eventlocations']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/branchen/eventlocations',
    languages: { 'de-CH': '/branchen/eventlocations', 'fr-CH': '/fr/branchen/eventlocations', en: '/en/branchen/eventlocations', 'x-default': '/branchen/eventlocations' },
  },
}

export default function EventlocationsPage() {
  return <BranchenTemplate data={data} />
}
