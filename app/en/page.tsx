import type { Metadata } from 'next'
import { CONTACT_PHONE, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    absolute: `360° tours that sell – hotels, spa, gastronomy & real estate | ${SITE_NAME}`,
  },
  description:
    'Swiss provider of premium 360° virtual tours for hotels, spas, restaurants and real estate. Visitors book and enquire directly inside the VR tour. One-time price, no subscription.',
  alternates: {
    canonical: '/en',
    languages: {
      'de-CH': '/',
      'fr-CH': '/fr',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/en',
    siteName: SITE_NAME,
    title: `360° tours that sell – hotels, spa, gastronomy & real estate | ${SITE_NAME}`,
    description:
      'Swiss provider of premium 360° virtual tours for hotels, spas, restaurants and real estate. One-time price, no subscription.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – 360° tours that sell`,
      },
    ],
  },
}

const TEL = CONTACT_PHONE.replace(/[^+\d]/g, '')

const ICON_DEFS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/><path d="m8.5 14 2.2 2.2L15.5 12"/></symbol>
<symbol id="i-coin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 12.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.2A3 3 0 0 1 16 11M21 20c0-2.5-1.5-4.6-3.6-5.5"/></symbol>
<symbol id="i-diamond" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3h12l3.5 6L12 21 2.5 9 6 3Z"/><path d="M2.5 9h19M9 3 7 9l5 12 5-12-2-6"/></symbol>
<symbol id="i-cam" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 8.5A2 2 0 0 1 5 6.5h2l1.3-2h7.4L18 6.5h1a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5Z"/><circle cx="12" cy="13" r="3.6"/></symbol>
<symbol id="i-palette" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1.3-1-1.5-1-2.5 0-.8.7-1.5 1.7-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="15.5" cy="8.5" r="1"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></symbol>
<symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 2.5 15.2 0 18M12 3c-2.5 2.8-2.5 15.2 0 18"/></symbol>
<symbol id="i-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.3h8.3a1.5 1.5 0 0 0 1.5-1.2L20.5 8H6"/><circle cx="9.5" cy="20" r="1.2"/><circle cx="17.5" cy="20" r="1.2"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" stroke="none"/></symbol>
<symbol id="i-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6h.01"/></symbol>
<symbol id="i-doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 2.5h8L19 7v14.5H6z"/><path d="M14 2.5V7h5"/><path d="M8.5 13h7M8.5 16.5h7"/></symbol>
<symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2.5 20 6v6c0 5-3.5 8-8 9.5C7.5 20 4 17 4 12V6l8-3.5Z"/><path d="m8.5 12 2.3 2.3L15.5 9.5"/></symbol>
<symbol id="i-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></symbol>
<symbol id="i-zoom" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></symbol>
<symbol id="i-code" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 5l-3 14"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/></symbol>
<symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></symbol>
<symbol id="i-sofa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11"/><path d="M4 11a2 2 0 0 1 2 2v3h12v-3a2 2 0 0 1 4 0v6H2v-6a2 2 0 0 1 2-2Z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12.5 4.5 4.5L19 7"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 3.5 9 4l1 3.5L8.3 9.2a12 12 0 0 0 6.5 6.5l1.7-1.7L20 15l.5 2.5a2 2 0 0 1-2 2.3A16 16 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2Z"/></symbol>
</defs></svg>`

const Icon = ({ id, c = 'icn' }: { id: string; c?: string }) => (
  <svg className={c}><use href={`#${id}`} /></svg>
)
const Chk = () => <svg className="icn-sm" style={{ width: 18, height: 18 }}><use href="#i-check" /></svg>

const FAQ_ITEMS = [
  { q: 'What is a 360° virtual tour?', a: 'An interactive walk-through in which visitors move around by themselves – as if they were on site. It runs directly in the browser, without an app, and can be enriched with hotspots for booking, buying or enquiring.' },
  { q: 'How long does production take?', a: 'The shoot takes 2–4 hours on site. We usually deliver the finished tour within 5–10 working days.' },
  { q: 'Do I need a special app or camera?', a: 'No. The VR tour runs on every device in the browser – smartphone, tablet, desktop, TV and even VR headsets. We take care of the shoot, the technology and the hosting entirely.' },
  { q: 'Is it GDPR-compliant?', a: 'Yes. Hosting in Switzerland/EU, shoots outside opening hours without people, data processing agreement included on request.' },
  { q: 'What happens if we renovate?', a: 'With a service package we update the affected areas or re-shoot individual points – your VR tour stays current.' },
  { q: 'What do I actually get out of it – is it worth it?', a: 'Depending on the industry, bookings and enquiries increase significantly, and visitors stay on your site several times longer. In real estate, for example, around +87% more views (Matterport). With measurable added revenue, the VR tour often pays for itself after just a few bookings.' },
  { q: 'How much does a VR tour cost?', a: 'Transparent fixed packages from CHF 990 – the price depends on panoramas and features. The package calculator gives you a no-obligation estimate in one minute.' },
  { q: 'Is there a subscription or hidden costs?', a: 'No. The VR tour is yours. An annual service package (from CHF 120) is optional – no long-term commitment, cancellable at year-end.' },
  { q: 'How is the impact measured?', a: 'You receive visitor statistics: views, dwell time, most popular rooms and clicks on booking hotspots – numbers instead of gut feeling.' },
  { q: 'What if I am not satisfied?', a: 'Double guarantee: quality – we refine every detail, up to 3 correction rounds included. And brand – your VR tour appears exactly in your corporate design, with no third-party branding.' },
  { q: 'How is this different from photos or a video?', a: 'Photos and videos show what we want to show. A Signature Tour lets visitors decide for themselves where to look – and act directly (book, enquire). A video cannot do that.' },
  { q: 'Is this the same as Matterport?', a: 'Matterport is a 3D scanning standard – often with a monthly platform fee and an off-the-shelf look. Our VR tour is in your corporate design, actively selling and yours to keep, with no forced subscription. A visible quality difference: where Matterport covers the floor beneath the camera with a blurred patch (otherwise you would see the tripod), we retouch this nadir point 95% clean – on request 100% with a flawless floor or your logo.' },
  { q: 'What about the floor beneath the camera (nadir)?', a: 'In 360° photography the camera stands on a tripod – without editing it would be visible in the image. Many providers simply place a blurred patch or a logo over it. We retouch the floor 95% clean so it looks natural. For a perfect result, the 100% option delivers a flawless floor or an embedded logo.' },
  { q: 'Is it available in multiple languages?', a: 'Yes – German, French and English. Additional languages from CHF 300 per language.' },
]

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const BRANCHEN = [
  { img: '1566073771259-6a8506099945', href: '/en/branchen/hotel', t: 'Hotels & gastronomy', d: 'Bring rooms, lobby, ambience and tables to life – more direct bookings and table reservations.' },
  { img: '1540555700478-4be289fbecef', href: '/en/branchen/spa-wellness', t: 'Spa & wellness', d: 'Make calm and premium quality tangible.' },
  { img: '1534438327276-14e5300c3a48', href: '/en/branchen/fitnessstudio', t: 'Fitness studios', d: 'Show equipment and atmosphere – lower the entry barrier.' },
  { img: '1512917774080-9991f1c4c750', href: '/en/branchen/immobilien', t: 'Real estate', d: 'Properties open for viewing around the clock – fewer wasted viewings.' },
  { img: '1497366754035-f200968a6e72', href: '/en/branchen/banken-versicherungen', t: 'Banks, insurances & law firms', d: 'Premium offices and consulting rooms that build trust already online.' },
  { img: '1519167758481-83f550bb49b3', href: '/en/branchen/eventlocations', t: 'Event venues & showrooms', d: 'Let halls, venues and exhibition spaces shine – customers experience the space before enquiring.' },
]

export default function HomePageEn() {
  return (
    <div className="nigpage">
      <div dangerouslySetInnerHTML={{ __html: ICON_DEFS }} />

      <section className="hero">
        <div className="bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-apartment-living.jpg" alt="Bright living room of a luxury apartment – 360° tour by Niggli" fetchPriority="high" />
        </div>
        <div className="wrap inner">
          <p style={{ marginBottom: 16, fontSize: 13, letterSpacing: '0.08em', color: 'var(--g)' }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Deutsch</a>
            <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
            <a href="/fr" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Français</a>
            <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
            <span style={{ fontWeight: 600 }}>English</span>
          </p>
          <h1 className="serif">Your spaces become your <em>best salesperson</em> – around the clock.</h1>
          <p className="lead"><span className="accent">Decisions are made online today – not on site.</span><br />
            We turn your premises into a digital sales experience: visitors explore your offer, build trust and book, buy or enquire directly inside the VR tour – before the first conversation even takes place.</p>
          <div className="cta">
            <a className="btn btn-gold" href="/konfigurator-en.html">Free consultation</a>
            <a className="btn btn-ghost" href="#referenzen">View reference tours</a>
            <a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a>
          </div>
          <p className="herotrust">Swiss provider · One-time price instead of a subscription · Reply within 24 hours</p>
        </div>
      </section>

      <section className="blk pillars">
        <div className="wrap"><div className="grid">
          <div className="pillar"><Icon id="i-users" /><h3>More qualified enquiries</h3><p>Prospects inform themselves before the first contact.</p></div>
          <div className="pillar"><Icon id="i-target" /><h3>Less wasted time</h3><p>Unsuitable enquiries and unnecessary appointments are reduced.</p></div>
          <div className="pillar"><Icon id="i-shield" /><h3>More trust</h3><p>Transparency convinces before the first conversation.</p></div>
          <div className="pillar"><Icon id="i-cal" /><h3>Better closing chances</h3><p>Well-informed prospects decide faster.</p></div>
        </div></div>
      </section>

      <section className="blk" id="branchen" style={{ background: 'var(--paper2)' }}>
        <div className="wrap center">
          <div className="kicker">Industries</div><h2 className="sec">The right tour for every industry</h2>
          <p className="sub">Wherever atmosphere, quality and trust influence the decision.</p>
        </div>
        <div className="wrap">
          <div className="bgrid">
            {BRANCHEN.map((b) => (
              <a className="bcard" href={b.href} key={b.t}>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={`https://images.unsplash.com/photo-${b.img}?w=900&q=80&auto=format&fit=crop`} alt={b.t} />
                </div>
                <div className="bd"><h3>{b.t}</h3><p>{b.d}</p><span className="more">Learn more</span></div>
              </a>
            ))}
            <a className="bcard empty" href="/en/kontakt"><Icon id="i-diamond" /><h3>Another industry?</h3><p>For every business with spaces worth seeing.</p><span className="more">Get in touch</span></a>
          </div>
        </div>
      </section>

      <section className="blk" id="leistung">
        <div className="wrap center">
          <div className="kicker">What you get</div><h2 className="sec">A digital employee that never clocks off</h2>
          <p className="sub">A Signature Tour is not a product you look at once. It is a sales instrument that informs, builds trust and triggers enquiries day after day.</p><div className="rule" />
          <div className="fgrid">
            <div className="fcard"><Icon id="i-cam" /><h3>Premium 360° tour</h3><p>In premium quality, with careful treatment of floor and details.</p></div>
            <div className="fcard"><Icon id="i-palette" /><h3>Corporate design</h3><p>Perfectly matched to your brand – colours, logo, style.</p></div>
            <div className="fcard"><Icon id="i-pin" /><h3>Interactive hotspots</h3><p>Booking and information points: more interaction, more results.</p></div>
            <div className="fcard"><Icon id="i-globe" /><h3>Website & Google</h3><p>Optimally embedded. Visible, fast, accessible everywhere.</p></div>
            <div className="fcard"><Icon id="i-chart" /><h3>Measurable results</h3><p>Analytics report: views, most popular rooms and clicks – numbers instead of gut feeling.</p></div>
            <div className="fcard"><Icon id="i-shield" /><h3>Full ownership, no subscription</h3><p>The VR tour is yours. No platform rent – just a fair, optional service package.</p></div>
            <div className="fcard"><Icon id="i-bolt" /><h3>Lightning-fast loading</h3><p>Optimised for mobile – every second of loading time counts for conversion.</p></div>
            <div className="fcard"><Icon id="i-phone" /><h3>Swiss contact person</h3><p>No call centre, no ticket system – directly with the maker. Hosting in CH/EU, GDPR-compliant.</p></div>
          </div>
        </div>
      </section>

      <section className="blk dark">
        <div className="wrap">
          <div className="center"><div className="kicker">The difference</div><h2 className="sec">Standard tour vs Signature Experience</h2>
            <p className="sub">Most tours only let people look. A Signature Experience makes them want to act.</p></div>
          <input type="checkbox" id="cmpmore" className="cmptoggle" />
          <div className="cmp">
            <div className="col std"><h3>Standard tour</h3><ul>
              <li><span className="i">—</span> Looking only</li>
              <li><span className="i">—</span> Never actively sells</li>
              <li><span className="i">—</span> No direct action</li>
              <li><span className="i">—</span> Off-the-shelf look</li>
              <li><span className="i">—</span> No data</li>
              <li><span className="i">—</span> Tied to a subscription/platform</li>
              <li><span className="i">—</span> Provider abroad</li>
              <li className="xtr"><span className="i">—</span> Static, passive</li>
              <li className="xtr"><span className="i">—</span> The visitor leaves</li>
              <li className="xtr"><span className="i">—</span> High contact threshold</li>
              <li className="xtr"><span className="i">—</span> Blends into the crowd</li>
              <li className="xtr"><span className="i">—</span> One language only</li>
              <li className="xtr"><span className="i">—</span> Not extendable</li>
              <li className="xtr"><span className="i">—</span> Created once, then outdated</li></ul></div>
            <div className="col sig"><h3>Signature Experience</h3><ul>
              <li><span className="i">✓</span> Book, buy or enquire directly</li>
              <li><span className="i">✓</span> Sells around the clock – 365 days</li>
              <li><span className="i">✓</span> Interest becomes contact</li>
              <li><span className="i">✓</span> In your corporate design</li>
              <li><span className="i">✓</span> Measurable through the analytics report</li>
              <li><span className="i">✓</span> Yours to keep, no strings attached</li>
              <li><span className="i">✓</span> Swiss quality and contact person</li>
              <li className="xtr"><span className="i">✓</span> Interactive & actively selling</li>
              <li className="xtr"><span className="i">✓</span> Visitors stay longer</li>
              <li className="xtr"><span className="i">✓</span> Lowers the threshold for first contact</li>
              <li className="xtr"><span className="i">✓</span> Visibly sets you apart from the competition</li>
              <li className="xtr"><span className="i">✓</span> Available in multiple languages (DE/FR/EN)</li>
              <li className="xtr"><span className="i">✓</span> Extendable at any time</li>
              <li className="xtr"><span className="i">✓</span> Continuously improved</li></ul></div>
          </div>
          <div className="center" style={{ marginTop: 22 }}>
            <label htmlFor="cmpmore" className="cmpbtn">
              <span className="show">Show all 14 differences +</span>
              <span className="hide">Show less –</span>
            </label>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="fgrid fgrid3">
            <div className="fcard"><Icon id="i-globe" /><h3>On duty around the clock</h3><p>Your VR tour sells while you sleep – 365 days a year, even outside opening hours.</p></div>
            <div className="fcard"><Icon id="i-target" /><h3>One effort, lasting benefit</h3><p>Created once, used for years – without recurring advertising costs or scatter loss.</p></div>
            <div className="fcard"><Icon id="i-chart" /><h3>Measurable instead of gut feeling</h3><p>Views, dwell time and clicks on booking points – you see what the VR tour delivers.</p></div>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap center">
          <div className="kicker">Interactive possibilities</div><h2 className="sec">Much more than images</h2><div className="rule" />
          <div className="fgrid fgrid3">
            <div className="fcard"><Icon id="i-cart" /><h3>Booking integration</h3><p>Guests reserve or buy directly inside the VR tour – without detours via third-party sites.</p></div>
            <div className="fcard"><Icon id="i-play" /><h3>Video & audio</h3><p>Embedded videos and audio guides tell your story right inside the space.</p></div>
            <div className="fcard"><Icon id="i-info" /><h3>Info hotspots</h3><p>Opening hours, prices and details as clickable points directly in the image.</p></div>
            <div className="fcard"><Icon id="i-zoom" /><h3>Zoom & full screen</h3><p>Images and windows can be enlarged and opened full screen – every detail becomes visible.</p></div>
            <div className="fcard"><Icon id="i-pin" /><h3>Floor plan & mini-map</h3><p>Orientation via floor plan and mini-map – visitors find their way instantly.</p></div>
            <div className="fcard"><Icon id="i-doc" /><h3>Downloads</h3><p>Brochures, menus, price lists and PDFs straight from the VR tour.</p></div>
          </div>
        </div>
      </section>

      <section className="blk" id="gruende">
        <div className="wrap">
          <div className="center"><div className="kicker">Why Signatour</div><h2 className="sec">9 reasons for Signatour</h2><div className="rule" /></div>
          <div className="fgrid fgrid3" style={{ textAlign: 'left' }}>
            {[
              { t: 'Done-for-you instead of DIY', d: 'We come, we shoot, we deliver. Zero effort for you.' },
              { t: 'Transparent instead of hidden', d: 'One-time price, no subscription – the VR tour is yours, no platform rent.' },
              { t: 'Local instead of US cloud', d: 'Swiss/EU servers, GDPR-compliant.' },
              { t: 'Multi-industry instead of real estate only', d: 'Hotels, restaurants, spas, fitness, real estate.' },
              { t: 'Flexible instead of long-term contract', d: 'No minimum term, no notice period.' },
              { t: 'Continuous optimisation instead of standstill', d: 'Your VR tour grows with you – updates, new scenes and extensions at any time.' },
              { t: 'Flawless floor instead of tripod blur', d: 'The nadir point is retouched 95% clean – on request 100% or with your logo.' },
              { t: 'Sales instrument instead of gimmick', d: 'Booking links, lead forms and Google integration turn visitors into enquiries.' },
              { t: 'Measurable instead of guesswork', d: 'Views, dwell time and clicks on booking points – you see what your VR tour delivers.' },
            ].map((r, i) => (
              <div className="tcard" key={r.t}>
                <h3><span style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--g)', fontSize: 24, fontWeight: 600, marginRight: 10 }}>{String(i + 1).padStart(2, '0')}</span>{r.t}</h3>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blk" id="referenzen" style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="center"><div className="kicker">Reference projects</div><h2 className="sec">See for yourself</h2><div className="rule" /></div>
          <div className="refs">
            <div className="ref"><span className="badge">Live booking</span><iframe loading="lazy" src="https://vtour.cloud/e16tqj/ee82pes6/#node51" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Reference tour: SPA Signature Tour" /><div className="bot"><b>SPA Signature Tour</b><a href="https://vtour.cloud/e16tqj/ee82pes6/" target="_blank" rel="noopener noreferrer">Open tour</a></div></div>
            <div className="ref"><iframe loading="lazy" src="https://vtour.cloud/e16tqj/cltkwbjc/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Reference tour: Real Estate Basic Tour" /><div className="bot"><b>Real Estate Basic Tour</b><a href="https://vtour.cloud/e16tqj/cltkwbjc/" target="_blank" rel="noopener noreferrer">Open tour</a></div></div>
            <div className="ref"><span className="badge">Add-on</span><iframe loading="lazy" src="https://vtour.cloud/e16tqj/m9dre1te/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Add-on: Furniture Removal" /><div className="bot"><b>Add-on: Furniture Removal</b><a href="https://vtour.cloud/e16tqj/m9dre1te/" target="_blank" rel="noopener noreferrer">Open tour</a></div></div>
          </div>
        </div>
      </section>

      <section className="blk" id="pakete" style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="center"><div className="kicker">Our sales packages</div><h2 className="sec">One-time setup costs</h2><div className="rule" /></div>
          <div className="prices">
            <div className="pcard">
              <h3>Basic</h3><div className="for">Ideal for small areas</div>
              <div className="price">CHF 990.–</div><div className="note">one-time · incl. 12 months of Basic Service</div>
              <ul><li><Chk /> up to 15 panoramas</li><li><Chk /> 1080p Full HD quality</li><li><Chk /> max. 5 hotspots</li><li><Chk /> mobile-optimised</li><li><Chk /> 1 correction round</li></ul>
              <a className="btn btn-ghost" href="/en/bestellen?paket=basic">Order package</a>
            </div>
            <div className="pcard best">
              <div className="ribbon">Bestseller</div>
              <h3>Signature</h3><div className="for">The most popular all-rounder</div>
              <div className="price">CHF 2&apos;497.–</div><div className="note">one-time · incl. 12 months of Signature Care</div>
              <ul><li><Chk /> up to 40 panoramas</li><li><Chk /> 4K quality</li><li><Chk /> up to 25 hotspots</li><li><Chk /> corporate design integration</li><li><Chk /> audio & interactions</li><li><Chk /> 3 correction rounds</li></ul>
              <a className="btn btn-gold" href="/en/bestellen?paket=signature">Order package</a>
            </div>
            <div className="pcard">
              <h3>Pro</h3><div className="for">For hotels, thermal baths & premium resorts</div>
              <div className="price">from CHF 4&apos;497.–</div><div className="note">incl. 12 months of Signature Evolution · individual offer for large projects</div>
              <ul><li><Chk /> up to 100 panoramas</li><li><Chk /> 8K quality</li><li><Chk /> up to 50 hotspots</li><li><Chk /> corporate design integration</li><li><Chk /> booking integration</li><li><Chk /> video & interactions</li><li><Chk /> 5 correction rounds</li></ul>
              <a className="btn btn-ghost" href="/en/bestellen?paket=pro">Order package</a>
            </div>
          </div>
          <p className="center" style={{ marginTop: 22, color: 'var(--mut)', fontSize: 14 }}>All packages: Google integration, optimised for mobile, desktop, TV & VR headsets, SEO-optimised & multilingual on request.</p>
        </div>
      </section>

      <section className="blk" id="service">
        <div className="wrap">
          <div className="center"><div className="kicker">Care & development</div><h2 className="sec">Annual service packages</h2><div className="rule" /></div>
          <div className="svc">
            <div className="scard"><h3>Basic Service</h3><ul><li><Chk /> operation & security (hosting)</li><li><Chk /> SSL certificate & backups</li><li><Chk /> 1 small adjustment per year</li><li><Chk /> visitor statistics</li></ul><div className="amt">CHF 120.– <small>/ year</small></div><a className="btn btn-ghost" style={{ marginTop: 18, display: 'inline-block' }} href="/en/bestellen?service=basic-service">Select</a></div>
            <div className="scard rec"><div className="tag">Recommended</div><h3>Signature Care</h3><ul><li><Chk /> everything in Basic Service</li><li><Chk /> 3 adjustments per year</li><li><Chk /> 1 annual tour update</li><li><Chk /> insights into visitor behaviour</li><li><Chk /> priority support</li></ul><div className="amt">CHF 360.– <small>/ year</small></div><a className="btn btn-gold" style={{ marginTop: 18, display: 'inline-block' }} href="/en/bestellen?service=care">Select</a></div>
            <div className="scard"><h3>Signature Evolution</h3><ul><li><Chk /> everything in Signature Care</li><li><Chk /> 9 adjustments per year</li><li><Chk /> 2 annual “knowledge upgrades”</li><li><Chk /> performance optimisation</li><li><Chk /> quarterly traffic reports</li></ul><div className="amt">CHF 600.– <small>/ year</small></div><a className="btn btn-ghost" style={{ marginTop: 18, display: 'inline-block' }} href="/en/bestellen?service=evolution">Select</a></div>
          </div>
          <p className="center" style={{ marginTop: 18, color: 'var(--mut)', fontSize: 13.5 }}>In the first year, the matching service is already included in the package price – your choice applies from year 2, cancellable at any time.</p>
        </div>
      </section>

      <section className="blk dark" id="garantie">
        <div className="wrap">
          <div className="center"><div className="kicker">Your security is our promise</div><h2 className="sec">Double guarantee</h2><div className="rule" /></div>
          <div className="guar">
            <div className="gcard"><Icon id="i-shield" /><h3>Quality guarantee</h3><p>Every panorama is refined by hand — light, colours, details. Nothing leaves our studio before it meets our standards. And should something not match your expectations, we refine it — up to 3 correction rounds included.</p></div>
            <div className="gcard"><Icon id="i-palette" /><h3>Brand guarantee*</h3><p>Your VR tour carries your signature: colours, fonts, logo and navigation exactly to your corporate design. No standard player, no third-party branding — your visitors stay in your world from the first click to the booking enquiry.</p></div>
          </div>
          <p style={{ marginTop: 14, textAlign: 'center', fontSize: 12.5, color: 'var(--dmut)' }}>* Corporate design integration from the Signature Tour. The Basic VR tour uses the elegant Signatour standard design.</p>
          <div className="nullrisk">Minimal risk. Maximum value.</div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="center"><div className="kicker">Optional add-ons</div><h2 className="sec">When you want a little more</h2><div className="rule" /></div>
          <div className="opts">
            <div className="ocard"><Icon id="i-code" /><h3>Signature Web – custom website</h3><div className="pr">from CHF 2&apos;500.–</div></div>
            <div className="ocard"><Icon id="i-globe" /><h3>Multilingual version (DE / FR / EN)</h3><div className="pr">from CHF 300.– per language</div></div>
            <div className="ocard"><Icon id="i-palette" /><h3>Virtual staging – virtual furnishing</h3><div className="pr">from CHF 240.– per panorama</div></div>
            <div className="ocard"><Icon id="i-pin" /><h3>Google Street View & business integration</h3><div className="pr">CHF 490.– one-time</div></div>
            <div className="ocard"><Icon id="i-users" /><h3>Lead capture form inside the VR tour</h3><div className="pr">CHF 390.– one-time</div></div>
            <div className="ocard"><Icon id="i-sofa" /><h3>Furniture removal</h3><div className="pr">from CHF 180.– per panorama</div></div>
            <div className="ocard"><Icon id="i-bolt" /><h3>Day/night mode</h3><div className="pr">from CHF 180.– per scene</div></div>
            <div className="ocard"><Icon id="i-plus" /><h3>Additional panoramas</h3><div className="pr">from CHF 150.– per scene</div></div>
          </div>
          <p className="center" style={{ marginTop: 22 }}>
            <a href="/en/pakete#add-ons" style={{ color: 'var(--g)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>See all add-ons with benefits & prices</a>
          </p>
        </div>
      </section>


      <section className="blk" id="faq">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="center"><div className="kicker">FAQ</div><h2 className="sec">Frequently asked questions</h2><div className="rule" /></div>
          <div className="faq">
            {FAQ_ITEMS.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="final">
            <div className="bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80&auto=format&fit=crop" alt="" />
            </div>
            <div className="inner">
              <div className="kicker">Ready for your Premium Experience?</div>
              <h2 className="serif">Let’s bring your offer to life, digitally.</h2>
              <p>One no-obligation conversation is enough to see how a Signature Experience turns your visitors into customers.</p>
              <div className="finalphone"><a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a></div>
              <a className="btn btn-gold" href="/konfigurator-en.html">Free consultation</a>
              <p className="finaltrust">No obligation · Reply within 24 hours · Personally from the owner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
