import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants'

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
<symbol id="i-drone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 9 5 5M15 9l4-4M9 15l-4 4M15 15l4 4"/><circle cx="4" cy="4.5" r="2"/><circle cx="20" cy="4.5" r="2"/><circle cx="4" cy="19.5" r="2"/><circle cx="20" cy="19.5" r="2"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></symbol>
<symbol id="i-zoom" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></symbol>
<symbol id="i-sofa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11"/><path d="M4 11a2 2 0 0 1 2 2v3h12v-3a2 2 0 0 1 4 0v6H2v-6a2 2 0 0 1 2-2Z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12.5 4.5 4.5L19 7"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 3.5 9 4l1 3.5L8.3 9.2a12 12 0 0 0 6.5 6.5l1.7-1.7L20 15l.5 2.5a2 2 0 0 1-2 2.3A16 16 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2Z"/></symbol>
</defs></svg>`

const Icon = ({ id, c = 'icn' }: { id: string; c?: string }) => (
  <svg className={c}><use href={`#${id}`} /></svg>
)
const Chk = () => <svg className="icn-sm" style={{ width: 18, height: 18 }}><use href="#i-check" /></svg>

const BRANCHEN = [
  { img: '1566073771259-6a8506099945', t: 'Hotels', d: 'Zimmer, Lobby & Aussicht erlebbar machen – mehr Direktbuchungen.' },
  { img: '1517248135467-4c7edcad34c4', t: 'Restaurants', d: 'Ambiente und Tische zeigen, bevor reserviert wird.' },
  { img: '1540555700478-4be289fbecef', t: 'Spa & Wellness', d: 'Ruhe und Hochwertigkeit spürbar machen.' },
  { img: '1534438327276-14e5300c3a48', t: 'Fitnessstudios', d: 'Geräte und Atmosphäre zeigen – Hemmschwelle senken.' },
  { img: '1512917774080-9991f1c4c750', t: 'Immobilien', d: 'Objekte rund um die Uhr begehbar – weniger unnötige Besichtigungen.' },
  { img: '1497366754035-f200968a6e72', t: 'Banken, Versicherungen & Kanzleien', d: 'Premium-Büros und Beratungsräume, die schon online Vertrauen schaffen.' },
]

export default function HomePage() {
  return (
    <div className="nigpage">
      <div dangerouslySetInnerHTML={{ __html: ICON_DEFS }} />

      <section className="hero">
        <div className="bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1900&q=80&auto=format&fit=crop" alt="Premium Spa" />
        </div>
        <div className="wrap inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="herologo" src="/niggli-logo.png" alt="Niggli – 360° Signature Tours" />
          <h1 className="serif">Premium-Erlebnisse, in die sich Ihre <em>Gäste verlieben</em>.</h1>
          <p className="lead"><span className="accent">Erleben beginnt heute nicht vor Ort – sondern online.</span><br />
            Interaktive 360°-Touren für Hotels, Spa, Gastronomie und Immobilien. Ihre Gäste erleben den Raum – und buchen, kaufen oder fragen direkt in der Tour an.</p>
          <div className="cta">
            <a className="btn btn-gold" href={`mailto:${CONTACT_EMAIL}`}>Kostenlose Beratung <span className="arrow">→</span></a>
            <a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a>
          </div>
        </div>
      </section>

      <section className="blk pillars">
        <div className="wrap"><div className="grid">
          <div className="pillar"><Icon id="i-cal" /><h3>Mehr Buchungen</h3><p>Steigern Sie Ihre Direktbuchungen.</p></div>
          <div className="pillar"><Icon id="i-coin" /><h3>Weniger Plattformgebühren</h3><p>Reduzieren Sie Kosten durch Plattformen.</p></div>
          <div className="pillar"><Icon id="i-users" /><h3>Höhere Verweildauer</h3><p>Gäste bleiben länger auf Ihrer Seite.</p></div>
          <div className="pillar"><Icon id="i-diamond" /><h3>Klare Differenzierung</h3><p>Heben Sie sich sichtbar von Mitbewerbern ab.</p></div>
        </div></div>
      </section>

      <section className="blk" id="branchen" style={{ background: 'var(--paper2)' }}>
        <div className="wrap center">
          <div className="kicker">Branchen</div><h2 className="sec">Für jede Branche die passende Tour</h2>
          <p className="sub">Überall dort, wo Atmosphäre, Qualität und Vertrauen über die Entscheidung mitbestimmen.</p>
        </div>
        <div className="wrap">
          <div className="bgrid">
            {BRANCHEN.map((b) => (
              <a className="bcard" href={`mailto:${CONTACT_EMAIL}`} key={b.t}>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={`https://images.unsplash.com/photo-${b.img}?w=900&q=80&auto=format&fit=crop`} alt={b.t} />
                </div>
                <div className="bd"><h3>{b.t}</h3><p>{b.d}</p><span className="more">Mehr erfahren →</span></div>
              </a>
            ))}
            <a className="bcard empty" href={`mailto:${CONTACT_EMAIL}`}><Icon id="i-diamond" /><h3>Andere Branche?</h3><p>Für jeden Betrieb mit sehenswerten Räumlichkeiten.</p><span className="more">Kontakt aufnehmen →</span></a>
          </div>
        </div>
      </section>

      <section className="blk" id="leistung">
        <div className="wrap center">
          <div className="kicker">Was Sie erhalten</div><h2 className="sec">Mehr als ein Rundgang</h2><div className="rule" />
          <div className="fgrid">
            <div className="fcard"><Icon id="i-cam" /><h3>Hochwertige 360°-Tour</h3><p>In Premium-Qualität, mit sauberer Boden- und Detailbearbeitung.</p></div>
            <div className="fcard"><Icon id="i-palette" /><h3>Corporate Design</h3><p>Perfekt auf Ihre Marke abgestimmt – Farben, Logo, Stil.</p></div>
            <div className="fcard"><Icon id="i-pin" /><h3>Interaktive Hotspots</h3><p>Buchungs- und Infopunkte: mehr Interaktion, mehr Ergebnisse.</p></div>
            <div className="fcard"><Icon id="i-globe" /><h3>Website & Google</h3><p>Optimiert eingebunden. Sichtbar, schnell, überall verfügbar.</p></div>
          </div>
        </div>
      </section>

      <section className="blk dark">
        <div className="wrap">
          <div className="center"><div className="kicker">Der Unterschied</div><h2 className="sec">Standard-Tour vs. Signature Experience</h2>
            <p className="sub">Die meisten Touren lassen Besucher nur schauen. Eine Signature Experience lässt sie handeln.</p></div>
          <div className="cmp">
            <div className="col std"><h3>Standard-Tour</h3><ul>
              <li><span className="i">—</span> Nur anschauen</li><li><span className="i">—</span> Statisch, passiv</li><li><span className="i">—</span> Optik von der Stange</li><li><span className="i">—</span> Besucher klickt weg</li><li><span className="i">—</span> Keine direkte Handlung</li></ul></div>
            <div className="col sig"><h3>Signature Experience</h3><ul>
              <li><span className="i">✓</span> Direkt buchen, kaufen oder anfragen</li><li><span className="i">✓</span> Interaktiv & verkaufsaktiv</li><li><span className="i">✓</span> In Ihrem Corporate Design</li><li><span className="i">✓</span> Besucher bleibt länger</li><li><span className="i">✓</span> Aus Interesse wird Kontakt</li></ul></div>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap center">
          <div className="kicker">Interaktive Möglichkeiten</div><h2 className="sec">Mehr als nur Bilder</h2><div className="rule" />
          <div className="fgrid fgrid3">
            <div className="fcard"><Icon id="i-cart" /><h3>Buchungs-Integration</h3><p>Gäste reservieren oder kaufen direkt im Rundgang – ohne Umweg über Drittseiten.</p></div>
            <div className="fcard"><Icon id="i-play" /><h3>Video & Audio</h3><p>Eingebettete Videos und Audio-Guides erzählen Ihre Geschichte mitten im Raum.</p></div>
            <div className="fcard"><Icon id="i-info" /><h3>Info-Hotspots</h3><p>Öffnungszeiten, Preise und Details als anklickbare Punkte direkt im Bild.</p></div>
            <div className="fcard"><Icon id="i-zoom" /><h3>Zoom & Vollbild</h3><p>Bilder und Fenster lassen sich vergrössern und im Vollbild öffnen – jedes Detail wird sichtbar.</p></div>
            <div className="fcard"><Icon id="i-pin" /><h3>Grundriss & Mini-Map</h3><p>Orientierung per Grundriss und Mini-Karte – Besucher finden sich sofort zurecht.</p></div>
            <div className="fcard"><Icon id="i-doc" /><h3>Downloads</h3><p>Broschüren, Menüs, Preislisten und PDFs direkt aus der Tour herunterladen.</p></div>
          </div>
        </div>
      </section>

      <section className="blk" id="pakete" style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="center"><div className="kicker">Unsere Verkaufspakete</div><h2 className="sec">Einmalige Einrichtungskosten</h2><div className="rule" /></div>
          <div className="prices">
            <div className="pcard">
              <h3>Basic</h3><div className="for">Ideal für kleine Bereiche</div>
              <div className="price">CHF 1&apos;797.–</div><div className="note">einmalig · inkl. 12 Monate Basic Service</div>
              <ul><li><Chk /> bis 15 Panoramen</li><li><Chk /> 1080p Full-HD-Qualität</li><li><Chk /> max. 5 Hotspots</li><li><Chk /> Mobile optimiert</li><li><Chk /> 1 Korrekturrunde</li></ul>
              <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>Anfragen</a>
            </div>
            <div className="pcard best">
              <div className="ribbon">Bestseller</div>
              <h3>Signature</h3><div className="for">Der beliebteste Allrounder</div>
              <div className="price">CHF 4&apos;997.–</div><div className="note">einmalig · inkl. 12 Monate Signature Care</div>
              <ul><li><Chk /> bis 50 Panoramen</li><li><Chk /> 4K-Qualität</li><li><Chk /> bis 25 Hotspots</li><li><Chk /> Corporate Design Integration</li><li><Chk /> Audio & Interaktionen</li><li><Chk /> 3 Korrekturrunden</li></ul>
              <a className="btn btn-gold" href={`mailto:${CONTACT_EMAIL}`}>Anfragen</a>
            </div>
            <div className="pcard">
              <h3>Pro</h3><div className="for">Für Hotels, Thermen & Premium-Resorts</div>
              <div className="price">CHF 8&apos;497.–</div><div className="note">einmalig · inkl. 12 Monate Signature Evolution</div>
              <ul><li><Chk /> bis 100 Panoramen</li><li><Chk /> 8K-Qualität</li><li><Chk /> unbegrenzte Hotspots</li><li><Chk /> Buchungsintegration</li><li><Chk /> Video & Interaktionen</li><li><Chk /> 5 Korrekturrunden</li></ul>
              <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>Anfragen</a>
            </div>
          </div>
          <p className="center" style={{ marginTop: 22, color: 'var(--mut)', fontSize: 14 }}>Alle Pakete: Google-Integration, responsiv, SEO-optimiert & auf Wunsch mehrsprachig.</p>
        </div>
      </section>

      <section className="blk" id="service">
        <div className="wrap">
          <div className="center"><div className="kicker">Betreuung & Weiterentwicklung</div><h2 className="sec">Jährliche Servicepakete</h2><div className="rule" /></div>
          <div className="svc">
            <div className="scard"><h3>Basic Service</h3><ul><li><Chk /> Betrieb & Sicherheit (Hosting)</li><li><Chk /> SSL-Zertifikat & Backups</li><li><Chk /> 1 kleine Anpassung pro Jahr</li><li><Chk /> Besucherstatistik</li></ul><div className="amt">CHF 120.– <small>/ Jahr</small></div></div>
            <div className="scard rec"><div className="tag">Empfohlen</div><h3>Signature Care</h3><ul><li><Chk /> Alles aus Basic Service</li><li><Chk /> 3 Anpassungen pro Jahr</li><li><Chk /> 1 jährliches Tour-Update</li><li><Chk /> Einblicke ins Besucherverhalten</li><li><Chk /> Priorität beim Support</li></ul><div className="amt">CHF 360.– <small>/ Jahr</small></div></div>
            <div className="scard"><h3>Signature Evolution</h3><ul><li><Chk /> Alles aus Signature Care</li><li><Chk /> 9 Anpassungen pro Jahr</li><li><Chk /> 2 jährliche «Knowledge-Upgrades»</li><li><Chk /> Performance-Optimierung</li><li><Chk /> Quartalsweise Traffic-Reports</li></ul><div className="amt">CHF 600.– <small>/ Jahr</small></div></div>
          </div>
        </div>
      </section>

      <section className="blk dark" id="garantie">
        <div className="wrap">
          <div className="center"><div className="kicker">Ihre Sicherheit ist unser Versprechen</div><h2 className="sec">Doppelte Garantie</h2><div className="rule" /></div>
          <div className="guar">
            <div className="gcard"><Icon id="i-shield" /><h3>Qualitäts-Garantie</h3><p>Höchste Qualität in Bild, Design und Funktion. Nicht zufrieden? Wir verbessern, bis es perfekt ist – bis zu 3 Korrekturrunden inklusive.</p></div>
            <div className="gcard"><Icon id="i-target" /><h3>Erfolgs-Garantie</h3><p>Keine messbare Verbesserung nach 90 Tagen? Wir erstatten Ihnen 50% des Paketpreises zurück. Ohne Diskussion.</p></div>
          </div>
          <div className="nullrisk">Null Risiko. Maximale Chance.</div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="center"><div className="kicker">Optionale Erweiterungen</div><h2 className="sec">Wenn es noch mehr sein darf</h2><div className="rule" /></div>
          <div className="opts">
            <div className="ocard"><Icon id="i-drone" /><h3>Drohnenaufnahmen / Luft-Panorama</h3><div className="pr">ab CHF 600.–</div></div>
            <div className="ocard"><Icon id="i-globe" /><h3>Mehrsprachige Version (DE / FR / EN)</h3><div className="pr">ab CHF 400.–</div></div>
            <div className="ocard"><Icon id="i-sofa" /><h3>Add-On: Furniture Removal</h3><div className="pr">ab CHF 120.– pro Panorama</div></div>
            <div className="ocard"><Icon id="i-plus" /><h3>Zusätzliche Panoramen</h3><div className="pr">ab CHF 150.– pro Szene</div></div>
          </div>
        </div>
      </section>

      <section className="blk" id="referenzen" style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="center"><div className="kicker">Referenzprojekte</div><h2 className="sec">Sehen Sie selbst</h2><div className="rule" /></div>
          <div className="refs">
            <div className="ref"><iframe src="https://vtour.cloud/e16tqj/ee82pes6/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Referenz 1" /><div className="bot"><b>Signature Tour</b><a href="https://vtour.cloud/e16tqj/ee82pes6/" target="_blank" rel="noopener noreferrer">Tour öffnen →</a></div></div>
            <div className="ref"><iframe src="https://vtour.cloud/e16tqj/cltkwbjc/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Referenz 2" /><div className="bot"><b>Signature Tour</b><a href="https://vtour.cloud/e16tqj/cltkwbjc/" target="_blank" rel="noopener noreferrer">Tour öffnen →</a></div></div>
            <div className="ref"><span className="badge">Add-On</span><iframe src="https://vtour.cloud/e16tqj/m9dre1te/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Add-On: Furniture Removal" /><div className="bot"><b>Add-On: Furniture Removal</b><a href="https://vtour.cloud/e16tqj/m9dre1te/" target="_blank" rel="noopener noreferrer">Tour öffnen →</a></div></div>
          </div>
        </div>
      </section>

      <section className="blk" id="faq">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="center"><div className="kicker">FAQ</div><h2 className="sec">Häufige Fragen</h2><div className="rule" /></div>
          <div className="faq">
            <details><summary>Was ist ein 360°-Rundgang?</summary><p>Ein interaktiver Rundgang, durch den sich Besucher selbst bewegen – wie wenn sie vor Ort wären. Er läuft direkt im Browser, ohne App, und lässt sich mit Hotspots zum Buchen, Kaufen oder Anfragen ergänzen.</p></details>
            <details><summary>Wie lange dauert die Erstellung?</summary><p>Das Shooting dauert 2–4 Stunden vor Ort. Die fertige Tour liefern wir in der Regel innerhalb von 5–10 Arbeitstagen.</p></details>
            <details><summary>Brauche ich eine spezielle App oder Kamera?</summary><p>Nein. Die Tour läuft auf jedem Gerät im Browser. Aufnahme, Technik und Hosting übernehmen wir vollständig.</p></details>
            <details><summary>Ist das DSGVO-konform?</summary><p>Ja. Hosting in der Schweiz/EU, Aufnahmen ausserhalb der Öffnungszeiten ohne Personen, AVV auf Wunsch inklusive.</p></details>
            <details><summary>Was passiert, wenn wir renovieren?</summary><p>Mit einem Servicepaket aktualisieren wir betroffene Bereiche oder erstellen einzelne Punkte neu – Ihre Tour bleibt aktuell.</p></details>
          </div>
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
              <div className="kicker">Bereit für Ihre Premium Experience?</div>
              <h2 className="serif">Lassen Sie uns Ihr Angebot digital zum Leben erwecken.</h2>
              <p>Ein unverbindliches Gespräch genügt, um zu klären, wie eine Signature Experience aus Besuchern Kunden macht.</p>
              <a className="btn btn-gold" href={`mailto:${CONTACT_EMAIL}`}>Kostenlose Beratung <span className="arrow">→</span></a>
              <div><a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
