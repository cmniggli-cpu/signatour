import type { Metadata } from 'next'
import { CONTACT_PHONE } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
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
<symbol id="i-drone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 9 5 5M15 9l4-4M9 15l-4 4M15 15l4 4"/><circle cx="4" cy="4.5" r="2"/><circle cx="20" cy="4.5" r="2"/><circle cx="4" cy="19.5" r="2"/><circle cx="20" cy="19.5" r="2"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></symbol>
<symbol id="i-zoom" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></symbol>
<symbol id="i-sofa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11"/><path d="M4 11a2 2 0 0 1 2 2v3h12v-3a2 2 0 0 1 4 0v6H2v-6a2 2 0 0 1 2-2Z"/></symbol>
<symbol id="i-code" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 5l-3 14"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/></symbol>
<symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12.5 4.5 4.5L19 7"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 3.5 9 4l1 3.5L8.3 9.2a12 12 0 0 0 6.5 6.5l1.7-1.7L20 15l.5 2.5a2 2 0 0 1-2 2.3A16 16 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2Z"/></symbol>
</defs></svg>`

const Icon = ({ id, c = 'icn' }: { id: string; c?: string }) => (
  <svg className={c}><use href={`#${id}`} /></svg>
)
const Chk = () => <svg className="icn-sm" style={{ width: 18, height: 18 }}><use href="#i-check" /></svg>

const FAQ_ITEMS = [
  { q: 'Was ist ein 360°-Rundgang?', a: 'Ein interaktiver Rundgang, durch den sich Besucher selbst bewegen – wie wenn sie vor Ort wären. Er läuft direkt im Browser, ohne App, und lässt sich mit Hotspots zum Buchen, Kaufen oder Anfragen ergänzen.' },
  { q: 'Wie lange dauert die Erstellung?', a: 'Das Shooting dauert 2–4 Stunden vor Ort. Die fertige Tour liefern wir in der Regel innerhalb von 5–10 Arbeitstagen.' },
  { q: 'Brauche ich eine spezielle App oder Kamera?', a: 'Nein. Die Tour läuft auf jedem Gerät im Browser – Smartphone, Tablet, Desktop, TV und sogar VR-Brille. Aufnahme, Technik und Hosting übernehmen wir vollständig.' },
  { q: 'Ist das DSGVO-konform?', a: 'Ja. Hosting in der Schweiz/EU, Aufnahmen ausserhalb der Öffnungszeiten ohne Personen, AVV auf Wunsch inklusive.' },
  { q: 'Was passiert, wenn wir renovieren?', a: 'Mit einem Servicepaket aktualisieren wir betroffene Bereiche oder erstellen einzelne Punkte neu – Ihre Tour bleibt aktuell.' },
  { q: 'Was bringt mir das konkret – lohnt sich das?', a: 'Je nach Branche steigen Buchungen und Anfragen deutlich, und Besucher bleiben um ein Mehrfaches länger auf der Seite. Bei Immobilien etwa rund +87% mehr Aufrufe (Matterport). Bei nachweisbarem Mehrertrag amortisiert sich die Tour oft schon nach wenigen Buchungen.' },
  { q: 'Was kostet eine Tour?', a: 'Transparente Fixpakete ab CHF 990 – der Preis hängt von Panoramen und Funktionen ab. Über den Paket-Konfigurator erhalten Sie in einer Minute eine unverbindliche Einschätzung.' },
  { q: 'Gibt es ein Abo oder versteckte Kosten?', a: 'Nein. Die Tour gehört Ihnen. Ein jährliches Servicepaket (ab CHF 120) ist optional – keine langfristige Bindung, Kündigung per Jahresende.' },
  { q: 'Wie wird der «Erfolg» gemessen?', a: 'Sie erhalten Besucherstatistiken: Aufrufe, Verweildauer, beliebteste Räume und Klicks auf Buchungs-Hotspots – Grundlage auch für unsere Erfolgs-Garantie.' },
  { q: 'Was ist, wenn ich nicht zufrieden bin?', a: 'Doppelte Garantie: bis zu 3 Korrekturrunden – und keine messbare Verbesserung nach 90 Tagen? 50% des Paketpreises zurück.' },
  { q: 'Worin unterscheidet sich das von Fotos oder einem Video?', a: 'Fotos und Videos zeigen, was wir zeigen wollen. Eine Signature Tour lässt den Besucher selbst entscheiden, wohin er schaut – und direkt handeln (buchen, anfragen). Das kann ein Video nicht.' },
  { q: 'Ist das dasselbe wie Matterport?', a: 'Matterport ist ein 3D-Scan-Standard – oft mit monatlicher Plattformgebühr und Optik von der Stange. Unsere Tour ist in Ihrem Corporate Design, verkaufsaktiv und gehört Ihnen, ohne Abo-Zwang. Ein sichtbarer Qualitätsunterschied: Wo Matterport den Boden unter der Kamera mit einem verschwommenen Fleck überdeckt (sonst sähe man das Stativ), retuschieren wir diesen Nadir-Punkt zu 95% sauber weg – auf Wunsch zu 100% mit makellosem Boden oder Ihrem Logo.' },
  { q: 'Was ist mit dem Boden unter der Kamera (Nadir)?', a: 'Bei 360°-Aufnahmen steht die Kamera auf einem Stativ – ohne Bearbeitung wäre es im Bild sichtbar. Viele Anbieter setzen einfach einen verschwommenen Fleck oder ein Logo darüber. Wir retuschieren den Boden zu 95% sauber, sodass er natürlich wirkt. Wer es perfekt will, erhält als Add-on die 100%-Lösung mit makellosem Boden oder eingesetztem Logo.' },
  { q: 'Geht das auch mehrsprachig?', a: 'Ja – Deutsch, Französisch und Englisch. Zusatzsprachen ab CHF 300 pro Sprache.' },
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
  { img: '1566073771259-6a8506099945', href: '/branchen/hotel', t: 'Hotels & Gastronomie', d: 'Zimmer, Lobby, Ambiente und Tische erlebbar machen – mehr Direktbuchungen und Reservierungen.' },
  { img: '1540555700478-4be289fbecef', href: '/branchen/spa-wellness', t: 'Spa & Wellness', d: 'Ruhe und Hochwertigkeit spürbar machen.' },
  { img: '1534438327276-14e5300c3a48', href: '/branchen/fitnessstudio', t: 'Fitnessstudios', d: 'Geräte und Atmosphäre zeigen – Hemmschwelle senken.' },
  { img: '1512917774080-9991f1c4c750', href: '/branchen/immobilien', t: 'Immobilien', d: 'Objekte rund um die Uhr begehbar – weniger unnötige Besichtigungen.' },
  { img: '1497366754035-f200968a6e72', href: '/branchen/banken-versicherungen', t: 'Banken, Versicherungen & Kanzleien', d: 'Premium-Büros und Beratungsräume, die schon online Vertrauen schaffen.' },
  { img: '1519167758481-83f550bb49b3', href: '/branchen/eventlocations', t: 'Eventlocations & Showrooms', d: 'Säle, Locations und Ausstellungsflächen wirken lassen – Kunden erleben den Raum vor der Anfrage.' },
]

export default function HomePage() {
  return (
    <div className="nigpage">
      <div dangerouslySetInnerHTML={{ __html: ICON_DEFS }} />

      <section className="hero">
        <div className="bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1900&q=80&auto=format&fit=crop" alt="Hotel-Pool als 360°-Verkaufserlebnis – Beispiel einer Signature Tour" fetchPriority="high" />
        </div>
        <div className="wrap inner">
          <h1 className="serif">Ihre Räume werden zum <em>besten Verkäufer</em> – rund um die Uhr.</h1>
          <p className="lead"><span className="accent">Entscheidungen fallen heute online – nicht vor Ort.</span><br />
            Wir verwandeln Ihre Räumlichkeiten in ein digitales Verkaufserlebnis: Besucher erleben Ihr Angebot, bauen Vertrauen auf und buchen, kaufen oder fragen direkt in der Tour an – noch bevor das erste Gespräch stattfindet.</p>
          <div className="cta">
            <a className="btn btn-gold" href="/konfigurator.html">Kostenlose Beratung <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="#referenzen">Referenz-Touren ansehen</a>
            <a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a>
          </div>
          <p className="herotrust">Schweizer Anbieter · Einmalpreis statt Abo · Antwort innert 24 Stunden</p>
        </div>
      </section>

      <section className="blk pillars">
        <div className="wrap"><div className="grid">
          <div className="pillar"><Icon id="i-users" /><h3>Mehr qualifizierte Anfragen</h3><p>Interessenten informieren sich bereits vor dem ersten Kontakt.</p></div>
          <div className="pillar"><Icon id="i-target" /><h3>Weniger Leerläufe</h3><p>Unpassende Anfragen und unnötige Termine werden reduziert.</p></div>
          <div className="pillar"><Icon id="i-shield" /><h3>Mehr Vertrauen</h3><p>Transparenz überzeugt noch vor dem ersten Gespräch.</p></div>
          <div className="pillar"><Icon id="i-cal" /><h3>Höhere Abschlusschancen</h3><p>Gut informierte Interessenten entscheiden schneller.</p></div>
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
              <a className="bcard" href={b.href} key={b.t}>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={`https://images.unsplash.com/photo-${b.img}?w=900&q=80&auto=format&fit=crop`} alt={b.t} />
                </div>
                <div className="bd"><h3>{b.t}</h3><p>{b.d}</p><span className="more">Mehr erfahren →</span></div>
              </a>
            ))}
            <a className="bcard empty" href="/kontakt"><Icon id="i-diamond" /><h3>Andere Branche?</h3><p>Für jeden Betrieb mit sehenswerten Räumlichkeiten.</p><span className="more">Kontakt aufnehmen →</span></a>
          </div>
        </div>
      </section>

      <section className="blk" id="leistung">
        <div className="wrap center">
          <div className="kicker">Was Sie erhalten</div><h2 className="sec">Ein digitaler Mitarbeiter, der nie Feierabend macht</h2>
          <p className="sub">Eine Signature Tour ist kein Produkt, das man sich einmal ansieht. Sie ist ein Verkaufsinstrument, das Tag für Tag informiert, Vertrauen aufbaut und Anfragen auslöst.</p><div className="rule" />
          <div className="fgrid">
            <div className="fcard"><Icon id="i-cam" /><h3>Hochwertige 360°-Tour</h3><p>In Premium-Qualität, mit sauberer Boden- und Detailbearbeitung.</p></div>
            <div className="fcard"><Icon id="i-palette" /><h3>Corporate Design</h3><p>Perfekt auf Ihre Marke abgestimmt – Farben, Logo, Stil.</p></div>
            <div className="fcard"><Icon id="i-pin" /><h3>Interaktive Hotspots</h3><p>Buchungs- und Infopunkte: mehr Interaktion, mehr Ergebnisse.</p></div>
            <div className="fcard"><Icon id="i-globe" /><h3>Website & Google</h3><p>Optimiert eingebunden. Sichtbar, schnell, überall verfügbar.</p></div>
            <div className="fcard"><Icon id="i-chart" /><h3>Messbarer Erfolg</h3><p>Analytics-Report: Aufrufe, beliebteste Räume und Klicks – Zahlen statt Bauchgefühl.</p></div>
            <div className="fcard"><Icon id="i-shield" /><h3>Voller Besitz, kein Abo</h3><p>Die Tour gehört Ihnen. Keine Plattform-Miete – nur ein faires, optionales Servicepaket.</p></div>
            <div className="fcard"><Icon id="i-bolt" /><h3>Blitzschnelle Ladezeit</h3><p>Mobil optimiert – jede Sekunde Ladezeit entscheidet über Conversion.</p></div>
            <div className="fcard"><Icon id="i-phone" /><h3>Schweizer Ansprechpartner</h3><p>Kein Callcenter, kein Ticket-System – direkt mit dem Macher. Hosting in CH/EU, DSGVO-konform.</p></div>
          </div>
        </div>
      </section>

      <section className="blk dark">
        <div className="wrap">
          <div className="center"><div className="kicker">Der Unterschied</div><h2 className="sec">Standard-Tour vs. Signature Experience</h2>
            <p className="sub">Die meisten Touren lassen Besucher nur schauen. Eine Signature Experience lässt sie handeln.</p></div>
          <input type="checkbox" id="cmpmore" className="cmptoggle" />
          <div className="cmp">
            <div className="col std"><h3>Standard-Tour</h3><ul>
              <li><span className="i">—</span> Nur anschauen</li>
              <li><span className="i">—</span> Verkauft nie aktiv mit</li>
              <li><span className="i">—</span> Keine direkte Handlung</li>
              <li><span className="i">—</span> Optik von der Stange</li>
              <li><span className="i">—</span> Keine Daten</li>
              <li><span className="i">—</span> Abo-/Plattformbindung</li>
              <li><span className="i">—</span> Anbieter im Ausland</li>
              <li className="xtr"><span className="i">—</span> Statisch, passiv</li>
              <li className="xtr"><span className="i">—</span> Besucher klickt weg</li>
              <li className="xtr"><span className="i">—</span> Hohe Hemmschwelle zum Kontakt</li>
              <li className="xtr"><span className="i">—</span> Geht in der Masse unter</li>
              <li className="xtr"><span className="i">—</span> Nur einsprachig</li>
              <li className="xtr"><span className="i">—</span> Nicht erweiterbar</li>
              <li className="xtr"><span className="i">—</span> Einmal erstellt, dann veraltet</li></ul></div>
            <div className="col sig"><h3>Signature Experience</h3><ul>
              <li><span className="i">✓</span> Direkt buchen, kaufen oder anfragen</li>
              <li><span className="i">✓</span> Verkauft rund um die Uhr – 365 Tage</li>
              <li><span className="i">✓</span> Aus Interesse wird Kontakt</li>
              <li><span className="i">✓</span> In Ihrem Corporate Design</li>
              <li><span className="i">✓</span> Messbar dank Analytics-Report</li>
              <li><span className="i">✓</span> Gehört Ihnen, kein Zwang</li>
              <li><span className="i">✓</span> Schweizer Qualität & Ansprechpartner</li>
              <li className="xtr"><span className="i">✓</span> Interaktiv & verkaufsaktiv</li>
              <li className="xtr"><span className="i">✓</span> Besucher bleibt länger</li>
              <li className="xtr"><span className="i">✓</span> Senkt die Hemmschwelle für den ersten Kontakt</li>
              <li className="xtr"><span className="i">✓</span> Hebt Sie sichtbar von der Konkurrenz ab</li>
              <li className="xtr"><span className="i">✓</span> Mehrsprachig erlebbar (DE/FR/EN)</li>
              <li className="xtr"><span className="i">✓</span> Jederzeit mit neuen Inhalten erweiterbar</li>
              <li className="xtr"><span className="i">✓</span> Wird laufend weiterentwickelt</li></ul></div>
          </div>
          <div className="center" style={{ marginTop: 22 }}>
            <label htmlFor="cmpmore" className="cmpbtn">
              <span className="show">Alle 14 Unterschiede anzeigen +</span>
              <span className="hide">Weniger anzeigen –</span>
            </label>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="fgrid fgrid3">
            <div className="fcard"><Icon id="i-globe" /><h3>Rund um die Uhr im Einsatz</h3><p>Ihre Tour verkauft, während Sie schlafen – 365 Tage im Jahr, auch ausserhalb der Geschäftszeiten.</p></div>
            <div className="fcard"><Icon id="i-target" /><h3>Ein Aufwand, dauerhafter Nutzen</h3><p>Einmal erstellt, jahrelang im Einsatz – ohne laufende Werbekosten und ohne Streuverlust.</p></div>
            <div className="fcard"><Icon id="i-chart" /><h3>Messbar statt Bauchgefühl</h3><p>Aufrufe, Verweildauer und Klicks auf Buchungspunkte – Sie sehen, was die Tour leistet.</p></div>
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
              <div className="price">CHF 990.–</div><div className="note">einmalig · inkl. 12 Monate Basic Service</div>
              <ul><li><Chk /> bis 15 Panoramen</li><li><Chk /> 1080p Full-HD-Qualität</li><li><Chk /> max. 5 Hotspots</li><li><Chk /> Mobile optimiert</li><li><Chk /> 1 Korrekturrunde</li></ul>
              <a className="btn btn-ghost" href="/konfigurator.html">Anfragen</a>
            </div>
            <div className="pcard best">
              <div className="ribbon">Bestseller</div>
              <h3>Signature</h3><div className="for">Der beliebteste Allrounder</div>
              <div className="price">CHF 2&apos;497.–</div><div className="note">einmalig · inkl. 12 Monate Signature Care</div>
              <ul><li><Chk /> bis 60 Panoramen</li><li><Chk /> 4K-Qualität</li><li><Chk /> bis 25 Hotspots</li><li><Chk /> Corporate Design Integration</li><li><Chk /> Audio & Interaktionen</li><li><Chk /> 3 Korrekturrunden</li></ul>
              <a className="btn btn-gold" href="/konfigurator.html">Anfragen</a>
            </div>
            <div className="pcard">
              <h3>Pro</h3><div className="for">Für Hotels, Thermen & Premium-Resorts</div>
              <div className="price">ab CHF 4&apos;497.–</div><div className="note">inkl. 12 Monate Signature Evolution · Einzelofferte für grosse Projekte</div>
              <ul><li><Chk /> bis 100 Panoramen</li><li><Chk /> 8K-Qualität</li><li><Chk /> unbegrenzte Hotspots</li><li><Chk /> Buchungsintegration</li><li><Chk /> Video & Interaktionen</li><li><Chk /> 5 Korrekturrunden</li></ul>
              <a className="btn btn-ghost" href="/konfigurator.html">Anfragen</a>
            </div>
          </div>
          <p className="center" style={{ marginTop: 22, color: 'var(--mut)', fontSize: 14 }}>Alle Pakete: Google-Integration, optimiert für Mobile, Desktop, TV & VR-Brille, SEO-optimiert & auf Wunsch mehrsprachig.</p>
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
            <div className="ocard"><Icon id="i-code" /><h3>Signature Web – Webseite nach Mass</h3><div className="pr">ab CHF 2&apos;500.–</div></div>
            <div className="ocard"><Icon id="i-globe" /><h3>Mehrsprachige Version (DE / FR / EN)</h3><div className="pr">ab CHF 300.– pro Sprache</div></div>
            <div className="ocard"><Icon id="i-palette" /><h3>Virtual Staging – virtuelle Möblierung</h3><div className="pr">ab CHF 240.– pro Panorama</div></div>
            <div className="ocard"><Icon id="i-pin" /><h3>Google Street View & Business-Einbindung</h3><div className="pr">CHF 490.– einmalig</div></div>
            <div className="ocard"><Icon id="i-users" /><h3>Lead-Capture-Formular in der Tour</h3><div className="pr">CHF 390.– einmalig</div></div>
            <div className="ocard"><Icon id="i-play" /><h3>Social-Media-Clip-Paket</h3><div className="pr">CHF 390.– (3 Clips)</div></div>
            <div className="ocard"><Icon id="i-sofa" /><h3>Furniture Removal</h3><div className="pr">ab CHF 180.– pro Panorama</div></div>
            <div className="ocard"><Icon id="i-bolt" /><h3>Tag-/Nacht-Modus</h3><div className="pr">ab CHF 180.– pro Szene</div></div>
            <div className="ocard"><Icon id="i-plus" /><h3>Zusätzliche Panoramen</h3><div className="pr">ab CHF 150.– pro Szene</div></div>
          </div>
          <p className="center" style={{ marginTop: 22 }}>
            <a href="/pakete" style={{ color: 'var(--g)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Alle 16 Erweiterungen mit Nutzen & Preisen ansehen →</a>
          </p>
        </div>
      </section>

      <section className="blk" id="referenzen" style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="center"><div className="kicker">Referenzprojekte</div><h2 className="sec">Sehen Sie selbst</h2><div className="rule" /></div>
          <div className="refs">
            <div className="ref"><iframe loading="lazy" src="https://vtour.cloud/e16tqj/ee82pes6/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Referenz-Tour 1: Signature Tour" /><div className="bot"><b>Signature Tour</b><a href="https://vtour.cloud/e16tqj/ee82pes6/" target="_blank" rel="noopener noreferrer">Tour öffnen →</a></div></div>
            <div className="ref"><iframe loading="lazy" src="https://vtour.cloud/e16tqj/cltkwbjc/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Referenz-Tour 2: Signature Tour" /><div className="bot"><b>Signature Tour</b><a href="https://vtour.cloud/e16tqj/cltkwbjc/" target="_blank" rel="noopener noreferrer">Tour öffnen →</a></div></div>
            <div className="ref"><span className="badge">Add-On</span><iframe loading="lazy" src="https://vtour.cloud/e16tqj/m9dre1te/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Add-On: Furniture Removal" /><div className="bot"><b>Add-On: Furniture Removal</b><a href="https://vtour.cloud/e16tqj/m9dre1te/" target="_blank" rel="noopener noreferrer">Tour öffnen →</a></div></div>
          </div>
        </div>
      </section>

      <section className="blk" id="faq">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="center"><div className="kicker">FAQ</div><h2 className="sec">Häufige Fragen</h2><div className="rule" /></div>
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
              <div className="kicker">Bereit für Ihre Premium Experience?</div>
              <h2 className="serif">Lassen Sie uns Ihr Angebot digital zum Leben erwecken.</h2>
              <p>Ein unverbindliches Gespräch genügt, um zu klären, wie eine Signature Experience aus Besuchern Kunden macht.</p>
              <div className="finalphone"><a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a></div>
              <a className="btn btn-gold" href="/konfigurator.html">Kostenlose Beratung <span className="arrow">→</span></a>
              <p className="finaltrust">Unverbindlich · Antwort innert 24 Stunden · Persönlich durch den Inhaber</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
