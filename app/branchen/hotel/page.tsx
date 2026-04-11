import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['hotel']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
}

export default function HotelPage() {
  return <BranchenTemplate data={data} />
}
