'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
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
    <section className="bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-[10%] w-64 h-64 bg-accent-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg text-primary-400 max-w-2xl mx-auto"
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
          <Button href={buttonHref} variant="accent" size="lg">
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-5 text-sm text-primary-500">Unverbindlich · Antwort innert 24 Stunden · Schweizer Anbieter</p>
        </motion.div>
      </div>
    </section>
  )
}
