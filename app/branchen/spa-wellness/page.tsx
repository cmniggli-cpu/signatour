import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['spa-wellness']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/branchen/spa-wellness',
    languages: { 'de-CH': '/branchen/spa-wellness', 'fr-CH': '/fr/branchen/spa-wellness', en: '/en/branchen/spa-wellness', 'x-default': '/branchen/spa-wellness' },
  },
}

export default function SpaWellnessPage() {
  return <BranchenTemplate data={data} />
}
