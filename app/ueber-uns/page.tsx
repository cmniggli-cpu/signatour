import type { Metadata } from 'next'
import UeberUnsPageClient from './UeberUnsPageClient'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Ihr lokaler Partner für 360-Grad-Rundgänge. Done-for-You, persönlich, transparent, DSGVO-konform.',
}

export default function UeberUnsPage() {
  return <UeberUnsPageClient />
}
