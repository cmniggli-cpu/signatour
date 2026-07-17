'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { Send, CheckCircle } from 'lucide-react'
import Input, { Select, Textarea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { CONTACT_EMAIL } from '@/lib/constants'
import { kontaktContent } from '@/lib/i18n/content/kontakt'
import type { Locale } from '@/lib/i18n/config'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

interface ContactFormData {
  name: string
  email: string
  phone?: string
  industry?: string
  area?: string
  message?: string
  agb: boolean
}

function buildMailto(data: ContactFormData) {
  const body = [
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    `Telefon: ${data.phone || '-'}`,
    `Branche: ${data.industry || '-'}`,
    `Fläche: ${data.area || '-'}`,
    `AGB akzeptiert: ${data.agb ? 'Ja' : 'Nein'}`,
    '',
    data.message || '',
    '',
    '(Quelle: Kontaktformular signatour.ch)',
  ].join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Anfrage über signatour.ch – ${data.name}`)}&body=${encodeURIComponent(body)}`
}

export default function ContactForm({ locale = 'de' }: { locale?: Locale }) {
  const f = kontaktContent[locale].form
  const [submitted, setSubmitted] = useState(false)

  const contactSchema = z.object({
    name: z.string().min(2, f.errName),
    email: z.string().email(f.errEmail),
    phone: z.string().optional(),
    industry: z.string().optional(),
    area: z.string().optional(),
    message: z.string().optional(),
    agb: z.boolean().refine((v) => v === true, f.errAgb),
  })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          agb: data.agb ? 'akzeptiert' : 'nicht akzeptiert',
          Sprache: locale.toUpperCase(),
          _subject: `Anfrage über signatour.ch – ${data.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error('send failed')
      // FormSubmit antwortet auch bei Ablehnung mit HTTP 200 – Erfolg steht nur im JSON-Body
      const result = await res.json().catch(() => null)
      if (!result || String(result.success) !== 'true') throw new Error('send rejected')
      setSubmitted(true)
    } catch {
      // Fallback: E-Mail-Programm mit vorausgefüllter Anfrage öffnen, damit kein Lead verloren geht
      window.location.href = buildMailto(data)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-success mx-auto" />
        <h3 className="mt-4 text-2xl font-bold text-primary-900">{f.successTitle}</h3>
        <p className="mt-2 text-primary-500">{f.successText}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={f.labelName}
          placeholder={f.phName}
          required
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label={f.labelEmail}
          type="email"
          placeholder={f.phEmail}
          required
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={f.labelPhone}
          type="tel"
          placeholder="+41 ..."
          {...register('phone')}
        />
        <Select
          label={f.labelIndustry}
          options={f.industries.map((ind) => ({ value: ind, label: ind }))}
          {...register('industry')}
        />
      </div>

      <Input
        label={f.labelArea}
        placeholder={f.phArea}
        {...register('area')}
      />

      <Textarea
        label={f.labelMessage}
        placeholder={f.phMessage}
        {...register('message')}
      />

      <div>
        <label className="flex items-start gap-3 cursor-pointer text-sm text-primary-600">
          <input
            type="checkbox"
            {...register('agb')}
            className="mt-0.5 w-4 h-4 shrink-0 accent-[#C8901C]"
          />
          <span>
            {f.agbBefore}{' '}
            <Link href="/agb" target="_blank" rel="noopener" className="underline hover:text-primary-900">
              {f.agbLink}
            </Link>{' '}
            {f.agbAfter}<span className="text-red-500 ml-1">*</span>
          </span>
        </label>
        {errors.agb && <p className="text-sm text-red-500 pl-7 mt-1.5">{errors.agb.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? f.submitting : f.submit}
        <Send className="ml-2 w-5 h-5" />
      </Button>

      <p className="text-xs text-primary-400 text-center">
        {f.trustLine} (<Link href="/datenschutz" className="underline hover:text-primary-600">{f.privacyLabel}</Link>)
      </p>
    </form>
  )
}
