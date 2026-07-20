import type { Metadata } from 'next'
import LegalPage from '@/components/sections/LegalPage'
import { CONTACT_EMAIL, CONTACT_ADDRESS } from '@/lib/constants'

export const metadata: Metadata = { title: 'Datenschutz', robots: { index: false, follow: true } }

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" subtitle="Gemäss revidiertem Schweizer Datenschutzgesetz (revDSG) · Stand: 21. Juli 2026">
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
      <p>Wir geben personenbezogene Daten nur weiter, wenn dies zur Erfüllung des Auftrags notwendig ist (z. B. Hosting-Provider, IT-Dienstleister) oder wir rechtlich dazu verpflichtet sind. Die von uns eingesetzten Dienstleister und die Bekanntgabe ins Ausland sind in Ziffer 5 beschrieben.</p>

      <h2>5. Dienstleister und Bekanntgabe ins Ausland</h2>
      <p>Zur Bereitstellung unserer Website und der 360°-Touren arbeiten wir mit Dienstleistern zusammen, die Personendaten auch ausserhalb der Schweiz bearbeiten können, insbesondere in der EU/im EWR und in den USA:</p>
      <ul>
        <li>Vercel Inc., USA – Hosting und weltweite Auslieferung dieser Website (Content Delivery Network) inkl. Server-Protokollen</li>
        <li>Garden Gnome GmbH, Wien (Österreich/EU) – Hosting der 360°-VR-Touren (vtour.cloud), einschliesslich der auf unseren Branchenseiten eingebetteten Beispiel-Touren</li>
        <li>FormSubmit – technische Übermittlung der Eingaben aus Kontakt-, Bestell- und Konfigurator-Formularen an unser E-Mail-Postfach (Bearbeitung auch in den USA möglich)</li>
        <li>Infomaniak Network SA, Genf (Schweiz) – E-Mail-Dienste</li>
        <li>Google LLC, USA – Auslieferung von Schriftarten (Google Fonts)</li>
        <li>Unsplash (Kanada/USA) – Auslieferung von Bildmaterial</li>
      </ul>
      <p>Beim Laden extern eingebundener Inhalte (Schriftarten, Bilder, Beispiel-Touren) wird Ihre IP-Adresse technisch bedingt an den jeweiligen Anbieter übermittelt.</p>
      <p>Erfolgt eine Bekanntgabe in ein Land ohne angemessenes Datenschutzniveau (namentlich die USA), stützen wir uns auf geeignete Garantien – insbesondere die Standardvertragsklauseln der EU-Kommission bzw. die Zertifizierung des Anbieters nach dem Swiss-U.S. Data Privacy Framework – oder auf eine gesetzliche Ausnahme, etwa wenn die Bekanntgabe für die Abwicklung Ihrer Anfrage oder eines Vertrags erforderlich ist.</p>

      <h2>6. Cookies und Reichweitenmessung</h2>
      <p>Unsere Website setzt keine Tracking-Cookies und keine Analyse-Tools ein. Beim Aufruf bearbeiten die eingesetzten Hosting-Dienstleister technisch bedingte Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt, abgerufene Inhalte) in Server-Protokollen; diese dienen der Sicherheit und Stabilität des Betriebs.</p>
      <p>Für gehostete 360°-VR-Touren können aggregierte Nutzungsstatistiken erhoben werden (z. B. Anzahl Aufrufe, aufgerufene Szenen). Sie dienen der Auswertung der VR-Tour für unsere Kunden.</p>

      <h2>7. Speicherdauer</h2>
      <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies für die Erfüllung unserer vertraglichen und gesetzlichen Pflichten notwendig ist oder Sie in die Bearbeitung eingewilligt haben.</p>

      <h2>8. Rechte der betroffenen Personen</h2>
      <ul>
        <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung Ihrer Daten, soweit keine rechtliche Pflicht zur Aufbewahrung besteht</li>
        <li>Einschränkung oder Widerspruch gegen die Datenbearbeitung</li>
        <li>Datenherausgabe oder -übertragung (Datenportabilität)</li>
      </ul>

      <h2>9. Beschwerderecht</h2>
      <p>Sie haben das Recht, sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) zu beschweren.</p>

      <h2>10. Datensicherheit</h2>
      <p>Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre Daten vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Die Übertragung unserer Website erfolgt verschlüsselt (TLS/SSL).</p>

      <h2>11. Änderungen dieser Datenschutzerklärung</h2>
      <p>Wir können diese Datenschutzerklärung jederzeit anpassen. Massgeblich ist die jeweils auf unserer Webseite publizierte aktuelle Version.</p>

      <h2>12. Kontakt</h2>
      <p>Bei Fragen oder zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:<br />Niggli 360° Signature Tours<br />E-Mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </LegalPage>
  )
}
