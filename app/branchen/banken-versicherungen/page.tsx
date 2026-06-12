import type { Metadata } from 'next'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA } from '@/lib/branchen-data'

const data = BRANCHEN_DATA['banken-versicherungen']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/branchen/banken-versicherungen' },
}

export default function BankenVersicherungenPage() {
  return <BranchenTemplate data={data} />
}
