'use client'

import { useState, useEffect, useMemo } from 'react'
import { Check, CheckCircle, ShieldCheck, Phone } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'
import { bestellenContent } from '@/lib/i18n/content/bestellen'
import type { Locale } from '@/lib/i18n/config'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`
const TEL = CONTACT_PHONE.replace(/[^+\d]/g, '')
const fmt = (n: number) => 'CHF ' + n.toLocaleString('de-CH').replace(/,/g, '’') + '.–'

interface Contact { name: string; firma: string; email: string; tel: string; adresse: string; msg: string }

export default function BestellenPageClient({ locale = 'de' }: { locale?: Locale }) {
  const c = bestellenContent[locale]
  const [pkgId, setPkgId] = useState('signature')
  const [svcId, setSvcId] = useState('offen')
  const [opts, setOpts] = useState<Record<string, boolean>>({})
  const [contact, setContact] = useState<Contact>({ name: '', firma: '', email: '', tel: '', adresse: '', msg: '' })
  const [agb, setAgb] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const p = params.get('paket')
    if (p && c.packages.some((x) => x.id === p)) setPkgId(p)
    const s = params.get('service')
    if (s && c.services.some((x) => x.id === s)) setSvcId(s)
  }, [c])

  const pkg = c.packages.find((x) => x.id === pkgId)!
  const svc = c.services.find((x) => x.id === svcId)
  const chosenOptions = c.options.filter((o) => opts[o.id])
  const { total, approx } = useMemo(() => {
    let t = pkg.from
    let a = !!pkg.approx
    chosenOptions.forEach((o) => { t += o.add; if (o.approx) a = true })
    return { total: t, approx: a }
  }, [pkg, chosenOptions])

  const set = (k: keyof Contact, v: string) => { setContact((p) => ({ ...p, [k]: v })); setErrors((e) => ({ ...e, [k]: false })) }

  const submit = async () => {
    const e: Record<string, boolean> = {}
    if (contact.name.trim().length < 2) e.name = true
    if (contact.firma.trim().length < 2) e.firma = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = true
    if (!agb) e.agb = true
    setErrors(e)
    if (Object.keys(e).length) return

    const payload = {
      _subject: `Bestellung – ${pkg.name} (${contact.firma})`,
      _template: 'table',
      _captcha: 'false',
      Paket: `${pkg.name} (${pkg.price}) [${pkg.id}]`,
      Optionen: chosenOptions.map((o) => o.name).join(', ') || 'keine',
      'Servicepaket ab 2. Jahr': svc ? `${svc.name} (${svc.price})` : 'Noch offen – im Gespräch klären',
      'Geschätzte Investition': `${approx ? 'ab ' : ''}${fmt(total)} einmalig`,
      Sprache: locale.toUpperCase(),
      Name: contact.name, Firma: contact.firma, 'E-Mail': contact.email, Telefon: contact.tel || '-',
      Rechnungsadresse: contact.adresse || '-', Nachricht: contact.msg || '-',
      'AGB akzeptiert': agb ? 'Ja' : 'Nein',
      Quelle: 'Bestellseite signatour.ch',
    }
    setSending(true)
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error()
      // FormSubmit antwortet auch bei Ablehnung mit HTTP 200 – Erfolg steht nur im JSON-Body
      const result = await res.json().catch(() => null)
      if (!result || String(result.success) !== 'true') throw new Error()
      setDone(true)
    } catch {
      const body = Object.entries(payload).filter(([k]) => !k.startsWith('_')).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`
      setDone(true)
    } finally { setSending(false) }
  }

  if (done) {
    return (
      <>
        <PageHero badge={c.hero.badge} title={c.done.title} />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="w-16 h-16 text-success mx-auto" />
            <p className="mt-6 text-lg text-primary-600">{c.done.text1(pkg.name)}</p>
            <p className="mt-4 text-sm text-primary-500">{c.done.callLabel} <a href={`tel:${TEL}`} className="text-accent-600 font-semibold">{CONTACT_PHONE}</a></p>
          </div>
        </section>
      </>
    )
  }

  const inputCls = (k: string) => `w-full rounded-xl border bg-white px-4 py-3 text-primary-900 outline-none transition-colors focus:border-accent-500 ${errors[k] ? 'border-red-400' : 'border-primary-200'}`

  return (
    <>
      <PageHero badge={c.hero.badge} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h2 className="text-2xl cd-serif text-primary-900">{c.steps.paket}</h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.packages.map((p) => (
                  <button key={p.id} type="button" onClick={() => setPkgId(p.id)}
                    className={`text-left rounded-xl border p-4 transition-colors ${pkgId === p.id ? 'border-accent-500 bg-cream' : 'border-primary-200 hover:border-accent-300'}`}>
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-primary-900 text-sm">{p.name}</span>
                      {pkgId === p.id && <Check className="w-4 h-4 text-accent-600 shrink-0" />}
                    </span>
                    <span className="block mt-1 text-accent-600 font-semibold text-sm">{p.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl cd-serif text-primary-900">{c.steps.optionen} <span className="text-sm font-normal text-primary-400">{c.steps.optionenHint}</span></h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.options.map((o) => (
                  <label key={o.id} className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${opts[o.id] ? 'border-accent-500 bg-cream' : 'border-primary-200 hover:border-accent-300'}`}>
                    <input type="checkbox" checked={!!opts[o.id]} onChange={() => setOpts((s) => ({ ...s, [o.id]: !s[o.id] }))} className="mt-1 accent-[#C8901C]" />
                    <span>
                      <span className="block text-sm font-medium text-primary-900">{o.name}</span>
                      <span className="block text-xs text-accent-600">{o.price}</span>
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-3 text-xs text-primary-400">{c.moreOptions}</p>
            </div>

            <div>
              <h2 className="text-2xl cd-serif text-primary-900">{c.steps.service} <span className="text-sm font-normal text-primary-400">{c.steps.serviceHint}</span></h2>
              <p className="mt-2 text-sm text-primary-500">{c.steps.serviceIntro}</p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button type="button" onClick={() => setSvcId('offen')}
                  className={`text-left rounded-xl border p-4 transition-colors ${svcId === 'offen' ? 'border-accent-500 bg-cream' : 'border-primary-200 hover:border-accent-300'}`}>
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-primary-900 text-sm">{c.spaeter.title}</span>
                    {svcId === 'offen' && <Check className="w-4 h-4 text-accent-600 shrink-0" />}
                  </span>
                  <span className="block mt-1 text-xs text-primary-500">{c.spaeter.sub}</span>
                </button>
                {c.services.map((s) => (
                  <button key={s.id} type="button" onClick={() => setSvcId(s.id)}
                    className={`text-left rounded-xl border p-4 transition-colors ${svcId === s.id ? 'border-accent-500 bg-cream' : 'border-primary-200 hover:border-accent-300'}`}>
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-primary-900 text-sm">{s.name}{s.recommended ? ` · ${c.empfohlen}` : ''}</span>
                      {svcId === s.id && <Check className="w-4 h-4 text-accent-600 shrink-0" />}
                    </span>
                    <span className="block mt-1 text-accent-600 font-semibold text-sm">{s.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl cd-serif text-primary-900">{c.steps.angaben}</h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm text-primary-600 mb-1">{c.labels.name} <span className="text-accent-600">*</span></label><input className={inputCls('name')} value={contact.name} onChange={(e) => set('name', e.target.value)} placeholder={c.labels.phName} /></div>
                <div><label className="block text-sm text-primary-600 mb-1">{c.labels.firma} <span className="text-accent-600">*</span></label><input className={inputCls('firma')} value={contact.firma} onChange={(e) => set('firma', e.target.value)} placeholder={c.labels.phFirma} /></div>
                <div><label className="block text-sm text-primary-600 mb-1">{c.labels.email} <span className="text-accent-600">*</span></label><input type="email" className={inputCls('email')} value={contact.email} onChange={(e) => set('email', e.target.value)} placeholder={c.labels.phEmail} /></div>
                <div><label className="block text-sm text-primary-600 mb-1">{c.labels.tel}</label><input type="tel" className={inputCls('tel')} value={contact.tel} onChange={(e) => set('tel', e.target.value)} placeholder="+41 …" /></div>
                <div className="sm:col-span-2"><label className="block text-sm text-primary-600 mb-1">{c.labels.adresse}</label><input className={inputCls('adresse')} value={contact.adresse} onChange={(e) => set('adresse', e.target.value)} placeholder={c.labels.phAdresse} /></div>
                <div className="sm:col-span-2"><label className="block text-sm text-primary-600 mb-1">{c.labels.msg}</label><textarea rows={3} className={inputCls('msg')} value={contact.msg} onChange={(e) => set('msg', e.target.value)} placeholder={c.labels.phMsg} /></div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 bg-white rounded-2xl border border-primary-200/70 card-shadow p-6">
              <h3 className="text-lg cd-serif text-primary-900">{c.summary.title}</h3>
              <div className="mt-4 flex items-start justify-between gap-3 pb-3 border-b border-primary-100">
                <span className="text-sm text-primary-700">{pkg.name}</span>
                <span className="text-sm font-semibold text-primary-900 whitespace-nowrap">{pkg.price}</span>
              </div>
              {chosenOptions.length > 0 && (
                <ul className="py-3 space-y-1.5 border-b border-primary-100">
                  {chosenOptions.map((o) => (
                    <li key={o.id} className="flex items-start justify-between gap-3 text-xs text-primary-500">
                      <span>+ {o.name}</span><span className="whitespace-nowrap">{o.price}</span>
                    </li>
                  ))}
                </ul>
              )}
              {svc && (
                <div className="py-3 border-b border-primary-100 flex items-start justify-between gap-3 text-xs text-primary-500">
                  <span>{c.summary.serviceLine} {svc.name}</span><span className="whitespace-nowrap">{svc.price}</span>
                </div>
              )}
              <div className="flex items-baseline justify-between gap-3 mt-4">
                <span className="text-sm text-primary-500">{c.summary.investition}</span>
                <span className="text-2xl cd-serif text-accent-600">{approx ? c.ab : ''}{fmt(total)}</span>
              </div>
              <p className="mt-1 text-xs text-primary-400">{c.summary.fussInklusive}{svc ? c.summary.fussDanach(svc.name, svc.price) : c.summary.fussOptional}{c.summary.fussOfferte}</p>

              <label className="mt-5 flex items-start gap-3 cursor-pointer text-xs text-primary-600">
                <input type="checkbox" checked={agb}
                  onChange={(ev) => { setAgb(ev.target.checked); setErrors((er) => ({ ...er, agb: false })) }}
                  className="mt-0.5 shrink-0 accent-[#C8901C]" />
                <span>{c.summary.agbBefore} <a href="/agb" target="_blank" rel="noopener" className="underline hover:text-primary-900">{c.summary.agbLink}</a> {c.summary.agbAfter}<span className="text-accent-600 ml-1">*</span></span>
              </label>
              {errors.agb && <p className="mt-1.5 text-xs text-red-500">{c.summary.agbError}</p>}

              <button type="button" onClick={submit} disabled={sending}
                className="mt-4 w-full rounded-full bg-marine-900 text-accent-400 px-6 py-3.5 text-sm font-semibold hover:bg-marine-800 transition-colors disabled:opacity-50">
                {sending ? c.summary.submitting : c.summary.submit}
              </button>

              <div className="mt-5 space-y-2 text-xs text-primary-500">
                <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent-600 shrink-0" /> {c.summary.trust1}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-600 shrink-0" /> {c.summary.trust2}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent-600 shrink-0" /> {c.summary.trust3} <a href={`tel:${TEL}`} className="text-accent-600 font-medium">{CONTACT_PHONE}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
