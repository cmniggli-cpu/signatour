import type { FAQ, Stat } from './types'

export interface BranchenPageData {
  slug: string
  metaTitle: string
  metaDescription: string
  badge: string
  headline: string
  tagline: string
  challenges: { title: string; description: string }[]
  stats: Stat[]
  statsNote?: string
  sources?: { label: string; url: string }[]
  captures: string[]
  comparisonTitle?: string
  comparisonRows?: { label: string; without: string; with: string }[]
  roiTitle?: string
  roiDescription?: string
  packageName: string
  packagePrice: string
  packageFeatures: string[]
  faqs: FAQ[]
  extraSection?: {
    title: string
    description: string
    items: string[]
  }
}

export const BRANCHEN_DATA: Record<string, BranchenPageData> = {
  hotel: {
    slug: 'hotel',
    metaTitle: '360-Grad-Rundgang für Hotels – mehr Direktbuchungen',
    metaDescription: 'Mehr Direktbuchungen, weniger OTA-Provisionen: Professionelle 360-Grad-Touren für Hotels ab CHF 2\'490. Schweizer Anbieter, kein Abo.',
    badge: 'Hotels & Resorts',
    headline: '360-Grad-Rundgang für Ihr Hotel',
    tagline: 'Mehr Direktbuchungen, weniger OTA-Abhängigkeit. Zeigen Sie Gästen Zimmer, Spa, Restaurant und Lobby – bevor sie buchen.',
    challenges: [
      { title: 'OTA-Kosten fressen die Marge', description: 'CHF 30\'000–100\'000 jährlich für Hotels. 15–18% Provision pro Buchung an Booking.com & Co.' },
      { title: '«Viel schöner als auf den Bildern!»', description: '90% der Gäste sagen das. Aber online? Nur statische Fotos, die die Atmosphäre nicht transportieren.' },
      { title: 'Gäste buchen zurück auf Booking', description: 'Ihre Website zeigt statische Fotos, Gast ist unsicher, bucht zurück auf dem OTA – 15–18% Provision.' },
    ],
    stats: [
      { value: '+48%', label: 'mehr Direktbuchungen' },
      { value: '130%', label: 'höhere Buchungswahrscheinlichkeit (18–34-Jährige)' },
      { value: '3×', label: 'längere Verweildauer auf Ihrer Website' },
      { value: '2×', label: 'mehr Google-Profilaufrufe' },
    ],
    statsNote: 'Quellen: Google Street View Business-Daten, Matterport Insights, Branchenstudien Hospitality',
    sources: [
      { label: 'Omni-Hotels-Studie: 67% höhere Buchungswahrscheinlichkeit mit 360°-Tour (EXP360)', url: 'https://exp360.com/blog/how-hotels-use-vr-360-images-and-videos-to-increase-bookings/' },
      { label: 'Visiting Media: Wie virtuelle Touren Hotelbuchungen steigern', url: 'https://visitingmedia.com/5-ways-virtual-tours-help-hotels-increase-bookings/' },
      { label: 'ScienceDirect: AR/VR in Hotels – Wirkung auf Gästezufriedenheit und Buchungsabsicht', url: 'https://www.sciencedirect.com/science/article/pii/S0278431923002050' },
    ],
    captures: ['Zimmertypen (Einzel, Doppel, Suite)', 'Lobby & Empfang', 'Restaurant', 'Spa & Wellness', 'Eventlocations', 'Aussenbereiche'],
    comparisonTitle: 'Hotel mit vs. ohne 360-Tour',
    comparisonRows: [
      { label: 'Verweildauer', without: '1–2 Minuten', with: '5–8 Minuten' },
      { label: 'Direktbuchungsrate', without: 'Durchschnittlich', with: '+48% höher' },
      { label: 'Gäste-Vertrauen', without: 'Gering (nur Fotos)', with: 'Hoch (virtuelles Erlebnis)' },
      { label: 'Google-Sichtbarkeit', without: 'Standard', with: 'Bevorzugte Platzierung' },
      { label: 'OTA-Abhängigkeit', without: 'Hoch', with: 'Reduziert' },
    ],
    roiTitle: '10 Direktbuchungen = Tour bezahlt',
    roiDescription: 'Durchschnittliches Zimmer CHF 200/Nacht, 18% OTA-Gebühr = CHF 36 Ersparnis/Nacht. 10 Buchungen × 2 Nächte = CHF 720 gespart. Amortisiert sich oft im ersten Quartal.',
    packageName: 'Hotel-Paket',
    packagePrice: 'CHF 2\'490–3\'990',
    packageFeatures: [
      'Alle Zimmertypen einzeln erfasst',
      'Lobby, Restaurant, Spa, Aussenbereiche',
      'Interaktive Hotspots (Buchungslink, Info)',
      'Grundriss-Navigation',
      'Google Business Integration',
      '24 Monate Hosting',
      'Mehrsprachige Hotspots (optional)',
    ],
    faqs: [
      { question: 'Wie lange dauert das Shooting?', answer: '2–4 Stunden je nach Hotelgrösse. Wir planen den Termin nach dem Check-out / vor dem Check-in.' },
      { question: 'Was wenn wir Zimmer renovieren?', answer: 'Einzelne Panorama-Updates ab CHF 290. Kein komplett neues Shooting nötig.' },
      { question: 'Kann die Tour in unser Buchungssystem verlinken?', answer: 'Ja. Gäste können direkt aus dem Rundgang heraus für den Zimmertyp buchen, den sie gerade betrachten.' },
      { question: 'Funktioniert die Tour auch auf Smartphones?', answer: 'Ja, vollständig responsiv. Keine App nötig. VR-Brillen werden ebenfalls unterstützt.' },
    ],
  },

  restaurant: {
    slug: 'restaurant',
    metaTitle: '360-Grad-Rundgang für Restaurants',
    metaDescription: '93% der Gäste googeln vor der Restaurantwahl. Zeigen Sie Ihr Ambiente mit einer professionellen 360-Tour.',
    badge: 'Gastronomie',
    headline: '360-Grad-Rundgang für Ihr Restaurant',
    tagline: '93% der Gäste googeln vor der Restaurantwahl. Zeigen Sie Ihr Ambiente – nicht nur die Speisekarte.',
    challenges: [
      { title: 'Unkontrollierte Google-Fotos', description: 'Gäste laden verwackelte, schlecht belichtete Handyfotos hoch, die den ersten Eindruck prägen.' },
      { title: 'Online-Unsichtbarkeit', description: 'Ohne visuellen Content verlieren Sie in den Suchergebnissen. Die Konkurrenz gewinnt.' },
      { title: '14-Stunden-Tage = kein Marketing', description: 'Keine Zeit für professionelle Content-Erstellung neben dem Tagesgeschäft.' },
    ],
    stats: [
      { value: '+85%', label: 'mehr Reservierungen durch virtuelle Touren' },
      { value: '+50%', label: 'mehr Website-Besuche' },
      { value: '2×', label: 'mehr Google-Maps-Aufrufe' },
      { value: '93%', label: 'googeln vor der Restaurantwahl' },
    ],
    statsNote: 'Quellen: Google Street View Business-Daten, Branchenstudien Gastronomie',
    sources: [
      { label: 'Google/Ipsos «Impact of Search Listings»: Einträge mit virtueller Tour wecken doppelt so häufig Interesse (CloudPano)', url: 'https://www.cloudpano.com/blog/how-google-street-view-tours-increase-foot-traffic-to-local-businesses' },
      { label: 'Panoee: Wie Google Street View Ladenbesuche steigert', url: 'https://panoee.com/why-google-street-view-can-boost-traffic-to-your-store/' },
    ],
    captures: ['Gastraum', 'Terrasse & Aussenbereiche', 'Bar & Lounge', 'Separées & Events', 'Küche (optional) – zeigt Transparenz, schafft Vertrauen'],
    roiTitle: 'CHF 1.55 pro Tag – weniger als ein Espresso',
    roiDescription: 'CHF 1\'690 auf 3 Jahre gerechnet = rund CHF 1.55 pro Tag. Bereits 1 zusätzliche Reservation pro Woche zahlt die Investition: Bei einer durchschnittlichen Rechnung von CHF 45 pro Person sind das über CHF 7\'000 zusätzlicher Jahresumsatz.',
    extraSection: {
      title: 'Google Business Integration',
      description: 'Ihre 360-Tour wird direkt in Ihr Google Business Profile eingebettet. Professionelle Aufnahmen ersetzen unkontrollierte Gästefotos.',
      items: [
        'Tour direkt im Google Business Profile',
        'Höhere Klickrate auf Google Maps',
        'Mehr Anrufe, mehr Reservierungen',
        'Wettbewerbsvorteil vs. Restaurants ohne Tour',
      ],
    },
    packageName: 'Gastro-Paket',
    packagePrice: 'CHF 1\'690',
    packageFeatures: [
      'Professionelle Business-Tour (bis 300 m²)',
      'Google Business Profile Integration',
      'Website-Einbettung',
      '1 saisonales Update inklusive (Festtagsdeko, Sommertische)',
      '3 Jahre Hosting inklusive',
      'Lieferung in 5–7 Arbeitstagen',
    ],
    faqs: [
      { question: 'Müssen wir während des Shootings schliessen?', answer: 'Nein, wir filmen vor der Öffnung oder in einer ruhigen Phase. 60–90 Minuten reichen meistens.' },
      { question: 'Können wir den Rundgang saisonal anpassen lassen?', answer: 'Ja, 1 saisonales Update ist inklusive. Weitere können jederzeit hinzugebucht werden.' },
      { question: 'Was passiert mit den alten Google-Fotos unserer Gäste?', answer: 'Die professionelle Tour erscheint prominent. Gästefotos bleiben, aber Ihre Tour dominiert den visuellen Ersteindruck.' },
    ],
  },

  'spa-wellness': {
    slug: 'spa-wellness',
    metaTitle: '360-Grad-Rundgang für Spa & Wellness',
    metaDescription: 'Ihre Wohlfühl-Atmosphäre online erlebbar machen. Professionelle 360-Touren für Spa-Anlagen.',
    badge: 'Spa & Wellness',
    headline: 'Ihre Wohlfühl-Atmosphäre erlebbar machen',
    tagline: 'Gäste sagen: «Es ist noch viel schöner als auf den Bildern.» Lassen Sie sie die Atmosphäre schon online spüren.',
    challenges: [
      { title: 'Atmosphäre nicht vermittelbar', description: 'Fotos zeigen Räume, aber nicht das Gefühl: Sauna-Wärme, Ruhebereich-Stille, Anlage-Ausmass.' },
      { title: 'Conversion-Lücke', description: 'Besucher sind interessiert, buchen aber nicht. Es fehlt das entscheidende Erlebnis, das Vertrauen schafft.' },
      { title: 'Konkurrenzdruck', description: 'Grosse Wellness-Ketten investieren in Video-Marketing. Differenzierung muss authentisch sein.' },
    ],
    stats: [
      { value: '+45%', label: 'mehr Buchungen nach virtueller Tour' },
      { value: '67%', label: 'höhere Buchungswahrscheinlichkeit mit Tour-Betrachtern' },
      { value: '4–5×', label: 'längere Verweildauer auf Seiten mit 360-Tour' },
      { value: '15–25%', label: 'Adoption im DACH-Raum – Ihr Vorsprung jetzt' },
    ],
    statsNote: 'Quellen: Matterport Insights, Branchenstudien Wellness & Hospitality',
    sources: [
      { label: 'EXP360: 360°-Inhalte im Hotel- und Wellnessbereich', url: 'https://exp360.com/blog/how-hotels-use-vr-360-images-and-videos-to-increase-bookings/' },
      { label: 'ScienceDirect: Virtuelle Touren und Kundenzufriedenheit – Quasi-Experiment (Airbnb)', url: 'https://www.sciencedirect.com/science/article/abs/pii/S1447677025000105' },
    ],
    captures: ['Saunalandschaft', 'Behandlungsräume', 'Ruhebereiche', 'Pools & Whirlpools', 'Aussenbereiche', 'Garten / Naturbecken / Panoramablick'],
    extraSection: {
      title: 'Privatsphäre & Diskretion',
      description: 'Ihre Gäste bleiben geschützt. Wir garantieren absolute Diskretion bei jedem Shooting.',
      items: [
        'Shooting ausserhalb der Öffnungszeiten – keine Gäste auf Aufnahmen',
        'DSGVO-konform: keine Personen, keine identifizierbaren Details',
        'Professionelle Nachbearbeitung mit Qualitätskontrolle',
        'Sie genehmigen jedes Bild vor Veröffentlichung',
        'Optional: bestimmte Bereiche ausschliessen',
      ],
    },
    packageName: 'Spa & Wellness Premium-Tour',
    packagePrice: 'CHF 1\'690–2\'490',
    packageFeatures: [
      'Professionelle Premium-Tour (komplette Spa-Anlage)',
      'Shooting ausserhalb der Öffnungszeiten',
      'DSGVO-konforme Aufnahmen',
      'Google Business Integration',
      'Website-Einbettung',
      '3 Jahre Hosting',
      'Freigabeprozess vor Veröffentlichung',
    ],
    faqs: [
      { question: 'Wie stellen Sie sicher, dass keine Gäste auf den Aufnahmen sind?', answer: 'Exklusives Filmen ausserhalb der Betriebszeiten in einem vorab vereinbarten Zeitfenster. Der Spa-Bereich wird für Gäste gesperrt.' },
      { question: 'Können wir bestimmte Bereiche ausschliessen?', answer: 'Ja, Sie entscheiden was gezeigt wird. Technikräume, Personalzonen etc. können ausgelassen werden.' },
      { question: 'Wie lange dauert das Shooting für eine komplette Spa-Anlage?', answer: '2–4 Stunden je nach Grösse. Grössere Anlagen mit Innen- und Aussenbereich können einen halben Tag benötigen. Lieferung in 5–7 Tagen.' },
    ],
  },

  fitnessstudio: {
    slug: 'fitnessstudio',
    metaTitle: '360-Grad-Rundgang für Fitnessstudios',
    metaDescription: 'Hemmschwelle für Erstbesucher senken. 130% höhere Besuchswahrscheinlichkeit mit 360-Grad-Tour.',
    badge: 'Fitness & Sport',
    headline: 'Ihr Studio erleben – bevor der erste Schritt gemacht ist',
    tagline: '82% recherchieren online. Senken Sie die Hemmschwelle für Erstbesucher.',
    challenges: [
      { title: '«Muss man erleben»', description: 'Qualität nicht beurteilbar ohne Besuch. Hohe Hemmschwelle für Erstbesucher.' },
      { title: '20% jährliche Fluktuation', description: 'Branche kämpft mit hoher Fluktuation. Mitglieder, die wissen was sie erwartet, bleiben länger.' },
      { title: 'Discountketten dominieren', description: 'McFit, FitX dominieren die Suche mit grossen Marketing-Budgets. Online als Qualitätsstudio differenzieren.' },
    ],
    stats: [
      { value: '130%', label: 'höhere Besuchswahrscheinlichkeit mit Google-Eintrag mit Tour' },
      { value: '2×', label: 'mehr Google Maps Aufrufe vs. Einträge ohne Tour' },
      { value: 'EUR 960', label: 'durchschnittlicher Lifetime Value pro Mitglied (24 Monate × €40)' },
    ],
    statsNote: 'Quellen: Google Street View Business-Daten, Branchenstudien Fitness',
    sources: [
      { label: 'Google/Ipsos «Impact of Search Listings»: doppelt so viel Interesse mit virtueller Tour (CloudPano)', url: 'https://www.cloudpano.com/blog/how-google-street-view-tours-increase-foot-traffic-to-local-businesses' },
      { label: 'TeliportMe: Marktanalyse Virtual-Tour-Software 2024', url: 'https://teliportme.com/blog/a-deep-dive-into-the-virtual-tour-software-market/' },
    ],
    captures: ['Trainingsfläche', 'Freihantelbereich', 'Cardio-Bereich', 'Kursraum/-räume', 'Wellness & Sauna (falls vorhanden)', 'Umkleiden & Duschen'],
    extraSection: {
      title: 'Qualität statt Preis',
      description: 'Discountketten gewinnen über den Preis – gewinnen Sie über Qualität. Aber nur, wenn sie online sichtbar ist.',
      items: [
        'Hochwertige Geräte vs. Massenabfertigung',
        'Persönliche Atmosphäre vs. anonymer Betrieb',
        'Saubere, moderne Umkleiden',
        'Kursräume, Wellnessbereiche, Extras rechtfertigen den Premium-Preis',
        '«Will hier trainieren»-Gefühl vor dem Probetraining',
      ],
    },
    roiTitle: '2–3 neue Mitglieder = Tour bezahlt',
    roiDescription: 'EUR 960 Lifetime Value pro Mitglied. Weniger als 1 Monat Facebook Ads, aber wirkt 3 Jahre – ohne laufende Kosten, ohne Streuverlust.',
    packageName: 'Fitness-Paket',
    packagePrice: 'CHF 1\'390',
    packageFeatures: [
      'Professionelle Business-Tour (komplettes Studio)',
      'Google Business Integration',
      'Website-Einbettung',
      'Mobile-optimiert',
      '3 Jahre Hosting',
      'Lieferung in 5–7 Arbeitstagen',
    ],
    faqs: [
      { question: 'Werden Mitglieder während des Shootings gezeigt?', answer: 'Nein, wir filmen ausserhalb der Stosszeiten oder vor Öffnung. Studio wird leer und aufgeräumt gezeigt – sieht immer am besten aus.' },
      { question: 'Unser Studio ist nicht besonders gross. Lohnt sich das trotzdem?', answer: 'Ja. Kompakte, gut ausgestattete Studios wirken in 360 Grad beeindruckend. Der Raumeffekt kommt voll zur Geltung.' },
      { question: 'Können wir die Tour für Social Media nutzen?', answer: 'Ja, teilbarer Link für Instagram, Facebook, Newsletter, Bewertungsportale. Kein App-Download nötig.' },
    ],
  },

  immobilien: {
    slug: 'immobilien',
    metaTitle: 'Professionelle 360-Touren für Immobilien',
    metaDescription: 'Weniger Besichtigungstourismus, mehr qualifizierte Interessenten. 360-Grad-Touren ohne Langzeitvertrag.',
    badge: 'Immobilien & Makler',
    headline: 'Professionelle 360-Touren für Ihre Objekte',
    tagline: 'Weniger Besichtigungstourismus, mehr qualifizierte Interessenten. Ohne Langzeitvertrag.',
    challenges: [
      { title: 'Besichtigungstourismus', description: 'Quer durch die Stadt fahren, aufschliessen, präsentieren. Interessent sagt nach 5 Minuten: «Nicht was ich erwartet habe.»' },
      { title: 'Konkurrenz der Grossmakler', description: 'Engel & Völkers nutzen bereits virtuelle Touren und Visualisierungen. Ohne vergleichbare Präsenz verlieren Sie Mandate.' },
      { title: 'Eigentümer-Erwartungen', description: 'Eigentümer erwarten professionelles Marketing. Nur Standardfotos? Dann geht das Mandat an den Makler mit besserem Konzept.' },
    ],
    stats: [
      { value: '+40%', label: 'mehr Klicks auf Inserate mit virtueller Tour' },
      { value: '+95%', label: 'höhere Kontaktrate auf Inserate mit 360-Tour' },
      { value: '5×', label: 'schnellerer Verkauf durch vorqualifizierte Interessenten' },
      { value: '3×', label: 'längere Verweildauer auf Inserat' },
    ],
    statsNote: 'Quellen: Matterport Insights, National Association of Realtors (NAR)',
    sources: [
      { label: 'Matterport-Studie: Käufer und Verkäufer bevorzugen Inserate mit 3D-Tour deutlich', url: 'https://matterport.com/news/new-study-shows-property-buyers-and-sellers-overwhelmingly-prefer-listings-3d-tours' },
      { label: 'Matterport: Objekte mit 3D-Tour verkaufen sich bis zu 31% schneller', url: 'https://matterport.com/blog/3d-tours-properties-sell-31-faster-and-higher-price' },
      { label: 'NAR: Home Buyers & Sellers Generational Trends Report', url: 'https://www.nar.realtor/research-and-statistics/research-reports/home-buyer-and-seller-generational-trends' },
    ],
    captures: ['Wohnräume', 'Küche', 'Badezimmer', 'Aussenbereiche', 'Grundriss-Integration (optional)'],
    comparisonTitle: 'Makler-Vergleich: Signatour vs. Ogulo vs. Matterport',
    comparisonRows: [
      { label: 'Preis pro Objekt', without: 'Ogulo: €49/Mt + Setup', with: 'ab CHF 549' },
      { label: 'Vertrag', without: 'Ogulo: 12 Monate Min.', with: 'Keiner' },
      { label: 'Aufwand', without: 'DIY', with: 'Null (Full Service)' },
      { label: 'Qualität', without: 'Abhängig von Ihren Fotos', with: 'Professioneller Fotograf' },
      { label: 'Google Business', without: 'Nicht inklusive', with: 'Inklusive' },
    ],
    extraSection: {
      title: 'Portal-Kompatibilität',
      description: 'Unsere 360-Touren funktionieren auf allen grossen Immobilienportalen.',
      items: [
        'Homegate – Virtuelle Tour direkt im Inserat',
        'ImmoScout24.ch – Maximale Sichtbarkeit durch Tour-Integration',
        'flatfox – Moderne Präsentation für digitale Mietersuche',
        'newhome – Professioneller Auftritt auf dem Schweizer Marktplatz',
        'Eigene Website – Einfache Einbettung per iFrame oder Link',
      ],
    },
    packageName: 'Makler-Vorteilskarten',
    packagePrice: 'ab CHF 2\'990',
    packageFeatures: [
      '5er-Karte: CHF 2\'990 (CHF 598 pro Objekt)',
      '10er-Karte: CHF 5\'490 (CHF 549 pro Objekt)',
      'Flexibel einsetzbar, kein Ablaufdatum',
      'Google Integration je Objekt',
      'Portal-optimierte Einbettung',
      'Full Service, kein Aufwand',
      'Prioritäts-Terminvergabe (10er-Karte)',
    ],
    faqs: [
      { question: 'Wie schnell ist die Tour nach dem Shooting verfügbar?', answer: 'In der Regel 3–5 Arbeitstage. Dringend: 24–48h Express-Service verfügbar (Aufpreis).' },
      { question: 'Was passiert, wenn das Objekt verkauft oder vermietet ist?', answer: 'Tour wird deaktiviert/gelöscht. Nächste Tour von der Karte für neues Objekt nutzen. Kein Ablaufdatum.' },
      { question: 'Muss die Immobilie für das Shooting leer sein?', answer: 'Nein. Möblierte Objekte wirken in 360 Grad oft ansprechender. Besser zur Nutzung vorstellbar. Wir beraten zur optimalen Vorbereitung.' },
    ],
  },
}
