import type { Metadata } from 'next'
import LegalPage from '@/components/sections/LegalPage'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, CONTACT_UID } from '@/lib/constants'

export const metadata: Metadata = { title: 'Impressum', robots: { index: false, follow: true } }
const TEL = CONTACT_PHONE.replace(/[^+\d]/g, '')

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" subtitle="Angaben gemäss schweizerischem Recht">
      <div className="box">
        <p><strong>Niggli 360° Signature Tours</strong><br />Marius Niggli<br />{CONTACT_ADDRESS}<br />Schweiz</p>
        <p>E-Mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />Telefon: <a href={`tel:${TEL}`}>{CONTACT_PHONE}</a></p>
        <p>Unternehmens-Identifikationsnummer (UID): {CONTACT_UID}</p>
        <p>Nicht mehrwertsteuerpflichtig – alle Preise verstehen sich ohne MWST.</p>
      </div>
      <h2>Haftungsausschluss</h2>
      <p>Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.</p>
      <h2>Haftung für Links</h2>
      <p>Verweise und Links auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.</p>
      <h2>Urheberrecht</h2>
      <p>Die auf dieser Website veröffentlichten Inhalte, Bilder und 360°-Touren sind urheberrechtlich geschützt. Eine Verwendung ohne Zustimmung ist nicht gestattet.</p>
    </LegalPage>
  )
}
