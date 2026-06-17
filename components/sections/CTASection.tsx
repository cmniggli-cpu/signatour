'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTASection({
  title = 'Bereit, aus Besuchern Kunden zu machen?',
  subtitle = 'In einem unverbindlichen Gespräch klären wir, wie eine Signature Tour in Ihrem Betrieb mehr qualifizierte Anfragen erzeugt – und ob sie sich für Sie rechnet.',
  buttonText = 'Kostenlose Beratung',
  buttonHref = '/kontakt',
}: CTASectionProps) {
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
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg max-w-2xl mx-auto"
          style={{ color: '#3c2c08' }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href={buttonHref}
            className="inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 px-9 py-4 text-base rounded-full"
            style={{ background: '#1A1304', color: '#F7DC8A' }}
          >
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <p className="mt-5 text-sm" style={{ color: '#5a430f' }}>Unverbindlich · Antwort innert 24 Stunden · Schweizer Anbieter</p>
        </motion.div>
      </div>
    </section>
  )
}
