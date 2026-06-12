import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/pakete', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/kontakt', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/branchen/hotel', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/branchen/restaurant', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/branchen/spa-wellness', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/branchen/fitnessstudio', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/branchen/immobilien', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/branchen/banken-versicherungen', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/branchen/eventlocations', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/ueber-uns', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/impressum', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/datenschutz', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/agb', priority: 0.2, changeFrequency: 'yearly' },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
