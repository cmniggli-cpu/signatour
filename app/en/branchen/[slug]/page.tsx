import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BranchenTemplate from '@/components/sections/BranchenTemplate'
import { BRANCHEN_DATA_EN } from '@/lib/branchen-data-en'

export function generateStaticParams() {
  return Object.keys(BRANCHEN_DATA_EN).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = BRANCHEN_DATA_EN[slug]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/en/branchen/${slug}`,
      languages: {
        'de-CH': `/branchen/${slug}`,
        'fr-CH': `/fr/branchen/${slug}`,
        en: `/en/branchen/${slug}`,
        'x-default': `/branchen/${slug}`,
      },
    },
  }
}

export default async function BranchenPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = BRANCHEN_DATA_EN[slug]
  if (!data) notFound()
  return <BranchenTemplate data={data} locale="en" />
}
