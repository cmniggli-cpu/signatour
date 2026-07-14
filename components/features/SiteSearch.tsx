'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { SEARCH_INDEX, type SearchEntry } from '@/lib/search-data'

function scoreEntry(entry: SearchEntry, tokens: string[]): number {
  const title = entry.title.toLowerCase()
  const hay = `${entry.title} ${entry.snippet} ${entry.keywords}`.toLowerCase()
  let score = 0
  for (const t of tokens) {
    if (!hay.includes(t)) return -1
    if (title.includes(t)) score += 3
    else score += 1
  }
  return score
}

export default function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = useMemo(() => {
    const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
    if (tokens.length === 0) return []
    return SEARCH_INDEX
      .map((e) => ({ e, s: scoreEntry(e, tokens) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((r) => r.e)
  }, [query])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 40)
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    if (href.startsWith('/') && !href.endsWith('.html')) router.push(href)
    else window.location.href = href
  }

  return (
    <>
      {/* Trigger: Pill auf Desktop, Icon auf Mobile */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Website durchsuchen"
        className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 text-sm text-primary-500 hover:border-accent-500 hover:text-accent-600 transition-colors min-w-[180px]"
      >
        <Search className="w-4 h-4" />
        <span>Suchen…</span>
      </button>
      <button
        onClick={() => setOpen(true)}
        aria-label="Website durchsuchen"
        className="lg:hidden p-2 rounded-full text-primary-900 hover:bg-primary-100 transition-colors"
      >
        <Search className="w-5 h-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-24 sm:pt-32"
          style={{ background: 'rgba(12,27,46,0.45)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-primary-100">
              <Search className="w-5 h-5 text-accent-600 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) go(results[0].href) }}
                placeholder="Die ganze Website durchsuchen…"
                className="flex-1 bg-transparent outline-none text-primary-900 placeholder:text-primary-400 text-base"
              />
              <button onClick={() => setOpen(false)} aria-label="Schliessen" className="p-1 text-primary-400 hover:text-primary-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() === '' && (
                <p className="px-5 py-6 text-sm text-primary-400">Suchen Sie nach Branchen, Preisen, Themen … z.B. «Hotel», «Preis», «Datenschutz».</p>
              )}
              {query.trim() !== '' && results.length === 0 && (
                <div className="px-5 py-6 text-sm text-primary-500">
                  Keine Treffer für «{query}».{' '}
                  <a href="/kontakt" onClick={() => setOpen(false)} className="text-accent-600 underline">Fragen Sie uns direkt</a>
                </div>
              )}
              {results.map((r) => (
                <button
                  key={r.href + r.title}
                  onClick={() => go(r.href)}
                  className="w-full text-left px-5 py-3 flex items-start gap-3 hover:bg-cream transition-colors border-b border-primary-50 last:border-0"
                >
                  <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-600 shrink-0 w-16">{r.category}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-primary-900">{r.title}</span>
                    <span className="block text-xs text-primary-500 truncate">{r.snippet}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
