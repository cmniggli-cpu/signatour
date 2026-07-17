import type { Metadata } from 'next'
import { CONTACT_PHONE, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    absolute: `Visites 360° qui vendent – Hôtels, Spa, Gastronomie & Immobilier | ${SITE_NAME}`,
  },
  description:
    'Prestataire suisse de visites virtuelles 360° premium pour hôtels, spas, restaurants et biens immobiliers. Les visiteurs réservent et demandent directement dans la visite. Prix unique, sans abonnement.',
  alternates: {
    canonical: '/fr',
    languages: {
      'de-CH': '/',
      'fr-CH': '/fr',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: '/fr',
    siteName: SITE_NAME,
    title: `Visites 360° qui vendent – Hôtels, Spa, Gastronomie & Immobilier | ${SITE_NAME}`,
    description:
      'Prestataire suisse de visites virtuelles 360° premium pour hôtels, spas, restaurants et biens immobiliers. Prix unique, sans abonnement.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – visites 360° qui vendent`,
      },
    ],
  },
}

const TEL = CONTACT_PHONE.replace(/[^+\d]/g, '')

const ICON_DEFS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/><path d="m8.5 14 2.2 2.2L15.5 12"/></symbol>
<symbol id="i-coin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 12.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.2A3 3 0 0 1 16 11M21 20c0-2.5-1.5-4.6-3.6-5.5"/></symbol>
<symbol id="i-diamond" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3h12l3.5 6L12 21 2.5 9 6 3Z"/><path d="M2.5 9h19M9 3 7 9l5 12 5-12-2-6"/></symbol>
<symbol id="i-cam" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 8.5A2 2 0 0 1 5 6.5h2l1.3-2h7.4L18 6.5h1a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5Z"/><circle cx="12" cy="13" r="3.6"/></symbol>
<symbol id="i-palette" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1.3-1-1.5-1-2.5 0-.8.7-1.5 1.7-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="15.5" cy="8.5" r="1"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></symbol>
<symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 2.5 15.2 0 18M12 3c-2.5 2.8-2.5 15.2 0 18"/></symbol>
<symbol id="i-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.3h8.3a1.5 1.5 0 0 0 1.5-1.2L20.5 8H6"/><circle cx="9.5" cy="20" r="1.2"/><circle cx="17.5" cy="20" r="1.2"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" stroke="none"/></symbol>
<symbol id="i-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6h.01"/></symbol>
<symbol id="i-doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 2.5h8L19 7v14.5H6z"/><path d="M14 2.5V7h5"/><path d="M8.5 13h7M8.5 16.5h7"/></symbol>
<symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2.5 20 6v6c0 5-3.5 8-8 9.5C7.5 20 4 17 4 12V6l8-3.5Z"/><path d="m8.5 12 2.3 2.3L15.5 9.5"/></symbol>
<symbol id="i-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></symbol>
<symbol id="i-zoom" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></symbol>
<symbol id="i-code" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 5l-3 14"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/></symbol>
<symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></symbol>
<symbol id="i-sofa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11"/><path d="M4 11a2 2 0 0 1 2 2v3h12v-3a2 2 0 0 1 4 0v6H2v-6a2 2 0 0 1 2-2Z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12.5 4.5 4.5L19 7"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 3.5 9 4l1 3.5L8.3 9.2a12 12 0 0 0 6.5 6.5l1.7-1.7L20 15l.5 2.5a2 2 0 0 1-2 2.3A16 16 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2Z"/></symbol>
</defs></svg>`

const Icon = ({ id, c = 'icn' }: { id: string; c?: string }) => (
  <svg className={c}><use href={`#${id}`} /></svg>
)
const Chk = () => <svg className="icn-sm" style={{ width: 18, height: 18 }}><use href="#i-check" /></svg>

const FAQ_ITEMS = [
  { q: 'Qu’est-ce qu’une visite à 360° ?', a: 'Une visite interactive dans laquelle les visiteurs se déplacent eux-mêmes – comme s’ils étaient sur place. Elle fonctionne directement dans le navigateur, sans application, et peut être enrichie de points interactifs pour réserver, acheter ou demander une offre.' },
  { q: 'Combien de temps dure la réalisation ?', a: 'La prise de vue dure 2 à 4 heures sur place. Nous livrons la visite finie en règle générale sous 5 à 10 jours ouvrables.' },
  { q: 'Ai-je besoin d’une application ou d’une caméra particulière ?', a: 'Non. La visite fonctionne sur tout appareil dans le navigateur – smartphone, tablette, ordinateur, TV et même casque VR. Nous nous occupons entièrement de la prise de vue, de la technique et de l’hébergement.' },
  { q: 'Est-ce conforme au RGPD ?', a: 'Oui. Hébergement en Suisse/UE, prises de vue en dehors des heures d’ouverture sans personnes, contrat de sous-traitance inclus sur demande.' },
  { q: 'Que se passe-t-il en cas de rénovation ?', a: 'Avec un forfait de service, nous mettons à jour les zones concernées ou recréons certains points – votre visite reste actuelle.' },
  { q: 'Concrètement, qu’est-ce que cela m’apporte – est-ce rentable ?', a: 'Selon le secteur, les réservations et les demandes augmentent nettement, et les visiteurs restent bien plus longtemps sur le site. Pour l’immobilier par exemple, environ +87 % de vues (Matterport). Avec un gain mesurable, la visite s’amortit souvent après quelques réservations seulement.' },
  { q: 'Combien coûte une visite ?', a: 'Des forfaits transparents à prix fixe dès CHF 990 – le prix dépend du nombre de panoramas et des fonctions. Via le configurateur, vous obtenez en une minute une estimation sans engagement.' },
  { q: 'Y a-t-il un abonnement ou des coûts cachés ?', a: 'Non. La visite vous appartient. Un forfait de service annuel (dès CHF 120) est facultatif – sans engagement de longue durée, résiliable pour la fin de l’année.' },
  { q: 'Comment l’impact est-il mesuré ?', a: 'Vous recevez des statistiques de visiteurs : vues, durée de visite, pièces les plus consultées et clics sur les points de réservation – des chiffres au lieu d’un ressenti.' },
  { q: 'Que se passe-t-il si je ne suis pas satisfait ?', a: 'Double garantie : qualité – nous affinons chaque détail, jusqu’à 3 séries de corrections incluses. Et marque – votre visite reste exactement fidèle à votre charte graphique, sans branding étranger.' },
  { q: 'En quoi est-ce différent de photos ou d’une vidéo ?', a: 'Les photos et vidéos montrent ce que nous voulons montrer. Une Signature Tour laisse le visiteur décider lui-même où regarder – et agir directement (réserver, demander). Une vidéo ne peut pas faire cela.' },
  { q: 'Est-ce la même chose que Matterport ?', a: 'Matterport est un standard de scan 3D – souvent avec un abonnement mensuel et un rendu standardisé. Notre visite est à votre charte graphique, active à la vente et vous appartient, sans abonnement obligatoire. Différence de qualité visible : là où Matterport recouvre le sol sous la caméra d’une tache floue (sinon on verrait le trépied), nous retouchons ce point nadir à 95 % proprement – sur demande à 100 % avec un sol impeccable ou votre logo.' },
  { q: 'Et le sol sous la caméra (nadir) ?', a: 'Lors de prises de vue à 360°, la caméra est posée sur un trépied – sans traitement, il serait visible. Beaucoup de prestataires posent simplement une tache floue ou un logo par-dessus. Nous retouchons le sol à 95 % proprement pour un rendu naturel. Pour un résultat parfait, l’option 100 % offre un sol impeccable ou un logo intégré.' },
  { q: 'Est-ce possible en plusieurs langues ?', a: 'Oui – allemand, français et anglais. Langues supplémentaires dès CHF 300 par langue.' },
]

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const BRANCHEN = [
  { img: '1566073771259-6a8506099945', href: '/branchen/hotel', t: 'Hôtels & gastronomie', d: 'Rendez chambres, lobby, ambiance et tables vivants – plus de réservations directes et de réservations de table.' },
  { img: '1540555700478-4be289fbecef', href: '/branchen/spa-wellness', t: 'Spa & wellness', d: 'Faites ressentir le calme et la qualité haut de gamme.' },
  { img: '1534438327276-14e5300c3a48', href: '/branchen/fitnessstudio', t: 'Salles de fitness', d: 'Montrez les équipements et l’atmosphère – abaissez le seuil d’inhibition.' },
  { img: '1512917774080-9991f1c4c750', href: '/branchen/immobilien', t: 'Immobilier', d: 'Des biens visitables 24 h/24 – moins de visites inutiles.' },
  { img: '1497366754035-f200968a6e72', href: '/branchen/banken-versicherungen', t: 'Banques, assurances & études', d: 'Des bureaux premium et salles de conseil qui inspirent confiance déjà en ligne.' },
  { img: '1519167758481-83f550bb49b3', href: '/branchen/eventlocations', t: 'Lieux d’événements & showrooms', d: 'Mettez en valeur salles, lieux et surfaces d’exposition – le client vit l’espace avant de demander.' },
]

export default function HomePageFr() {
  return (
    <div className="nigpage">
      <div dangerouslySetInnerHTML={{ __html: ICON_DEFS }} />

      <section className="hero">
        <div className="bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-apartment-living.jpg" alt="Salon lumineux d’un appartement de luxe – visite 360° signée Niggli" fetchPriority="high" />
        </div>
        <div className="wrap inner">
          <p style={{ marginBottom: 16, fontSize: 13, letterSpacing: '0.08em', color: 'var(--g)' }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Deutsch</a>
            <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
            <span style={{ fontWeight: 600 }}>Français</span>
          </p>
          <h1 className="serif">Vos espaces deviennent votre <em>meilleur vendeur</em> – 24 h/24.</h1>
          <p className="lead"><span className="accent">Les décisions se prennent aujourd’hui en ligne – pas sur place.</span><br />
            Nous transformons vos locaux en une expérience de vente numérique : les visiteurs découvrent votre offre, gagnent en confiance et réservent, achètent ou demandent une offre directement dans la visite – avant même le premier échange.</p>
          <div className="cta">
            <a className="btn btn-gold" href="/konfigurator.html">Conseil gratuit</a>
            <a className="btn btn-ghost" href="#referenzen">Voir les visites de référence</a>
            <a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a>
          </div>
          <p className="herotrust">Prestataire suisse · Prix unique au lieu d’un abonnement · Réponse sous 24 heures</p>
        </div>
      </section>

      <section className="blk pillars">
        <div className="wrap"><div className="grid">
          <div className="pillar"><Icon id="i-users" /><h3>Plus de demandes qualifiées</h3><p>Les prospects s’informent déjà avant le premier contact.</p></div>
          <div className="pillar"><Icon id="i-target" /><h3>Moins de pertes de temps</h3><p>Les demandes inadaptées et les rendez-vous inutiles sont réduits.</p></div>
          <div className="pillar"><Icon id="i-shield" /><h3>Plus de confiance</h3><p>La transparence convainc avant même le premier entretien.</p></div>
          <div className="pillar"><Icon id="i-cal" /><h3>De meilleures chances de conclure</h3><p>Des prospects bien informés décident plus vite.</p></div>
        </div></div>
      </section>

      <section className="blk" id="branchen" style={{ background: 'var(--paper2)' }}>
        <div className="wrap center">
          <div className="kicker">Secteurs</div><h2 className="sec">À chaque secteur sa visite sur mesure</h2>
          <p className="sub">Partout où l’atmosphère, la qualité et la confiance pèsent dans la décision.</p>
        </div>
        <div className="wrap">
          <div className="bgrid">
            {BRANCHEN.map((b) => (
              <a className="bcard" href={b.href} key={b.t}>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={`https://images.unsplash.com/photo-${b.img}?w=900&q=80&auto=format&fit=crop`} alt={b.t} />
                </div>
                <div className="bd"><h3>{b.t}</h3><p>{b.d}</p><span className="more">En savoir plus</span></div>
              </a>
            ))}
            <a className="bcard empty" href="/kontakt"><Icon id="i-diamond" /><h3>Un autre secteur ?</h3><p>Pour toute entreprise aux espaces remarquables.</p><span className="more">Prendre contact</span></a>
          </div>
        </div>
      </section>

      <section className="blk" id="leistung">
        <div className="wrap center">
          <div className="kicker">Ce que vous obtenez</div><h2 className="sec">Un collaborateur numérique qui ne s’arrête jamais</h2>
          <p className="sub">Une Signature Tour n’est pas un produit que l’on regarde une fois. C’est un outil de vente qui informe jour après jour, instaure la confiance et déclenche des demandes.</p><div className="rule" />
          <div className="fgrid">
            <div className="fcard"><Icon id="i-cam" /><h3>Visite 360° haut de gamme</h3><p>En qualité premium, avec un traitement soigné du sol et des détails.</p></div>
            <div className="fcard"><Icon id="i-palette" /><h3>Charte graphique</h3><p>Parfaitement accordée à votre marque – couleurs, logo, style.</p></div>
            <div className="fcard"><Icon id="i-pin" /><h3>Points interactifs</h3><p>Points de réservation et d’information : plus d’interaction, plus de résultats.</p></div>
            <div className="fcard"><Icon id="i-globe" /><h3>Site web & Google</h3><p>Intégrée de façon optimale. Visible, rapide, accessible partout.</p></div>
            <div className="fcard"><Icon id="i-chart" /><h3>Résultats mesurables</h3><p>Rapport analytique : vues, pièces les plus consultées et clics – des chiffres au lieu d’un ressenti.</p></div>
            <div className="fcard"><Icon id="i-shield" /><h3>Pleine propriété, sans abonnement</h3><p>La visite vous appartient. Pas de location de plateforme – seulement un forfait de service équitable et facultatif.</p></div>
            <div className="fcard"><Icon id="i-bolt" /><h3>Chargement ultra-rapide</h3><p>Optimisée pour le mobile – chaque seconde de chargement compte pour la conversion.</p></div>
            <div className="fcard"><Icon id="i-phone" /><h3>Interlocuteur suisse</h3><p>Pas de centre d’appels ni de système de tickets – directement avec le créateur. Hébergement en CH/UE, conforme au RGPD.</p></div>
          </div>
        </div>
      </section>

      <section className="blk dark">
        <div className="wrap">
          <div className="center"><div className="kicker">La différence</div><h2 className="sec">Visite standard vs Signature Experience</h2>
            <p className="sub">La plupart des visites se contentent de laisser regarder. Une Signature Experience donne envie d’agir.</p></div>
          <input type="checkbox" id="cmpmore" className="cmptoggle" />
          <div className="cmp">
            <div className="col std"><h3>Visite standard</h3><ul>
              <li><span className="i">—</span> Seulement regarder</li>
              <li><span className="i">—</span> Ne vend jamais activement</li>
              <li><span className="i">—</span> Aucune action directe</li>
              <li><span className="i">—</span> Rendu standardisé</li>
              <li><span className="i">—</span> Aucune donnée</li>
              <li><span className="i">—</span> Lié à un abonnement/une plateforme</li>
              <li><span className="i">—</span> Prestataire à l’étranger</li>
              <li className="xtr"><span className="i">—</span> Statique, passif</li>
              <li className="xtr"><span className="i">—</span> Le visiteur s’en va</li>
              <li className="xtr"><span className="i">—</span> Seuil de contact élevé</li>
              <li className="xtr"><span className="i">—</span> Se fond dans la masse</li>
              <li className="xtr"><span className="i">—</span> Une seule langue</li>
              <li className="xtr"><span className="i">—</span> Non évolutif</li>
              <li className="xtr"><span className="i">—</span> Créée une fois, puis dépassée</li></ul></div>
            <div className="col sig"><h3>Signature Experience</h3><ul>
              <li><span className="i">✓</span> Réserver, acheter ou demander directement</li>
              <li><span className="i">✓</span> Vend 24 h/24 – 365 jours</li>
              <li><span className="i">✓</span> L’intérêt devient contact</li>
              <li><span className="i">✓</span> À votre charte graphique</li>
              <li><span className="i">✓</span> Mesurable grâce au rapport analytique</li>
              <li><span className="i">✓</span> Vous appartient, sans contrainte</li>
              <li><span className="i">✓</span> Qualité et interlocuteur suisses</li>
              <li className="xtr"><span className="i">✓</span> Interactive & active à la vente</li>
              <li className="xtr"><span className="i">✓</span> Le visiteur reste plus longtemps</li>
              <li className="xtr"><span className="i">✓</span> Abaisse le seuil du premier contact</li>
              <li className="xtr"><span className="i">✓</span> Vous démarque visiblement de la concurrence</li>
              <li className="xtr"><span className="i">✓</span> Accessible en plusieurs langues (DE/FR/EN)</li>
              <li className="xtr"><span className="i">✓</span> Enrichissable à tout moment</li>
              <li className="xtr"><span className="i">✓</span> Améliorée en continu</li></ul></div>
          </div>
          <div className="center" style={{ marginTop: 22 }}>
            <label htmlFor="cmpmore" className="cmpbtn">
              <span className="show">Afficher les 14 différences +</span>
              <span className="hide">Afficher moins –</span>
            </label>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="fgrid fgrid3">
            <div className="fcard"><Icon id="i-globe" /><h3>À l’œuvre 24 h/24</h3><p>Votre visite vend pendant que vous dormez – 365 jours par an, même en dehors des heures d’ouverture.</p></div>
            <div className="fcard"><Icon id="i-target" /><h3>Un seul effort, un bénéfice durable</h3><p>Créée une fois, utilisée des années – sans frais publicitaires récurrents ni dispersion.</p></div>
            <div className="fcard"><Icon id="i-chart" /><h3>Du concret, pas du ressenti</h3><p>Vues, durée de visite et clics sur les points de réservation – vous voyez ce que la visite apporte.</p></div>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap center">
          <div className="kicker">Possibilités interactives</div><h2 className="sec">Bien plus que des images</h2><div className="rule" />
          <div className="fgrid fgrid3">
            <div className="fcard"><Icon id="i-cart" /><h3>Intégration de réservation</h3><p>Les clients réservent ou achètent directement dans la visite – sans détour par des sites tiers.</p></div>
            <div className="fcard"><Icon id="i-play" /><h3>Vidéo & audio</h3><p>Vidéos intégrées et audioguides racontent votre histoire au cœur de l’espace.</p></div>
            <div className="fcard"><Icon id="i-info" /><h3>Points d’information</h3><p>Horaires, prix et détails sous forme de points cliquables directement dans l’image.</p></div>
            <div className="fcard"><Icon id="i-zoom" /><h3>Zoom & plein écran</h3><p>Images et fenêtres s’agrandissent et s’ouvrent en plein écran – chaque détail devient visible.</p></div>
            <div className="fcard"><Icon id="i-pin" /><h3>Plan & mini-carte</h3><p>Orientation par plan et mini-carte – les visiteurs se repèrent immédiatement.</p></div>
            <div className="fcard"><Icon id="i-doc" /><h3>Téléchargements</h3><p>Brochures, menus, listes de prix et PDF directement depuis la visite.</p></div>
          </div>
        </div>
      </section>

      <section className="blk" id="gruende">
        <div className="wrap">
          <div className="center"><div className="kicker">Pourquoi Signatour</div><h2 className="sec">9 raisons de choisir Signatour</h2><div className="rule" /></div>
          <div className="fgrid fgrid3" style={{ textAlign: 'left' }}>
            {[
              { t: 'Done-for-You plutôt que DIY', d: 'Nous venons, photographions et livrons. Zéro effort pour vous.' },
              { t: 'Transparent plutôt que caché', d: 'Prix unique, pas d’abonnement – la visite vous appartient, aucune location de plateforme.' },
              { t: 'Local plutôt que cloud américain', d: 'Serveurs suisses/UE, conformité RGPD.' },
              { t: 'Multi-secteurs plutôt qu’immobilier seul', d: 'Hôtels, restaurants, spas, fitness, immobilier.' },
              { t: 'Flexible plutôt que contrat longue durée', d: 'Aucune durée minimale, aucun délai de résiliation.' },
              { t: 'Optimisation continue plutôt qu’immobilisme', d: 'Votre visite évolue – mises à jour, nouvelles scènes et extensions à tout moment.' },
              { t: 'Sol impeccable plutôt que tache de trépied', d: 'Le nadir est retouché à 95% – sur demande à 100% ou avec votre logo.' },
              { t: 'Instrument de vente plutôt que gadget', d: 'Liens de réservation, formulaires de contact et intégration Google transforment les visiteurs en demandes.' },
              { t: 'Mesurable plutôt qu’à l’aveugle', d: 'Vues, durée de visite et clics sur les points de réservation – vous voyez ce que votre visite rapporte.' },
            ].map((r, i) => (
              <div className="tcard" key={r.t}>
                <h3><span style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--g)', fontSize: 24, fontWeight: 600, marginRight: 10 }}>{String(i + 1).padStart(2, '0')}</span>{r.t}</h3>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blk" id="pakete" style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="center"><div className="kicker">Nos forfaits de vente</div><h2 className="sec">Frais de mise en place uniques</h2><div className="rule" /></div>
          <div className="prices">
            <div className="pcard">
              <h3>Basic</h3><div className="for">Idéal pour de petits espaces</div>
              <div className="price">CHF 990.–</div><div className="note">unique · incl. 12 mois de Basic Service</div>
              <ul><li><Chk /> jusqu’à 15 panoramas</li><li><Chk /> qualité Full HD 1080p</li><li><Chk /> max. 5 points interactifs</li><li><Chk /> optimisé pour le mobile</li><li><Chk /> 1 série de corrections</li></ul>
              <a className="btn btn-ghost" href="/bestellen?paket=basic">Commander</a>
            </div>
            <div className="pcard best">
              <div className="ribbon">Best-seller</div>
              <h3>Signature</h3><div className="for">Le polyvalent le plus prisé</div>
              <div className="price">CHF 2&apos;497.–</div><div className="note">unique · incl. 12 mois de Signature Care</div>
              <ul><li><Chk /> jusqu’à 40 panoramas</li><li><Chk /> qualité 4K</li><li><Chk /> jusqu’à 25 points interactifs</li><li><Chk /> intégration de la charte graphique</li><li><Chk /> audio & interactions</li><li><Chk /> 3 séries de corrections</li></ul>
              <a className="btn btn-gold" href="/bestellen?paket=signature">Commander</a>
            </div>
            <div className="pcard">
              <h3>Pro</h3><div className="for">Pour hôtels, thermes & resorts premium</div>
              <div className="price">dès CHF 4&apos;497.–</div><div className="note">incl. 12 mois de Signature Evolution · offre individuelle pour les grands projets</div>
              <ul><li><Chk /> jusqu’à 100 panoramas</li><li><Chk /> qualité 8K</li><li><Chk /> jusqu’à 50 points interactifs</li><li><Chk /> intégration de la charte graphique</li><li><Chk /> intégration de réservation</li><li><Chk /> vidéo & interactions</li><li><Chk /> 5 séries de corrections</li></ul>
              <a className="btn btn-ghost" href="/bestellen?paket=pro">Commander</a>
            </div>
          </div>
          <p className="center" style={{ marginTop: 22, color: 'var(--mut)', fontSize: 14 }}>Tous les forfaits : intégration Google, optimisés pour mobile, ordinateur, TV & casque VR, optimisés SEO et multilingues sur demande.</p>
        </div>
      </section>

      <section className="blk" id="service">
        <div className="wrap">
          <div className="center"><div className="kicker">Suivi & évolution</div><h2 className="sec">Forfaits de service annuels</h2><div className="rule" /></div>
          <div className="svc">
            <div className="scard"><h3>Basic Service</h3><ul><li><Chk /> exploitation & sécurité (hébergement)</li><li><Chk /> certificat SSL & sauvegardes</li><li><Chk /> 1 petite adaptation par an</li><li><Chk /> statistiques de visiteurs</li></ul><div className="amt">CHF 120.– <small>/ an</small></div><a className="btn btn-ghost" style={{ marginTop: 18, display: 'inline-block' }} href="/bestellen?service=basic-service">Choisir</a></div>
            <div className="scard rec"><div className="tag">Recommandé</div><h3>Signature Care</h3><ul><li><Chk /> tout le Basic Service</li><li><Chk /> 3 adaptations par an</li><li><Chk /> 1 mise à jour annuelle de la visite</li><li><Chk /> aperçu du comportement des visiteurs</li><li><Chk /> support prioritaire</li></ul><div className="amt">CHF 360.– <small>/ an</small></div><a className="btn btn-gold" style={{ marginTop: 18, display: 'inline-block' }} href="/bestellen?service=care">Choisir</a></div>
            <div className="scard"><h3>Signature Evolution</h3><ul><li><Chk /> tout le Signature Care</li><li><Chk /> 9 adaptations par an</li><li><Chk /> 2 « knowledge upgrades » annuels</li><li><Chk /> optimisation des performances</li><li><Chk /> rapports de trafic trimestriels</li></ul><div className="amt">CHF 600.– <small>/ an</small></div><a className="btn btn-ghost" style={{ marginTop: 18, display: 'inline-block' }} href="/bestellen?service=evolution">Choisir</a></div>
          </div>
        </div>
      </section>

      <section className="blk dark" id="garantie">
        <div className="wrap">
          <div className="center"><div className="kicker">Votre sécurité est notre promesse</div><h2 className="sec">Double garantie</h2><div className="rule" /></div>
          <div className="guar">
            <div className="gcard"><Icon id="i-shield" /><h3>Garantie de qualité</h3><p>Chaque panorama est peaufiné à la main — lumière, couleurs, détails. Rien ne quitte notre studio avant de répondre à nos exigences. Et si quelque chose ne correspond pas à vos attentes, nous l’affinons — jusqu’à 3 séries de corrections incluses.</p></div>
            <div className="gcard"><Icon id="i-palette" /><h3>Garantie de marque*</h3><p>Votre visite porte votre signature : couleurs, typographies, logo et navigation exactement selon votre charte graphique. Pas de lecteur standard, pas de branding étranger — vos visiteurs restent dans votre univers, du premier clic à la demande de réservation.</p></div>
          </div>
          <p style={{ marginTop: 14, textAlign: 'center', fontSize: 12.5, color: 'var(--dmut)' }}>* Intégration de la charte graphique dès la Signature Tour. La visite VR Basic utilise l’élégant design standard Signatour.</p>
          <div className="nullrisk">Risque minimal. Valeur ajoutée maximale.</div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="center"><div className="kicker">Options complémentaires</div><h2 className="sec">Quand il en faut un peu plus</h2><div className="rule" /></div>
          <div className="opts">
            <div className="ocard"><Icon id="i-code" /><h3>Signature Web – site web sur mesure</h3><div className="pr">dès CHF 2&apos;500.–</div></div>
            <div className="ocard"><Icon id="i-globe" /><h3>Version multilingue (DE / FR / EN)</h3><div className="pr">dès CHF 300.– par langue</div></div>
            <div className="ocard"><Icon id="i-palette" /><h3>Virtual Staging – ameublement virtuel</h3><div className="pr">dès CHF 240.– par panorama</div></div>
            <div className="ocard"><Icon id="i-pin" /><h3>Google Street View & intégration Business</h3><div className="pr">CHF 490.– unique</div></div>
            <div className="ocard"><Icon id="i-users" /><h3>Formulaire de capture de leads dans la visite</h3><div className="pr">CHF 390.– unique</div></div>
            <div className="ocard"><Icon id="i-sofa" /><h3>Furniture Removal</h3><div className="pr">dès CHF 180.– par panorama</div></div>
            <div className="ocard"><Icon id="i-bolt" /><h3>Mode jour/nuit</h3><div className="pr">dès CHF 180.– par scène</div></div>
            <div className="ocard"><Icon id="i-plus" /><h3>Panoramas supplémentaires</h3><div className="pr">dès CHF 150.– par scène</div></div>
          </div>
          <p className="center" style={{ marginTop: 22 }}>
            <a href="/pakete#add-ons" style={{ color: 'var(--g)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Voir toutes les options avec bénéfices & prix</a>
          </p>
        </div>
      </section>

      <section className="blk" id="referenzen" style={{ background: 'var(--paper2)' }}>
        <div className="wrap">
          <div className="center"><div className="kicker">Projets de référence</div><h2 className="sec">Voyez par vous-même</h2><div className="rule" /></div>
          <div className="refs">
            <div className="ref"><span className="badge">Réservation intégrée</span><iframe loading="lazy" src="https://vtour.cloud/e16tqj/ee82pes6/#node51" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Visite de référence : SPA Signature Tour" /><div className="bot"><b>SPA Signature Tour</b><a href="https://vtour.cloud/e16tqj/ee82pes6/" target="_blank" rel="noopener noreferrer">Ouvrir la visite</a></div></div>
            <div className="ref"><iframe loading="lazy" src="https://vtour.cloud/e16tqj/cltkwbjc/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Visite de référence : Immobilier Basic Tour" /><div className="bot"><b>Immobilier Basic Tour</b><a href="https://vtour.cloud/e16tqj/cltkwbjc/" target="_blank" rel="noopener noreferrer">Ouvrir la visite</a></div></div>
            <div className="ref"><span className="badge">Add-on</span><iframe loading="lazy" src="https://vtour.cloud/e16tqj/m9dre1te/" allow="accelerometer; magnetometer; gyroscope; fullscreen; xr-spatial-tracking" allowFullScreen title="Add-on : Furniture Removal" /><div className="bot"><b>Add-on : Furniture Removal</b><a href="https://vtour.cloud/e16tqj/m9dre1te/" target="_blank" rel="noopener noreferrer">Ouvrir la visite</a></div></div>
          </div>
        </div>
      </section>

      <section className="blk" id="faq">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="center"><div className="kicker">FAQ</div><h2 className="sec">Questions fréquentes</h2><div className="rule" /></div>
          <div className="faq">
            {FAQ_ITEMS.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="final">
            <div className="bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80&auto=format&fit=crop" alt="" />
            </div>
            <div className="inner">
              <div className="kicker">Prêt pour votre Premium Experience ?</div>
              <h2 className="serif">Donnons vie à votre offre, sous forme numérique.</h2>
              <p>Un entretien sans engagement suffit pour comprendre comment une Signature Experience transforme vos visiteurs en clients.</p>
              <div className="finalphone"><a className="phone" href={`tel:${TEL}`}><Icon id="i-phone" c="icn-sm" /> {CONTACT_PHONE}</a></div>
              <a className="btn btn-gold" href="/konfigurator.html">Conseil gratuit</a>
              <p className="finaltrust">Sans engagement · Réponse sous 24 heures · Personnellement par le propriétaire</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
