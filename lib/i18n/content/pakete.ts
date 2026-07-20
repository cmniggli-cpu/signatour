import type { Locale } from '@/lib/i18n/config'
import type { PricingTier, AddOnGroup, BranchenPackage, ServiceTier } from '@/lib/types'
import { PRICING_TIERS, ADDON_GROUPS, BRANCHEN_PACKAGES, INCLUDED_BENEFITS, SERVICE_TIERS } from '@/lib/constants'

export interface PaketeContent {
  hero: { badge: string; title: string; subtitle: string }
  tiers: PricingTier[]
  card: { einmalig: string; beliebt: string; cta: string }
  garantie: { title: string; qualiLabel: string; qualiText: string; markenLabel: string; markenText: string }
  rechner: { question: string; button: string; trust: string }
  spezial: { kicker: string; title: string; order: string }
  addons: { kicker: string; title: string; colErweiterung: string; colNutzen: string; colPreis: string; groups: AddOnGroup[] }
  inklusive: { title: string; items: string[] }
  ablauf: { kicker: string; title: string; steps: { n: string; t: string; d: string }[] }
  service: { kicker: string; title: string; subtitle: string; empfohlen: string; auswaehlen: string; tiers: ServiceTier[] }
  branchenPakete: BranchenPackage[]
}

const de: PaketeContent = {
  hero: {
    badge: 'Transparent & fair',
    title: 'Transparente Preise. Keine Überraschungen.',
    subtitle: 'Einmalpreis pro VR-Tour, kein Abo – die virtuelle Tour gehört Ihnen. Kein Vertrag, keine Plattform-Miete.',
  },
  tiers: PRICING_TIERS,
  card: { einmalig: 'einmalig', beliebt: 'Beliebt', cta: 'Paket bestellen' },
  garantie: {
    title: 'Doppelte Garantie – minimales Risiko, maximaler Mehrwert',
    qualiLabel: 'Qualitäts-Garantie:',
    qualiText: 'Jedes Panorama wird von Hand veredelt – bis zu 3 Korrekturrunden inklusive.',
    markenLabel: 'Marken-Garantie:',
    markenText: 'Ihre VR-Tour trägt Ihre Handschrift – Farben, Logo und Navigation exakt in Ihrem Corporate Design, ohne fremdes Branding (ab Signature Tour).',
  },
  rechner: {
    question: 'Nicht sicher, welches Paket zu Ihnen passt?',
    button: 'Paketrechner in 4 Schritten starten',
    trust: 'Unverbindlich · Antwort innert 24 Stunden · kostenlos',
  },
  spezial: { kicker: 'Spezialpakete', title: 'Branchenspezifische Pakete', order: 'Paket bestellen' },
  addons: { kicker: 'Zusatzleistungen', title: 'Optionale Add-ons', colErweiterung: 'Erweiterung', colNutzen: 'Nutzen', colPreis: 'Preis', groups: ADDON_GROUPS },
  inklusive: { title: 'Bei jedem Paket inklusive', items: INCLUDED_BENEFITS },
  ablauf: {
    kicker: 'Ablauf',
    title: 'So läuft die Zusammenarbeit',
    steps: [
      { n: '1', t: 'Beratung & Offerte', d: 'Unverbindlich – wir klären Ziele, Räume und das passende Paket.' },
      { n: '2', t: 'Bestätigung & Anzahlung', d: 'Auftragsbestätigung und 50% Anzahlung. Erst danach planen wir den Aufnahmetermin.' },
      { n: '3', t: 'Shooting & Produktion', d: 'Aufnahme vor Ort und Produktion Ihrer Signature Tour.' },
      { n: '4', t: 'Freigabe & Go-live', d: 'Sie prüfen Ihre VR-Tour bequem über den Viewer-Link und geben sie frei. Nach der Schlusszahlung erhalten Sie den Embed-Link für Ihre Website – auf Wunsch mit laufendem Wartungsservice.' },
    ],
  },
  service: {
    kicker: 'Betreuung & Weiterentwicklung',
    title: 'Jährliche Servicepakete',
    subtitle: 'Optional und jederzeit kündbar – damit Ihre VR-Tour aktuell, sicher und messbar bleibt.',
    empfohlen: 'Empfohlen',
    auswaehlen: 'Auswählen',
    tiers: SERVICE_TIERS,
  },
  branchenPakete: BRANCHEN_PACKAGES,
}

const fr: PaketeContent = {
  hero: {
    badge: 'Transparent & équitable',
    title: 'Des prix transparents. Aucune surprise.',
    subtitle: 'Prix unique par visite, pas d’abonnement – la visite VR vous appartient. Aucun contrat, aucune location de plateforme.',
  },
  tiers: [
    {
      name: 'Basic',
      price: 'CHF 990',
      priceRange: 'CHF 990',
      description: 'Idéal pour les petits espaces',
      hosting: 'incl. 12 mois de Basic Service',
      features: ['jusqu’à 15 panoramas', 'qualité Full HD 1080p', 'max. 5 points interactifs', 'optimisé pour mobile', '1 série de corrections'],
    },
    {
      name: 'Signature',
      price: 'CHF 2\'497',
      priceRange: 'CHF 2\'497',
      description: 'Le polyvalent le plus apprécié',
      hosting: 'incl. 12 mois de Signature Care',
      featured: true,
      features: ['jusqu’à 40 panoramas', 'qualité 4K', 'jusqu’à 25 points interactifs', 'intégration de la charte graphique', 'audio & interactions', '3 séries de corrections'],
    },
    {
      name: 'Pro',
      price: 'dès CHF 4\'497',
      priceRange: 'dès CHF 4\'497',
      description: 'Pour hôtels, thermes & resorts premium',
      hosting: 'incl. 12 mois de Signature Evolution',
      features: ['jusqu’à 100 panoramas', 'qualité 8K', 'jusqu’à 50 points interactifs', 'intégration de la charte graphique', 'intégration de réservation', 'vidéo & interactions', '5 séries de corrections'],
    },
  ],
  card: { einmalig: 'une fois', beliebt: 'Populaire', cta: 'Commander' },
  garantie: {
    title: 'Double garantie – risque minimal, valeur maximale',
    qualiLabel: 'Garantie qualité :',
    qualiText: 'Chaque panorama est peaufiné à la main – jusqu’à 3 séries de corrections incluses.',
    markenLabel: 'Garantie de marque :',
    markenText: 'Votre visite VR porte votre signature – couleurs, logo et navigation exactement selon votre charte graphique, sans branding tiers (dès la Signature Tour).',
  },
  rechner: {
    question: 'Vous ne savez pas quel forfait vous convient ?',
    button: 'Lancer le calculateur en 4 étapes',
    trust: 'Sans engagement · Réponse sous 24 heures · gratuit',
  },
  spezial: { kicker: 'Forfaits spéciaux', title: 'Forfaits par secteur', order: 'Commander' },
  addons: {
    kicker: 'Prestations complémentaires',
    title: 'Add-ons optionnels',
    colErweiterung: 'Extension',
    colNutzen: 'Bénéfice',
    colPreis: 'Prix',
    groups: [
      {
        title: '01 · Qualité d’image & aménagement',
        items: [
          { name: 'Patch nadir 100% – sol impeccable', price: 'CHF 90.– par panorama / visite complète forfait CHF 299.–', nutzen: 'Au lieu d’une tache de trépied floue, un sol propre ou votre logo – un détail que les professionnels remarquent immédiatement.' },
          { name: 'Furniture Removal – désencombrement numérique', price: 'dès CHF 180.– par panorama', nutzen: 'Les pièces meublées sont vidées numériquement – idéal pour la location et la vente.' },
          { name: 'Virtual Staging – ameublement virtuel', price: 'dès CHF 240.– par panorama, dès 3 panoramas CHF 200.–', nutzen: 'Les pièces vides deviennent un intérieur aménagé – l’intéressé voit le potentiel, pas le vide.' },
          { name: 'Panoramas supplémentaires', price: 'dès CHF 150.– par scène', nutzen: 'La visite VR évolue – de nouvelles zones peuvent être ajoutées à tout moment.' },
          { name: 'Plan 3D & vue dollhouse', price: 'dès CHF 390.–', nutzen: 'Les visiteurs saisissent tout l’objet d’un coup d’œil – orientation immédiate.' },
          { name: 'Mode jour/nuit', price: 'dès CHF 180.– par scène', nutzen: 'La même scène de jour et en ambiance du soir – très fort pour les restaurants et lieux d’événements.' },
        ],
      },
      {
        title: '02 · Portée & visibilité',
        items: [
          { name: 'Version multilingue (DE / FR / EN)', price: 'dès CHF 300.– par langue', nutzen: 'Vos hôtes et acheteurs découvrent la visite VR dans leur langue – plus de portée, plus de confiance.' },
          { name: 'Google Street View & intégration Business', price: 'CHF 490.– une fois', nutzen: 'Votre visite VR apparaît directement dans Google Maps et votre profil d’entreprise – visible là où vos clients cherchent.' },
          { name: 'Pack QR codes print & affichage', price: 'CHF 240.–', nutzen: 'Autocollants vitrine, chevalets de table et panneaux mènent directement à la visite VR – votre établissement devient la porte d’entrée.' },
        ],
      },
      {
        title: '03 · Conversion & expérience',
        items: [
          { name: 'Formulaire de capture de leads dans la visite VR', price: 'CHF 390.– une fois', nutzen: 'Les visiteurs anonymes deviennent des demandes qualifiées – avec nom et adresse e-mail.' },
          { name: 'Audioguide avec voix professionnelle', price: 'dès CHF 490.– par langue', nutzen: 'Vos espaces prennent la parole – atmosphère et storytelling au lieu de simple texte.' },
          { name: 'Signature Web – site web sur mesure', price: 'dès CHF 2\'500.–', nutzen: 'Visite et site web d’une seule main – une expérience de vente numérique cohérente.' },
        ],
      },
      {
        title: '04 · Actualité, exploitation & reporting',
        items: [
          { name: 'Mise à jour saisonnière de scènes', price: 'CHF 180.– par scène / pack saison CHF 650.–', nutzen: 'Terrasse d’été, ambiance de Noël, nouvelles plantations – votre visite VR reste actuelle et vivante.' },
          { name: 'Terrasse quatre saisons', price: 'CHF 1\'490.– / an', nutzen: 'Quatre prises de vue par an en scènes saisonnières commutables – l’extérieur reste actuel toute l’année.' },
          { name: 'Rapport de performance visite', price: 'CHF 150.– par rapport', nutzen: 'Vues, pièces les plus consultées, clics sur les points de réservation – le ROI de votre visite VR noir sur blanc.', hinweis: 'Déjà inclus dans Signature Care & Evolution' },
          { name: 'Rapport de performance site web', price: 'CHF 150.– par rapport / CHF 490.– par an (4 rapports)', nutzen: 'Visiteurs, durée de visite, pages les plus vues – vous voyez ce que votre présence en ligne apporte.' },
          { name: 'Livraison express', price: '+30% sur le prix du forfait', nutzen: 'Votre visite VR terminée en 3 jours ouvrables au lieu de 5 à 10.' },
        ],
      },
    ],
  },
  inklusive: {
    title: 'Inclus dans chaque forfait',
    items: [
      'Prise de vue professionnelle sur place',
      'Post-production & optimisation',
      'Hébergement sur serveurs CH/UE (conforme RGPD, 12 mois inclus)',
      'Code d’intégration & lien direct',
      'Conseil personnel par le propriétaire',
      'Souveraineté des données chez le client (pas de verrouillage)',
    ],
  },
  ablauf: {
    kicker: 'Déroulement',
    title: 'Comment se passe la collaboration',
    steps: [
      { n: '1', t: 'Conseil & offre', d: 'Sans engagement – nous clarifions les objectifs, les espaces et le forfait adapté.' },
      { n: '2', t: 'Confirmation & acompte', d: 'Confirmation de commande et acompte de 50%. Ensuite seulement, nous planifions la prise de vue.' },
      { n: '3', t: 'Prise de vue & production', d: 'Prise de vue sur place et production de votre Signature Tour.' },
      { n: '4', t: 'Validation & mise en ligne', d: 'Vous vérifiez votre visite VR via le lien viewer et la validez. Après le paiement final, vous recevez le code d’intégration pour votre site – sur demande avec service de maintenance continu.' },
    ],
  },
  service: {
    kicker: 'Suivi & évolution',
    title: 'Forfaits de service annuels',
    subtitle: 'Optionnels et résiliables à tout moment – pour que votre visite VR reste actuelle, sûre et mesurable.',
    empfohlen: 'Recommandé',
    auswaehlen: 'Choisir',
    tiers: [
      { name: 'Basic Service', price: 'CHF 120.– / an', features: ['Exploitation & sécurité (hébergement)', 'Certificat SSL & sauvegardes', '1 petite adaptation par an', 'Statistiques de visiteurs'] },
      { name: 'Signature Care', price: 'CHF 360.– / an', recommended: true, features: ['Tout le Basic Service', '3 adaptations par an', '1 mise à jour annuelle de la visite VR', 'Aperçu du comportement des visiteurs', 'Support prioritaire'] },
      { name: 'Signature Evolution', price: 'CHF 600.– / an', features: ['Tout le Signature Care', '9 adaptations par an', '2 « knowledge upgrades » annuels', 'Optimisation des performances', 'Rapports de trafic trimestriels'] },
    ],
  },
  branchenPakete: [
    {
      name: 'Immobilier – cartes avantage Signature',
      cfg: 'immobilien',
      intro: 'Pour les courtiers d’objets premium et de luxe. Chaque visite en qualité Signature, entièrement à votre charte graphique.',
      lines: ['Objet individuel : CHF 2\'497.– par objet', 'Carte avantage 5 : CHF 9\'990.– (CHF 1\'998.– par objet, env. 20% d’avantage)', 'Carte avantage 10 : CHF 16\'230.– (CHF 1\'623.– par objet, 35% d’avantage)'],
      note: 'Utilisation flexible, sans date d’expiration. Incl. 12 mois de service de suivi par visite.',
    },
    { name: 'Hôtel & resort', cfg: 'hotel', intro: 'Signature Tour avec points de réservation, multilinguisme (DE / FR / EN) et intégration Google Business.', lines: ['dès CHF 3\'490.–'], note: 'Grands établissements, thermes et resorts : ligne Pro dès CHF 4\'497.–' },
    { name: 'Spa & wellness', cfg: 'spa', intro: 'Signature Tour avec audioguide et mode jour/nuit pour une atmosphère palpable.', lines: ['dès CHF 3\'490.–'], note: 'Extension optionnelle avec la terrasse quatre saisons (voir add-ons).' },
    { name: 'Restaurant & gastronomie', cfg: 'restaurant', intro: 'Signature Tour avec intégration Google Business, mode jour/nuit et pack QR codes pour table et vitrine.', lines: ['dès CHF 2\'890.–'], note: 'Petits établissements : Basic Tour dès CHF 990.–' },
    { name: 'Fitness', cfg: 'fitness', intro: 'Signature Tour avec formulaire de capture de leads (« demander un essai ») et intégration Google Business.', lines: ['dès CHF 2\'890.–'] },
    {
      name: 'Banques, assurances & études – tarif par succursale',
      cfg: 'banken',
      intro: 'Signature Tour à votre charte graphique, un seul interlocuteur pour tous les sites.',
      lines: ['1 site : CHF 2\'497.–', '3–4 sites : CHF 2\'247.– par site (10%)', '5–9 sites : CHF 1\'873.– par site (25%)', 'dès 10 sites : CHF 1\'623.– par site (35%)'],
      note: 'Dès 20 sites, contrat-cadre. Recommandé avec forfait de service par site pour une actualité et un suivi continus.',
    },
    { name: 'Lieux d’événements & showrooms', cfg: 'events', intro: 'Signature Tour avec mode jour/nuit et points vidéo.', lines: ['dès CHF 2\'990.–'], note: 'Grandes salles et halles : ligne Pro dès CHF 4\'497.–' },
  ],
}

const en: PaketeContent = {
  hero: {
    badge: 'Transparent & fair',
    title: 'Transparent prices. No surprises.',
    subtitle: 'One-time price per tour, no subscription – the VR tour is yours. No contract, no platform rent.',
  },
  tiers: [
    {
      name: 'Basic',
      price: 'CHF 990',
      priceRange: 'CHF 990',
      description: 'Ideal for small areas',
      hosting: 'incl. 12 months of Basic Service',
      features: ['up to 15 panoramas', '1080p Full HD quality', 'max. 5 hotspots', 'mobile-optimised', '1 correction round'],
    },
    {
      name: 'Signature',
      price: 'CHF 2\'497',
      priceRange: 'CHF 2\'497',
      description: 'The most popular all-rounder',
      hosting: 'incl. 12 months of Signature Care',
      featured: true,
      features: ['up to 40 panoramas', '4K quality', 'up to 25 hotspots', 'corporate design integration', 'audio & interactions', '3 correction rounds'],
    },
    {
      name: 'Pro',
      price: 'from CHF 4\'497',
      priceRange: 'from CHF 4\'497',
      description: 'For hotels, thermal baths & premium resorts',
      hosting: 'incl. 12 months of Signature Evolution',
      features: ['up to 100 panoramas', '8K quality', 'up to 50 hotspots', 'corporate design integration', 'booking integration', 'video & interactions', '5 correction rounds'],
    },
  ],
  card: { einmalig: 'one-time', beliebt: 'Popular', cta: 'Order package' },
  garantie: {
    title: 'Double guarantee – minimal risk, maximum value',
    qualiLabel: 'Quality guarantee:',
    qualiText: 'Every panorama is refined by hand – up to 3 correction rounds included.',
    markenLabel: 'Brand guarantee:',
    markenText: 'Your VR tour carries your signature – colours, logo and navigation exactly to your corporate design, with no third-party branding (from the Signature Tour).',
  },
  rechner: {
    question: 'Not sure which package suits you?',
    button: 'Start the package calculator in 4 steps',
    trust: 'No obligation · Reply within 24 hours · free of charge',
  },
  spezial: { kicker: 'Special packages', title: 'Industry-specific packages', order: 'Order package' },
  addons: {
    kicker: 'Additional services',
    title: 'Optional add-ons',
    colErweiterung: 'Add-on',
    colNutzen: 'Benefit',
    colPreis: 'Price',
    groups: [
      {
        title: '01 · Image quality & room design',
        items: [
          { name: 'Nadir patch 100% – flawless floor', price: 'CHF 90.– per panorama / whole tour flat CHF 299.–', nutzen: 'Instead of a blurred tripod patch, a clean floor or your logo – a detail professionals notice immediately.' },
          { name: 'Furniture removal – digital decluttering', price: 'from CHF 180.– per panorama', nutzen: 'Furnished rooms are digitally emptied – ideal for rentals and sales.' },
          { name: 'Virtual staging – virtual furnishing', price: 'from CHF 240.– per panorama, from 3 panoramas CHF 200.–', nutzen: 'Empty rooms become a furnished home – prospects see the potential, not the emptiness.' },
          { name: 'Additional panoramas', price: 'from CHF 150.– per scene', nutzen: 'The VR tour grows with you – new areas can be added at any time.' },
          { name: '3D floor plan & dollhouse view', price: 'from CHF 390.–', nutzen: 'Visitors grasp the entire property at a glance – instant orientation.' },
          { name: 'Day/night mode', price: 'from CHF 180.– per scene', nutzen: 'The same scene by day and in evening ambience – powerful for restaurants and event venues.' },
        ],
      },
      {
        title: '02 · Reach & visibility',
        items: [
          { name: 'Multilingual version (DE / FR / EN)', price: 'from CHF 300.– per language', nutzen: 'Guests and buyers experience the VR tour in their language – more reach, more trust.' },
          { name: 'Google Street View & business integration', price: 'CHF 490.– one-time', nutzen: 'Your VR tour appears directly in Google Maps and your business profile – visible where customers search.' },
          { name: 'QR code print & display pack', price: 'CHF 240.–', nutzen: 'Window stickers, table stands and signs lead straight into the VR tour – your location becomes the gateway.' },
        ],
      },
      {
        title: '03 · Conversion & experience',
        items: [
          { name: 'Lead capture form inside the VR tour', price: 'CHF 390.– one-time', nutzen: 'Anonymous visitors become qualified enquiries – with name and e-mail address.' },
          { name: 'Audio guide with professional voice-over', price: 'from CHF 490.– per language', nutzen: 'Your rooms get a voice – atmosphere and storytelling instead of plain text.' },
          { name: 'Signature Web – custom website', price: 'from CHF 2\'500.–', nutzen: 'VR tour and website from one source – a seamless digital sales experience.' },
        ],
      },
      {
        title: '04 · Freshness, operations & reporting',
        items: [
          { name: 'Seasonal scene update', price: 'CHF 180.– per scene / season pack CHF 650.–', nutzen: 'Summer terrace, Christmas atmosphere, new planting – your VR tour stays current and alive.' },
          { name: 'Four-seasons terrace', price: 'CHF 1\'490.– / year', nutzen: 'Four shoots per year as switchable seasonal scenes – your outdoor area stays current all year round.' },
          { name: 'VR tour performance report', price: 'CHF 150.– per report', nutzen: 'Views, most popular rooms, clicks on booking points – your VR tour’s ROI in black and white.', hinweis: 'Already included in Signature Care & Evolution' },
          { name: 'Website performance report', price: 'CHF 150.– per report / CHF 490.– per year (4 reports)', nutzen: 'Visitors, dwell time, top pages – you see what your online presence delivers.' },
          { name: 'Express delivery', price: '+30% on the package price', nutzen: 'Your finished tour in 3 instead of 5–10 working days.' },
        ],
      },
    ],
  },
  inklusive: {
    title: 'Included in every package',
    items: [
      'Professional on-site shoot',
      'Post-production & optimisation',
      'Hosting on CH/EU servers (GDPR-compliant, 12 months included)',
      'Embed code & direct link',
      'Personal consultation by the owner',
      'Data sovereignty with the customer (no vendor lock-in)',
    ],
  },
  ablauf: {
    kicker: 'Process',
    title: 'How the collaboration works',
    steps: [
      { n: '1', t: 'Consultation & offer', d: 'No obligation – we clarify goals, spaces and the right package.' },
      { n: '2', t: 'Confirmation & deposit', d: 'Order confirmation and 50% deposit. Only then do we schedule the shoot.' },
      { n: '3', t: 'Shoot & production', d: 'On-site shoot and production of your Signature Tour.' },
      { n: '4', t: 'Approval & go-live', d: 'You review your VR tour conveniently via the viewer link and approve it. After the final payment you receive the embed link for your website – on request with ongoing maintenance service.' },
    ],
  },
  service: {
    kicker: 'Care & development',
    title: 'Annual service packages',
    subtitle: 'Optional and cancellable at any time – keeping your VR tour current, secure and measurable.',
    empfohlen: 'Recommended',
    auswaehlen: 'Select',
    tiers: [
      { name: 'Basic Service', price: 'CHF 120.– / year', features: ['Operation & security (hosting)', 'SSL certificate & backups', '1 small adjustment per year', 'Visitor statistics'] },
      { name: 'Signature Care', price: 'CHF 360.– / year', recommended: true, features: ['Everything in Basic Service', '3 adjustments per year', '1 annual tour update', 'Insights into visitor behaviour', 'Priority support'] },
      { name: 'Signature Evolution', price: 'CHF 600.– / year', features: ['Everything in Signature Care', '9 adjustments per year', '2 annual “knowledge upgrades”', 'Performance optimisation', 'Quarterly traffic reports'] },
    ],
  },
  branchenPakete: [
    {
      name: 'Real estate – Signature multi-tour cards',
      cfg: 'immobilien',
      intro: 'For agents of premium and luxury properties. Every VR tour in Signature quality, fully in your corporate design.',
      lines: ['Single property: CHF 2\'497.– per property', '5-tour card: CHF 9\'990.– (CHF 1\'998.– per property, approx. 20% benefit)', '10-tour card: CHF 16\'230.– (CHF 1\'623.– per property, 35% benefit)'],
      note: 'Flexible use, no expiry date. Incl. 12 months of care service per tour.',
    },
    { name: 'Hotel & resort', cfg: 'hotel', intro: 'Signature Tour with booking hotspots, multilingualism (DE / FR / EN) and Google Business integration.', lines: ['from CHF 3\'490.–'], note: 'Large properties, thermal baths and resorts: Pro line from CHF 4\'497.–' },
    { name: 'Spa & wellness', cfg: 'spa', intro: 'Signature Tour with audio guide and day/night mode for tangible atmosphere.', lines: ['from CHF 3\'490.–'], note: 'Optionally extendable with the four-seasons terrace (see add-ons).' },
    { name: 'Restaurant & gastronomy', cfg: 'restaurant', intro: 'Signature Tour with Google Business integration, day/night mode and QR code pack for table and shop window.', lines: ['from CHF 2\'890.–'], note: 'Small venues: Basic Tour from CHF 990.–' },
    { name: 'Fitness', cfg: 'fitness', intro: 'Signature Tour with lead capture form (“request a trial workout”) and Google Business integration.', lines: ['from CHF 2\'890.–'] },
    {
      name: 'Banks, insurances & law firms – branch tiers',
      cfg: 'banken',
      intro: 'Signature Tour in your corporate design, one contact for all locations.',
      lines: ['1 location: CHF 2\'497.–', '3–4 locations: CHF 2\'247.– per location (10%)', '5–9 locations: CHF 1\'873.– per location (25%)', 'from 10 locations: CHF 1\'623.– per location (35%)'],
      note: 'From 20 locations, framework agreement. Recommended with a service package per location for ongoing freshness and care.',
    },
    { name: 'Event venues & showrooms', cfg: 'events', intro: 'Signature Tour with day/night mode and video hotspots.', lines: ['from CHF 2\'990.–'], note: 'Large halls: Pro line from CHF 4\'497.–' },
  ],
}

export const paketeContent: Record<Locale, PaketeContent> = { de, fr, en }
