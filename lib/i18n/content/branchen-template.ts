import type { Locale } from '@/lib/i18n/config'

export interface BranchenTemplateStrings {
  heroTrust: string
  ctaBeratung: string
  ctaPaket: string
  challengeKicker: string
  challengeTitle: string
  statsKicker: string
  statsTitle: string
  sourcesLabel: string
  capturesKicker: string
  capturesTitle: string
  demoKicker: string
  demoTitle: string
  demoOpen: string
  comparisonKicker: string
  comparisonCrit: string
  comparisonWithout: string
  comparisonWith: string
  roiKicker: string
  packageKicker: string
  packageTitle: string
  packageRibbon: string
  packageNote: string
  packageCta: string
  packageCompare: string
  faqKicker: string
  faqTitle: string
  otherTitle: string
  finalKicker: string
  finalTitle: string
  finalText: string
  finalCta: string
  finalTrust: string
}

const de: BranchenTemplateStrings = {
  heroTrust: 'Unverbindlich · Antwort innert 24 Stunden · Die VR-Tour gehört Ihnen, kein Abo',
  ctaBeratung: 'Kostenlose Beratung',
  ctaPaket: 'Paket & Preis ansehen',
  challengeKicker: 'Die Herausforderung',
  challengeTitle: 'Kennen Sie das?',
  statsKicker: 'Was eine Signature Tour bewirkt',
  statsTitle: 'Zahlen statt Versprechen',
  sourcesLabel: 'Quellen',
  capturesKicker: 'Umfang',
  capturesTitle: 'Was wir erfassen',
  demoKicker: 'Sehen Sie selbst',
  demoTitle: 'Eine echte Signature Tour',
  demoOpen: 'VR-Tour öffnen',
  comparisonKicker: 'Der ehrliche Vergleich',
  comparisonCrit: 'Kriterium',
  comparisonWithout: 'Ohne Signatour',
  comparisonWith: 'Mit Signatour',
  roiKicker: 'Rechnet sich das?',
  packageKicker: 'Unser Vorschlag für Sie',
  packageTitle: 'Das passende Paket',
  packageRibbon: 'Empfohlen',
  packageNote: 'einmalig · die VR-Tour gehört Ihnen, kein Abo',
  packageCta: 'Kostenlose Beratung anfragen',
  packageCompare: 'Alle Pakete & Preise vergleichen',
  faqKicker: 'FAQ',
  faqTitle: 'Häufige Fragen',
  otherTitle: 'Auch interessant für andere Branchen',
  finalKicker: 'Bereit für den nächsten Schritt?',
  finalTitle: 'Machen wir aus Ihren Besuchern Kunden.',
  finalText: 'Ein unverbindliches Gespräch genügt, um zu klären, wie eine Signature Tour in Ihrem Betrieb mehr qualifizierte Anfragen erzeugt.',
  finalCta: 'Kostenlose Beratung',
  finalTrust: 'Unverbindlich · Antwort innert 24 Stunden · Persönlich durch den Inhaber',
}

const fr: BranchenTemplateStrings = {
  heroTrust: 'Sans engagement · Réponse sous 24 heures · La visite VR vous appartient, pas d’abonnement',
  ctaBeratung: 'Conseil gratuit',
  ctaPaket: 'Voir forfait & prix',
  challengeKicker: 'Le défi',
  challengeTitle: 'Cela vous parle ?',
  statsKicker: 'Ce qu’apporte une Signature Tour',
  statsTitle: 'Des chiffres, pas des promesses',
  sourcesLabel: 'Sources',
  capturesKicker: 'Étendue',
  capturesTitle: 'Ce que nous capturons',
  demoKicker: 'Voyez par vous-même',
  demoTitle: 'Une vraie Signature Tour',
  demoOpen: 'Ouvrir la visite VR',
  comparisonKicker: 'La comparaison honnête',
  comparisonCrit: 'Critère',
  comparisonWithout: 'Sans Signatour',
  comparisonWith: 'Avec Signatour',
  roiKicker: 'Est-ce rentable ?',
  packageKicker: 'Notre proposition pour vous',
  packageTitle: 'Le forfait adapté',
  packageRibbon: 'Recommandé',
  packageNote: 'une fois · la visite VR vous appartient, pas d’abonnement',
  packageCta: 'Demander un conseil gratuit',
  packageCompare: 'Comparer tous les forfaits & prix',
  faqKicker: 'FAQ',
  faqTitle: 'Questions fréquentes',
  otherTitle: 'Également intéressant pour d’autres secteurs',
  finalKicker: 'Prêt pour la prochaine étape ?',
  finalTitle: 'Transformons vos visiteurs en clients.',
  finalText: 'Un entretien sans engagement suffit pour déterminer comment une Signature Tour peut générer davantage de demandes qualifiées dans votre établissement.',
  finalCta: 'Conseil gratuit',
  finalTrust: 'Sans engagement · Réponse sous 24 heures · Personnellement par le propriétaire',
}

const en: BranchenTemplateStrings = {
  heroTrust: 'No obligation · Reply within 24 hours · The VR tour is yours, no subscription',
  ctaBeratung: 'Free consultation',
  ctaPaket: 'View package & price',
  challengeKicker: 'The challenge',
  challengeTitle: 'Sound familiar?',
  statsKicker: 'What a Signature Tour delivers',
  statsTitle: 'Numbers, not promises',
  sourcesLabel: 'Sources',
  capturesKicker: 'Scope',
  capturesTitle: 'What we capture',
  demoKicker: 'See for yourself',
  demoTitle: 'A real Signature Tour',
  demoOpen: 'Open tour',
  comparisonKicker: 'The honest comparison',
  comparisonCrit: 'Criterion',
  comparisonWithout: 'Without Signatour',
  comparisonWith: 'With Signatour',
  roiKicker: 'Does it pay off?',
  packageKicker: 'Our suggestion for you',
  packageTitle: 'The right package',
  packageRibbon: 'Recommended',
  packageNote: 'one-time · the VR tour is yours, no subscription',
  packageCta: 'Request a free consultation',
  packageCompare: 'Compare all packages & prices',
  faqKicker: 'FAQ',
  faqTitle: 'Frequently asked questions',
  otherTitle: 'Also interesting for other industries',
  finalKicker: 'Ready for the next step?',
  finalTitle: 'Let’s turn your visitors into customers.',
  finalText: 'One no-obligation conversation is enough to work out how a Signature Tour can generate more qualified enquiries for your business.',
  finalCta: 'Free consultation',
  finalTrust: 'No obligation · Reply within 24 hours · Personally from the owner',
}

export const branchenTemplateStrings: Record<Locale, BranchenTemplateStrings> = { de, fr, en }
