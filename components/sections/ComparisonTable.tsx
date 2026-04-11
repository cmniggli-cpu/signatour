'use client'

import { motion } from 'framer-motion'
import type { ComparisonRow } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ComparisonTableProps {
  rows: ComparisonRow[]
  showOgulo?: boolean
  title?: string
  subtitle?: string
}

export default function ComparisonTable({
  rows,
  showOgulo = true,
  title = 'Anbieter-Vergleich',
  subtitle,
}: ComparisonTableProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-primary-500 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-primary-200/60"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-900 text-white">
                <th className="text-left p-5 font-semibold text-sm">Kriterium</th>
                <th className="p-5 font-semibold text-sm text-accent-500">Signatour</th>
                <th className="p-5 font-semibold text-sm">Matterport</th>
                {showOgulo && <th className="p-5 font-semibold text-sm">Ogulo</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={cn(
                    'border-b border-primary-100 transition-colors',
                    i % 2 === 0 ? 'bg-white' : 'bg-cream',
                    'hover:bg-accent-50/50'
                  )}
                >
                  <td className="p-5 font-medium text-primary-800 text-sm">{row.feature}</td>
                  <td className={cn('p-5 text-center text-sm', row.signatourWins && 'font-semibold text-primary-900')}>
                    <span className={row.signatourWins ? 'bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold' : ''}>
                      {row.signatour}
                    </span>
                  </td>
                  <td className="p-5 text-center text-sm text-primary-500">{row.matterport}</td>
                  {showOgulo && <td className="p-5 text-center text-sm text-primary-500">{row.ogulo}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
