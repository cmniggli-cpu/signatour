'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Camera, Palette, Globe } from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/constants'

const icons = [MessageSquare, Camera, Palette, Globe]

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">In 4 Schritten</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black text-primary-900 tracking-tight">
            So entsteht Ihre Tour
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary-900 flex items-center justify-center text-white">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center text-xs font-black">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-bold text-primary-900">{step.title}</h3>
                <p className="mt-2 text-sm text-primary-500 leading-relaxed">{step.description}</p>

                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-primary-200" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
