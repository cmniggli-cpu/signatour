export interface SearchEntry {
  title: string
  snippet: string
  href: string
  category: string
  keywords: string
}

export const SEARCH_INDEX: SearchEntry[] = [
  // Seiten
  { title: 'Startseite', snippet: 'Räume werden zum besten Verkäufer – digitale Verkaufserlebnisse rund um die Uhr.', href: '/', category: 'Seite', keywords: 'home start 360 signature tour verkauf erlebnis' },
  { title: 'Pakete & Preise', snippet: 'Basic CHF 990, Signature CHF 2\'497, Pro ab CHF 4\'497. Die Tour gehört Ihnen – Einmalpreis, kein Abo.', href: '/pakete', category: 'Seite', keywords: 'preis preise kosten paket pakete basic signature pro chf einmalpreis abo guenstig offerte' },
  { title: 'Über uns', snippet: 'Ihr Schweizer Partner für digitale Verkaufserlebnisse. Persönlich, transparent, lokal.', href: '/ueber-uns', category: 'Seite', keywords: 'ueber uns marius niggli inhaber team schweizer partner werte mission pano2vr' },
  { title: 'Häufige Fragen (FAQ)', snippet: 'Antworten zu Kosten, Technik, Datenschutz, Ablauf und mehr.', href: '/faq', category: 'Seite', keywords: 'faq fragen antworten hilfe ablauf' },
  { title: 'Kontakt & kostenlose Beratung', snippet: 'Unverbindliche Beratung, Antwort innert 24 Stunden, persönlich durch den Inhaber.', href: '/kontakt', category: 'Seite', keywords: 'kontakt beratung anfrage telefon email termin offerte gespraech' },
  { title: 'Paket-Konfigurator', snippet: 'In 4 Schritten zur unverbindlichen Preis-Einschätzung.', href: '/konfigurator.html', category: 'Tool', keywords: 'konfigurator rechner preis einschaetzung offerte zusammenstellen' },

  // Branchen
  { title: 'Hotels & Resorts', snippet: 'Mehr Direktbuchungen, weniger OTA-Provisionen.', href: '/branchen/hotel', category: 'Branche', keywords: 'hotel hotels resort booking ota direktbuchung zimmer lobby gastgewerbe hospitality' },
  { title: 'Restaurants & Gastronomie', snippet: 'Ambiente zeigen, mehr Reservierungen, Google-Sichtbarkeit.', href: '/branchen/restaurant', category: 'Branche', keywords: 'restaurant gastro gastronomie reservierung ambiente terrasse bar kueche' },
  { title: 'Spa & Wellness', snippet: 'Wohlfühl-Atmosphäre online erlebbar machen.', href: '/branchen/spa-wellness', category: 'Branche', keywords: 'spa wellness sauna therme massage ruhe pool behandlung kosmetik' },
  { title: 'Fitnessstudios', snippet: 'Hemmschwelle für Erstbesucher senken, mehr Probetrainings.', href: '/branchen/fitnessstudio', category: 'Branche', keywords: 'fitness fitnessstudio gym training studio probetraining mitglied' },
  { title: 'Immobilien & Makler', snippet: 'Weniger Besichtigungstourismus, mehr qualifizierte Interessenten.', href: '/branchen/immobilien', category: 'Branche', keywords: 'immobilien makler objekt wohnung haus besichtigung verkauf vermietung homegate immoscout makler-vorteilskarte' },
  { title: 'Banken, Versicherungen & Kanzleien', snippet: 'Vertrauen schaffen, bevor der erste Termin gebucht wird.', href: '/branchen/banken-versicherungen', category: 'Branche', keywords: 'bank banken versicherung kanzlei anwalt treuhand beratung diskretion vertrauen dienstleister' },
  { title: 'Eventlocations & Showrooms', snippet: 'Säle, Locations und Showrooms vor der Anfrage erlebbar machen.', href: '/branchen/eventlocations', category: 'Branche', keywords: 'event eventlocation location saal hochzeit seminar showroom ausstellung autohaus moebel' },

  // Themen / FAQ
  { title: 'Was kostet eine Tour?', snippet: 'Fixpakete ab CHF 990 – die Tour gehört Ihnen, kein Abo.', href: '/pakete', category: 'Thema', keywords: 'preis kosten guenstig wieviel chf budget' },
  { title: 'Optionale Add-ons & Erweiterungen', snippet: 'Virtual Staging, Lead-Capture, Google Street View, Social-Clips, Audio-Guide und mehr.', href: '/pakete', category: 'Thema', keywords: 'add-on addon erweiterung virtual staging lead capture street view social media audio guide grundriss dollhouse qr nadir' },
  { title: 'Nadir-Patch – sauberer Boden', snippet: 'Boden unter der Kamera zu 95% retuschiert, optional 100% – sauberer als Matterport.', href: '/faq', category: 'Thema', keywords: 'nadir boden stativ fleck retusche matterport blur logo' },
  { title: 'Vergleich mit Matterport & Ogulo', snippet: 'Ihre Tour gehört Ihnen statt Abo, Done-for-You, Datenhoheit, sauberer Nadir.', href: '/', category: 'Thema', keywords: 'matterport ogulo vergleich konkurrenz abo alternative unterschied' },
  { title: 'Datenschutz & DSGVO', snippet: 'CH/EU-Hosting, Aufnahmen ohne Personen, AVV inklusive.', href: '/faq', category: 'Thema', keywords: 'dsgvo datenschutz avv hosting schweiz eu sicher daten privatsphaere' },
  { title: 'Doppelte Garantie', snippet: 'Qualitäts- und Marken-Garantie – handveredelte Panoramen, exakt in Ihrem Corporate Design.', href: '/pakete', category: 'Thema', keywords: 'garantie risiko sicherheit qualitaet marke corporate design korrekturrunden' },
  { title: 'Auf welchen Geräten?', snippet: 'Smartphone, Tablet, Desktop, TV und VR-Brille – ohne App.', href: '/faq', category: 'Thema', keywords: 'vr brille mobile smartphone tablet desktop tv geraet app responsive' },
  { title: 'Mehrsprachige Touren (DE/FR/EN)', snippet: 'Tour in mehreren Sprachen erlebbar – mehr Reichweite.', href: '/pakete', category: 'Thema', keywords: 'mehrsprachig sprache franzoesisch englisch deutsch fr en uebersetzung' },
  { title: 'Google Street View & Business', snippet: 'Tour direkt in Google Maps und im Unternehmensprofil.', href: '/pakete', category: 'Thema', keywords: 'google street view maps business profil sichtbarkeit lokal seo' },
  { title: 'Referenz-Touren ansehen', snippet: 'Beispiele echter Signature Tours.', href: '/#referenzen', category: 'Thema', keywords: 'referenz beispiel demo tour ansehen muster portfolio' },
]
