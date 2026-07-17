import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['restaurant']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/branchen/restaurant',
    languages: { 'de-CH': '/branchen/restaurant', 'fr-CH': '/fr/branchen/restaurant', en: '/en/branchen/restaurant', 'x-default': '/branchen/restaurant' },
  },
}

export default function RestaurantPage() {
  return <BranchenTemplate data={data} />
}
