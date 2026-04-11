import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['fitnessstudio']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
}

export default function FitnessstudioPage() {
  return <BranchenTemplate data={data} />
}
