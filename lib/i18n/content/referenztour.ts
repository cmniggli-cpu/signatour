import type { Locale } from '@/lib/i18n/config'

// Branchen-Kacheln des Referenztour-Moduls. REFERENZTOUR_BRANCHEN_DE wird
// immer im FormSubmit-Payload mitgeschickt (deutsch beschriftet für Marius),
// die Anzeige-Labels kommen aus referenztourContent[locale].branchen.
export const REFERENZTOUR_BRANCHEN = [
  'hotel',
  'restaurant',
  'spa-wellness',
  'fitnessstudio',
  'immobilien',
  'banken-versicherungen',
  'eventlocations',
  'pflegeheime',
  'andere',
] as const

export type ReferenztourBranche = (typeof REFERENZTOUR_BRANCHEN)[number]

export const REFERENZTOUR_BRANCHEN_DE: Record<ReferenztourBranche, string> = {
  hotel: 'Hotel',
  restaurant: 'Restaurant',
  'spa-wellness': 'Spa & Wellness',
  fitnessstudio: 'Fitnessstudio',
  immobilien: 'Immobilien',
  'banken-versicherungen': 'Bank / Versicherung / Kanzlei',
  eventlocations: 'Eventlocation / Showroom',
  pflegeheime: 'Alters-/Pflegeheim',
  andere: 'Andere Branche',
}

export interface ReferenztourTour {
  url: string
  title: string
  note: string
  // true = ähnlichstes Referenzobjekt einer anderen Branche (ehrlich beschriftet)
  fallback: boolean
}

export type ReferenztourTours = Record<ReferenztourBranche, ReferenztourTour | null>

export interface ReferenztourContent {
  kicker: string
  title: string
  subtitle: string
  step1Title: string
  step2Title: string
  branchen: Record<ReferenztourBranche, string>
  selectedLabel: string
  changeLabel: string
  expectTitle: string
  bullets: string[]
  labelName: string
  phName: string
  labelFirma: string
  phFirma: string
  labelEmail: string
  phEmail: string
  labelPhone: string
  submit: string
  submitting: string
  privacyText: string
  privacyLabel: string
  errName: string
  errFirma: string
  errEmail: string
  tourKicker: string
  tourTitle: string
  successNote: string
  fallbackNote: (branche: string) => string
  // Branchen, deren eigene Referenztour bereits in Fertigstellung ist
  // (z.B. Pflegeheime: RÉSIDENCE Les Aliziers, finale URL steht aus).
  pendingNotes: Partial<Record<ReferenztourBranche, string>>
  tourOpen: string
  ctaOffer: string
  ctaKonfigurator: string
}

const de: ReferenztourContent = {
  kicker: 'Referenztour',
  title: 'Referenztour für Ihre Branche ansehen',
  subtitle: 'Wählen Sie Ihre Branche – nach zwei kurzen Angaben sehen Sie sofort eine echte Signature Tour.',
  step1Title: '1 · Ihre Branche',
  step2Title: '2 · Ihre Kontaktdaten',
  branchen: {
    hotel: 'Hotel',
    restaurant: 'Restaurant',
    'spa-wellness': 'Spa & Wellness',
    fitnessstudio: 'Fitnessstudio',
    immobilien: 'Immobilien',
    'banken-versicherungen': 'Bank / Versicherung / Kanzlei',
    eventlocations: 'Eventlocation / Showroom',
    pflegeheime: 'Alters- & Pflegeheim',
    andere: 'Andere Branche',
  },
  selectedLabel: 'Branche',
  changeLabel: 'ändern',
  expectTitle: 'Was Sie erwartet',
  bullets: [
    'Sie sehen sofort eine echte Signature Tour Ihrer Branche – direkt hier, ohne Wartezeit.',
    'Unverbindliche Offerte innert 24 Stunden – persönlich vom Inhaber.',
    'Kein Abo, kein Risiko: Die VR-Tour gehört Ihnen.',
  ],
  labelName: 'Name',
  phName: 'Ihr Name',
  labelFirma: 'Firma',
  phFirma: 'Ihr Betrieb',
  labelEmail: 'E-Mail',
  phEmail: 'ihre@email.ch',
  labelPhone: 'Telefon (optional)',
  submit: 'Referenztour ansehen',
  submitting: 'Wird gesendet…',
  privacyText: 'Ihre Daten werden vertraulich behandelt und nur für die Offerte und Kontaktaufnahme verwendet.',
  privacyLabel: 'Datenschutz',
  errName: 'Bitte geben Sie Ihren Namen ein',
  errFirma: 'Bitte geben Sie Ihre Firma ein',
  errEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  tourKicker: 'Ihre Referenztour',
  tourTitle: 'Viel Vergnügen beim Rundgang',
  successNote: 'Danke! Ihre Angaben sind bei uns eingegangen – Sie erhalten innert 24 Stunden eine unverbindliche Offerte.',
  fallbackNote: (b) => `Aus der Branche «${b}» haben wir noch keine veröffentlichte Referenztour – Sie sehen hier unser ähnlichstes Referenzobjekt.`,
  pendingNotes: {
    pflegeheime: 'Die Referenztour aus einem Alters- und Pflegeheim ist in Fertigstellung. Bis dahin sehen Sie hier unser ähnlichstes Referenzobjekt in derselben Signature-Qualität.',
  },
  tourOpen: 'VR-Tour im Vollbild öffnen',
  ctaOffer: 'Offerte anfordern',
  ctaKonfigurator: 'Preis-Konfigurator öffnen',
}

const fr: ReferenztourContent = {
  kicker: 'Visite de référence',
  title: 'Voir une visite de référence de votre secteur',
  subtitle: 'Choisissez votre secteur – après deux brèves indications, vous découvrez immédiatement une vraie Signature Tour.',
  step1Title: '1 · Votre secteur',
  step2Title: '2 · Vos coordonnées',
  branchen: {
    hotel: 'Hôtel',
    restaurant: 'Restaurant',
    'spa-wellness': 'Spa & Wellness',
    fitnessstudio: 'Salle de fitness',
    immobilien: 'Immobilier',
    'banken-versicherungen': 'Banque / assurance / étude',
    eventlocations: 'Lieu d’événements / showroom',
    pflegeheime: 'EMS / résidence pour seniors',
    andere: 'Autre secteur',
  },
  selectedLabel: 'Secteur',
  changeLabel: 'modifier',
  expectTitle: 'Ce qui vous attend',
  bullets: [
    'Vous voyez immédiatement une vraie Signature Tour de votre secteur – directement ici, sans attente.',
    'Offre sans engagement sous 24 heures – personnellement par le propriétaire.',
    'Pas d’abonnement, aucun risque : la visite VR vous appartient.',
  ],
  labelName: 'Nom',
  phName: 'Votre nom',
  labelFirma: 'Entreprise',
  phFirma: 'Votre établissement',
  labelEmail: 'E-mail',
  phEmail: 'votre@email.ch',
  labelPhone: 'Téléphone (facultatif)',
  submit: 'Voir la visite de référence',
  submitting: 'Envoi en cours…',
  privacyText: 'Vos données sont traitées de manière confidentielle et utilisées uniquement pour l’offre et la prise de contact.',
  privacyLabel: 'Confidentialité',
  errName: 'Veuillez indiquer votre nom',
  errFirma: 'Veuillez indiquer votre entreprise',
  errEmail: 'Veuillez indiquer une adresse e-mail valide',
  tourKicker: 'Votre visite de référence',
  tourTitle: 'Bonne visite',
  successNote: 'Merci ! Vos indications nous sont bien parvenues – vous recevrez une offre sans engagement sous 24 heures.',
  fallbackNote: (b) => `Nous n’avons pas encore de visite de référence publiée pour le secteur « ${b} » – vous voyez ici notre objet de référence le plus proche.`,
  pendingNotes: {
    pflegeheime: 'La visite de référence d’un EMS est en cours de finalisation. D’ici là, vous voyez ici notre objet de référence le plus proche, dans la même qualité Signature.',
  },
  tourOpen: 'Ouvrir la visite VR en plein écran',
  ctaOffer: 'Demander une offre',
  ctaKonfigurator: 'Ouvrir le configurateur de prix',
}

const en: ReferenztourContent = {
  kicker: 'Reference tour',
  title: 'View a reference tour for your industry',
  subtitle: 'Choose your industry – after two quick details you will immediately see a real Signature Tour.',
  step1Title: '1 · Your industry',
  step2Title: '2 · Your contact details',
  branchen: {
    hotel: 'Hotel',
    restaurant: 'Restaurant',
    'spa-wellness': 'Spa & wellness',
    fitnessstudio: 'Fitness studio',
    immobilien: 'Real estate',
    'banken-versicherungen': 'Bank / insurance / law firm',
    eventlocations: 'Event venue / showroom',
    pflegeheime: 'Care home / senior residence',
    andere: 'Other industry',
  },
  selectedLabel: 'Industry',
  changeLabel: 'change',
  expectTitle: 'What to expect',
  bullets: [
    'You will immediately see a real Signature Tour from your industry – right here, no waiting.',
    'No-obligation quote within 24 hours – personally from the owner.',
    'No subscription, no risk: the VR tour is yours.',
  ],
  labelName: 'Name',
  phName: 'Your name',
  labelFirma: 'Company',
  phFirma: 'Your business',
  labelEmail: 'E-mail',
  phEmail: 'your@email.ch',
  labelPhone: 'Phone (optional)',
  submit: 'View reference tour',
  submitting: 'Sending…',
  privacyText: 'Your data is treated confidentially and used only for the quote and to get in touch.',
  privacyLabel: 'Privacy',
  errName: 'Please enter your name',
  errFirma: 'Please enter your company',
  errEmail: 'Please enter a valid e-mail address',
  tourKicker: 'Your reference tour',
  tourTitle: 'Enjoy the walk-through',
  successNote: 'Thank you! We have received your details – you will get a no-obligation quote within 24 hours.',
  fallbackNote: (b) => `We do not have a published reference tour from the “${b}” industry yet – this is our closest reference object.`,
  pendingNotes: {
    pflegeheime: 'The reference tour from a care home is currently being finalised. Until then, this is our closest reference object in the same Signature quality.',
  },
  tourOpen: 'Open the VR tour full screen',
  ctaOffer: 'Request a quote',
  ctaKonfigurator: 'Open the price configurator',
}

export const referenztourContent: Record<Locale, ReferenztourContent> = { de, fr, en }
