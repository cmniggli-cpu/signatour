'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/constants'
import { localizedHref, type Locale } from '@/lib/i18n/config'
import {
  REFERENZTOUR_BRANCHEN,
  REFERENZTOUR_BRANCHEN_DE,
  referenztourContent,
  type ReferenztourBranche,
  type ReferenztourTours,
} from '@/lib/i18n/content/referenztour'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

function isBranche(value: string | null): value is ReferenztourBranche {
  return !!value && (REFERENZTOUR_BRANCHEN as readonly string[]).includes(value)
}

interface Contact { name: string; firma: string; email: string; phone: string }

interface ReferenztourLeadProps {
  locale?: Locale
  // Server-seitig via getReferenztourTours(locale) berechnet, damit die
  // Branchen-Daten nicht ins Client-Bundle wandern.
  tours: ReferenztourTours
  heading?: 'h1' | 'h2'
  // Auf /referenztour: Branche aus ?branche=… vorauswählen (Branchenseiten-Links)
  readQueryParam?: boolean
}

export default function ReferenztourLead({ locale = 'de', tours, heading = 'h2', readQueryParam = false }: ReferenztourLeadProps) {
  const c = referenztourContent[locale]
  const lp = (href: string) => localizedHref(href, locale)
  const [branche, setBranche] = useState<ReferenztourBranche | null>(null)
  const [contact, setContact] = useState<Contact>({ name: '', firma: '', email: '', phone: '' })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!readQueryParam) return
    const b = new URLSearchParams(window.location.search).get('branche')
    if (isBranche(b)) setBranche(b)
  }, [readQueryParam])

  const set = (k: keyof Contact, v: string) => {
    setContact((p) => ({ ...p, [k]: v }))
    setErrors((e) => ({ ...e, [k]: false }))
  }

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!branche) return
    const e: Record<string, boolean> = {}
    if (contact.name.trim().length < 2) e.name = true
    if (contact.firma.trim().length < 2) e.firma = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = true
    setErrors(e)
    if (Object.keys(e).length) return

    const payload = {
      _subject: `Referenztour-Lead – ${contact.firma}`,
      _template: 'table',
      _captcha: 'false',
      Name: contact.name,
      Firma: contact.firma,
      'E-Mail': contact.email,
      Telefon: contact.phone || '-',
      Branche: REFERENZTOUR_BRANCHEN_DE[branche],
      Sprache: locale.toUpperCase(),
      Quelle: 'Referenztour-Modul signatour.ch',
    }
    setSending(true)
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error()
      // FormSubmit antwortet auch bei Ablehnung mit HTTP 200 – Erfolg steht nur im JSON-Body
      const result = await res.json().catch(() => null)
      if (!result || String(result.success) !== 'true') throw new Error()
    } catch {
      // Fallback: E-Mail-Programm öffnen, damit kein Lead verloren geht –
      // die Referenztour wird trotzdem sofort gezeigt.
      const body = Object.entries(payload).filter(([k]) => !k.startsWith('_')).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`
    } finally {
      setSending(false)
      setDone(true)
    }
  }

  const tour = branche ? tours[branche] : null
  const H = heading
  const inputStyle = (k: string): React.CSSProperties => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: 12,
    border: `1px solid ${errors[k] ? '#e05d5d' : 'var(--ln)'}`,
    background: 'var(--white)',
    color: 'inherit',
    font: 'inherit',
    fontSize: 14.5,
  })
  const fieldLabel: React.CSSProperties = { display: 'block', fontSize: 13.5, fontWeight: 600, marginBottom: 6, textAlign: 'left' }
  const errStyle: React.CSSProperties = { color: '#e05d5d', fontSize: 12.5, marginTop: 4, textAlign: 'left' }

  return (
    <section className="blk" id="referenztour" style={{ background: 'var(--white)' }}>
      <style>{`.rtile{border:1px solid var(--ln);border-radius:12px;background:var(--white);padding:18px 14px;font:inherit;font-size:14.5px;font-weight:600;color:inherit;cursor:pointer;transition:border-color .15s,box-shadow .15s;text-align:center}.rtile:hover{border-color:var(--g);box-shadow:0 2px 14px rgba(0,0,0,.06)}`}</style>
      <div className="wrap center" style={{ maxWidth: 920 }}>
        <div className="kicker">{c.kicker}</div>
        <H className="sec">{c.title}</H>
        <p className="sub" style={{ margin: '0 auto' }}>{c.subtitle}</p>
        <div className="rule" />

        {/* Schritt 3: Tour sofort zeigen – Belohnung statt «wir melden uns» */}
        {done && tour ? (
          <div style={{ marginTop: 34 }}>
            <p style={{ fontWeight: 600, color: 'var(--g)', fontSize: 15 }}>{c.successNote}</p>
            <div className="kicker" style={{ marginTop: 26 }}>{c.tourKicker}</div>
            <h3 className="sec" style={{ fontSize: 'clamp(22px,2.6vw,30px)' }}>{tour.title}</h3>
            <p className="sub" style={{ margin: '10px auto 26px' }}>
              {tour.fallback && branche ? (c.pendingNotes[branche] ?? c.fallbackNote(c.branchen[branche])) : tour.note}
            </p>
            <div className="ref" style={{ maxWidth: 840, margin: '0 auto', textAlign: 'left' }}>
              <iframe src={tour.url} allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title={`${c.tourKicker}: ${tour.title}`} />
              <div className="bot"><b>{tour.title}</b><a href={tour.url} target="_blank" rel="noopener noreferrer">{c.tourOpen}</a></div>
            </div>
            <div className="cta" style={{ justifyContent: 'center', marginTop: 30 }}>
              <a className="btn btn-gold" href={lp('/kontakt')}>{c.ctaOffer}</a>
              <a className="btn btn-ghost" href="/konfigurator.html">{c.ctaKonfigurator}</a>
            </div>
          </div>
        ) : branche ? (
          /* Schritt 2: kompakte Kontaktdaten + Erwartungs-Bullets */
          <div style={{ marginTop: 34, textAlign: 'left' }}>
            <p style={{ fontSize: 14 }}>
              <span style={{ fontWeight: 600 }}>{c.selectedLabel}: {c.branchen[branche]}</span>{' '}
              <button type="button" onClick={() => setBranche(null)} style={{ background: 'none', border: 0, padding: 0, color: 'var(--g)', font: 'inherit', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>
                {c.changeLabel}
              </button>
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 34, marginTop: 18, alignItems: 'start' }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>{c.expectTitle}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                  {c.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: 10, fontSize: 14.5, lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--g)', fontWeight: 700 }}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submit} noValidate>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>{c.step2Title}</h3>
                <div style={{ display: 'grid', gap: 14 }}>
                  <div>
                    <label style={fieldLabel} htmlFor="rt-name">{c.labelName} <span style={{ color: '#e05d5d' }}>*</span></label>
                    <input id="rt-name" style={inputStyle('name')} placeholder={c.phName} autoComplete="name" value={contact.name} onChange={(e) => set('name', e.target.value)} />
                    {errors.name && <p style={errStyle}>{c.errName}</p>}
                  </div>
                  <div>
                    <label style={fieldLabel} htmlFor="rt-firma">{c.labelFirma} <span style={{ color: '#e05d5d' }}>*</span></label>
                    <input id="rt-firma" style={inputStyle('firma')} placeholder={c.phFirma} autoComplete="organization" value={contact.firma} onChange={(e) => set('firma', e.target.value)} />
                    {errors.firma && <p style={errStyle}>{c.errFirma}</p>}
                  </div>
                  <div>
                    <label style={fieldLabel} htmlFor="rt-email">{c.labelEmail} <span style={{ color: '#e05d5d' }}>*</span></label>
                    <input id="rt-email" type="email" style={inputStyle('email')} placeholder={c.phEmail} autoComplete="email" value={contact.email} onChange={(e) => set('email', e.target.value)} />
                    {errors.email && <p style={errStyle}>{c.errEmail}</p>}
                  </div>
                  <div>
                    <label style={fieldLabel} htmlFor="rt-phone">{c.labelPhone}</label>
                    <input id="rt-phone" type="tel" style={inputStyle('phone')} placeholder="+41 …" autoComplete="tel" value={contact.phone} onChange={(e) => set('phone', e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn-gold" disabled={sending} style={{ border: 0, cursor: sending ? 'wait' : 'pointer', opacity: sending ? 0.7 : 1 }}>
                    {sending ? c.submitting : c.submit}
                  </button>
                  <p style={{ fontSize: 12.5, color: 'var(--mut)', margin: 0 }}>
                    {c.privacyText} (<Link href="/datenschutz" style={{ textDecoration: 'underline', color: 'inherit' }}>{c.privacyLabel}</Link>)
                  </p>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* Schritt 1: Branchenwahl als Kacheln – niedrige Hürde zuerst */
          <div style={{ marginTop: 30 }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>{c.step1Title}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 12 }}>
              {REFERENZTOUR_BRANCHEN.map((b) => (
                <button key={b} type="button" className="rtile" onClick={() => setBranche(b)}>
                  {c.branchen[b]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
