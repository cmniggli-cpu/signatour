import type { Locale } from '@/lib/i18n/config'
import { UEBER_UNS_REASONS, UEBER_UNS_VALUES } from '@/lib/constants'

export interface UeberUnsContent {
  hero: { badge: string; title: string; subtitle: string }
  mission: { kicker: string; title: string; text: string }
  partner: { kicker: string; title: string; text: string }
  reasons: { kicker: string; title: string; items: { title: string; description: string }[] }
  tech: { kicker: string; title: string; intro: string; points: string[] }
  values: { kicker: string; title: string; items: { title: string; description: string }[] }
}

const de: UeberUnsContent = {
  hero: {
    badge: 'Über Signatour',
    title: 'Ihr Schweizer Partner für digitale Verkaufserlebnisse',
    subtitle: 'Wir verkaufen keine Technik. Wir machen Ihr stärkstes Verkaufsargument – Ihre Räumlichkeiten – online erlebbar, damit aus Besuchern Kunden werden.',
  },
  mission: {
    kicker: 'Unsere Mission',
    title: 'Wir machen das stärkste Verkaufsargument von KMUs – ihre Räumlichkeiten – online erlebbar.',
    text: 'KMU-Inhaberinnen und Inhaber haben 14-Stunden-Tage. Sie verdienen einen Partner, der kommt, professionell arbeitet und ein fertiges Ergebnis liefert.',
  },
  partner: {
    kicker: 'Ihr Ansprechpartner',
    title: 'Marius Niggli – Gründer & Inhaber',
    text: 'Vom ersten Gespräch über das Shooting bis zur fertigen Tour: Sie sprechen immer mit derselben Person – kein Callcenter, kein Ticket-System. Wer mit Herzblut arbeitet, bindet Kunden durch Qualität, nicht durch Verträge.',
  },
  reasons: { kicker: 'Warum Signatour', title: '9 Gründe für Signatour', items: UEBER_UNS_REASONS },
  tech: {
    kicker: 'Technologie',
    title: 'Professionelle Software aus Europa',
    intro: 'Wir arbeiten mit Pano2VR von Garden Gnome Software – einem Wiener Unternehmen mit über 15 Jahren Entwicklungserfahrung.',
    points: [
      'Keine Cloud-Abhängigkeit',
      'Kein Vendor Lock-in',
      'Volle Datenkontrolle',
      'Europäische Software mit DSGVO-Konformität',
      'Überlegene Tour-Qualität vs. Cloud-Lösungen',
    ],
  },
  values: { kicker: 'Unsere Werte', title: 'Woran wir glauben', items: UEBER_UNS_VALUES },
}

const fr: UeberUnsContent = {
  hero: {
    badge: 'À propos de Signatour',
    title: 'Votre partenaire suisse pour des expériences de vente numériques',
    subtitle: 'Nous ne vendons pas de la technique. Nous rendons votre meilleur argument de vente – vos espaces – accessible en ligne, pour que les visiteurs deviennent des clients.',
  },
  mission: {
    kicker: 'Notre mission',
    title: 'Nous rendons le meilleur argument de vente des PME – leurs espaces – accessible en ligne.',
    text: 'Les propriétaires de PME ont des journées de 14 heures. Ils méritent un partenaire qui vient sur place, travaille de manière professionnelle et livre un résultat clé en main.',
  },
  partner: {
    kicker: 'Votre interlocuteur',
    title: 'Marius Niggli – fondateur & propriétaire',
    text: 'Du premier entretien à la visite terminée, en passant par la prise de vue : vous parlez toujours à la même personne – pas de centre d’appels, pas de système de tickets. Qui travaille avec passion fidélise ses clients par la qualité, pas par des contrats.',
  },
  reasons: {
    kicker: 'Pourquoi Signatour',
    title: '9 raisons de choisir Signatour',
    items: [
      { title: 'Done-for-You plutôt que DIY', description: 'Nous venons, photographions et livrons. Zéro effort pour vous.' },
      { title: 'Transparent plutôt que caché', description: 'Prix unique, pas d’abonnement – la visite vous appartient, aucune location de plateforme.' },
      { title: 'Local plutôt que cloud américain', description: 'Serveurs suisses/UE, conformité RGPD.' },
      { title: 'Multi-secteurs plutôt qu’immobilier seul', description: 'Hôtels, restaurants, spas, fitness, immobilier.' },
      { title: 'Flexible plutôt que contrat longue durée', description: 'Aucune durée minimale, aucun délai de résiliation.' },
      { title: 'Optimisation continue plutôt qu’immobilisme', description: 'Votre visite évolue – mises à jour, nouvelles scènes et extensions à tout moment.' },
      { title: 'Sol impeccable plutôt que tache de trépied', description: 'Le nadir est retouché à 95% proprement – sur demande à 100% ou avec votre logo.' },
      { title: 'Instrument de vente plutôt que gadget', description: 'Liens de réservation, formulaires de contact et intégration Google transforment les visiteurs en demandes.' },
      { title: 'Mesurable plutôt qu’à l’aveugle', description: 'Vues, durée de visite et clics sur les points de réservation – vous voyez ce que votre visite rapporte.' },
    ],
  },
  tech: {
    kicker: 'Technologie',
    title: 'Un logiciel professionnel européen',
    intro: 'Nous travaillons avec Pano2VR de Garden Gnome Software – une entreprise viennoise avec plus de 15 ans d’expérience de développement.',
    points: [
      'Aucune dépendance au cloud',
      'Pas de verrouillage propriétaire',
      'Contrôle total des données',
      'Logiciel européen conforme au RGPD',
      'Qualité de visite supérieure aux solutions cloud',
    ],
  },
  values: {
    kicker: 'Nos valeurs',
    title: 'Ce en quoi nous croyons',
    items: [
      { title: 'Honnêteté', description: 'Un conseil honnête, aucune pression commerciale, aucune promesse exagérée.' },
      { title: 'Qualité', description: 'Équipement professionnel, post-production soignée, livraison seulement quand nous sommes satisfaits.' },
      { title: 'Partenariat', description: 'Fidéliser par la qualité, pas par des contrats. Pas de verrouillage, pas de dépendance.' },
    ],
  },
}

const en: UeberUnsContent = {
  hero: {
    badge: 'About Signatour',
    title: 'Your Swiss partner for digital sales experiences',
    subtitle: 'We do not sell technology. We bring your strongest sales argument – your spaces – to life online, so visitors become customers.',
  },
  mission: {
    kicker: 'Our mission',
    title: 'We bring the strongest sales argument of SMEs – their spaces – to life online.',
    text: 'SME owners work 14-hour days. They deserve a partner who shows up, works professionally and delivers a finished result.',
  },
  partner: {
    kicker: 'Your contact',
    title: 'Marius Niggli – founder & owner',
    text: 'From the first conversation through the shoot to the finished tour: you always talk to the same person – no call centre, no ticket system. Those who work with passion retain customers through quality, not contracts.',
  },
  reasons: {
    kicker: 'Why Signatour',
    title: '9 reasons for Signatour',
    items: [
      { title: 'Done-for-you instead of DIY', description: 'We come, we shoot, we deliver. Zero effort for you.' },
      { title: 'Transparent instead of hidden', description: 'One-time price, no subscription – the tour is yours, no platform rent.' },
      { title: 'Local instead of US cloud', description: 'Swiss/EU servers, GDPR-compliant.' },
      { title: 'Multi-industry instead of real estate only', description: 'Hotels, restaurants, spas, fitness, real estate.' },
      { title: 'Flexible instead of long-term contract', description: 'No minimum term, no notice period.' },
      { title: 'Continuous optimisation instead of standstill', description: 'Your tour grows with you – updates, new scenes and extensions at any time.' },
      { title: 'Flawless floor instead of tripod blur', description: 'The nadir point is retouched 95% clean – on request 100% or with your logo.' },
      { title: 'Sales instrument instead of gimmick', description: 'Booking links, lead forms and Google integration turn visitors into enquiries.' },
      { title: 'Measurable instead of guesswork', description: 'Views, dwell time and clicks on booking points – you see what your tour delivers.' },
    ],
  },
  tech: {
    kicker: 'Technology',
    title: 'Professional software from Europe',
    intro: 'We work with Pano2VR by Garden Gnome Software – a Viennese company with over 15 years of development experience.',
    points: [
      'No cloud dependency',
      'No vendor lock-in',
      'Full data control',
      'European software with GDPR compliance',
      'Superior tour quality vs. cloud solutions',
    ],
  },
  values: {
    kicker: 'Our values',
    title: 'What we believe in',
    items: [
      { title: 'Honesty', description: 'Honest advice, no sales pressure, no exaggerated promises.' },
      { title: 'Quality', description: 'Professional equipment, careful post-production, delivery only when we are satisfied.' },
      { title: 'Partnership', description: 'Retaining customers through quality, not contracts. No lock-in, no dependency.' },
    ],
  },
}

export const ueberUnsContent: Record<Locale, UeberUnsContent> = { de, fr, en }
