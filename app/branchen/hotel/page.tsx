import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['hotel']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/branchen/hotel',
    languages: { 'de-CH': '/branchen/hotel', 'fr-CH': '/fr/branchen/hotel', en: '/en/branchen/hotel', 'x-default': '/branchen/hotel' },
  },
}

export default function HotelPage() {
  return <BranchenTemplate data={data} />
}
