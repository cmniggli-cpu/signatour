import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale } from '@/lib/i18n/config'

// Strategie: Deutsch liegt ohne Präfix auf den bestehenden URLs (z. B. /pakete),
// Französisch unter /fr/… und Englisch unter /en/…. Anfragen mit /fr- bzw.
// /en-Präfix werden intern auf die gleiche Seite ohne Präfix umgeschrieben und
// die erkannte Sprache als Header `x-locale` weitergereicht. So bleiben die
// indexierten deutschen URLs unverändert.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const seg = pathname.split('/')[1]

  const requestHeaders = new Headers(req.headers)

  if (seg === 'fr' || seg === 'en') {
    const rest = pathname.slice(seg.length + 1) || '/'
    requestHeaders.set('x-locale', seg)
    requestHeaders.set('x-pathname', pathname)
    const url = req.nextUrl.clone()
    url.pathname = rest
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
  }

  requestHeaders.set('x-locale', defaultLocale)
  requestHeaders.set('x-pathname', pathname)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  // Alles ausser Next-Interna, API-Routen und Dateien mit Endung (z. B.
  // /konfigurator.html, /favicon.ico, /og-image.jpg, /niggli-logo.png).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
