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

  'banken-versicherungen': {
    slug: 'banken-versicherungen',
    metaTitle: '360-Grad-Rundgang für Banken, Versicherungen & Kanzleien',
    metaDescription: 'Vertrauen beginnt vor dem ersten Termin: Diskrete 360-Grad-Rundgänge für Banken, Versicherungen und Kanzleien. Schweizer Anbieter, DSGVO-konform.',
    badge: 'Banken, Versicherungen & Kanzleien',
    headline: 'Vertrauen entsteht, bevor der erste Termin gebucht wird',
    tagline: 'Bei Finanz- und Rechtsdienstleistungen entscheidet der erste Eindruck über die Mandatsanfrage. Zeigen Sie Professionalität und Diskretion – noch bevor das Erstgespräch stattfindet.',
    challenges: [
      { title: 'Hohe Hemmschwelle vor dem Erstgespräch', description: 'Wer Vermögen, Versicherung oder Rechtsfall anvertraut, will vorher wissen, zu wem er geht. Eine anonyme Website senkt diese Hürde nicht.' },
      { title: 'Austauschbare Webauftritte', description: 'Stockfotos und Standardtexte prägen die Branche. Wer die eigenen Räume zeigt, beweist Substanz, wo andere nur behaupten.' },
      { title: 'Premium-Räume bleiben unsichtbar', description: 'In repräsentative Empfangs- und Beratungsräume wurde investiert – online sieht sie niemand, bevor der Termin stattfindet.' },
    ],
    stats: [
      { value: '94%', label: 'höhere wahrgenommene Vertrauenswürdigkeit mit vollständigem Online-Auftritt' },
      { value: '2×', label: 'mehr Interesse bei Einträgen mit virtueller Tour' },
      { value: '3×', label: 'längere Verweildauer auf der Website' },
      { value: '24/7', label: 'Ihr Empfang ist digital immer geöffnet' },
    ],
    sources: [
      { label: 'Google/Ipsos «Impact of Search Listings»: Vertrauen und Interesse mit virtueller Tour (CloudPano)', url: 'https://www.cloudpano.com/blog/how-google-street-view-tours-increase-foot-traffic-to-local-businesses' },
      { label: 'Panoee: Wirkung von Street-View-Inhalten auf lokale Unternehmen', url: 'https://panoee.com/why-google-street-view-can-boost-traffic-to-your-store/' },
    ],
    captures: ['Empfang & Lobby', 'Beratungsräume', 'Sitzungszimmer', 'Schalterhalle (Banken)', 'Bibliothek & Arbeitsbereiche (Kanzleien)', 'Aussenauftritt & Zugang'],
    extraSection: {
      title: 'Diskretion & Sicherheit',
      description: 'Wir kennen die Anforderungen sensibler Branchen – jedes Shooting folgt einem klaren Freigabeprozess.',
      items: [
        'Shooting ausserhalb der Geschäftszeiten – keine Kunden, keine Mitarbeitenden im Bild',
        'Keine Dokumente, Bildschirme oder sicherheitsrelevanten Details auf den Aufnahmen',
        'Sie genehmigen jedes Panorama vor der Veröffentlichung',
        'Sicherheitskritische Bereiche werden ausgeschlossen',
        'DSGVO-konformes Hosting in der Schweiz/EU, AVV inklusive',
      ],
    },
    packageName: 'Business-Paket für Dienstleister',
    packagePrice: 'CHF 1\'690–2\'490',
    packageFeatures: [
      'Empfang, Beratungsräume und repräsentative Bereiche',
      'Diskreter Freigabeprozess vor Veröffentlichung',
      'Info-Hotspots (Team, Dienstleistungen, Terminbuchung)',
      'Google Business Integration',
      'Website-Einbettung per Link oder iFrame',
      '12 Monate Hosting & Service inklusive',
      'Mehrsprachige Hotspots optional (DE/FR/EN)',
    ],
    faqs: [
      { question: 'Wie stellen Sie Diskretion sicher?', answer: 'Wir fotografieren ausserhalb der Geschäftszeiten, ohne Personen, Dokumente oder Bildschirminhalte. Jedes Panorama durchläuft Ihren Freigabeprozess, bevor es online geht. Sicherheitskritische Bereiche bleiben aussen vor.' },
      { question: 'Wie lange dauert das Shooting?', answer: 'Für Empfang, Beratungsräume und Sitzungszimmer in der Regel 1–2 Stunden – planbar am Abend oder am Wochenende, ohne Betriebsunterbruch.' },
      { question: 'Lohnt sich das für eine kleine Kanzlei?', answer: 'Gerade dort: Mandanten vergleichen online, bevor sie anfragen. Wer als einzige Kanzlei am Ort seine Räume zeigt, hebt sich sichtbar ab – die Tour arbeitet jahrelang ohne Folgekosten.' },
      { question: 'Geht das auch auf Französisch oder Englisch?', answer: 'Ja. Wir beraten auf Deutsch und Französisch, nehmen Aufträge auch auf Englisch an, und die Tour selbst kann mehrsprachig umgesetzt werden (ab CHF 300 pro Zusatzsprache).' },
    ],
  },

  eventlocations: {
    slug: 'eventlocations',
    metaTitle: '360-Grad-Rundgang für Eventlocations & Showrooms',
    metaDescription: 'Brautpaare und Eventplaner vergleichen online: 360-Grad-Rundgänge für Eventlocations, Säle und Showrooms. Weniger Leerlauf-Besichtigungen, mehr qualifizierte Anfragen.',
    badge: 'Eventlocations & Showrooms',
    headline: 'Ihre Location überzeugt – noch bevor die Anfrage eintrifft',
    tagline: 'Brautpaare, Eventplaner und Einkäufer vergleichen online. Wer Saal, Bühne und Ambiente erlebbar macht, erhält die qualifizierte Anfrage – die Konkurrenz nur den Klick weiter.',
    challenges: [
      { title: 'Jede Besichtigung kostet Stunden', description: 'Termin koordinieren, Location herrichten, durchführen – und der Interessent merkt nach 10 Minuten, dass der Saal zu klein ist.' },
      { title: 'Fotos zeigen keine Raumwirkung', description: 'Deckenhöhe, Proportionen, Blick von der Bühne: Genau das, was eine Location verkauft, kommt auf Fotos nicht zur Geltung.' },
      { title: 'Entscheidungen fallen im Vergleich', description: 'Wer mehrere Locations prüft, entscheidet nach dem Bauchgefühl aus dem ersten Online-Eindruck. Ohne Tour fällt dieser Eindruck dünn aus.' },
    ],
    stats: [
      { value: '2×', label: 'mehr Interesse bei Einträgen mit virtueller Tour' },
      { value: '3×', label: 'längere Verweildauer auf der Website' },
      { value: '44%', label: 'der Lokalsuchen laufen über Google Maps' },
      { value: '24/7', label: 'Besichtigung möglich – auch sonntags um 22 Uhr' },
    ],
    sources: [
      { label: 'Google/Ipsos «Impact of Search Listings»: 2× mehr Interesse mit virtueller Tour (CloudPano)', url: 'https://www.cloudpano.com/blog/how-google-street-view-tours-increase-foot-traffic-to-local-businesses' },
      { label: 'Panoee: Google Street View und lokale Sichtbarkeit', url: 'https://panoee.com/why-google-street-view-can-boost-traffic-to-your-store/' },
    ],
    captures: ['Säle & Eventflächen', 'Foyer & Empfang', 'Bühne & Technik', 'Terrassen & Aussenbereiche', 'Showroom- & Ausstellungsflächen', 'Anfahrt & Parking'],
    extraSection: {
      title: 'Varianten und Unterlagen direkt in der Tour',
      description: 'Eine Location verkauft sich über Möglichkeiten. Die Tour zeigt sie alle – an einem Ort.',
      items: [
        'Bestuhlungsvarianten (Bankett, Konzert, Seminar) als Panorama-Varianten',
        'Technische Datenblätter, Pläne und Catering-Unterlagen als PDF-Download in der Tour',
        'Anfrage-Hotspot direkt im Saal – aus Interesse wird eine konkrete Anfrage',
        'Saisonale Updates (Hochzeitsdeko, Weihnachtsstimmung) jederzeit möglich',
        'Teilbarer Link für Offerten, E-Mails und Social Media',
      ],
    },
    roiTitle: 'Ein einziges gebuchtes Event zahlt die Tour',
    roiDescription: 'Eine Hochzeit oder ein Firmenanlass bringt schnell mehrere tausend Franken Umsatz. Gewinnt die Tour nur einen einzigen zusätzlichen Abschluss, ist die Investition amortisiert – jede weitere Buchung ist Gewinn. Dazu sparen Sie die Stunden, die heute in Leerlauf-Besichtigungen fliessen.',
    packageName: 'Location-Paket',
    packagePrice: 'CHF 1\'690–2\'490',
    packageFeatures: [
      'Komplette Location inkl. Aussenbereiche',
      'Anfrage-Hotspots und PDF-Integration (Technik, Catering, Pläne)',
      'Google Business Integration',
      'Website-Einbettung per Link oder iFrame',
      'Teilbarer Link für Offerten und Social Media',
      '12 Monate Hosting & Service inklusive',
      'Saisonales Update optional (ab CHF 290)',
    ],
    faqs: [
      { question: 'Können wir verschiedene Bestuhlungen zeigen?', answer: 'Ja. Wir fotografieren den Saal in mehreren Varianten (z.B. Bankett und Konzert) – Besucher schalten in der Tour zwischen den Ansichten um.' },
      { question: 'Was passiert nach einem Umbau oder neuer Deko?', answer: 'Einzelne Panoramen lassen sich ab CHF 290 aktualisieren, ohne die Tour neu zu erstellen. Ideal auch für saisonale Stimmungen.' },
      { question: 'Können Eventplaner die Tour in ihre Unterlagen einbauen?', answer: 'Ja. Die Tour ist per Link teilbar und per iFrame einbettbar – perfekt für Offerten, Pitch-Decks und Partner-Websites.' },
      { question: 'Wie lange dauert das Shooting?', answer: 'Je nach Grösse 2–4 Stunden, idealerweise wenn die Location eingerichtet und leer ist. Die fertige Tour liefern wir in 5–10 Arbeitstagen.' },
    ],
  },
}
