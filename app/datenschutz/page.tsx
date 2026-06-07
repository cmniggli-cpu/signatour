import type { Metadata } from 'next'
import LegalPage from '@/components/sections/LegalPage'
import { CONTACT_EMAIL, CONTACT_ADDRESS } from '@/lib/constants'

export const metadata: Metadata = { title: 'Datenschutz' }

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" subtitle="Gemäss revidiertem Schweizer Datenschutzgesetz (revDSG, gültig seit 1. September 2023)">
      <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, wie wir personenbezogene Daten im Rahmen unserer Dienstleistungen erheben, verarbeiten und speichern.</p>

      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich für die Datenbearbeitung:<br />Niggli 360° Signature Tours<br />Marius Niggli<br />{CONTACT_ADDRESS}<br />E-Mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>

      <h2>2. Erhobene Daten</h2>
      <p>Wir bearbeiten insbesondere folgende Kategorien personenbezogener Daten:</p>
      <ul>
        <li>Kontaktdaten (Name, Adresse, Telefonnummer, E-Mail)</li>
        <li>Vertrags- und Rechnungsdaten</li>
        <li>Zugriffsdaten bei Nutzung unserer Webseite und gehosteter VR-Touren (IP-Adresse, Zeitpunkt, aufgerufene Inhalte, Browserinformationen)</li>
        <li>Kommunikationsinhalte (E-Mails, Kontaktformulare)</li>
      </ul>

      <h2>3. Zweck der Datenbearbeitung</h2>
      <ul>
        <li>Erbringung unserer Dienstleistungen (360°-VR-Touren, Hosting)</li>
        <li>Vertragsabwicklung und Rechnungsstellung</li>
        <li>Kommunikation mit Kunden</li>
        <li>Optimierung und Sicherheit unserer Webseite und gehosteten Inhalte</li>
        <li>Rechtliche Verpflichtungen (z. B. Buchhaltungspflichten)</li>
      </ul>

      <h2>4. Weitergabe an Dritte</h2>
      <p>Wir geben personenbezogene Daten nur weiter, wenn dies zur Erfüllung des Auftrags notwendig ist (z. B. Hosting-Provider, IT-Dienstleister) oder wir rechtlich dazu verpflichtet sind. Eine Übermittlung in Länder ohne angemessenes Datenschutzniveau erfolgt nur mit zusätzlichen Garantien oder Ihrer ausdrücklichen Einwilligung.</p>

      <h2>5. Speicherdauer</h2>
      <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies für die Erfüllung unserer vertraglichen und gesetzlichen Pflichten notwendig ist oder Sie in die Bearbeitung eingewilligt haben.</p>

      <h2>6. Rechte der betroffenen Personen</h2>
      <ul>
        <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung Ihrer Daten, soweit keine rechtliche Pflicht zur Aufbewahrung besteht</li>
        <li>Einschränkung oder Widerspruch gegen die Datenbearbeitung</li>
        <li>Datenherausgabe oder -übertragung (Datenportabilität)</li>
      </ul>

      <h2>7. Datensicherheit</h2>
      <p>Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre Daten vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Unsere Server befinden sich ausschliesslich in der Schweiz.</p>

      <h2>8. Änderungen dieser Datenschutzerklärung</h2>
      <p>Wir können diese Datenschutzerklärung jederzeit anpassen. Massgeblich ist die jeweils auf unserer Webseite publizierte aktuelle Version.</p>

      <h2>9. Kontakt</h2>
      <p>Bei Fragen oder zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:<br />Niggli 360° Signature Tours<br />E-Mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </LegalPage>
  )
}
