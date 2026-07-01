import type { Metadata } from 'next'
import LegalPage from '@/components/sections/LegalPage'

export const metadata: Metadata = { title: 'AGB', robots: { index: false, follow: true } }

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen" subtitle="Niggli 360° Signature Tours · Gültig ab 01.09.2025">
      <p>Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Rechtsbeziehung zwischen Niggli 360° Signature Tours (Auftragnehmer) und ihren Kunden (Auftraggeber). Sie gelten für alle Dienstleistungen im Bereich 360°-Fotografie, Virtual-Reality-Touren und Hosting, soweit nicht schriftlich etwas anderes vereinbart wurde.</p>

      <h2>1. Leistungsumfang</h2>
      <p>Der Auftragnehmer erbringt Dienstleistungen im Bereich der Produktion und Bearbeitung von 360°-VR-Touren, inkl. Fotografie, Nachbearbeitung, Hosting und Integration von Hotspots oder Zusatzfunktionen. Der genaue Leistungsumfang ergibt sich aus der jeweiligen Offerte und Auftragsbestätigung.</p>

      <h2>2. Preise und Zahlungsbedingungen</h2>
      <p>Es gelten die in der Offerte oder Auftragsbestätigung vereinbarten Preise. Alle Preise verstehen sich in CHF. Es wird keine Mehrwertsteuer erhoben, da der Auftragnehmer derzeit nicht mehrwertsteuerpflichtig ist. Die Rechnungen sind innert 10 Tagen ohne Abzüge (netto) zu begleichen. Rabatte gelten nur, wenn die vereinbarten Voraussetzungen eingehalten werden.</p>
      <p>Nebenabreden zum abgeschlossenen Vertrag sind nur gültig, wenn sie schriftlich bestätigt werden. Diese Bestimmung gilt für zukünftige Vertragsänderungen. Der Hauptvertrag bleibt von dieser Regelung unberührt.</p>

      <h2>3. Zusatzbedingungen &amp; Zuschläge</h2>
      <p>Die Zusatzbedingungen (siehe unten) sind integrierter Bestandteil dieser AGB. Dazu gehören insbesondere Regelungen zu Exklusivität der Location, technischer Vorbereitung, Geräteschutz, Haftung bei Schäden sowie Fair-Use-Regeln bei Rabatten.</p>

      <h2>4. Hosting und Service</h2>
      <p>Für das Hosting der produzierten VR-Touren fallen jährliche Service- und Hostinggebühren an. Die genauen Konditionen ergeben sich aus dem aktuellen Preisblatt. Der Auftraggeber kann alternativ den Output-Ordner erhalten und das Hosting selbst übernehmen.</p>

      <h2>5. Abnahme und Rückmeldefrist</h2>
      <p>Der Kunde hat ab Zusendung des Viewer-Links 14 Kalendertage Zeit, den ersten Entwurf zu prüfen und Korrekturwünsche mitzuteilen. Als Rückmeldung gelten ausschliesslich konkrete, schriftliche Korrekturwünsche. Blosse Vertröstungen oder Ankündigungen halten die Frist weder an noch setzen sie sie neu in Gang. Erfolgt innert Frist keine Rückmeldung, gilt der Entwurf als abgenommen und die Schlussrechnung wird fällig (Abnahme-Fiktion gemäss OR Art. 370).</p>

      <h2>6. Haftung</h2>
      <p>Der Auftragnehmer haftet nur für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz entstehen. Bei höherer Gewalt, technischen Störungen oder unvorhersehbaren Ereignissen entfällt die Haftung.</p>
      <p>Für Schäden am Equipment, die durch nicht vereinbarte Betriebszustände der Räume (z. B. Sauna, Dampfbad) entstehen, haftet der Auftraggeber vollumfänglich.</p>
      <p>Der Auftraggeber haftet zudem für Schäden am Equipment, die durch seine Kunden, Gäste oder Personal verursacht werden. Dies gilt insbesondere, wenn Personen mit der Ausrüstung in Kontakt kommen, diese umstossen oder anderweitig beschädigen. Der Auftraggeber ist für das Verhalten aller anwesenden Personen während der Produktion verantwortlich.</p>

      <h2>7. Exklusivität während der Aufnahmen</h2>
      <p>Der Auftraggeber verpflichtet sich, die für die Aufnahme vorgesehenen Räume während der vereinbarten Produktionszeit für Kundenbesuche geschlossen zu halten. Sollte diese Bedingung nicht eingehalten werden und die Aufnahmen durch anwesende Gäste oder Besucher gestört werden, fällt ein pauschaler Zuschlag von CHF 1’000 an.</p>

      <h2>8. Verzögerungen und Wartezeiten</h2>
      <p>Der Auftraggeber ist verpflichtet, die für die Produktion notwendigen Vorbereitungen (z. B. Sauberkeit, Funktionsfähigkeit von Licht- und Technik, rechtzeitige Bereitstellung des Personals) rechtzeitig und vollständig sicherzustellen.</p>
      <p>Kommt es aufgrund ungenügender Vorbereitung oder durch das eingesetzte Personal des Auftraggebers zu Verzögerungen während der Produktion, werden die dadurch entstehenden Wartezeiten mit CHF 250.– pro Stunde in Rechnung gestellt.</p>
      <p>Sollte der Produktionsstart infolge ungenügender Vorbereitung oder fehlender Einsatzbereitschaft des Personals nicht wie vereinbart erfolgen können, behält sich der Auftragnehmer das Recht vor, ebenfalls eine Entschädigung von CHF 250.– pro Stunde für die Ausfallzeit bis zum effektiven Beginn der Arbeiten zu verrechnen.</p>

      <h2>9. Urheberrechte &amp; Nutzungsrechte</h2>
      <p>Alle erstellten Aufnahmen und VR-Touren bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers. Mit Zahlung erhält der Auftraggeber ein nicht exklusives, zeitlich unbeschränktes Nutzungsrecht für die vereinbarten Zwecke. Eine Weitergabe an Dritte oder Weiterverkauf bedarf der Zustimmung des Auftragnehmers.</p>

      <h2>10. Datenschutz</h2>
      <p>Die Bearbeitung personenbezogener Daten erfolgt gemäss der separaten Datenschutzerklärung. Diese ist Bestandteil der Zusammenarbeit.</p>
      <p>Der Auftraggeber ist verpflichtet, dafür zu sorgen, dass während der Produktion nur Personen anwesend sind, die mit der Aufnahme und einer möglichen Veröffentlichung einverstanden sind. Für allfällige Ansprüche Dritter haftet der Auftraggeber vollumfänglich.</p>

      <h2>11. Schlussbestimmungen</h2>
      <p>Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Gültigkeit der übrigen AGB unberührt. Gerichtsstand ist der Geschäftssitz des Auftragnehmers, soweit nicht zwingend anders vorgeschrieben. Diese AGB treten am 01.09.2025 in Kraft und ersetzen alle früheren Fassungen.</p>

      <h2>Zusatzbedingungen (integrierter Bestandteil)</h2>
      <p><strong>Exklusivität der Location:</strong> Der Kunde verpflichtet sich, die für die Aufnahme vorgesehenen Räume während der vereinbarten Aufnahmezeit für Besucher geschlossen zu halten. Verletzungen führen zu einem Zuschlag von CHF 200 pro Stunde für Warte- oder Mehraufwand.</p>
      <p><strong>Technische Vorbereitung:</strong> Abgesprochene Bedingungen (z. B. Licht, Saunen, Dampfbad, Räume) müssen vor Aufnahmebeginn bereitgestellt sein. Nicht eingehaltene Vereinbarungen führen zu einem Zuschlag von CHF 150 pro Stunde Wartezeit.</p>
      <p><strong>Geräteschutz:</strong> In Bereichen mit Feuchtigkeit, Hitze oder anderen Risiken dürfen die Anlagen nur auf vereinbarter Stufe betrieben werden. Andernfalls können Aufnahmen verschoben oder mit einem Zuschlag von CHF 250 neu angesetzt werden.</p>
      <p><strong>Haftung bei Geräteschäden:</strong> Kommt es durch fehlende Kooperation des Kunden oder durch nicht vereinbarte Betriebszustände zu Schäden an der Kamera oder anderem Equipment, haftet der Kunde vollumfänglich und ersetzt den Schaden unverzüglich.</p>
      <p><strong>Fair-Use-Regel für Rabatte:</strong> Spezialrabatte (z. B. für Referenzkunden) gelten nur bei reibungsloser Kooperation. Bei wiederholten Verzögerungen oder Verletzungen der Vereinbarung kann der Rabatt aufgehoben und der reguläre Preis rückwirkend in Rechnung gestellt werden.</p>
    </LegalPage>
  )
}
