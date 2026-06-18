'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import type { PricingTier } from '@/lib/types'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  tier: PricingTier
  showRange?: boolean
  index?: number
}

export default function PricingCard({ tier, showRange = false, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        'relative rounded-2xl p-8 flex flex-col h-full border',
        tier.featured
          ? 'bg-marine-900 text-white border-marine-900'
          : 'bg-white border-primary-200/60 card-shadow'
      )}
    >
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            <Star className="w-3.5 h-3.5" /> Beliebt
          </span>
        </div>
      )}

      <div>
        <h3 className={cn('text-xl font-bold', tier.featured ? 'text-white' : 'text-primary-900')}>{tier.name}</h3>
        <p className={cn('mt-1 text-sm', tier.featured ? 'text-primary-300' : 'text-primary-500')}>{tier.description}</p>
      </div>

      <div className="mt-6">
        <span className={cn('text-5xl cd-serif', tier.featured ? 'text-accent-400' : 'text-accent-600')}>
          {showRange ? tier.priceRange : tier.price}
        </span>
        <span className={cn('ml-2 text-sm', tier.featured ? 'text-primary-400' : 'text-primary-400')}>einmalig</span>
      </div>

      <p className={cn('mt-2 text-sm font-medium', tier.featured ? 'text-accent-400' : 'text-accent-600')}>{tier.hosting}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className={cn('flex items-start gap-3 text-sm', tier.featured ? 'text-primary-200' : 'text-primary-600')}>
            <Check className={cn('w-4 h-4 mt-0.5 shrink-0', tier.featured ? 'text-accent-400' : 'text-success')} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href={`/bestellen?paket=${tier.name.toLowerCase()}`}
          className={cn(
            'inline-flex w-full items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors',
            tier.featured ? 'bg-accent-500 text-white hover:bg-accent-600' : 'bg-marine-900 text-accent-400 hover:bg-marine-800'
          )}
        >
          {tier.cta || 'Paket bestellen'}
        </a>
      </div>
    </motion.div>
  )
}
