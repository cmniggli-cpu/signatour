'use client'

import { motion } from 'framer-motion'
import { useDictionary } from '@/lib/i18n/client'
import { localizedHref } from '@/lib/i18n/config'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTASection({ title, subtitle, buttonText, buttonHref }: CTASectionProps) {
  const { locale, t } = useDictionary()
  const resolvedTitle = title ?? t.cta.title
  const resolvedSubtitle = subtitle ?? t.cta.subtitle
  const resolvedButtonText = buttonText ?? t.cta.button
  const resolvedButtonHref = buttonHref ?? localizedHref('/kontakt', locale)

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(125deg,#F7DC8A 0%,#E3B23A 32%,#C8901C 60%,#E3B23A 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-white/25 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl cd-serif leading-[1.05]"
          style={{ color: '#231703' }}
        >
          {resolvedTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg max-w-2xl mx-auto"
          style={{ color: '#3c2c08' }}
        >
          {resolvedSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href={resolvedButtonHref}
            className="inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 px-9 py-4 text-base rounded-full"
            style={{ background: '#0C1B2E', color: '#E3B23A' }}
          >
            {resolvedButtonText}
          </a>
          <p className="mt-5 text-sm" style={{ color: '#5a430f' }}>{t.cta.trust}</p>
        </motion.div>
      </div>
    </section>
  )
}
