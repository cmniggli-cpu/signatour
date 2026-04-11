import type { Metadata } from 'next'
import MatterportPageClient from './MatterportPageClient'

export const metadata: Metadata = {
  title: 'Matterport Alternative für die Schweiz',
  description: 'Professionelle 360-Grad-Touren ohne Abo, ohne Kamera-Kauf, ohne Vendor Lock-in. Die beste Matterport Alternative für KMUs im DACH-Raum.',
}

export default function MatterportAlternativePage() {
  return <MatterportPageClient />
}
