// RÉSIDENCE Les Aliziers (Crémines): Referenzfreigabe liegt vor (10/2026).
// Finale vtour.cloud-URL hier eintragen, sobald die Tour hochgeladen ist –
// dann zeigen Startseite, Pflegeheim-Seite und Referenztour-Modul sie automatisch.
// NEXT_PUBLIC_ALIZIERS_TOUR_URL überschreibt den Wert für lokale Vorschauen.
export const ALIZIERS_TOUR_URL: string = process.env.NEXT_PUBLIC_ALIZIERS_TOUR_URL || ''

// Einstieg in die 3D-Map-Übersicht (Aussenansicht mit Flugnavigation).
export const ALIZIERS_3D_NODE = 'node118'

export const aliziersEmbedUrl = (node: string = ALIZIERS_3D_NODE) =>
  ALIZIERS_TOUR_URL ? `${ALIZIERS_TOUR_URL.replace(/#.*$/, '')}#${node}` : ''
