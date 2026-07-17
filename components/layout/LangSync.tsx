'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { localeFromPathname, localeHtml } from '@/lib/i18n/config'

// Hält das lang-Attribut des <html>-Elements beim Client-Routing synchron
// (das Root-Layout kann pro Sprachpfad kein eigenes lang setzen).
export default function LangSync() {
  const pathname = usePathname()
  useEffect(() => {
    document.documentElement.lang = localeHtml[localeFromPathname(pathname)]
  }, [pathname])
  return null
}
