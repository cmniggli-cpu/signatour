import type { FAQ } from '@/lib/types'
import type { Locale } from '@/lib/i18n/config'
import { FAQ_GENERAL, FAQ_COSTS, FAQ_TECH, FAQ_DATA } from '@/lib/constants'

export interface FaqContent {
  hero: { badge: string; title: string; subtitle: string }
  sections: { title: string; faqs: FAQ[] }[]
  cta: { title: string; subtitle: string; buttonText: string }
}

const de: FaqContent = {
  hero: { badge: 'FAQ', title: 'Häufige Fragen', subtitle: 'Alles, was Sie über 360-Grad-Rundgänge wissen müssen.' },
  sections: [
    { title: 'Allgemein', faqs: FAQ_GENERAL },
    { title: 'Kosten & Ablauf', faqs: FAQ_COSTS },
    { title: 'Technik & Integration', faqs: FAQ_TECH },
    { title: 'Datenschutz & Änderungen', faqs: FAQ_DATA },
  ],
  cta: { title: 'Frage nicht gefunden?', subtitle: 'Kontaktieren Sie uns – wir antworten persönlich und ehrlich.', buttonText: 'Kontakt aufnehmen' },
}

const fr: FaqContent = {
  hero: { badge: 'FAQ', title: 'Questions fréquentes', subtitle: 'Tout ce que vous devez savoir sur les visites virtuelles à 360°.' },
  sections: [
    {
      title: 'Général',
      faqs: [
        { question: 'Qu’est-ce qu’une visite à 360° ?', answer: 'Une visite virtuelle interactive de vos locaux. Les visiteurs naviguent librement dans toutes les directions – directement dans le navigateur, sans application ni casque VR. Des points interactifs proposent des informations, des vidéos et des liens de réservation.' },
        { question: 'Comment fonctionne une visite virtuelle ?', answer: 'Les visiteurs naviguent librement à la souris, au toucher ou au clavier. Des flèches de navigation relient les pièces entre elles. Les points interactifs offrent des informations, images, vidéos et liens de réservation. Tout fonctionne directement dans le navigateur.' },
        { question: 'Ai-je besoin d’une application particulière ?', answer: 'Non, tout fonctionne dans le navigateur. Sur tous les appareils – ordinateur, tablette, smartphone. Ni vos clients ni votre établissement n’ont quoi que ce soit à installer.' },
        { question: 'À quels secteurs s’adresse une visite à 360° ?', answer: 'Hôtels (plus de réservations directes), restaurants (visibilité Google), spas (transmettre l’atmosphère), salles de fitness (abaisser le seuil d’entrée), immobilier (moins de visites inutiles, des contacts plus qualifiés).' },
      ],
    },
    {
      title: 'Coûts & déroulement',
      faqs: [
        { question: 'Combien coûte une visite virtuelle ?', answer: 'Forfait Basic CHF 990 (jusqu’à 15 panoramas), forfait Signature CHF 2\'497 (jusqu’à 40 panoramas, 4K), forfait Pro dès CHF 4\'497 (jusqu’à 100 panoramas, 8K). Prix uniques, sans abonnement – la visite vous appartient. 12 mois d’hébergement et de service inclus, ensuite en option dès CHF 120.–/an.' },
        { question: 'Y a-t-il des coûts cachés ?', answer: 'Non. Le prix forfaitaire unique couvre la prise de vue, la post-production, l’hébergement et le code d’intégration – la visite vous appartient. 12 mois de service sont inclus, ensuite en option dès CHF 120.–/an. Les options (p. ex. Street View, Virtual Staging, Express) sont clairement indiquées.' },
        { question: 'Combien de temps dure la réalisation ?', answer: 'Prise de vue sur place : 2 à 4 heures. Livraison : 5 à 10 jours ouvrables. Option Express : 3 jours ouvrables (+30%).' },
        { question: 'Comment se déroule la prise de vue ?', answer: 'Nous apportons une caméra 360° professionnelle. 2 à 4 heures de prise de vue selon la taille, idéalement en dehors des heures d’ouverture. Des locaux propres et rangés suffisent – nous nous occupons du reste.' },
        { question: 'Comment se passe le paiement ?', answer: 'De façon transparente, en deux étapes : 50% à la confirmation de commande, 50% à la validation de la visite terminée. Pour les projets plus importants dès CHF 5\'000.–, nous convenons de paiements échelonnés (40% à la confirmation, 30% après la prise de vue, 30% à la validation). La visite est mise en ligne dès réception du solde. Prix unique, pas d’abonnement – la visite vous appartient ; un forfait de service est ensuite optionnel (dès CHF 120.–/an).' },
        { question: 'Comment fonctionne le paiement de la carte avantage ?', answer: 'La carte avantage se paie intégralement à l’achat – vous bénéficiez ainsi du plein avantage de volume jusqu’à 35%. Vous utilisez ensuite vos visites en toute flexibilité, sans facture supplémentaire par objet et sans date d’expiration. Chaque visite est livrée au standard Signature en vigueur.' },
        { question: 'Que se passe-t-il si je ne prends pas de forfait de service ?', answer: 'Votre visite vous appartient – sans condition. Chaque forfait inclut 12 mois d’exploitation du lien viewer et du lien d’intégration hébergés. Ensuite, un forfait de service optionnel dès CHF 120.–/an maintient votre visite en ligne – hébergement, mises à jour et statistiques inclus. Sans forfait de service, vous recevez le dossier complet sur clé USB et pouvez héberger la visite vous-même – elle reste entièrement votre propriété. Et si vous souhaitez l’étendre ou l’actualiser plus tard, nous nous en chargeons volontiers.' },
      ],
    },
    {
      title: 'Technique & intégration',
      faqs: [
        { question: 'Comment la visite s’intègre-t-elle à mon site web ?', answer: 'Vous recevez un code d’intégration (iFrame) et un lien direct à partager par e-mail, WhatsApp, réseaux sociaux et code QR. Intégration directe dans le profil Google Business possible.' },
        { question: 'Sur quels appareils la visite fonctionne-t-elle ?', answer: 'Sur tous : smartphone, tablette, ordinateur et TV – entièrement responsive et optimisée pour le tactile. Également compatible avec les casques VR, pour une immersion totale. Aucune application à télécharger.' },
        { question: 'Le sol sous la caméra (nadir) est-il propre ?', answer: 'Lors de prises de vue à 360°, la caméra est posée sur un trépied. Là où des prestataires comme Matterport masquent le sol d’une tache floue, nous retouchons le point nadir à 95% proprement. En option, la solution 100% offre un sol impeccable ou votre logo.' },
        { question: 'La visite peut-elle apparaître sur Google Maps ?', answer: 'Oui, elle peut être intégrée directement au profil Google Business et à Google Maps. 2× plus de consultations de profil avec des contenus 360°. Publication Google Street View disponible en option (Street View & intégration Business, CHF 490.– une fois).' },
        { question: 'Que se passe-t-il à la fin de l’hébergement ?', answer: 'Après les 12 mois inclus, vous prolongez le forfait de service (dès CHF 120.–/an) et votre visite reste en ligne sans effort. La visite vous appartient – pas de dépendance ; une remise pour auto-hébergement est possible dans des cas exceptionnels.' },
      ],
    },
    {
      title: 'Confidentialité & modifications',
      faqs: [
        { question: 'La visite est-elle conforme au RGPD ?', answer: 'Oui. Nous photographions en dehors des heures d’ouverture (aucune personne sur les images), hébergeons sur des serveurs suisses/UE et fournissons un contrat de sous-traitance. Le floutage de visages est possible, mais rarement nécessaire.' },
        { question: 'Que se passe-t-il en cas de rénovation ?', answer: 'Certaines zones peuvent être actualisées à tout moment (dès CHF 180.– par scène). La visite existante reste en ligne et peut être renouvelée pièce par pièce. Le moment idéal : juste après l’investissement.' },
        { question: 'La visite peut-elle être modifiée ultérieurement ?', answer: 'Oui. Points interactifs, textes, liens et branding peuvent être adaptés à tout moment. Nouveaux panoramas ou zones actualisées dès CHF 180.– par scène.' },
        { question: 'À qui appartiennent les données et la visite ?', answer: 'À vous. La visite vous appartient – pas de dépendance. Nous l’hébergeons pour vous (12 mois inclus, ensuite en option dès CHF 120.–/an) ; une remise pour auto-hébergement est possible dans des cas exceptionnels. Le partenariat repose sur la qualité, pas sur la dépendance.' },
      ],
    },
  ],
  cta: { title: 'Vous n’avez pas trouvé votre question ?', subtitle: 'Contactez-nous – nous répondons personnellement et honnêtement.', buttonText: 'Prendre contact' },
}

const en: FaqContent = {
  hero: { badge: 'FAQ', title: 'Frequently asked questions', subtitle: 'Everything you need to know about 360° virtual tours.' },
  sections: [
    {
      title: 'General',
      faqs: [
        { question: 'What is a 360° virtual tour?', answer: 'An interactive virtual walk-through of your premises. Visitors move freely in every direction – right in the browser, with no app or VR headset. Hotspots provide additional information, videos and booking links.' },
        { question: 'How does a virtual tour work?', answer: 'Visitors navigate freely with mouse, touch or keyboard. Navigation arrows lead from room to room. Hotspots offer extra information, images, videos and booking links. Everything runs directly in the browser.' },
        { question: 'Do I need a special app?', answer: 'No – it is entirely browser-based and works on every device: desktop, tablet and smartphone. Neither your customers nor your business need to install anything.' },
        { question: 'Which industries benefit from a 360° tour?', answer: 'Hotels (more direct bookings), restaurants (Google visibility), spas (conveying atmosphere), fitness studios (lowering the entry barrier), real estate (fewer wasted viewings, better-qualified leads).' },
      ],
    },
    {
      title: 'Costs & process',
      faqs: [
        { question: 'How much does a virtual tour cost?', answer: 'Basic package CHF 990 (up to 15 panoramas), Signature package CHF 2\'497 (up to 40 panoramas, 4K), Pro package from CHF 4\'497 (up to 100 panoramas, 8K). One-time prices instead of a subscription – the tour is yours. 12 months of hosting and service included, thereafter optional from CHF 120.–/year.' },
        { question: 'Are there any hidden costs?', answer: 'No. The one-time package price covers the shoot, post-production, hosting and embed code – the tour is yours. 12 months of service are included, thereafter optional from CHF 120.–/year. Optional add-ons (e.g. Street View, virtual staging, express delivery) are clearly listed.' },
        { question: 'How long does production take?', answer: 'On-site shoot: 2–4 hours. Delivery: 5–10 working days. Express option: 3 working days (+30%).' },
        { question: 'How does the shoot work?', answer: 'We bring a professional 360° camera. The shoot takes 2–4 hours depending on size, ideally outside opening hours. Clean, tidy rooms are all we need – we take care of everything else.' },
        { question: 'How does payment work?', answer: 'Transparent, in two steps: 50% on order confirmation, 50% on approval of the finished tour. For larger projects from CHF 5\'000.– we agree on instalments (40% on confirmation, 30% after the shoot, 30% on approval). The tour goes live once the final payment is received. One-time price, no subscription – the tour is yours; a service package afterwards is optional (from CHF 120.–/year).' },
        { question: 'How does payment for the multi-tour card work?', answer: 'The multi-tour card is paid in full at purchase – in return you receive the full volume benefit of up to 35%. You then redeem your tours flexibly, with no further invoice per property and no expiry date. Every tour is delivered to the current Signature standard.' },
        { question: 'What if I do not take a service package?', answer: 'Your tour is yours – no strings attached. Every package includes 12 months of operation of the hosted viewer and embed link. After that, an optional service package from CHF 120.–/year keeps your tour online – including hosting, updates and analytics. If you prefer no service package, you receive the complete output folder on a USB stick and can host the tour yourself – it remains fully your property. And should you wish to extend or update it later, we are happy to take care of it.' },
      ],
    },
    {
      title: 'Technology & integration',
      faqs: [
        { question: 'How is the tour embedded in my website?', answer: 'You receive an embed code (iFrame) and a direct link to share via e-mail, WhatsApp, social media and QR code. Direct integration into your Google Business Profile is possible.' },
        { question: 'On which devices does the tour work?', answer: 'On all of them: smartphone, tablet, desktop and TV – fully responsive and touch-optimised. It can also be experienced with a VR headset for full immersion. No app download required.' },
        { question: 'How clean is the floor beneath the camera (nadir)?', answer: 'In 360° photography the camera stands on a tripod. Where providers like Matterport cover the floor with a blurred patch, we retouch the nadir point 95% clean. As an add-on, the 100% solution delivers a flawless floor or your logo.' },
        { question: 'Can the tour be shown on Google Maps?', answer: 'Yes – it can be integrated directly into your Google Business Profile and Google Maps. 2× more profile views with 360° content. Google Street View publication is available as an add-on (Street View & business integration, CHF 490.– one-time).' },
        { question: 'What happens when the hosting period ends?', answer: 'After the included 12 months you extend the service package (from CHF 120.–/year) and your tour stays online without any effort. The tour is yours – no vendor lock-in; a handover for self-hosting is possible in exceptional cases.' },
      ],
    },
    {
      title: 'Privacy & changes',
      faqs: [
        { question: 'Is the tour GDPR-compliant?', answer: 'Yes. We shoot outside opening hours (no people in the images), host on Swiss/EU servers and provide a data processing agreement. Face blurring is possible but rarely needed.' },
        { question: 'What happens if we renovate?', answer: 'Individual areas can be updated at any time (from CHF 180.– per scene). The existing tour stays online and can be renewed room by room. The perfect moment: right after the investment.' },
        { question: 'Can the tour be changed later?', answer: 'Yes. Hotspots, texts, links and branding can be adjusted at any time. New panorama points or updated areas from CHF 180.– per scene.' },
        { question: 'Who owns the data and the tour?', answer: 'You do. The tour is yours – no vendor lock-in. We host it for you (12 months included, thereafter optional from CHF 120.–/year); a handover for self-hosting is possible in exceptional cases. The partnership is built on quality, not dependency.' },
      ],
    },
  ],
  cta: { title: 'Question not answered?', subtitle: 'Get in touch – we reply personally and honestly.', buttonText: 'Contact us' },
}

export const faqContent: Record<Locale, FaqContent> = { de, fr, en }
