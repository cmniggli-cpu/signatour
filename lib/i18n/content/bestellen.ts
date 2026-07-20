import type { Locale } from '@/lib/i18n/config'
import { ORDER_PACKAGES, ORDER_OPTIONS, ORDER_SERVICES, type OrderPackage, type OrderOption, type OrderService } from '@/lib/constants'

export interface BestellenContent {
  hero: { badge: string; title: string; subtitle: string }
  packages: OrderPackage[]
  options: OrderOption[]
  services: OrderService[]
  steps: { paket: string; optionen: string; optionenHint: string; service: string; serviceHint: string; serviceIntro: string; angaben: string }
  spaeter: { title: string; sub: string }
  empfohlen: string
  moreOptions: string
  labels: { name: string; firma: string; email: string; tel: string; adresse: string; msg: string; phName: string; phFirma: string; phEmail: string; phAdresse: string; phMsg: string }
  summary: {
    title: string
    serviceLine: string
    investition: string
    fussInklusive: string
    fussDanach: (svc: string, price: string) => string
    fussOptional: string
    fussOfferte: string
    agbBefore: string
    agbLink: string
    agbAfter: string
    agbError: string
    submit: string
    submitting: string
    trust1: string
    trust2: string
    trust3: string
  }
  done: { title: string; text1: (pkg: string) => string; callLabel: string }
  ab: string
}

const de: BestellenContent = {
  hero: {
    badge: 'Bestellung',
    title: 'Paket bestellen',
    subtitle: 'In einem Schritt zur Bestellung – wir bestätigen innert 24 Stunden mit verbindlicher Offerte. 50% Anzahlung erst bei Auftragsbestätigung.',
  },
  packages: ORDER_PACKAGES,
  options: ORDER_OPTIONS,
  services: ORDER_SERVICES,
  steps: {
    paket: '1 · Paket wählen',
    optionen: '2 · Optionen',
    optionenHint: '(optional)',
    service: '3 · Servicepaket ab dem 2. Jahr',
    serviceHint: '(optional)',
    serviceIntro: 'Im Paketpreis sind bereits 12 Monate Service inklusive. Wählen Sie, wie es danach weitergehen soll – jederzeit kündbar.',
    angaben: '4 · Ihre Angaben',
  },
  spaeter: { title: 'Später entscheiden', sub: 'Wir beraten Sie im Gespräch.' },
  empfohlen: 'Empfohlen',
  moreOptions: 'Weitere Erweiterungen besprechen wir gerne im Gespräch.',
  labels: {
    name: 'Name', firma: 'Firma / Betrieb', email: 'E-Mail', tel: 'Telefon', adresse: 'Rechnungsadresse', msg: 'Nachricht / Wünsche',
    phName: 'Vor- und Nachname', phFirma: 'Name Ihres Betriebs', phEmail: 'name@firma.ch', phAdresse: 'Strasse, PLZ, Ort', phMsg: 'Etwas, das wir wissen sollten?',
  },
  summary: {
    title: 'Bestellübersicht',
    serviceLine: 'Servicepaket ab 2. Jahr:',
    investition: 'Geschätzte Investition',
    fussInklusive: 'einmalig · 12 Monate Service inklusive',
    fussDanach: (svc, price) => ` · danach ${svc} (${price})`,
    fussOptional: ' · Servicepaket danach optional ab CHF 120.– / Jahr',
    fussOfferte: ' · verbindliche Offerte folgt',
    agbBefore: 'Ich akzeptiere die',
    agbLink: 'Allgemeinen Geschäftsbedingungen (AGB)',
    agbAfter: 'für die bestellten Dienstleistungen inkl. Pakete.',
    agbError: 'Bitte akzeptieren Sie die AGB, um die Bestellung abzusenden.',
    submit: 'Bestellung absenden',
    submitting: 'Wird gesendet…',
    trust1: '50% Anzahlung erst bei Auftragsbestätigung',
    trust2: 'Einmalpreis, kein Abo · Antwort innert 24 h',
    trust3: 'Lieber sprechen?',
  },
  done: {
    title: 'Vielen Dank für Ihre Bestellung',
    text1: (pkg) => `Ihre Bestellung für das ${pkg} ist bei uns eingegangen. Wir melden uns innert 24 Stunden persönlich mit der Auftragsbestätigung und den nächsten Schritten.`,
    callLabel: 'Lieber direkt sprechen?',
  },
  ab: 'ab ',
}

const fr: BestellenContent = {
  hero: {
    badge: 'Commande',
    title: 'Commander un forfait',
    subtitle: 'Votre commande en une seule étape – nous confirmons sous 24 heures avec une offre ferme. Acompte de 50% seulement à la confirmation de commande.',
  },
  packages: [
    { id: 'basic', name: 'Basic', price: 'CHF 990.–', from: 990 },
    { id: 'signature', name: 'Signature', price: 'CHF 2\'497.–', from: 2497 },
    { id: 'pro', name: 'Pro', price: 'dès CHF 4\'497.–', from: 4497, approx: true },
    { id: 'immo-einzel', name: 'Immobilier – objet individuel', price: 'CHF 2\'497.– par objet', from: 2497 },
    { id: 'immo-5', name: 'Immobilier – carte avantage 5', price: 'CHF 9\'990.–', from: 9990 },
    { id: 'immo-10', name: 'Immobilier – carte avantage 10', price: 'CHF 16\'230.–', from: 16230 },
    { id: 'hotel', name: 'Hôtel & resort', price: 'dès CHF 3\'490.–', from: 3490, approx: true },
    { id: 'spa', name: 'Spa & wellness', price: 'dès CHF 3\'490.–', from: 3490, approx: true },
    { id: 'restaurant', name: 'Restaurant & gastronomie', price: 'dès CHF 2\'890.–', from: 2890, approx: true },
    { id: 'fitness', name: 'Fitness', price: 'dès CHF 2\'890.–', from: 2890, approx: true },
    { id: 'banken', name: 'Banque / assurance / étude (1 site)', price: 'dès CHF 2\'497.– par site', from: 2497, approx: true },
    { id: 'event', name: 'Lieu d’événements & showroom', price: 'dès CHF 2\'990.–', from: 2990, approx: true },
  ],
  options: [
    { id: 'sprachen', name: 'Multilingue (DE / FR / EN)', price: '+ dès CHF 300.– par langue', add: 300, approx: true },
    { id: 'street', name: 'Google Street View & intégration Business', price: '+ CHF 490.–', add: 490 },
    { id: 'lead', name: 'Formulaire de capture de leads dans la visite VR', price: '+ CHF 390.–', add: 390 },
    { id: 'nadir', name: 'Patch nadir 100% – visite complète (sol impeccable)', price: '+ CHF 299.– forfait', add: 299 },
    { id: 'tagnacht', name: 'Mode jour/nuit', price: '+ dès CHF 180.– par scène', add: 180, approx: true },
  ],
  services: [
    { id: 'basic-service', name: 'Basic Service', price: 'CHF 120.– / an', perYear: 120 },
    { id: 'care', name: 'Signature Care', price: 'CHF 360.– / an', perYear: 360, recommended: true },
    { id: 'evolution', name: 'Signature Evolution', price: 'CHF 600.– / an', perYear: 600 },
  ],
  steps: {
    paket: '1 · Choisir le forfait',
    optionen: '2 · Options',
    optionenHint: '(facultatif)',
    service: '3 · Forfait de service dès la 2e année',
    serviceHint: '(facultatif)',
    serviceIntro: 'Le prix du forfait inclut déjà 12 mois de service. Choisissez la suite – résiliable à tout moment.',
    angaben: '4 · Vos coordonnées',
  },
  spaeter: { title: 'Décider plus tard', sub: 'Nous vous conseillons lors de l’entretien.' },
  empfohlen: 'Recommandé',
  moreOptions: 'Nous discutons volontiers d’autres extensions lors de l’entretien.',
  labels: {
    name: 'Nom', firma: 'Entreprise / établissement', email: 'E-mail', tel: 'Téléphone', adresse: 'Adresse de facturation', msg: 'Message / souhaits',
    phName: 'Prénom et nom', phFirma: 'Nom de votre établissement', phEmail: 'nom@entreprise.ch', phAdresse: 'Rue, NPA, localité', phMsg: 'Quelque chose que nous devrions savoir ?',
  },
  summary: {
    title: 'Récapitulatif de commande',
    serviceLine: 'Forfait de service dès la 2e année :',
    investition: 'Investissement estimé',
    fussInklusive: 'une fois · 12 mois de service inclus',
    fussDanach: (svc, price) => ` · ensuite ${svc} (${price})`,
    fussOptional: ' · forfait de service ensuite optionnel dès CHF 120.– / an',
    fussOfferte: ' · une offre ferme suit',
    agbBefore: 'J’accepte les',
    agbLink: 'conditions générales de vente (CGV)',
    agbAfter: 'pour les prestations commandées, forfaits compris.',
    agbError: 'Veuillez accepter les CGV pour envoyer la commande.',
    submit: 'Envoyer la commande',
    submitting: 'Envoi en cours…',
    trust1: 'Acompte de 50% seulement à la confirmation de commande',
    trust2: 'Prix unique, pas d’abonnement · Réponse sous 24 h',
    trust3: 'Vous préférez en parler ?',
  },
  done: {
    title: 'Merci pour votre commande',
    text1: (pkg) => `Votre commande pour le forfait ${pkg} nous est bien parvenue. Nous vous contactons personnellement sous 24 heures avec la confirmation de commande et les prochaines étapes.`,
    callLabel: 'Vous préférez en parler directement ?',
  },
  ab: 'dès ',
}

const en: BestellenContent = {
  hero: {
    badge: 'Order',
    title: 'Order a package',
    subtitle: 'Order in a single step – we confirm within 24 hours with a binding offer. 50% deposit only upon order confirmation.',
  },
  packages: [
    { id: 'basic', name: 'Basic', price: 'CHF 990.–', from: 990 },
    { id: 'signature', name: 'Signature', price: 'CHF 2\'497.–', from: 2497 },
    { id: 'pro', name: 'Pro', price: 'from CHF 4\'497.–', from: 4497, approx: true },
    { id: 'immo-einzel', name: 'Real estate – single property', price: 'CHF 2\'497.– per property', from: 2497 },
    { id: 'immo-5', name: 'Real estate – 5-tour card', price: 'CHF 9\'990.–', from: 9990 },
    { id: 'immo-10', name: 'Real estate – 10-tour card', price: 'CHF 16\'230.–', from: 16230 },
    { id: 'hotel', name: 'Hotel & resort', price: 'from CHF 3\'490.–', from: 3490, approx: true },
    { id: 'spa', name: 'Spa & wellness', price: 'from CHF 3\'490.–', from: 3490, approx: true },
    { id: 'restaurant', name: 'Restaurant & gastronomy', price: 'from CHF 2\'890.–', from: 2890, approx: true },
    { id: 'fitness', name: 'Fitness', price: 'from CHF 2\'890.–', from: 2890, approx: true },
    { id: 'banken', name: 'Bank / insurance / law firm (1 location)', price: 'from CHF 2\'497.– per location', from: 2497, approx: true },
    { id: 'event', name: 'Event venue & showroom', price: 'from CHF 2\'990.–', from: 2990, approx: true },
  ],
  options: [
    { id: 'sprachen', name: 'Multilingual (DE / FR / EN)', price: '+ from CHF 300.– per language', add: 300, approx: true },
    { id: 'street', name: 'Google Street View & business integration', price: '+ CHF 490.–', add: 490 },
    { id: 'lead', name: 'Lead capture form inside the VR tour', price: '+ CHF 390.–', add: 390 },
    { id: 'nadir', name: 'Nadir patch 100% – whole tour (flawless floor)', price: '+ CHF 299.– flat', add: 299 },
    { id: 'tagnacht', name: 'Day/night mode', price: '+ from CHF 180.– per scene', add: 180, approx: true },
  ],
  services: [
    { id: 'basic-service', name: 'Basic Service', price: 'CHF 120.– / year', perYear: 120 },
    { id: 'care', name: 'Signature Care', price: 'CHF 360.– / year', perYear: 360, recommended: true },
    { id: 'evolution', name: 'Signature Evolution', price: 'CHF 600.– / year', perYear: 600 },
  ],
  steps: {
    paket: '1 · Choose a package',
    optionen: '2 · Options',
    optionenHint: '(optional)',
    service: '3 · Service package from year 2',
    serviceHint: '(optional)',
    serviceIntro: 'The package price already includes 12 months of service. Choose how to continue afterwards – cancellable at any time.',
    angaben: '4 · Your details',
  },
  spaeter: { title: 'Decide later', sub: 'We will advise you in the consultation.' },
  empfohlen: 'Recommended',
  moreOptions: 'We are happy to discuss further add-ons in a conversation.',
  labels: {
    name: 'Name', firma: 'Company / business', email: 'E-mail', tel: 'Phone', adresse: 'Billing address', msg: 'Message / wishes',
    phName: 'First and last name', phFirma: 'Name of your business', phEmail: 'name@company.ch', phAdresse: 'Street, postcode, town', phMsg: 'Anything we should know?',
  },
  summary: {
    title: 'Order summary',
    serviceLine: 'Service package from year 2:',
    investition: 'Estimated investment',
    fussInklusive: 'one-time · 12 months of service included',
    fussDanach: (svc, price) => ` · thereafter ${svc} (${price})`,
    fussOptional: ' · service package thereafter optional from CHF 120.– / year',
    fussOfferte: ' · a binding offer follows',
    agbBefore: 'I accept the',
    agbLink: 'general terms and conditions (T&C)',
    agbAfter: 'for the ordered services including packages.',
    agbError: 'Please accept the terms and conditions to submit the order.',
    submit: 'Submit order',
    submitting: 'Sending…',
    trust1: '50% deposit only upon order confirmation',
    trust2: 'One-time price, no subscription · Reply within 24 h',
    trust3: 'Prefer to talk?',
  },
  done: {
    title: 'Thank you for your order',
    text1: (pkg) => `Your order for the ${pkg} package has been received. We will contact you personally within 24 hours with the order confirmation and the next steps.`,
    callLabel: 'Prefer to talk directly?',
  },
  ab: 'from ',
}

export const bestellenContent: Record<Locale, BestellenContent> = { de, fr, en }
