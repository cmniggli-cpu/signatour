import Link from 'next/link'
import { Check, Phone } from 'lucide-react'
import { CONTACT_PHONE } from '@/lib/constants'
import type { BranchenPageData } from '@/lib/branchen-data'

const TEL = CONTACT_PHONE.replace(/[^+\d]/g, '')

const ALL_BRANCHEN = [
  { slug: 'hotel', label: 'Hotels' },
  { slug: 'restaurant', label: 'Restaurants' },
  { slug: 'spa-wellness', label: 'Spa & Wellness' },
  { slug: 'fitnessstudio', label: 'Fitnessstudios' },
  { slug: 'immobilien', label: 'Immobilien' },
  { slug: 'banken-versicherungen', label: 'Banken, Versicherungen & Kanzleien' },
  { slug: 'eventlocations', label: 'Eventlocations & Showrooms' },
]

interface BranchenTemplateProps {
  data: BranchenPageData
}

export default function BranchenTemplate({ data }: BranchenTemplateProps) {
  const otherBranchen = ALL_BRANCHEN.filter((b) => b.slug !== data.slug)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
  return (
    <div className="nigpage">
      {/* Hero */}
      <section className="bhero">
        {data.heroImage && (
          <div className="bgimg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.heroImage} alt={`${data.badge} – 360°-Tour von Signatour`} fetchPriority="high" />
          </div>
        )}
        <div className="wrap">
          <div className="kicker">{data.badge}</div>
          <h1>{data.headline}</h1>
          <p className="sub">{data.tagline}</p>
          <div className="bhero-cta">
            <a className="btn btn-gold" href="/kontakt">Kostenlose Beratung <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="#paket">Paket & Preis ansehen</a>
          </div>
          <p className="herotrust">Unverbindlich · Antwort innert 24 Stunden · Einmalpreis, kein Abo</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="blk" style={{ background: 'var(--white)' }}>
        <div className="wrap center">
          <div className="kicker">Die Herausforderung</div>
          <h2 className="sec">Kennen Sie das?</h2>
          <div className="rule" />
          <div className="fgrid fgrid3" style={{ textAlign: 'left' }}>
            {data.challenges.map((c) => (
              <div className="tcard" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="blk statsdark">
        <div className="wrap center">
          <div className="kicker">Was eine Signature Tour bewirkt</div>
          <h2 className="sec">Zahlen statt Versprechen</h2>
          <div className="bstats">
            {data.stats.map((s) => (
              <div className="bstat" key={s.label}>
                <div className="v">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
          {data.sources && (
            <p className="bsources">
              Quellen:{' '}
              {data.sources.map((src, i) => (
                <span key={src.url}>
                  {i > 0 && ' · '}
                  <a href={src.url} target="_blank" rel="noopener nofollow">{src.label}</a>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* Captures */}
      <section className="blk" style={{ background: 'var(--paper2)' }}>
        <div className="wrap center" style={{ maxWidth: 880 }}>
          <div className="kicker">Umfang</div>
          <h2 className="sec">Was wir erfassen</h2>
          <div className="rule" />
          <div className="bchecks">
            {data.captures.map((item) => (
              <div className="bcheck" key={item}>
                <Check size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section */}
      {data.extraSection && (
        <section className="blk">
          <div className="wrap center" style={{ maxWidth: 880 }}>
            <h2 className="sec">{data.extraSection.title}</h2>
            <p className="sub" style={{ margin: '12px auto 0' }}>{data.extraSection.description}</p>
            <div className="rule" />
            <div className="bchecks bchecks1">
              {data.extraSection.items.map((item) => (
                <div className="bcheck" key={item}>
                  <Check size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison */}
      {data.comparisonRows && (
        <section className="blk" style={{ background: 'var(--paper2)' }}>
          <div className="wrap center" style={{ maxWidth: 920 }}>
            <div className="kicker">{data.comparisonKicker ?? 'Der ehrliche Vergleich'}</div>
            <h2 className="sec">{data.comparisonTitle}</h2>
            <div className="rule" />
            <div className="vtab">
              <div className="vrow vhead">
                <div className="vc crit">Kriterium</div>
                <div className="vc wo">
                  {data.comparisonWithoutHead ?? 'Ohne Signatour'}
                  {data.comparisonWithoutSub && <span>{data.comparisonWithoutSub}</span>}
                </div>
                <div className="vc wi">Mit Signatour</div>
              </div>
              {data.comparisonRows.map((row) => (
                <div className="vrow" key={row.label}>
                  <div className="vc crit">{row.label}</div>
                  <div className="vc wo" data-l={data.comparisonWithoutHead ?? 'Andere'}><span className="dash">–</span>{row.without}</div>
                  <div className="vc wi" data-l="Mit Signatour"><span className="ck">✓</span>{row.with}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROI */}
      {data.roiTitle && (
        <section className="blk">
          <div className="wrap center" style={{ maxWidth: 880 }}>
            <div className="roi">
              <div className="kicker">Rechnet sich das?</div>
              <h2 className="sec" style={{ fontSize: 'clamp(26px,3.4vw,38px)' }}>{data.roiTitle}</h2>
              <p className="sub" style={{ margin: '14px auto 0' }}>{data.roiDescription}</p>
            </div>
          </div>
        </section>
      )}

      {/* Package */}
      <section className="blk" id="paket" style={{ background: 'var(--paper2)' }}>
        <div className="wrap center" style={{ maxWidth: 620 }}>
          <div className="kicker">Unser Vorschlag für Sie</div>
          <h2 className="sec">Das passende Paket</h2>
          <div className="rule" />
          <div className="pcard best" style={{ marginTop: 44, textAlign: 'left', transform: 'none' }}>
            <div className="ribbon">Empfohlen</div>
            <h3>{data.packageName}</h3>
            <div className="price">{data.packagePrice}</div>
            <div className="note">einmalig · kein Abo, keine Vertragsbindung</div>
            <ul>
              {data.packageFeatures.map((f) => (
                <li key={f}><Check size={18} /> {f}</li>
              ))}
            </ul>
            <a className="btn btn-gold" href="/kontakt">Kostenlose Beratung anfragen <span className="arrow">→</span></a>
            <Link href="/pakete" className="plink">Alle Pakete & Preise vergleichen →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="blk">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="center">
            <div className="kicker">FAQ</div>
            <h2 className="sec">Häufige Fragen</h2>
            <div className="rule" />
          </div>
          <div className="faq">
            {data.faqs.map((f) => (
              <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Branchen */}
      <section className="blk" style={{ background: 'var(--paper2)', paddingTop: 54, paddingBottom: 54 }}>
        <div className="wrap center">
          <h2 className="sec" style={{ fontSize: 'clamp(22px,2.6vw,30px)' }}>Auch interessant für andere Branchen</h2>
          <div className="chips">
            {otherBranchen.map((b) => (
              <Link key={b.slug} href={`/branchen/${b.slug}`} className="chip">{b.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="blk">
        <div className="wrap">
          <div className="final">
            <div className="inner">
              <div className="kicker">Bereit für den nächsten Schritt?</div>
              <h2 className="serif">Machen wir aus Ihren Besuchern Kunden.</h2>
              <p>Ein unverbindliches Gespräch genügt, um zu klären, wie eine Signature Tour in Ihrem Betrieb mehr qualifizierte Anfragen erzeugt.</p>
              <div className="finalphone"><a className="phone" href={`tel:${TEL}`}><Phone size={22} /> {CONTACT_PHONE}</a></div>
              <a className="btn btn-gold" href="/kontakt">Kostenlose Beratung <span className="arrow">→</span></a>
              <p className="finaltrust">Unverbindlich · Antwort innert 24 Stunden · Persönlich durch den Inhaber</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  )
}
