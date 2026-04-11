'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { HERO_STATS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-[15%] w-[500px] h-[500px] bg-accent-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-primary-200/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-8">
              360-Grad-Touren für KMUs
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-primary-900 leading-[0.95] tracking-tight"
          >
            Zeigen Sie
            <br />
            wie es bei Ihnen
            <br />
            <span className="text-accent-500">wirklich</span> aussieht
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 text-lg text-primary-500 leading-relaxed max-w-xl"
          >
            Interaktive 360-Grad-Rundgänge für Ihre Räumlichkeiten.
            Direkt im Browser, ohne App. Wir kümmern uns um alles:
            Shooting, Produktion, Hosting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/kontakt" variant="primary" size="lg">
              Kostenlose Beratung
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/pakete" variant="outline" size="lg">
              Pakete ansehen
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-dark rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-accent-500">{stat.value}</div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
