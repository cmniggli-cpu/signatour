'use client'

import { useState, useEffect, useMemo } from 'react'
import { Check, CheckCircle, ShieldCheck, Phone } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import { ORDER_PACKAGES, ORDER_OPTIONS, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`
const TEL = CONTACT_PHONE.replace(/[^+\d]/g, '')
const fmt = (n: number) => 'CHF ' + n.toLocaleString('de-CH').replace(/,/g, '’') + '.–'

interface Contact { name: string; firma: string; email: string; tel: string; adresse: string; msg: string }

export default function BestellenPageClient() {
  const [pkgId, setPkgId] = useState('signature')
  const [opts, setOpts] = useState<Record<string, boolean>>({})
  const [c, setC] = useState<Contact>({ name: '', firma: '', email: '', tel: '', adresse: '', msg: '' })
  const [agb, setAgb] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('paket')
    if (p && ORDER_PACKAGES.some((x) => x.id === p)) setPkgId(p)
  }, [])

  const pkg = ORDER_PACKAGES.find((x) => x.id === pkgId)!
  const chosenOptions = ORDER_OPTIONS.filter((o) => opts[o.id])
  const { total, approx } = useMemo(() => {
    let t = pkg.from
    let a = !!pkg.approx
    chosenOptions.forEach((o) => { t += o.add; if (o.approx) a = true })
    return { total: t, approx: a }
  }, [pkg, chosenOptions])

  const set = (k: keyof Contact, v: string) => { setC((p) => ({ ...p, [k]: v })); setErrors((e) => ({ ...e, [k]: false })) }

  const submit = async () => {
    const e: Record<string, boolean> = {}
    if (c.name.trim().length < 2) e.name = true
    if (c.firma.trim().length < 2) e.firma = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) e.email = true
    if (!agb) e.agb = true
    setErrors(e)
    if (Object.keys(e).length) return

    const payload = {
      _subject: `Bestellung – ${pkg.name} (${c.firma})`,
      _template: 'table',
      _captcha: 'false',
      Paket: `${pkg.name} (${pkg.price})`,
      Optionen: chosenOptions.map((o) => o.name).join(', ') || 'keine',
      'Geschätzte Investition': `${approx ? 'ab ' : ''}${fmt(total)} einmalig`,
      Name: c.name, Firma: c.firma, 'E-Mail': c.email, Telefon: c.tel || '-',
      Rechnungsadresse: c.adresse || '-', Nachricht: c.msg || '-',
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
        <PageHero badge="Bestellung" title="Vielen Dank für Ihre Bestellung" />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="w-16 h-16 text-success mx-auto" />
            <p className="mt-6 text-lg text-primary-600">Ihre Bestellung für das <strong className="text-primary-900">{pkg.name}</strong> ist bei uns eingegangen. Wir melden uns innert 24 Stunden persönlich mit der Auftragsbestätigung und den nächsten Schritten.</p>
            <p className="mt-4 text-sm text-primary-500">Lieber direkt sprechen? <a href={`tel:${TEL}`} className="text-accent-600 font-semibold">{CONTACT_PHONE}</a></p>
          </div>
        </section>
      </>
    )
  }

  const inputCls = (k: string) => `w-full rounded-xl border bg-white px-4 py-3 text-primary-900 outline-none transition-colors focus:border-accent-500 ${errors[k] ? 'border-red-400' : 'border-primary-200'}`

  return (
    <>
      <PageHero badge="Bestellung" title="Paket bestellen" subtitle="In einem Schritt zur Bestellung – wir bestätigen innert 24 Stunden mit verbindlicher Offerte. 50% Anzahlung erst bei Auftragsbestätigung." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h2 className="text-2xl cd-serif text-primary-900">1 · Paket wählen</h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ORDER_PACKAGES.map((p) => (
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
              <h2 className="text-2xl cd-serif text-primary-900">2 · Optionen <span className="text-sm font-normal text-primary-400">(optional)</span></h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ORDER_OPTIONS.map((o) => (
                  <label key={o.id} className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${opts[o.id] ? 'border-accent-500 bg-cream' : 'border-primary-200 hover:border-accent-300'}`}>
                    <input type="checkbox" checked={!!opts[o.id]} onChange={() => setOpts((s) => ({ ...s, [o.id]: !s[o.id] }))} className="mt-1 accent-[#C8901C]" />
                    <span>
                      <span className="block text-sm font-medium text-primary-900">{o.name}</span>
                      <span className="block text-xs text-accent-600">{o.price}</span>
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-3 text-xs text-primary-400">Weitere Erweiterungen besprechen wir gerne im Gespräch.</p>
            </div>

            <div>
              <h2 className="text-2xl cd-serif text-primary-900">3 · Ihre Angaben</h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm text-primary-600 mb-1">Name <span className="text-accent-600">*</span></label><input className={inputCls('name')} value={c.name} onChange={(e) => set('name', e.target.value)} placeholder="Vor- und Nachname" /></div>
                <div><label className="block text-sm text-primary-600 mb-1">Firma / Betrieb <span className="text-accent-600">*</span></label><input className={inputCls('firma')} value={c.firma} onChange={(e) => set('firma', e.target.value)} placeholder="Name Ihres Betriebs" /></div>
                <div><label className="block text-sm text-primary-600 mb-1">E-Mail <span className="text-accent-600">*</span></label><input type="email" className={inputCls('email')} value={c.email} onChange={(e) => set('email', e.target.value)} placeholder="name@firma.ch" /></div>
                <div><label className="block text-sm text-primary-600 mb-1">Telefon</label><input type="tel" className={inputCls('tel')} value={c.tel} onChange={(e) => set('tel', e.target.value)} placeholder="+41 …" /></div>
                <div className="sm:col-span-2"><label className="block text-sm text-primary-600 mb-1">Rechnungsadresse</label><input className={inputCls('adresse')} value={c.adresse} onChange={(e) => set('adresse', e.target.value)} placeholder="Strasse, PLZ, Ort" /></div>
                <div className="sm:col-span-2"><label className="block text-sm text-primary-600 mb-1">Nachricht / Wünsche</label><textarea rows={3} className={inputCls('msg')} value={c.msg} onChange={(e) => set('msg', e.target.value)} placeholder="Etwas, das wir wissen sollten?" /></div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 bg-white rounded-2xl border border-primary-200/70 card-shadow p-6">
              <h3 className="text-lg cd-serif text-primary-900">Bestellübersicht</h3>
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
              <div className="flex items-baseline justify-between gap-3 mt-4">
                <span className="text-sm text-primary-500">Geschätzte Investition</span>
                <span className="text-2xl cd-serif text-accent-600">{approx ? 'ab ' : ''}{fmt(total)}</span>
              </div>
              <p className="mt-1 text-xs text-primary-400">einmalig · zzgl. optionalem Service ab CHF 120.– / Jahr · verbindliche Offerte folgt</p>

              <label className="mt-5 flex items-start gap-3 cursor-pointer text-xs text-primary-600">
                <input type="checkbox" checked={agb}
                  onChange={(ev) => { setAgb(ev.target.checked); setErrors((er) => ({ ...er, agb: false })) }}
                  className="mt-0.5 shrink-0 accent-[#C8901C]" />
                <span>Ich akzeptiere die <a href="/agb" target="_blank" rel="noopener" className="underline hover:text-primary-900">Allgemeinen Geschäftsbedingungen (AGB)</a> für die bestellten Dienstleistungen inkl. Pakete.<span className="text-accent-600 ml-1">*</span></span>
              </label>
              {errors.agb && <p className="mt-1.5 text-xs text-red-500">Bitte akzeptieren Sie die AGB, um die Bestellung abzusenden.</p>}

              <button type="button" onClick={submit} disabled={sending}
                className="mt-4 w-full rounded-full bg-marine-900 text-accent-400 px-6 py-3.5 text-sm font-semibold hover:bg-marine-800 transition-colors disabled:opacity-50">
                {sending ? 'Wird gesendet…' : 'Bestellung absenden'}
              </button>

              <div className="mt-5 space-y-2 text-xs text-primary-500">
                <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent-600 shrink-0" /> 50% Anzahlung erst bei Auftragsbestätigung</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-600 shrink-0" /> Einmalpreis, kein Abo · Antwort innert 24 h</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent-600 shrink-0" /> Lieber sprechen? <a href={`tel:${TEL}`} className="text-accent-600 font-medium">{CONTACT_PHONE}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
