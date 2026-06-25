import type { NavItem, PricingTier, FAQ, ProcessStep, Benefit, ComparisonRow, AddOn, Stat, BranchenPackage, ServiceTier } from './types'

export const SITE_NAME = 'Niggli 360° Signature Tours'
export const SITE_URL = 'https://www.signatour.ch'
export const SITE_DESCRIPTION = 'Wir verwandeln Räume in digitale Verkaufserlebnisse: 360°-Touren für Hotels, Spa, Gastronomie und Immobilien, in denen Gäste direkt buchen und anfragen. Schweizer Anbieter, einmalige Investition, kein Abo.'
export const CONTACT_EMAIL = 'info@signatour.ch'
export const CONTACT_PHONE = '+41 76 652 17 37'
export const CONTACT_ADDRESS = 'Rue de l\'Industrie 43, 2720 Tramelan'
export const CONTACT_UID = 'CHE-368.437.989'

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
  {
    name: 'Signature Web – Webseite nach Mass',
    price: 'ab CHF 2\'500.–',
    nutzen: 'Tour und Webseite aus einer Hand – ein durchgängiges digitales Verkaufserlebnis.',
  },
  {
    name: 'Mehrsprachige Version (DE / FR / EN)',
    price: 'ab CHF 300.– pro Sprache',
    nutzen: 'Gäste und Käufer erleben die Tour in ihrer Sprache – mehr Reichweite, mehr Vertrauen.',
  },
  {
    name: 'Furniture Removal',
    price: 'ab CHF 180.– pro Panorama',
    nutzen: 'Möblierte Räume werden digital geleert – ideal für Vermietung und Verkauf.',
  },
  {
    name: 'Nadir-Patch 100% (Boden makellos)',
    price: 'ab CHF 90.– pro Tour',
    nutzen: 'Statt verschwommenem Stativ-Fleck ein sauberer Boden oder Ihr Logo – ein Detail, das Profis sofort sehen.',
  },
  {
    name: 'Zusätzliche Panoramen',
    price: 'ab CHF 150.– pro Szene',
    nutzen: 'Die Tour wächst mit – neue Bereiche jederzeit ergänzbar.',
  },
  {
    name: 'Virtual Staging – virtuelle Möblierung',
    price: 'ab CHF 240.– pro Panorama, ab 3 Panoramen CHF 200.–',
    nutzen: 'Leere Räume werden zum eingerichteten Zuhause – der Interessent sieht das Potenzial, nicht die Leere.',
  },
  {
    name: 'Google Street View & Google-Business-Einbindung',
    price: 'CHF 490.– einmalig',
    nutzen: 'Ihre Tour erscheint direkt in Google Maps und im Unternehmensprofil – Sichtbarkeit dort, wo Kunden suchen.',
  },
  {
    name: 'Lead-Capture-Formular in der Tour',
    price: 'CHF 390.– einmalig',
    nutzen: 'Aus anonymen Besuchern werden qualifizierte Anfragen – mit Name und Mailadresse.',
  },
  {
    name: 'Performance-Report Tour',
    price: 'CHF 150.– pro Report',
    nutzen: 'Aufrufe, beliebteste Räume, Klicks auf Buchungspunkte – der ROI Ihrer Tour schwarz auf weiss.',
    hinweis: 'In Signature Care & Evolution bereits enthalten',
  },
  {
    name: 'Performance-Report Webseite',
    price: 'CHF 150.– pro Report / CHF 490.– pro Jahr (4 Reports)',
    nutzen: 'Besucher, Verweildauer, Top-Seiten – Sie sehen, was Ihre Online-Präsenz leistet.',
  },
  {
    name: 'Saisonales Szenen-Update',
    price: 'CHF 180.– pro Szene / Saisonpaket CHF 650.–',
    nutzen: 'Sommerterrasse, Weihnachtsstimmung, neue Bepflanzung – Ihre Tour bleibt aktuell und lebendig.',
  },
  {
    name: 'Vier-Jahreszeiten-Terrasse',
    price: 'CHF 1\'490.– / Jahr',
    nutzen: 'Vier Shootings pro Jahr als umschaltbare Saisonszenen – der Aussenbereich bleibt ganzjährig aktuell.',
  },
  {
    name: 'Social-Media-Clip-Paket',
    price: 'CHF 390.– (3 Hochformat-Clips)',
    nutzen: 'Fertige Reels und Stories direkt aus Ihrer Tour – Content ohne eigenen Drehaufwand.',
  },
  {
    name: 'Audio-Guide mit professioneller Sprecherstimme',
    price: 'ab CHF 490.– pro Sprache',
    nutzen: 'Ihre Räume bekommen eine Stimme – Atmosphäre und Storytelling statt blossem Text.',
  },
  {
    name: '3D-Grundriss & Dollhouse-Ansicht',
    price: 'ab CHF 390.–',
    nutzen: 'Besucher erfassen das ganze Objekt auf einen Blick – sofortige Orientierung.',
  },
  {
    name: 'QR-Code Print- & Display-Paket',
    price: 'CHF 240.–',
    nutzen: 'Fensteraufkleber, Tischaufsteller und Schilder führen direkt in die Tour – die Location wird zum Eingangstor.',
  },
  {
    name: 'Express-Lieferung',
    price: '+30% auf den Paketpreis',
    nutzen: 'Ihre fertige Tour in 3 statt 5–10 Arbeitstagen.',
  },
  {
    name: 'Tag-/Nacht-Modus',
    price: 'ab CHF 180.– pro Szene',
    nutzen: 'Dieselbe Szene bei Tag und bei Abendstimmung umschaltbar – stark für Restaurants und Eventlocations.',
  },
]

export const BRANCHEN_PACKAGES: BranchenPackage[] = [
  {
    name: 'Immobilien – Signature-Vorteilskarten',
    cfg: 'immobilien',
    intro: 'Für Makler von Premium- und Luxusobjekten. Jede Tour in Signature-Qualität, voll im Corporate Design.',
    lines: [
      'Einzelobjekt: CHF 2\'497.– pro Objekt',
      '5er-Vorteilskarte: CHF 9\'990.– (CHF 1\'998.– pro Objekt, rund 20% Vorteil)',
      '10er-Vorteilskarte: CHF 16\'230.– (CHF 1\'623.– pro Objekt, 35% Vorteil)',
    ],
    note: 'Flexibel einsetzbar, kein Ablaufdatum. Inkl. 12 Monate Betreuungsservice pro Tour.',
  },
  {
    name: 'Hotel & Resort',
    cfg: 'hotel',
    intro: 'Signature-Tour mit Buchungslink-Hotspots, Mehrsprachigkeit (DE / FR / EN) und Google-Business-Einbindung.',
    lines: ['ab CHF 3\'490.–'],
    note: 'Grosse Häuser, Thermen und Resorts: Pro-Linie ab CHF 4\'497.–',
  },
  {
    name: 'Spa & Wellness',
    cfg: 'spa',
    intro: 'Signature-Tour mit Audio-Guide und Tag-/Nacht-Modus für spürbare Atmosphäre.',
    lines: ['ab CHF 3\'490.–'],
    note: 'Optional erweiterbar mit der Vier-Jahreszeiten-Terrasse (siehe Add-ons).',
  },
  {
    name: 'Restaurant & Gastro',
    cfg: 'restaurant',
    intro: 'Signature-Tour mit Google-Business-Einbindung, Tag-/Nacht-Modus und QR-Code-Paket für Tisch und Schaufenster.',
    lines: ['ab CHF 2\'890.–'],
    note: 'Kleine Lokale: Basic-Tour ab CHF 990.–',
  },
  {
    name: 'Fitness',
    cfg: 'fitness',
    intro: 'Signature-Tour mit Lead-Capture-Formular («Probetraining anfragen») und Google-Business-Einbindung.',
    lines: ['ab CHF 2\'890.–'],
  },
  {
    name: 'Banken, Versicherungen & Kanzleien – Filial-Staffel',
    cfg: 'banken',
    intro: 'Signature-Tour im Corporate Design, ein Ansprechpartner für alle Standorte.',
    lines: [
      '1 Standort: CHF 2\'497.–',
      '3–4 Standorte: CHF 2\'247.– pro Standort (10%)',
      '5–9 Standorte: CHF 1\'873.– pro Standort (25%)',
      'ab 10 Standorten: CHF 1\'623.– pro Standort (35%)',
    ],
    note: 'Ab 20 Standorten Rahmenvertrag. Empfohlen mit Servicepaket pro Standort für laufende Aktualität und Betreuung.',
  },
  {
    name: 'Eventlocations & Showrooms',
    cfg: 'events',
    intro: 'Signature-Tour mit Tag-/Nacht-Modus, Video-Hotspots und Social-Media-Clips.',
    lines: ['ab CHF 2\'990.–'],
    note: 'Grosse Säle und Hallen: Pro-Linie ab CHF 4\'497.–',
  },
]

export interface OrderPackage { id: string; name: string; price: string; from: number; approx?: boolean }
export interface OrderOption { id: string; name: string; price: string; add: number; approx?: boolean }

export const ORDER_PACKAGES: OrderPackage[] = [
  { id: 'basic', name: 'Basic', price: 'CHF 990.–', from: 990 },
  { id: 'signature', name: 'Signature', price: 'CHF 2\'497.–', from: 2497 },
  { id: 'pro', name: 'Pro', price: 'ab CHF 4\'497.–', from: 4497, approx: true },
  { id: 'immo-einzel', name: 'Immobilien – Einzelobjekt', price: 'CHF 2\'497.– pro Objekt', from: 2497 },
  { id: 'immo-5', name: 'Immobilien – 5er-Vorteilskarte', price: 'CHF 9\'990.–', from: 9990 },
  { id: 'immo-10', name: 'Immobilien – 10er-Vorteilskarte', price: 'CHF 16\'230.–', from: 16230 },
  { id: 'hotel', name: 'Hotel & Resort', price: 'ab CHF 3\'490.–', from: 3490, approx: true },
  { id: 'spa', name: 'Spa & Wellness', price: 'ab CHF 3\'490.–', from: 3490, approx: true },
  { id: 'restaurant', name: 'Restaurant & Gastro', price: 'ab CHF 2\'890.–', from: 2890, approx: true },
  { id: 'fitness', name: 'Fitness', price: 'ab CHF 2\'890.–', from: 2890, approx: true },
  { id: 'banken', name: 'Banken / Versicherung / Kanzlei (1 Standort)', price: 'ab CHF 2\'497.– pro Standort', from: 2497, approx: true },
  { id: 'event', name: 'Eventlocation & Showroom', price: 'ab CHF 2\'990.–', from: 2990, approx: true },
]

export const ORDER_OPTIONS: OrderOption[] = [
  { id: 'sprachen', name: 'Mehrsprachig (DE / FR / EN)', price: '+ ab CHF 300.– pro Sprache', add: 300, approx: true },
  { id: 'street', name: 'Google Street View & Business-Einbindung', price: '+ CHF 490.–', add: 490 },
  { id: 'lead', name: 'Lead-Capture-Formular in der Tour', price: '+ CHF 390.–', add: 390 },
  { id: 'nadir', name: 'Nadir-Patch 100% (Boden makellos)', price: '+ ab CHF 90.–', add: 90, approx: true },
  { id: 'tagnacht', name: 'Tag-/Nacht-Modus', price: '+ ab CHF 180.– pro Szene', add: 180, approx: true },
  { id: 'clips', name: 'Social-Media-Clip-Paket', price: '+ CHF 390.–', add: 390 },
]

export const SERVICE_TIERS: ServiceTier[] = [
  {
    name: 'Basic Service',
    price: 'CHF 120.– / Jahr',
    features: ['Betrieb & Sicherheit (Hosting)', 'SSL-Zertifikat & Backups', '1 kleine Anpassung pro Jahr', 'Besucherstatistik'],
  },
  {
    name: 'Signature Care',
    price: 'CHF 360.– / Jahr',
    recommended: true,
    features: ['Alles aus Basic Service', '3 Anpassungen pro Jahr', '1 jährliches Tour-Update', 'Einblicke ins Besucherverhalten', 'Priorität beim Support'],
  },
  {
    name: 'Signature Evolution',
    price: 'CHF 600.– / Jahr',
    features: ['Alles aus Signature Care', '9 Anpassungen pro Jahr', '2 jährliche «Knowledge-Upgrades»', 'Performance-Optimierung', 'Quartalsweise Traffic-Reports'],
  },
]

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: 'Preismodell', signatour: 'ab CHF 990 einmalig', matterport: '$69/Monat + $5\'400 Kamera', ogulo: '€79/Monat + 24-Monatsvertrag', signatourWins: true },
  { feature: 'Vertragsbindung', signatour: 'Keine', matterport: 'Jährlich', ogulo: '24 Monate Minimum', signatourWins: true },
  { feature: 'Aufwand für Sie', signatour: 'Null (Done-for-You)', matterport: 'Selbst scannen (DIY)', ogulo: 'Selbst scannen (DIY)', signatourWins: true },
  { feature: 'Support', signatour: 'Persönlich – DE, FR & EN', matterport: 'Englisch (Trustpilot 1.4/5)', ogulo: 'Deutsch', signatourWins: true },
  { feature: 'Datenhoheit', signatour: 'Beim Kunden', matterport: 'Vendor Lock-in', ogulo: 'Ogulo-Cloud' },
  { feature: 'Branchen', signatour: 'Hotels, Gastro, Spa, Fitness, Immobilien', matterport: 'Hauptsächlich Immobilien', ogulo: 'Nur Immobilien' },
  { feature: 'DSGVO', signatour: 'CH/EU Hosting ✓', matterport: 'US-Cloud ✗', ogulo: 'DE Hosting ✓' },
  { feature: 'Boden (Nadir) sauber', signatour: 'Zu 95% retuschiert, optional 100%', matterport: 'Verschwommener Fleck über dem Stativ', ogulo: 'Logo-/Blur-Patch' },
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
    answer: 'Einzelne Bereiche können jederzeit aktualisiert werden (ab CHF 180.– pro Szene). Perfekter Zeitpunkt: direkt nach der Renovation.',
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
  {
    question: 'Wie läuft die Bezahlung?',
    answer: 'Transparent und in zwei Schritten: 50% bei Auftragsbestätigung, 50% bei Freigabe der fertigen Tour. Bei grösseren Projekten ab CHF 5\'000.– vereinbaren wir Teilzahlungen (40% bei Bestätigung, 30% nach dem Shooting, 30% bei Freigabe). Die Tour geht online, sobald die Schlusszahlung erfolgt ist. Einmalpreis, kein Abo, keine versteckten Kosten.',
  },
  {
    question: 'Wie funktioniert die Bezahlung der Vorteilskarte?',
    answer: 'Die Vorteilskarte wird bei Kauf vollständig bezahlt – dafür erhalten Sie den vollen Mengenvorteil von bis zu 35%. Danach rufen Sie Ihre Touren flexibel ab, ohne weitere Rechnung pro Objekt und ohne festes Ablaufdatum. Jede Tour liefern wir im jeweils aktuellen Signature-Standard.',
  },
  {
    question: 'Was passiert, wenn ich kein Servicepaket nehme?',
    answer: 'Ihre Tour gehört Ihnen. In jedem Paket sind 12 Monate Betrieb inklusive. Danach haben Sie die Wahl: Mit einem Servicepaket übernehmen wir weiterhin Hosting, Updates und Auswertung. Oder Sie erhalten den vollständigen Output-Ordner Ihrer Tour auf einem USB-Stick und hosten sie selbst, ganz ohne laufende Kosten – eine einmalige Bereitstellungspauschale von CHF 150.– deckt Export und Übergabe. Der Stick enthält die fertige, lauffähige Tour zum Selbsthosten. Möchten Sie die Tour später erweitern oder aktualisieren, übernehmen wir das jederzeit gerne für Sie.',
  },
]

export const FAQ_TECH: FAQ[] = [
  {
    question: 'Wie wird die Tour in meine Website eingebunden?',
    answer: 'Sie erhalten einen Einbettungscode (iFrame) und einen direkten Link zum Teilen per E-Mail, WhatsApp, Social Media und QR-Code. Direkte Integration in Google Business Profile möglich.',
  },
  {
    question: 'Auf welchen Geräten funktioniert die Tour?',
    answer: 'Auf allen: Smartphone, Tablet, Desktop und TV – vollständig responsiv und touch-optimiert. Auch mit VR-Brille erlebbar, für den vollen Raumeindruck. Kein App-Download nötig.',
  },
  {
    question: 'Wie sauber ist der Boden unter der Kamera (Nadir)?',
    answer: 'Bei 360°-Touren steht die Kamera auf einem Stativ. Wo Anbieter wie Matterport den Boden mit einem verschwommenen Fleck überdecken, retuschieren wir den Nadir-Punkt zu 95% sauber weg. Auf Wunsch gibt es als Add-on die 100%-Lösung mit makellosem Boden oder Ihrem Logo.',
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
    answer: 'Teilbereiche können jederzeit aktualisiert werden (ab CHF 180.– pro Szene). Die bestehende Tour bleibt online, kann Raum für Raum erneuert werden. Perfekter Zeitpunkt: direkt nach der Investition.',
  },
  {
    question: 'Kann die Tour nachträglich geändert werden?',
    answer: 'Ja. Hotspots, Texte, Links, Branding können jederzeit angepasst werden. Neue Panoramapunkte oder aktualisierte Bereiche ab CHF 180.– pro Szene.',
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
  { feature: 'Boden (Nadir) sauber', signatour: 'Zu 95% retuschiert, optional 100%', matterport: 'Verschwommener Fleck über dem Stativ', ogulo: '', signatourWins: true },
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
