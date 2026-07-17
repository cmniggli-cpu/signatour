import Link from 'next/link'
import { Check, Phone } from 'lucide-react'
import { CONTACT_PHONE } from '@/lib/constants'
import type { BranchenPageData } from '@/lib/branchen-data'
import { branchenTemplateStrings } from '@/lib/i18n/content/branchen-template'
import { dictionaries } from '@/lib/i18n/dictionaries'
import { localizedHref, type Locale } from '@/lib/i18n/config'

const TEL = CONTACT_PHONE.replace(/[^+\d]/g, '')

const BRANCHEN_SLUGS = [
  { slug: 'hotel', key: 'hotel' },
  { slug: 'restaurant', key: 'restaurant' },
  { slug: 'spa-wellness', key: 'spa' },
  { slug: 'fitnessstudio', key: 'fitness' },
  { slug: 'immobilien', key: 'immobilien' },
  { slug: 'banken-versicherungen', key: 'banken' },
  { slug: 'eventlocations', key: 'events' },
] as const

interface BranchenTemplateProps {
  data: BranchenPageData
  locale?: Locale
}

export default function BranchenTemplate({ data, locale = 'de' }: BranchenTemplateProps) {
  const t = branchenTemplateStrings[locale]
  const labels = dictionaries[locale].branchenLabels
  const lp = (href: string) => localizedHref(href, locale)
  const otherBranchen = BRANCHEN_SLUGS.filter((b) => b.slug !== data.slug).map((b) => ({ slug: b.slug, label: labels[b.key] }))
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
            <a className="btn btn-gold" href={lp('/kontakt')}>{t.ctaBeratung}</a>
            <a className="btn btn-ghost" href="#paket">{t.ctaPaket}</a>
          </div>
          <p className="herotrust">{t.heroTrust}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="blk" style={{ background: 'var(--white)' }}>
        <div className="wrap center">
          <div className="kicker">{t.challengeKicker}</div>
          <h2 className="sec">{t.challengeTitle}</h2>
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
          <div className="kicker">{t.statsKicker}</div>
          <h2 className="sec">{t.statsTitle}</h2>
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
              {t.sourcesLabel}:{' '}
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
          <div className="kicker">{t.capturesKicker}</div>
          <h2 className="sec">{t.capturesTitle}</h2>
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

      {/* Referenz-Tour (echtes Beispiel) */}
      {data.demoTour && (
        <section className="blk">
          <div className="wrap center" style={{ maxWidth: 900 }}>
            <div className="kicker">{t.demoKicker}</div>
            <h2 className="sec">{t.demoTitle}</h2>
            <div className="rule" />
            <p className="sub" style={{ margin: '0 auto 30px' }}>{data.demoTour.note}</p>
            <div className="ref" style={{ maxWidth: 840, margin: '0 auto', textAlign: 'left' }}>
              <iframe loading="lazy" src={data.demoTour.url} allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title={`${t.demoTitle}: ${data.demoTour.title}`} />
              <div className="bot"><b>{data.demoTour.title}</b><a href={data.demoTour.url} target="_blank" rel="noopener noreferrer">{t.demoOpen}</a></div>
            </div>
          </div>
        </section>
      )}

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
            <div className="kicker">{data.comparisonKicker ?? t.comparisonKicker}</div>
            <h2 className="sec">{data.comparisonTitle}</h2>
            <div className="rule" />
            <div className="vtab">
              <div className="vrow vhead">
                <div className="vc crit">{t.comparisonCrit}</div>
                <div className="vc wo">
                  {data.comparisonWithoutHead ?? t.comparisonWithout}
                  {data.comparisonWithoutSub && <span>{data.comparisonWithoutSub}</span>}
                </div>
                <div className="vc wi">{t.comparisonWith}</div>
              </div>
              {data.comparisonRows.map((row) => (
                <div className="vrow" key={row.label}>
                  <div className="vc crit">{row.label}</div>
                  <div className="vc wo" data-l={data.comparisonWithoutHead ?? t.comparisonWithout}><span className="dash">–</span>{row.without}</div>
                  <div className="vc wi" data-l={t.comparisonWith}><span className="ck">✓</span>{row.with}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROI */}
      {data.roiTitle && (
        <section className="blk">
          <div className="wrap center" style={{ maxWidth: 760 }}>
            <div className="roi">
              <div className="kicker">{t.roiKicker}</div>
              <h2 className="sec" style={{ fontSize: 'clamp(26px,3.4vw,38px)' }}>{data.roiTitle}</h2>
              {data.roiSteps && (
                <div className="roicalc">
                  {data.roiSteps.map((s) => (
                    <div className="roistep" key={s.label}><span>{s.label}</span><b>{s.value}</b></div>
                  ))}
                </div>
              )}
              {data.roiResult && <div className="roiresult">{data.roiResult}</div>}
              {!data.roiSteps && data.roiDescription && <p className="sub" style={{ margin: '14px auto 0' }}>{data.roiDescription}</p>}
            </div>
          </div>
        </section>
      )}

      {/* Package */}
      <section className="blk" id="paket" style={{ background: 'var(--paper2)' }}>
        <div className="wrap center" style={{ maxWidth: 620 }}>
          <div className="kicker">{t.packageKicker}</div>
          <h2 className="sec">{t.packageTitle}</h2>
          <div className="rule" />
          <div className="pcard best" style={{ marginTop: 44, textAlign: 'left', transform: 'none' }}>
            <div className="ribbon">{t.packageRibbon}</div>
            <h3>{data.packageName}</h3>
            <div className="price">{data.packagePrice}</div>
            <div className="note">{t.packageNote}</div>
            <ul>
              {data.packageFeatures.map((f) => (
                <li key={f}><Check size={18} /> {f}</li>
              ))}
            </ul>
            <a className="btn btn-gold" href={lp('/kontakt')}>{t.packageCta}</a>
            <Link href={lp('/pakete')} className="plink">{t.packageCompare}</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="blk">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="center">
            <div className="kicker">{t.faqKicker}</div>
            <h2 className="sec">{t.faqTitle}</h2>
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
          <h2 className="sec" style={{ fontSize: 'clamp(22px,2.6vw,30px)' }}>{t.otherTitle}</h2>
          <div className="chips">
            {otherBranchen.map((b) => (
              <Link key={b.slug} href={lp(`/branchen/${b.slug}`)} className="chip">{b.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="blk">
        <div className="wrap">
          <div className="final">
            <div className="inner">
              <div className="kicker">{t.finalKicker}</div>
              <h2 className="serif">{t.finalTitle}</h2>
              <p>{t.finalText}</p>
              <div className="finalphone"><a className="phone" href={`tel:${TEL}`}><Phone size={22} /> {CONTACT_PHONE}</a></div>
              <a className="btn btn-gold" href={lp('/kontakt')}>{t.finalCta}</a>
              <p className="finaltrust">{t.finalTrust}</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  )
}
