'use client'

import { motion } from 'framer-motion'
import type { Stat } from '@/lib/types'

interface StatsBarProps {
  stats: Stat[]
  dark?: boolean
}

export default function StatsBar({ stats, dark = true }: StatsBarProps) {
  return (
    <section className={dark ? 'bg-marine-900' : 'bg-white'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-black ${dark ? 'text-accent-500' : 'text-primary-900'}`}>
                {stat.value}
              </div>
              <div className={`mt-2 text-sm ${dark ? 'text-primary-400' : 'text-primary-500'}`}>
                {stat.label}
              </div>
              {stat.source && (
                <div className={`mt-1 text-xs ${dark ? 'text-primary-600' : 'text-primary-300'}`}>
                  {stat.source}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
