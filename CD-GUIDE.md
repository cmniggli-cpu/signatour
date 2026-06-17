# Signatour – Corporate Design (Entwickler-Referenz)

Verbindliches CD für signatour.ch. Bei jeder UI-/Text-Änderung einhalten. Das gestaltete PDF
(`Signatour-CD-Guide.pdf`) ist die Kundenversion; dieses MD ist die technische Umsetzung.

## Markenkern
- **Wir verkaufen kein VR-Tool, sondern ein digitales Verkaufsinstrument.** Nutzen ist der Held,
  Technik nur das Werkzeug: mehr qualifizierte Anfragen, weniger Leerläufe, mehr Vertrauen,
  höhere Abschlusschancen, 24/7-«digitaler Mitarbeiter».
- Wahrnehmung: **Premium, vertrauenswürdig, ergebnisorientiert, schweizerisch, ruhig-selbstbewusst.**
  Nie: billig, technisch-verspielt, marktschreierisch, Freelancer-/Stangen-Look.

## Farben (Tailwind v4 Tokens in `app/globals.css` → `@theme inline`)
| Rolle | Hex | Token / Nutzung |
|---|---|---|
| Gold (Primär) | `#C8901C` | `accent-500` → Akzente, Links, Preise, Kicker, Icons, Trennstriche |
| Hellgold | `#E3B23A` | Verlauf-Start, Glanz |
| Gold-Verlauf | `135deg,#E3B23A→#C8901C` | Primärbuttons, CTA-/Garantie-Felder |
| Marineblau | `#0C1B2E` | `marine-900` → **nur Akzentfläche** (Signature-Preiskarte, Footer, Stats-Band) |
| Ink (Text) | `#15120B` | Überschriften/Text (`primary-900`/`--ink`) |
| Muted | `#6d6657` | Sekundärtext (`--mut`) |
| Paper | `#FBFAF6` | Standard-Sektion (`--paper`) |
| Paper2 / Cream | `#F3EFE6` / `#F7F5F0` | Wechsel-Sektionen, Cream-Karten (`--paper2`, `cream`) |
| Weiss | `#FFFFFF` | Karten auf Paper-Grund, Tabellen |

**Regel:** Gold + Pastell tragen Flächen. **Marine = seltener, punktueller Akzent, nie grosser Balken.**
**Schwarz nie als Hintergrund** (durch Marine ersetzt).

## Typografie
- **Cormorant Garamond** (serif, 500/600/700): H1, H2, Sektionstitel, Preise. Im Homepage-Scope
  Klasse `.serif`/`.sec`; auf Unterseiten (Tailwind) Helfer-Klasse **`.cd-serif`** (statt `font-black`).
- **Jost** (300–600): Fliesstext, Buttons, Nav, Labels.
- **Kicker**: Jost 600, GROSSBUCHSTABEN, `letter-spacing:.26em`, Gold – über jeder Sektion.
- Auszeichnung im Titel: kursiv in Gold (`<em>`).
- Beide Fonts via Google Fonts im `app/layout.tsx` geladen.

## Architektur-Hinweise
- Homepage & Branchenseiten laufen im **`.nigpage`**-Scope (eigenes CSS-System in `globals.css`,
  helle „silver/gold"-Override-Sektion). Branchen über `components/sections/BranchenTemplate.tsx`
  + Daten in `lib/branchen-data.ts` (7 Branchen).
- Unterseiten (Pakete/Über uns/Kontakt/FAQ) nutzen Tailwind-Komponenten (`PageHero`, `CTASection`,
  `PricingCard`, `Card`). Diese sind aufs CD getrimmt – Titel via `.cd-serif`.

## Komponenten-Regeln
- **Buttons:** Primär = Gold-Verlauf, dunkler Text. CTA-/Kontaktfelder **immer Gold** (`CTASection`).
  Header-Button darf dunkel bleiben. Ghost = Outline.
- **Karten-Regel:**
  - weisser Hintergrund → **Cream-Karte** (`bg-cream` + `border-accent-200/70`), goldene Hairline;
    goldene Nummer (Cormorant) nur bei **gezählten** Listen.
  - Cream/Paper-Hintergrund → **weisse Karte**.
- **Stats-Band** („Zahlen statt Versprechen"): Marine `#0C1B2E`, goldene Serifenzahlen, Quellen klein
  + verlinkt (`rel="nofollow"`, neuer Tab) darunter.
- **Vergleichstabelle** (`.vtab`): helle Fläche, „Mit Signatour"-Spalte gold hinterlegt + Häkchen,
  Gegenspalte ausgegraut mit Minus; mobil gestapelt mit `data-l`-Labels.
- **ROI** (`.roicalc`): Rechnung Zeile für Zeile (Label → Wert in Gold-Serif) + goldenes Ergebnis-Band.
- **Garantien immer in Gold** (Gold-Verlauf-Feld, dunkler Text).

## Sprache & Text
- Schweizer Orthografie: immer **ss**, nie ß. Guillemets **«…»** statt „…".
- Sie-Form. **Nutzen statt Funktionen.** Belege mit Zahlen + verlinkten Quellen.
- Keine Hype-Wörter („revolutionär", „absolut"), **keine Ausrufezeichen** (ausser Mottos),
  **keine Emojis**.
- Preisformat **`CHF 2'497`** (Schweizer Tausender-Apostroph) bzw. `CHF 490.–`.
- Servicegebiet: Deutsch- und französischsprachige Schweiz; Beratung DE/FR, Aufträge auch EN.
- USPs immer mitnehmen, wo passend: **sauberer Nadir-Boden** (95–100%), **Datenhoheit/kein Lock-in**,
  **kein Abo**, **persönlicher Schweizer Ansprechpartner**.

## Don'ts
- Schwarze Flächen; Marine als grosser Balken; fette Inter-Black-Titel; KI-Bilder ohne Markenbezug;
  fremde Gold-Töne neben `#C8901C`; unbelegte Floskeln.

## Bildsprache
- Echte 360°-Tour-Standbilder / hochwertige Interieur-Fotos statt Stock oder KI. Gold im Bild muss
  den CD-Ton `#C8901C` treffen.

## Deploy
- Repo `github.com/cmniggli-cpu/signatour`, Branch `master`; Push deployed live (Vercel).
- Build vor Commit: `npm run build`. Formulare: FormSubmit (`info@signatour.ch`) mit Mailto-Fallback.
