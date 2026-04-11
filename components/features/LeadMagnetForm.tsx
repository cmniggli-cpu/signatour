'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Download, CheckCircle, FileText, Calculator, ClipboardList, Lightbulb } from 'lucide-react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

const schema = z.object({
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
})

type FormData = z.infer<typeof schema>

export default function LeadMagnetForm() {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('Lead magnet:', data)
    setSubmitted(true)
  }

  const benefits = [
    { icon: ClipboardList, text: '10-Punkte Bereitschafts-Check' },
    { icon: Calculator, text: 'ROI-Rechner' },
    { icon: FileText, text: 'Shooting-Vorbereitungsguide' },
    { icon: Lightbulb, text: 'Branchenspezifische Tipps' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-cream rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-300/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Kostenlose Checkliste</span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-primary-900 tracking-tight">
              Ist Ihr Betrieb bereit für eine 360-Tour?
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-primary-700">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-900" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="mt-8 text-center py-6">
                <CheckCircle className="w-12 h-12 text-success mx-auto" />
                <p className="mt-3 text-lg font-bold text-primary-900">Danke! Ihre Checkliste wird per E-Mail zugestellt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="ihre@email.ch"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                </div>
                <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
                  <Download className="mr-2 w-4 h-4" />
                  {isSubmitting ? 'Wird gesendet...' : 'Checkliste anfordern'}
                </Button>
              </form>
            )}

            <p className="mt-3 text-xs text-primary-400">
              Kein Spam. Ihre E-Mail wird nur für den Versand der Checkliste verwendet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
