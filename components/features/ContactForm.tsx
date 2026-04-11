'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle } from 'lucide-react'
import Input, { Select, Textarea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { INDUSTRIES_DROPDOWN } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  area: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-success mx-auto" />
        <h3 className="mt-4 text-2xl font-bold text-primary-900">Vielen Dank für Ihre Anfrage!</h3>
        <p className="mt-2 text-primary-500">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Name"
          placeholder="Ihr Name"
          required
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="E-Mail"
          type="email"
          placeholder="ihre@email.ch"
          required
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Telefon"
          type="tel"
          placeholder="+41 ..."
          {...register('phone')}
        />
        <Select
          label="Branche"
          options={INDUSTRIES_DROPDOWN.map((ind) => ({ value: ind, label: ind }))}
          {...register('industry')}
        />
      </div>

      <Input
        label="Ungefähre Fläche in m²"
        placeholder="z.B. 200"
        {...register('area')}
      />

      <Textarea
        label="Nachricht / Anmerkungen"
        placeholder="Erzählen Sie uns von Ihrem Projekt..."
        {...register('message')}
      />

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
        <Send className="ml-2 w-5 h-5" />
      </Button>
    </form>
  )
}
