import type { Locale } from '@/lib/i18n/config'
import { INDUSTRIES_DROPDOWN } from '@/lib/constants'

export interface KontaktContent {
  hero: { badge: string; title: string; subtitle: string }
  formTitle: string
  info: {
    telefonTitle: string
    telefonSub: string
    emailTitle: string
    emailSub: string
    gebietTitle: string
    gebietText: string
    gebietSub: string
    antwortTitle: string
    antwortText: string
    versprechenTitle: string
    versprechenText: string
  }
  cta: { title: string; subtitle: string; buttonText: string }
  form: {
    industries: string[]
    labelName: string
    phName: string
    labelEmail: string
    phEmail: string
    labelPhone: string
    labelIndustry: string
    labelArea: string
    phArea: string
    labelMessage: string
    phMessage: string
    agbBefore: string
    agbLink: string
    agbAfter: string
    submit: string
    submitting: string
    trustLine: string
    privacyLabel: string
    successTitle: string
    successText: string
    errName: string
    errEmail: string
    errAgb: string
  }
}

const de: KontaktContent = {
  hero: {
    badge: 'Kostenlose Beratung',
    title: 'Lassen Sie uns sprechen',
    subtitle: 'Unverbindlich und ehrlich: Wir klären gemeinsam, ob sich eine Signature Tour für Ihren Betrieb rechnet – Antwort innert 24 Stunden, persönlich durch den Inhaber.',
  },
  formTitle: 'Anfrage senden',
  info: {
    telefonTitle: 'Telefon',
    telefonSub: 'Beratung verfügbar',
    emailTitle: 'E-Mail',
    emailSub: 'Antwort innert Stunden',
    gebietTitle: 'Servicegebiet',
    gebietText: 'Deutsch- und französischsprachige Schweiz',
    gebietSub: 'Beratung & Aufträge auf: Deutsch, Französisch & Englisch',
    antwortTitle: 'Antwortzeit',
    antwortText: 'Innerhalb von 24 Stunden',
    versprechenTitle: 'Unser Versprechen',
    versprechenText: 'Unverbindlich, ehrliche Beratung – auch wenn eine Tour gerade keinen Sinn macht.',
  },
  cta: { title: 'Lieber direkt sprechen?', subtitle: 'Rufen Sie uns an oder schreiben Sie eine E-Mail.', buttonText: 'Jetzt anrufen' },
  form: {
    industries: INDUSTRIES_DROPDOWN,
    labelName: 'Name',
    phName: 'Ihr Name',
    labelEmail: 'E-Mail',
    phEmail: 'ihre@email.ch',
    labelPhone: 'Telefon',
    labelIndustry: 'Branche',
    labelArea: 'Ungefähre Fläche in m²',
    phArea: 'z.B. 200',
    labelMessage: 'Nachricht / Anmerkungen',
    phMessage: 'Erzählen Sie uns von Ihrem Projekt...',
    agbBefore: 'Ich akzeptiere die',
    agbLink: 'Allgemeinen Geschäftsbedingungen (AGB)',
    agbAfter: 'für die angefragten Dienstleistungen inkl. Pakete.',
    submit: 'Kostenlose Beratung anfragen',
    submitting: 'Wird gesendet...',
    trustLine: 'Unverbindlich · Antwort innert 24 Stunden · Ihre Daten werden vertraulich behandelt',
    privacyLabel: 'Datenschutz',
    successTitle: 'Vielen Dank für Ihre Anfrage!',
    successText: 'Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.',
    errName: 'Bitte geben Sie Ihren Namen ein',
    errEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    errAgb: 'Bitte akzeptieren Sie die AGB',
  },
}

const fr: KontaktContent = {
  hero: {
    badge: 'Conseil gratuit',
    title: 'Parlons-en',
    subtitle: 'Sans engagement et en toute honnêteté : nous déterminons ensemble si une Signature Tour est rentable pour votre établissement – réponse sous 24 heures, personnellement par le propriétaire.',
  },
  formTitle: 'Envoyer une demande',
  info: {
    telefonTitle: 'Téléphone',
    telefonSub: 'Conseil disponible',
    emailTitle: 'E-mail',
    emailSub: 'Réponse en quelques heures',
    gebietTitle: 'Zone de service',
    gebietText: 'Suisse alémanique et romande',
    gebietSub: 'Conseil & mandats en : allemand, français & anglais',
    antwortTitle: 'Délai de réponse',
    antwortText: 'Sous 24 heures',
    versprechenTitle: 'Notre promesse',
    versprechenText: 'Un conseil honnête et sans engagement – même si une visite n’a pas de sens pour le moment.',
  },
  cta: { title: 'Vous préférez en parler directement ?', subtitle: 'Appelez-nous ou écrivez-nous un e-mail.', buttonText: 'Appeler maintenant' },
  form: {
    industries: ['Hôtel', 'Restaurant', 'Spa / Wellness', 'Salle de fitness', 'Immobilier', 'Banque / assurance / étude', 'Lieu d’événements / showroom', 'Autre'],
    labelName: 'Nom',
    phName: 'Votre nom',
    labelEmail: 'E-mail',
    phEmail: 'votre@email.ch',
    labelPhone: 'Téléphone',
    labelIndustry: 'Secteur',
    labelArea: 'Surface approximative en m²',
    phArea: 'p. ex. 200',
    labelMessage: 'Message / remarques',
    phMessage: 'Parlez-nous de votre projet...',
    agbBefore: 'J’accepte les',
    agbLink: 'conditions générales de vente (CGV)',
    agbAfter: 'pour les prestations demandées, forfaits compris.',
    submit: 'Demander un conseil gratuit',
    submitting: 'Envoi en cours...',
    trustLine: 'Sans engagement · Réponse sous 24 heures · Vos données sont traitées de manière confidentielle',
    privacyLabel: 'Confidentialité',
    successTitle: 'Merci pour votre demande !',
    successText: 'Nous vous répondons personnellement sous 24 heures.',
    errName: 'Veuillez indiquer votre nom',
    errEmail: 'Veuillez indiquer une adresse e-mail valide',
    errAgb: 'Veuillez accepter les CGV',
  },
}

const en: KontaktContent = {
  hero: {
    badge: 'Free consultation',
    title: 'Let’s talk',
    subtitle: 'No obligation and honest: together we will work out whether a Signature Tour pays off for your business – reply within 24 hours, personally from the owner.',
  },
  formTitle: 'Send an enquiry',
  info: {
    telefonTitle: 'Phone',
    telefonSub: 'Consultation available',
    emailTitle: 'E-mail',
    emailSub: 'Reply within hours',
    gebietTitle: 'Service area',
    gebietText: 'German- and French-speaking Switzerland',
    gebietSub: 'Consulting & projects in: German, French & English',
    antwortTitle: 'Response time',
    antwortText: 'Within 24 hours',
    versprechenTitle: 'Our promise',
    versprechenText: 'No obligation, honest advice – even if a tour does not make sense for you right now.',
  },
  cta: { title: 'Prefer to talk directly?', subtitle: 'Give us a call or write an e-mail.', buttonText: 'Call now' },
  form: {
    industries: ['Hotel', 'Restaurant', 'Spa / wellness', 'Fitness studio', 'Real estate', 'Bank / insurance / law firm', 'Event venue / showroom', 'Other'],
    labelName: 'Name',
    phName: 'Your name',
    labelEmail: 'E-mail',
    phEmail: 'your@email.ch',
    labelPhone: 'Phone',
    labelIndustry: 'Industry',
    labelArea: 'Approximate area in m²',
    phArea: 'e.g. 200',
    labelMessage: 'Message / notes',
    phMessage: 'Tell us about your project...',
    agbBefore: 'I accept the',
    agbLink: 'general terms and conditions (T&C)',
    agbAfter: 'for the requested services including packages.',
    submit: 'Request a free consultation',
    submitting: 'Sending...',
    trustLine: 'No obligation · Reply within 24 hours · Your data is treated confidentially',
    privacyLabel: 'Privacy',
    successTitle: 'Thank you for your enquiry!',
    successText: 'We will get back to you personally within 24 hours.',
    errName: 'Please enter your name',
    errEmail: 'Please enter a valid e-mail address',
    errAgb: 'Please accept the terms and conditions',
  },
}

export const kontaktContent: Record<Locale, KontaktContent> = { de, fr, en }
