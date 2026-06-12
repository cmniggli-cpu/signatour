import type { NavItem, PricingTier, FAQ, ProcessStep, Benefit, ComparisonRow, AddOn, Stat, BranchenPackage } from './types'

export const SITE_NAME = 'Niggli 360° Signature Tours'
export const SITE_URL = 'https://www.signatour.ch'
export const SITE_DESCRIPTION = 'Wir verwandeln Räume in digitale Verkaufserlebnisse: 360°-Touren für Hotels, Spa, Gastronomie und Immobilien, in denen Gäste direkt buchen und anfragen. Schweizer Anbieter, einmalige Investition, kein Abo.'
export const CONTACT_EMAIL = 'info@signatour.ch'
export const CONTACT_PHONE = '+41 76 652 17 37'
export const CONTACT_ADDRESS = 'Rue de l\'Industrie 43, 2720 Tramelan'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Branchen',
    href: '#',
    children: [
      { label: 'Hotels', href: '/branchen/hotel' },
      { label: 'Restaurants', href: '/branchen/restaurant' },
      { label: 'Spa & Wellness', href: '/branchen/spa-wellness' },
      { label: 'Fitnessstudios', href: '/branchen/fitnessstudio' },
      { label: 'Immobilien', href: '/branchen/immobilien' },
      { label: 'Banken & Kanzleien', href: '/branchen/banken-versicherungen' },
      { label: 'Eventlocations & Showrooms', href: '/branchen/eventlocations' },
    ],
  },
  { label: 'Pakete', href: '/pakete' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'FAQ', href: '/faq' },
]

export const HERO_STATS: Stat[] = [
  { value: '48%', label: 'mehr Buchungen' },
  { value: '3×', label: 'längere Verweildauer' },
  { value: 'ab 990', label: 'CHF pro Tour' },
  { value: '0', label: 'Abo-Kosten' },
]

export const PROBLEM_CARDS = [
  {
    title: '«Es ist viel schöner als auf den Bildern!»',
    description: '90% der Gäste sagen das. Aber vorher? Haben sie online nur Fotos gesehen – und vielleicht woanders gebucht.',
  },
  {
    title: 'CHF 30\'000–100\'000 OTA-Provisionen jährlich',
    description: 'Booking.com & Co. kassieren 15–18% pro Buchung. Ein 360-Rundgang stärkt Ihre Direktbuchungen.',
  },
  {
    title: '93% suchen online, bevor sie wählen',
    description: 'Statische Fotos reichen nicht mehr. Wer Räume online erlebbar macht, gewinnt das Vertrauen.',
  },
  {
    title: 'Die Konkurrenz ist 1 Klick entfernt',
    description: '40% mehr Klicks mit 360-Tour. 3× längere Verweildauer. Wer nichts zeigt, verliert.',
  },
]

export const BRANCHEN_OVERVIEW = [
  { slug: 'hotel', title: 'Hotels', stat: '+48%', statLabel: 'mehr Buchungen', icon: 'Hotel' },
  { slug: 'restaurant', title: 'Restaurants', stat: '+85%', statLabel: 'mehr Reservierungen', icon: 'UtensilsCrossed' },
  { slug: 'spa-wellness', title: 'Spa & Wellness', stat: '+67%', statLabel: 'höhere Buchungswahrscheinlichkeit', icon: 'Sparkles' },
  { slug: 'fitnessstudio', title: 'Fitnessstudios', stat: '+130%', statLabel: 'höhere Besuchswahrscheinlichkeit', icon: 'Dumbbell' },
  { slug: 'immobilien', title: 'Immobilien', stat: '+40%', statLabel: 'mehr Klicks auf Portalen', icon: 'Building2' },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { number: 1, title: 'Beratung', description: 'Wir besprechen Ihre Wünsche, Räumlichkeiten und Ziele. Kostenlos & unverbindlich.' },
  { number: 2, title: 'Shooting', description: 'Professionelle 360-Grad-Fotografie vor Ort in 2–4 Stunden.' },
  { number: 3, title: 'Produktion', description: 'Nachbearbeitung, Hotspots, Navigation, Branding. Fertig in 5–10 Arbeitstagen.' },
  { number: 4, title: 'Online', description: 'Tour auf Ihrer Website, Google Business, Portalen. Einbettung per Link oder Code.' },
]

export const BENEFITS: Benefit[] = [
  { icon: 'BadgeCheck', title: 'Kein Abo, kein Vertrag', description: 'Einmalpreis. Keine monatlichen Kosten. Keine Überraschungen.' },
  { icon: 'Handshake', title: 'Alles aus einer Hand', description: 'Von der Beratung bis zum Hosting. Nichts installieren, kaufen oder lernen.' },
  { icon: 'Shield', title: 'DSGVO-konform', description: 'Schweizer/EU-Hosting, Aufnahmen ohne Personen, AVV inklusive.' },
  { icon: 'Database', title: 'Datenhoheit beim Kunden', description: 'Kein Vendor Lock-in. Selbst-Hosting jederzeit möglich.' },
  { icon: 'MapPin', title: 'Google Business Integration', description: '2× mehr Profilaufrufe mit 360-Grad-Inhalten.' },
  { icon: 'User', title: 'Persönlicher Ansprechpartner', description: 'Ein Kontakt, kein Callcenter – Deutsch, Französisch oder Englisch.' },
]

export const MARKET_STATS: Stat[] = [
  { value: 'USD 74 Mrd.', label: 'Marktvolumen bis 2030', source: 'Grand View Research' },
  { value: '67%', label: 'der Konsumenten wollen mehr virtuelle Touren' },
  { value: '<20%', label: 'der DACH-KMUs nutzen professionelle 360-Touren' },
  { value: '130%', label: 'höhere Buchungswahrscheinlichkeit (18–34-Jährige)' },
]

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Basic',
    price: 'CHF 990',
    priceRange: 'CHF 990',
    description: 'Ideal für kleine Bereiche',
    hosting: 'inkl. 12 Monate Basic Service',
    features: [
      'bis 15 Panoramen',
      '1080p Full-HD-Qualität',
      'max. 5 Hotspots',
      'Mobile optimiert',
      '1 Korrekturrunde',
    ],
  },
  {
    name: 'Signature',
    price: 'CHF 2\'497',
    priceRange: 'CHF 2\'497',
    description: 'Der beliebteste Allrounder',
    hosting: 'inkl. 12 Monate Signature Care',
    featured: true,
    features: [
      'bis 60 Panoramen',
      '4K-Qualität',
      'bis 25 Hotspots',
      'Corporate Design Integration',
      'Audio & Interaktionen',
      '3 Korrekturrunden',
    ],
  },
  {
    name: 'Pro',
    price: 'ab CHF 4\'497',
    priceRange: 'ab CHF 4\'497',
    description: 'Für Hotels, Thermen & Premium-Resorts',
    hosting: 'inkl. 12 Monate Signature Evolution',
    features: [
      'bis 100 Panoramen',
      '8K-Qualität',
      'unbegrenzte Hotspots',
      'Buchungsintegration',
      'Video & Interaktionen',
      '5 Korrekturrunden',
    ],
  },
]

export const ADDONS: AddOn[] = [
  { name: 'Hosting-Verlängerung', price: 'CHF 120–180/Jahr' },
  { name: 'Saisonales Update', price: 'CHF 290–490' },
  { name: 'Google Street View Publikation', price: 'CHF 150' },
  { name: 'Signature Web – Webseite nach Mass (individuell programmiert)', price: 'auf Anfrage' },
  { name: 'Express-Lieferung (48h)', price: '+30% auf Tour-Preis' },
  { name: 'Grundriss-Erstellung', price: 'CHF 190–350' },
]

export const BRANCHEN_PACKAGES: BranchenPackage[] = [
  { name: 'Makler-Vorteilskarte 5er', price: 'CHF 2\'990', description: '5 Touren, CHF 598 pro Tour' },
  { name: 'Makler-Vorteilskarte 10er', price: 'CHF 5\'490', description: '10 Touren, CHF 549 pro Tour' },
  { name: 'Gastro-Paket', price: 'CHF 1\'690', description: 'Restaurant-Tour mit Menü-Hotspots & Google Maps Integration' },
  { name: 'Hotel-Paket', price: 'CHF 2\'490–3\'990', description: 'Zimmertypen, Spa, Restaurant, Lobby mit Buchungslink-Integration' },
  { name: 'Fitness-Paket', price: 'CHF 1\'390', description: 'Trainingsbereich, Kursräume, Umkleiden mit Probetraining-Button' },
]

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: 'Preismodell', signatour: 'ab CHF 990 einmalig', matterport: '$69/Monat + $5\'400 Kamera', ogulo: '€79/Monat + 24-Monatsvertrag', signatourWins: true },
  { feature: 'Vertragsbindung', signatour: 'Keine', matterport: 'Jährlich', ogulo: '24 Monate Minimum', signatourWins: true },
  { feature: 'Aufwand für Sie', signatour: 'Null (Done-for-You)', matterport: 'Selbst scannen (DIY)', ogulo: 'Selbst scannen (DIY)', signatourWins: true },
  { feature: 'Support', signatour: 'Persönlich – DE, FR & EN', matterport: 'Englisch (Trustpilot 1.4/5)', ogulo: 'Deutsch', signatourWins: true },
  { feature: 'Datenhoheit', signatour: 'Beim Kunden', matterport: 'Vendor Lock-in', ogulo: 'Ogulo-Cloud' },
  { feature: 'Branchen', signatour: 'Hotels, Gastro, Spa, Fitness, Immobilien', matterport: 'Hauptsächlich Immobilien', ogulo: 'Nur Immobilien' },
  { feature: 'DSGVO', signatour: 'CH/EU Hosting ✓', matterport: 'US-Cloud ✗', ogulo: 'DE Hosting ✓' },
]

export const HOMEPAGE_FAQS: FAQ[] = [
  {
    question: 'Was ist ein 360-Grad-Rundgang?',
    answer: 'Ein interaktiver virtueller Rundgang durch Ihre Räumlichkeiten. Besucher können sich frei in alle Richtungen bewegen – direkt im Browser, ohne App oder VR-Brille.',
  },
  {
    question: 'Was kostet ein virtueller Rundgang?',
    answer: 'Ab CHF 990 für das Basic-Paket (bis 15 Panoramen). Kein Abo, keine versteckten Kosten. 12 Monate Hosting und Service inklusive.',
  },
  {
    question: 'Wie lange dauert die Erstellung?',
    answer: 'Das Shooting dauert 2–4 Stunden vor Ort. Die fertige Tour erhalten Sie in 5–10 Arbeitstagen. Express in 48 Stunden möglich.',
  },
  {
    question: 'Brauche ich eine spezielle App oder Kamera?',
    answer: 'Nein. Weder Sie noch Ihre Kunden benötigen eine App. Wir bringen die professionelle Ausrüstung mit.',
  },
  {
    question: 'Ist das DSGVO-konform?',
    answer: 'Ja. Wir filmen ausserhalb der Öffnungszeiten, hosten auf Schweizer/EU-Servern und liefern einen AVV (Auftragsverarbeitungsvertrag) mit.',
  },
  {
    question: 'Was passiert, wenn wir renovieren?',
    answer: 'Einzelne Bereiche können jederzeit aktualisiert werden (ab CHF 290). Perfekter Zeitpunkt: direkt nach der Renovation.',
  },
  {
    question: 'Für welche Branchen eignet sich ein 360-Grad-Rundgang?',
    answer: 'Hotels, Restaurants, Spas, Fitnessstudios, Immobilien – und grundsätzlich jeder Betrieb mit sehenswerten Räumlichkeiten.',
  },
  {
    question: 'Wie wird die Tour in meine Website eingebunden?',
    answer: 'Per iFrame-Code (Copy-Paste) oder als direkter Link zum Teilen per E-Mail, WhatsApp, Social Media oder QR-Code. Google Business Integration inklusive.',
  },
]

export const FAQ_GENERAL: FAQ[] = [
  {
    question: 'Was ist ein 360-Grad-Rundgang?',
    answer: 'Ein interaktiver virtueller Rundgang durch Ihre Räumlichkeiten. Besucher navigieren frei in alle Richtungen – direkt im Browser, ohne App oder VR-Brille. Hotspots bieten zusätzliche Infos, Videos und Buchungslinks.',
  },
  {
    question: 'Wie funktioniert ein virtueller Rundgang?',
    answer: 'Besucher navigieren frei mit Maus, Touch oder Tastatur. Navigationspfeile führen zwischen Räumen. Hotspots bieten zusätzliche Infos, Bilder, Videos und Buchungslinks. Alles läuft direkt im Browser.',
  },
  {
    question: 'Brauche ich eine spezielle App?',
    answer: 'Nein, komplett browserbasiert. Funktioniert auf allen Geräten – Desktop, Tablet, Smartphone. Weder Kunden noch Betrieb müssen etwas installieren.',
  },
  {
    question: 'Für welche Branchen eignet sich ein 360-Grad-Rundgang?',
    answer: 'Hotels (mehr Direktbuchungen), Restaurants (Google-Sichtbarkeit), Spas (Atmosphäre vermitteln), Fitnessstudios (Hemmschwelle senken), Immobilien (weniger Besichtigungstourismus, qualifiziertere Leads).',
  },
]

export const FAQ_COSTS: FAQ[] = [
  {
    question: 'Was kostet ein virtueller Rundgang?',
    answer: 'Basic-Paket CHF 990 (bis 15 Panoramen), Signature-Paket CHF 2\'497 (bis 60 Panoramen, 4K), Pro-Paket ab CHF 4\'497 (bis 100 Panoramen, 8K). Einmalpreise, keine Abos, keine versteckten Kosten. 12 Monate Hosting und Service inklusive.',
  },
  {
    question: 'Gibt es versteckte Kosten?',
    answer: 'Nein. Transparente Einmalpreise. Shooting, Nachbearbeitung, Hosting und Einbettungscode – alles inklusive. Optionale Extras (Drohne, Street View, Express) sind klar ausgewiesen.',
  },
  {
    question: 'Wie lange dauert die Erstellung?',
    answer: 'Shooting vor Ort: 2–4 Stunden. Lieferung: 5–10 Arbeitstage. Express-Option: 48 Stunden (+30%).',
  },
  {
    question: 'Wie läuft ein Shooting ab?',
    answer: 'Wir bringen eine professionelle 360-Grad-Kamera mit. 2–4 Stunden Shooting je nach Grösse, idealerweise ausserhalb der Öffnungszeiten. Saubere, aufgeräumte Räume genügen – wir kümmern uns um alles Weitere.',
  },
]

export const FAQ_TECH: FAQ[] = [
  {
    question: 'Wie wird die Tour in meine Website eingebunden?',
    answer: 'Sie erhalten einen Einbettungscode (iFrame) und einen direkten Link zum Teilen per E-Mail, WhatsApp, Social Media und QR-Code. Direkte Integration in Google Business Profile möglich.',
  },
  {
    question: 'Funktioniert die Tour auf Smartphones?',
    answer: 'Ja, vollständig responsiv. Alle Geräte unterstützt – Desktop, Tablet, Smartphone. Touch-optimiert. Kein App-Download nötig.',
  },
  {
    question: 'Kann die Tour auf Google Maps angezeigt werden?',
    answer: 'Ja, direkt im Google Business Profile und Google Maps integrierbar. 2× mehr Profilaufrufe mit 360-Grad-Inhalten. Google Street View Publikation verfügbar (CHF 150).',
  },
  {
    question: 'Was passiert nach Ablauf des Hostings?',
    answer: 'Nach den inkludierten 12 Monaten kann das Servicepaket verlängert werden (ab CHF 120/Jahr) oder Sie exportieren die Tour-Dateien und hosten selbst. Kein Vendor Lock-in.',
  },
]

export const FAQ_DATA: FAQ[] = [
  {
    question: 'Ist der Rundgang DSGVO-konform?',
    answer: 'Ja. Wir filmen ausserhalb der Öffnungszeiten (keine Personen auf Aufnahmen), hosten auf Schweizer/EU-Servern und liefern einen AVV mit. Gesichtsunschärfe möglich, aber meist nicht nötig.',
  },
  {
    question: 'Was passiert bei einer Renovation?',
    answer: 'Teilbereiche können jederzeit aktualisiert werden (ab CHF 290). Die bestehende Tour bleibt online, kann Raum für Raum erneuert werden. Perfekter Zeitpunkt: direkt nach der Investition.',
  },
  {
    question: 'Kann die Tour nachträglich geändert werden?',
    answer: 'Ja. Hotspots, Texte, Links, Branding können jederzeit angepasst werden. Neue Panoramapunkte oder aktualisierte Bereiche ab CHF 290.',
  },
  {
    question: 'Wem gehören die Daten und die Tour?',
    answer: 'Ihnen. Kein Vendor Lock-in. Dateien jederzeit exportierbar, Selbst-Hosting möglich. Partnerschaft basiert auf Qualität, nicht auf Abhängigkeit.',
  },
]

export const INCLUDED_BENEFITS = [
  'Professionelles Shooting vor Ort',
  'Nachbearbeitung & Optimierung',
  'Hosting auf CH/EU-Servern (DSGVO-konform, 12 Monate inklusive)',
  'Einbettungscode & Direktlink',
  'Persönliche Beratung durch den Inhaber',
  'Datenhoheit beim Kunden (kein Vendor Lock-in)',
]

export const INDUSTRIES_DROPDOWN = [
  'Hotel',
  'Restaurant',
  'Spa / Wellness',
  'Fitnessstudio',
  'Immobilien',
  'Bank / Versicherung / Kanzlei',
  'Eventlocation / Showroom',
  'Andere',
]

export const MATTERPORT_REASONS = [
  { title: 'Kamera kostet USD 5\'400', description: 'Matterport Pro3 – teurer Einstieg, bevor eine einzige Tour erstellt wird.' },
  { title: 'Abo ab $69/Monat', description: 'Plus Kamerakosten ergibt $800+ jährlich, auch wenn die Software kaum genutzt wird.' },
  { title: 'Versteckte Kosten', description: 'Grundrisse $15–50, Exporte $49–150 pro Scan. Summiert sich schnell.' },
  { title: 'Trustpilot 1.4/5', description: 'Schwacher Support, schlechte Bewertungen – ein Risiko für Ihr Geschäft.' },
  { title: 'Kein deutscher Support', description: 'Nur Englisch verfügbar – grosses Hindernis für DACH-KMUs.' },
  { title: 'USD-Preise & Vendor Lock-in', description: 'Währungsrisiko und Datenverlust bei Kündigung.' },
]

export const MATTERPORT_COMPARISON: ComparisonRow[] = [
  { feature: 'Preismodell', signatour: 'ab CHF 990 einmalig', matterport: '$69/Monat + USD 5\'400 Kamera', ogulo: '', signatourWins: true },
  { feature: 'Kamera nötig', signatour: 'Nein – wir bringen alles mit', matterport: 'Ja – Pro3 (USD 5\'400)', ogulo: '' },
  { feature: 'Vertragsbindung', signatour: 'Keine', matterport: 'Jährliche Abrechnung', ogulo: '', signatourWins: true },
  { feature: 'Versteckte Kosten', signatour: 'Keine – alles inklusive', matterport: 'Grundrisse $15–50, Exporte $49–150', ogulo: '', signatourWins: true },
  { feature: 'Support', signatour: 'Persönlich & lokal – DE, FR & EN', matterport: 'Englisch (Trustpilot 1.4/5)', ogulo: '', signatourWins: true },
  { feature: 'Datenhoheit', signatour: 'Beim Kunden – kein Lock-in', matterport: 'Vendor Lock-in – Kündigung = Datenverlust', ogulo: '', signatourWins: true },
  { feature: 'DSGVO', signatour: 'CH/EU Hosting ✓', matterport: 'US-Cloud ✗', ogulo: '', signatourWins: true },
  { feature: 'Branchen-Fokus', signatour: 'Hotels, Gastro, Spa, Fitness, Immobilien', matterport: 'Hauptsächlich Immobilien/AEC', ogulo: '' },
  { feature: 'Aufwand für Kunden', signatour: 'Null – Done-for-You', matterport: 'Hoch – Kamera kaufen, selbst scannen, Software lernen', ogulo: '', signatourWins: true },
]

export const UEBER_UNS_REASONS = [
  { title: 'Done-for-You statt DIY', description: 'Wir kommen, fotografieren und liefern. Null Aufwand für Sie.' },
  { title: 'Persönlich statt Callcenter', description: 'Ein Ansprechpartner, keine Tickets – auf Deutsch, Französisch oder Englisch.' },
  { title: 'Transparent statt versteckt', description: 'Einmalpreis, kein Abo, keine versteckten Kosten.' },
  { title: 'Lokal statt US-Cloud', description: 'Schweizer/EU-Server, DSGVO-konform.' },
  { title: 'Multi-Branche statt nur Immobilien', description: 'Hotels, Restaurants, Spas, Fitness, Immobilien.' },
  { title: 'Flexibel statt Langzeitvertrag', description: 'Keine Mindestlaufzeit, keine Kündigungsfrist.' },
]

export const UEBER_UNS_VALUES = [
  { title: 'Ehrlichkeit', description: 'Ehrliche Beratung, kein Verkaufsdruck, keine übertriebenen Versprechen.' },
  { title: 'Qualität', description: 'Professionelle Ausrüstung, sorgfältige Nachbearbeitung, nur liefern wenn zufrieden.' },
  { title: 'Partnerschaft', description: 'Binden durch Qualität, nicht durch Verträge. Kein Lock-in, keine Abhängigkeit.' },
]
