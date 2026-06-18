import type { FAQ, Stat } from './types'

export interface BranchenPageData {
  slug: string
  metaTitle: string
  metaDescription: string
  badge: string
  headline: string
  tagline: string
  heroImage?: string
  challenges: { title: string; description: string }[]
  stats: Stat[]
  statsNote?: string
  sources?: { label: string; url: string }[]
  captures: string[]
  comparisonTitle?: string
  comparisonKicker?: string
  comparisonWithoutHead?: string
  comparisonWithoutSub?: string
  comparisonRows?: { label: string; without: string; with: string }[]
  roiTitle?: string
  roiSteps?: { label: string; value: string }[]
  roiResult?: string
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
    metaDescription: 'Mehr Direktbuchungen, weniger OTA-Provisionen: Professionelle 360-Grad-Touren für Hotels ab CHF 3\'490. Schweizer Anbieter, kein Abo.',
    badge: 'Hotels & Resorts',
    headline: '360-Grad-Rundgang für Ihr Hotel',
    tagline: 'Mehr Direktbuchungen, weniger OTA-Abhängigkeit. Zeigen Sie Gästen Zimmer, Spa, Restaurant und Lobby – bevor sie buchen.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1900&q=80&auto=format&fit=crop',
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
    comparisonTitle: 'Hotel mit vs. ohne Signature Tour',
    comparisonKicker: 'Der Unterschied',
    comparisonWithoutHead: 'Ohne 360°-Tour',
    comparisonWithoutSub: 'nur Fotos auf der Website',
    comparisonRows: [
      { label: 'Verweildauer', without: '1–2 Minuten, dann klickt der Gast weg', with: '5–8 Minuten im Erlebnis' },
      { label: 'Direktbuchungen', without: 'Gast bucht zurück auf Booking & Co.', with: '+48% mehr Direktbuchungen' },
      { label: 'Gäste-Vertrauen', without: 'Gering – nur statische Fotos', with: 'Hoch – Zimmer & Spa vorab erlebbar' },
      { label: 'OTA-Provisionen', without: '15–18% pro Buchung', with: 'Spürbar reduziert' },
      { label: 'Google-Sichtbarkeit', without: 'Standard-Eintrag', with: 'Bevorzugte Platzierung mit Tour' },
      { label: 'Bildqualität', without: 'Handy-Schnappschüsse', with: 'Profi-Aufnahmen, sauberer Boden (Nadir)' },
    ],
    roiTitle: 'Schon 10 Direktbuchungen zahlen Ihre Tour',
    roiSteps: [
      { label: 'Durchschnittlicher Zimmerpreis', value: 'CHF 200 / Nacht' },
      { label: 'Gesparte OTA-Provision (18%)', value: 'CHF 36 / Nacht' },
      { label: '10 Direktbuchungen à 2 Nächte', value: 'CHF 720 gespart' },
    ],
    roiResult: 'Die Tour amortisiert sich oft schon im ersten Quartal.',
    packageName: 'Hotel-Paket',
    packagePrice: 'ab CHF 3\'490.–',
    packageFeatures: [
      'Alle Zimmertypen, Lobby, Restaurant, Spa, Aussenbereiche',
      'Buchungslink-Hotspots & Grundriss-Navigation',
      'Mehrsprachigkeit (DE / FR / EN)',
      'Google-Business-Einbindung',
      'Inkl. 12 Monate Signature Evolution (Betreuungsservice)',
      'Grosse Häuser, Thermen & Resorts: Pro-Linie ab CHF 4\'497.–',
    ],
    faqs: [
      { question: 'Wie lange dauert das Shooting?', answer: '2–4 Stunden je nach Hotelgrösse. Wir planen den Termin nach dem Check-out / vor dem Check-in.' },
      { question: 'Was wenn wir Zimmer renovieren?', answer: 'Einzelne Panorama-Updates ab CHF 180.– pro Szene. Kein komplett neues Shooting nötig.' },
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
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1900&q=80&auto=format&fit=crop',
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
    roiTitle: 'Weniger als ein Espresso pro Tag',
    roiSteps: [
      { label: 'Investition (Gastro-Paket)', value: 'ab CHF 2\'890.– einmalig' },
      { label: 'Auf 3 Jahre gerechnet', value: 'rund CHF 2.65 / Tag' },
      { label: '1 Reservation mehr pro Woche (CHF 45 p.P.)', value: '> CHF 7\'000 / Jahr' },
    ],
    roiResult: 'Schon zwei Zusatz-Reservationen pro Woche zahlen die ganze Tour.',
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
    comparisonTitle: 'Restaurant mit vs. ohne Signature Tour',
    comparisonKicker: 'Der Unterschied',
    comparisonWithoutHead: 'Nur Fotos & Speisekarte',
    comparisonRows: [
      { label: 'Erster Eindruck online', without: 'Verwackelte Gästefotos bei Google', with: 'Professionelles Ambiente, das Sie steuern' },
      { label: 'Reservierungen', without: 'Gast ist unsicher, klickt weiter', with: 'Ambiente überzeugt vor der Reservation' },
      { label: 'Google Maps', without: 'Standard-Eintrag', with: 'Tour im Profil – mehr Klicks & Anrufe' },
      { label: 'Aufwand', without: 'Kein Marketing neben dem Tagesgeschäft', with: 'Einmal erstellt, arbeitet jahrelang' },
      { label: 'Aktualität', without: 'Fotos veralten', with: 'Saisonale Updates möglich' },
      { label: 'Bildqualität', without: 'Handy-Schnappschüsse', with: 'Profi-Aufnahmen, sauberer Boden (Nadir)' },
    ],
    packageName: 'Gastro-Paket',
    packagePrice: 'ab CHF 2\'890.–',
    packageFeatures: [
      'Signature-Tour mit Google-Business-Einbindung',
      'Tag-/Nacht-Modus für Ambiente bei Tag und Abend',
      'QR-Code-Paket für Tisch und Schaufenster',
      '1 saisonales Update inklusive (Festtagsdeko, Sommertische)',
      'Inkl. 12 Monate Signature Care (Betreuungsservice)',
      'Kleine Lokale: Basic-Tour ab CHF 990.–',
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
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1900&q=80&auto=format&fit=crop',
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
    comparisonTitle: 'Spa mit vs. ohne Signature Tour',
    comparisonKicker: 'Der Unterschied',
    comparisonWithoutHead: 'Nur Fotos',
    comparisonRows: [
      { label: 'Atmosphäre', without: 'Fotos zeigen Räume, nicht das Gefühl', with: 'Ruhe & Hochwertigkeit spürbar' },
      { label: 'Buchungen', without: 'Interessent zögert', with: 'Erlebnis schafft Vertrauen → Buchung' },
      { label: 'Diskretion', without: 'Gästefotos unkontrolliert', with: 'Aufnahmen ohne Gäste, Freigabe vorab' },
      { label: 'Differenzierung', without: 'Wie alle anderen', with: 'Sichtbarer Vorsprung vor Ketten' },
      { label: 'Google-Sichtbarkeit', without: 'Standard-Eintrag', with: 'Tour im Profil' },
      { label: 'Bildqualität', without: 'Schnappschüsse', with: 'Profi-Aufnahmen, sauberer Boden (Nadir)' },
    ],
    packageName: 'Spa & Wellness Premium-Tour',
    packagePrice: 'ab CHF 3\'490.–',
    packageFeatures: [
      'Signature-Tour der kompletten Spa-Anlage',
      'Audio-Guide & Tag-/Nacht-Modus für spürbare Atmosphäre',
      'Shooting ausserhalb der Öffnungszeiten, DSGVO-konform',
      'Google-Business-Einbindung & Website-Einbettung',
      'Inkl. 12 Monate Signature Care (Betreuungsservice)',
      'Optional: Vier-Jahreszeiten-Terrasse – CHF 1\'490.– / Jahr',
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
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1900&q=80&auto=format&fit=crop',
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
    roiTitle: '3 neue Mitglieder zahlen Ihre Tour',
    roiSteps: [
      { label: 'Wert pro Mitglied (24 Mt. × CHF 40)', value: 'rund CHF 960' },
      { label: 'Investition (Fitness-Paket)', value: 'ab CHF 2\'890.– einmalig' },
      { label: 'Break-even', value: '3 neue Mitglieder' },
    ],
    roiResult: 'Wirkt 3 Jahre – ohne laufende Werbekosten, ohne Streuverlust.',
    comparisonTitle: 'Studio mit vs. ohne Signature Tour',
    comparisonKicker: 'Der Unterschied',
    comparisonWithoutHead: 'Nur Fotos',
    comparisonRows: [
      { label: 'Hemmschwelle', without: 'Erstbesucher unsicher, kommt nicht', with: 'Studio vorab erlebbar → Probetraining' },
      { label: 'Differenzierung', without: 'Geht gegen Discounter unter', with: 'Qualität sichtbar gemacht' },
      { label: 'Mitgliederbindung', without: 'Falsche Erwartungen, schnelle Kündigung', with: 'Wer weiss, was ihn erwartet, bleibt länger' },
      { label: 'Google Maps', without: 'Standard-Eintrag', with: 'Tour im Profil – mehr Aufrufe' },
      { label: 'Social Media', without: 'Kein teilbarer Content', with: 'Teilbarer Link für Instagram & Co.' },
      { label: 'Bildqualität', without: 'Schnappschüsse', with: 'Profi-Aufnahmen, sauberer Boden (Nadir)' },
    ],
    packageName: 'Fitness-Paket',
    packagePrice: 'ab CHF 2\'890.–',
    packageFeatures: [
      'Signature-Tour des kompletten Studios',
      'Lead-Capture-Formular («Probetraining anfragen»)',
      'Google-Business-Einbindung & Website-Einbettung',
      'Optimiert für Mobile, Desktop, TV und VR-Brille',
      'Inkl. 12 Monate Signature Care (Betreuungsservice)',
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
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1900&q=80&auto=format&fit=crop',
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
    comparisonTitle: 'Warum Makler zu Signatour wechseln',
    comparisonKicker: 'Der ehrliche Vergleich',
    comparisonWithoutHead: 'Übliche Anbieter',
    comparisonWithoutSub: 'Ogulo, Matterport',
    comparisonRows: [
      { label: 'Preis pro Objekt', without: 'Laufende Monatsgebühr + Setup, läuft ewig weiter', with: 'ab CHF 1\'623.– pro Objekt (10er-Karte) – dann gehört sie Ihnen' },
      { label: 'Vertragsbindung', without: '12–24 Monate Mindestlaufzeit', with: 'Keine – Vorteilskarte ohne Ablaufdatum' },
      { label: 'Ihr Aufwand', without: 'Selbst scannen, Software lernen (DIY)', with: 'Null – wir kommen, fotografieren, liefern' },
      { label: 'Bildqualität', without: 'Abhängig von Ihren eigenen Fotos', with: 'Profi-Fotograf, sauberer Boden (Nadir 95–100%)' },
      { label: 'Google & Portale', without: 'Nicht inklusive', with: 'Google Business, Homegate & ImmoScout inklusive' },
      { label: 'Datenhoheit', without: 'Anbieter-Cloud, Kündigung = Datenverlust', with: 'Bei Ihnen – kein Vendor Lock-in' },
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
    roiTitle: 'Ein gewonnenes Mandat zahlt die ganze Karte',
    roiSteps: [
      { label: 'Tour pro Objekt (10er-Karte)', value: 'CHF 1\'623.–' },
      { label: 'Mehr Klicks auf Inserate', value: '+40%' },
      { label: 'Höhere Kontaktrate auf Inserate', value: '+95%' },
    ],
    roiResult: 'Ein einziges gewonnenes Mandat zahlt die komplette Karte – bei Luxusobjekten liegt die Provision im fünfstelligen Bereich.',
    packageName: 'Signature-Vorteilskarten',
    packagePrice: 'CHF 2\'497.– pro Objekt',
    packageFeatures: [
      'Einzelobjekt: CHF 2\'497.– pro Objekt',
      '5er-Vorteilskarte: CHF 9\'990.– (CHF 1\'998.– pro Objekt, rund 20% Vorteil)',
      '10er-Vorteilskarte: CHF 16\'230.– (CHF 1\'623.– pro Objekt, 35% Vorteil)',
      'Jede Tour in Signature-Qualität, voll im Corporate Design',
      'Flexibel einsetzbar, kein Ablaufdatum',
      'Google- & Portal-Einbindung je Objekt',
      'Inkl. 12 Monate Betreuungsservice pro Tour',
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
    heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1900&q=80&auto=format&fit=crop',
    challenges: [
      { title: 'Hohe Hemmschwelle vor dem Erstgespräch', description: 'Wer Vermögen, Versicherung oder Rechtsfall anvertraut, will vorher wissen, zu wem er geht. Eine anonyme Website senkt diese Hürde nicht.' },
      { title: 'Austauschbare Webauftritte', description: 'Stockfotos und Standardtexte prägen die Branche. Wer die eigenen Räume zeigt, beweist Substanz, wo andere nur behaupten.' },
      { title: 'Premium-Räume bleiben unsichtbar', description: 'In repräsentative Empfangs- und Beratungsräume wurde investiert – online sieht sie niemand, bevor der Termin stattfindet.' },
    ],
    stats: [
      { value: '49%', label: 'der Mandanten beurteilen eine Kanzlei online, bevor sie anrufen' },
      { value: '94%', label: 'höhere wahrgenommene Vertrauenswürdigkeit mit vollständigem Online-Auftritt' },
      { value: '2×', label: 'mehr Interesse bei Einträgen mit virtueller Tour' },
      { value: '24/7', label: 'Ihr Empfang ist digital immer geöffnet' },
    ],
    sources: [
      { label: 'Digital Roots Media: 49% beurteilen die Kanzlei über die Website, bevor sie anrufen', url: 'https://www.digitalrootsmedia.com/blog/legal/law-firm-web-design-convert-visitors-clients/' },
      { label: 'Google/Ipsos «Impact of Search Listings»: 94% höhere wahrgenommene Seriosität, 2× mehr Interesse mit virtueller Tour (CloudPano)', url: 'https://www.cloudpano.com/blog/how-google-street-view-tours-increase-foot-traffic-to-local-businesses' },
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
    comparisonTitle: 'Mit vs. ohne Signature Tour',
    comparisonKicker: 'Der Unterschied',
    comparisonWithoutHead: 'Nur Website & Stockfotos',
    comparisonRows: [
      { label: 'Erster Eindruck', without: 'Anonyme Stockfotos', with: 'Ihre echten Räume – sofort Vertrauen' },
      { label: 'Hemmschwelle', without: 'Hoch vor dem Erstgespräch', with: 'Gesenkt – Mandant kennt Sie vorab' },
      { label: 'Diskretion', without: 'Keine Kontrolle', with: 'Ohne Personen/Dokumente, Freigabeprozess' },
      { label: 'Differenzierung', without: 'Austauschbarer Auftritt', with: 'Sichtbar professionell' },
      { label: 'Verfügbarkeit', without: 'Nur zu Bürozeiten', with: 'Digitaler Empfang rund um die Uhr' },
      { label: 'Bildqualität', without: 'Stockmaterial', with: 'Profi-Aufnahmen, sauberer Boden (Nadir)' },
    ],
    packageName: 'Filial-Staffel',
    packagePrice: 'ab CHF 2\'497.– pro Standort',
    packageFeatures: [
      '1 Standort: CHF 2\'497.–',
      '3–4 Standorte: CHF 2\'247.– pro Standort (10%)',
      '5–9 Standorte: CHF 2\'123.– pro Standort (15%)',
      'ab 10 Standorten: individuelle Offerte / Rahmenvertrag',
      'Signature-Tour im Corporate Design, ein Ansprechpartner für alle Standorte',
      'Diskreter Freigabeprozess vor Veröffentlichung',
      'Empfohlen mit Servicepaket pro Standort',
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
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1900&q=80&auto=format&fit=crop',
    challenges: [
      { title: 'Jede Besichtigung kostet Stunden', description: 'Termin koordinieren, Location herrichten, durchführen – und der Interessent merkt nach 10 Minuten, dass der Saal zu klein ist.' },
      { title: 'Fotos zeigen keine Raumwirkung', description: 'Deckenhöhe, Proportionen, Blick von der Bühne: Genau das, was eine Location verkauft, kommt auf Fotos nicht zur Geltung.' },
      { title: 'Entscheidungen fallen im Vergleich', description: 'Wer mehrere Locations prüft, entscheidet nach dem Bauchgefühl aus dem ersten Online-Eindruck. Ohne Tour fällt dieser Eindruck dünn aus.' },
    ],
    stats: [
      { value: '+40%', label: 'mehr Leads mit virtueller Showroom-Tour' },
      { value: '+30%', label: 'höhere Online-Interaktion mit 360°-Showroom' },
      { value: '2×', label: 'mehr Interesse bei Google-Einträgen mit Tour' },
      { value: '24/7', label: 'Besichtigung möglich – auch sonntags um 22 Uhr' },
    ],
    sources: [
      { label: 'Travvir: Virtuelle Touren bringen rund 40% mehr Leads als reine Fotos (Automotive)', url: 'https://travvir.com/blog/en/virtual-tour-car-dealerships' },
      { label: 'Spyne: +30% Kundeninteraktion mit 3D-/360°-Showroom-Touren', url: 'https://www.spyne.ai/blogs/3d-virtual-tours-for-car-dealerships' },
      { label: 'Google/Ipsos «Impact of Search Listings»: 2× mehr Interesse mit virtueller Tour (CloudPano)', url: 'https://www.cloudpano.com/blog/how-google-street-view-tours-increase-foot-traffic-to-local-businesses' },
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
    roiTitle: 'Ein gebuchtes Event zahlt Ihre Tour',
    roiSteps: [
      { label: 'Investition (Eventlocation-Paket)', value: 'ab CHF 2\'990.– einmalig' },
      { label: 'Umsatz pro Event (Hochzeit, Anlass)', value: 'mehrere Tausend CHF' },
      { label: 'Break-even', value: '1 zusätzlicher Abschluss' },
    ],
    roiResult: 'Jede weitere Buchung ist Gewinn – plus gesparte Leerlauf-Besichtigungen.',
    comparisonTitle: 'Location mit vs. ohne Signature Tour',
    comparisonKicker: 'Der Unterschied',
    comparisonWithoutHead: 'Nur Fotos & Grundriss',
    comparisonRows: [
      { label: 'Besichtigungen', without: 'Viele Leerlauf-Termine', with: 'Vorqualifiziert – nur ernsthafte Anfragen' },
      { label: 'Raumwirkung', without: 'Fotos zeigen Proportionen nicht', with: 'Saal & Bühne wirklich erlebbar' },
      { label: 'Varianten', without: 'Ein Standardbild', with: 'Bankett, Konzert, Seminar umschaltbar' },
      { label: 'Unterlagen', without: 'Separate PDFs verschicken', with: 'Technik & Catering direkt in der Tour' },
      { label: 'Verfügbarkeit', without: 'Nur nach Terminabsprache', with: '24/7 begehbar' },
      { label: 'Bildqualität', without: 'Schnappschüsse', with: 'Profi-Aufnahmen, sauberer Boden (Nadir)' },
    ],
    packageName: 'Eventlocation-Paket',
    packagePrice: 'ab CHF 2\'990.–',
    packageFeatures: [
      'Signature-Tour der kompletten Location inkl. Aussenbereiche',
      'Tag-/Nacht-Modus, Video-Hotspots und Social-Media-Clips',
      'Anfrage-Hotspots und PDF-Integration (Technik, Catering, Pläne)',
      'Google-Business-Einbindung & Website-Einbettung',
      'Inkl. 12 Monate Signature Care (Betreuungsservice)',
      'Grosse Säle und Hallen: Pro-Linie ab CHF 4\'497.–',
      'Saisonales Update optional (CHF 180.– pro Szene / Saisonpaket CHF 650.–)',
    ],
    faqs: [
      { question: 'Können wir verschiedene Bestuhlungen zeigen?', answer: 'Ja. Wir fotografieren den Saal in mehreren Varianten (z.B. Bankett und Konzert) – Besucher schalten in der Tour zwischen den Ansichten um.' },
      { question: 'Was passiert nach einem Umbau oder neuer Deko?', answer: 'Einzelne Panoramen lassen sich ab CHF 180.– pro Szene aktualisieren, ohne die Tour neu zu erstellen. Ideal auch für saisonale Stimmungen.' },
      { question: 'Können Eventplaner die Tour in ihre Unterlagen einbauen?', answer: 'Ja. Die Tour ist per Link teilbar und per iFrame einbettbar – perfekt für Offerten, Pitch-Decks und Partner-Websites.' },
      { question: 'Wie lange dauert das Shooting?', answer: 'Je nach Grösse 2–4 Stunden, idealerweise wenn die Location eingerichtet und leer ist. Die fertige Tour liefern wir in 5–10 Arbeitstagen.' },
    ],
  },
}
