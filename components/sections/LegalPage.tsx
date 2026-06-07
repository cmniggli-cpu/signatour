import Link from 'next/link'

export default function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <Link href="/" className="text-sm text-accent-600 hover:underline">← Zur Startseite</Link>
      <h1 className="mt-6 text-4xl sm:text-5xl text-primary-900" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, lineHeight: 1.05 }}>
        {title}
      </h1>
      {subtitle && <p className="mt-3 text-primary-500">{subtitle}</p>}
      <div className="legal-prose mt-8">{children}</div>
    </article>
  )
}
