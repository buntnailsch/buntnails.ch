// ============================================================
//  BUNT — Nails & Beauty · Preisliste
//  A5 · Typst 0.15+
//  Kompilieren: node build.js  (oder: typst compile Bunt_Preisliste.typ)
//
//  Inhalte bearbeiten:
//  · Preise und Leistungen stehen in den `item(...)`-Aufrufen
//    auf Seite 1 und 2 (Name, Preis, optionale Beschreibung und
//    optionale Einheit, z. B. `unit: "pro Nagel"`).
//  · Kontaktdaten stehen im Footer unten (Adresse, Telefon,
//    E-Mail) und im Feld "Gut zu wissen".
//  · Alle Farben und Schriften lassen sich im Block "Design"
//    zentral anpassen.
// ============================================================

// ---------------------------- Design -------------------------
#let display = "Libertinus Serif"
#let sans = ("Segoe UI", "Arial")

#let cream = rgb("#FDFBF7")
#let ink = rgb("#1A1A1A")
#let accent = rgb("#C86D51")
#let rose = rgb("#D07C7C")
#let sage = rgb("#8A9A86")
#let taupe = rgb("#8C827A")
#let mist = rgb("#7F98A8")
#let lilac = rgb("#A08CB8")
#let peach = rgb("#D9A07C")

// Fünf pastellfarbene Punkte als verspieltes Markenzeichen.
#let brand-dots(d: 2.1mm) = grid(
  columns: (auto,) * 5,
  column-gutter: 1.5mm,
  ..(rose, peach, sage, mist, lilac).map(c => circle(radius: d / 2, fill: c)),
)

// ---------------------------- Seite --------------------------
#set document(title: "Bunt — Preisliste", author: "Bunt Nails & Beauty")

#set page(
  paper: "a5",
  margin: (x: 13mm, top: 14mm, bottom: 14mm),
  fill: cream,
  footer-descent: 0mm,
  header: context {
    if counter(page).get().first() > 1 {
      set text(size: 6pt, fill: taupe, tracking: 0.2em)
      grid(
        columns: (1fr, 1fr),
        align: horizon,
        text(font: display, size: 9pt, tracking: 0.32em, fill: ink)[BUNT],
        align(right)[PREISLISTE],
      )
      v(1.6mm)
      line(length: 100%, stroke: 0.4pt + taupe.transparentize(60%))
    }
  },
  footer: context {
    set text(size: 5.7pt, fill: taupe, tracking: 0.03em)
    v(1.4mm)
    line(length: 100%, stroke: 0.4pt + taupe.transparentize(60%))
    v(1.4mm)
    grid(
      columns: (1fr, auto, 1fr),
      align: horizon,
      column-gutter: 2mm,
      [
        #text(weight: "semibold", fill: ink, tracking: 0.12em)[BUNT]
        #h(1.2mm)·#h(1.2mm)
        Regensbergstrasse 175, 8050 Zürich
      ],
      text(size: 6.1pt, fill: ink)[
        #counter(page).display() #h(0.35em) / #h(0.35em) #counter(page).final().first()
      ],
      align(right)[#text("kontakt@buntnails.ch") · +41 76 298 09 41],
    )
  },
)

#set text(font: sans, size: 9pt, fill: ink, lang: "de", region: "CH")
#set par(leading: 0.4em, spacing: 0pt)

// -------------------------- Bausteine ------------------------
// Abschnittskopf: farbiger Punkt, Serif-Titel und feine Linie.
#let section(title, color, body) = {
  v(8.8mm)
  grid(
    columns: (auto, 1fr),
    column-gutter: 2.6mm,
    align: horizon,
    circle(radius: 1.1mm, fill: color),
    text(font: display, size: 14.5pt, tracking: 0.005em)[#title],
  )
  v(1.6mm)
  line(length: 100%, stroke: 0.5pt + color.transparentize(55%))
  v(3.4mm)
  body
}

// Eine Leistung mit Punktführung, Preis und optionaler Beschreibung.
#let item(name, price, desc: none, unit: none) = {
  grid(
    columns: (auto, 1fr, auto),
    column-gutter: 2.2mm,
    align: bottom,
    [
      #text(size: 8.9pt)[#name]
      #if unit != none [
        #h(0.8mm)#text(size: 6.4pt, fill: taupe)[#unit]
      ]
    ],
    box(
      width: 100%,
      text(size: 7pt, fill: taupe.transparentize(35%), repeat[.]),
    ),
    align(right)[#text(size: 8.9pt, weight: "semibold")[#price]],
  )

  if desc != none {
    v(0.8mm)
    block(width: 100%, text(size: 7.1pt, fill: taupe)[#desc])
    v(1.2mm)
  }

  v(2.2mm)
}

// ============================================================
//  SEITE 1 — Hero · Maniküre · Gel-Nägel · Pediküre
// ============================================================

// Weiche Farbflächen im Hintergrund (sehr dezent).
#place(
  top + right,
  dx: 24mm,
  dy: -26mm,
  circle(radius: 38mm, fill: rose.transparentize(93%)),
)
#place(
  bottom + left,
  dx: -25mm,
  dy: 28mm,
  circle(radius: 33mm, fill: sage.transparentize(94%)),
)

#align(center)[
  #brand-dots()
  #v(5.5mm)
  #text(font: display, size: 36pt, tracking: 0.32em)[BUNT]
  #v(2mm)
  #text(size: 5.9pt, tracking: 0.26em, fill: taupe)[NAILS & BEAUTY — ZÜRICH]
  #v(5mm)
  #grid(
    columns: (1fr, auto, 1fr),
    column-gutter: 3mm,
    align: horizon,
    line(length: 100%, stroke: 0.5pt + accent.transparentize(45%)),
    circle(radius: 0.85mm, fill: accent),
    line(length: 100%, stroke: 0.5pt + accent.transparentize(45%)),
  )
  #v(4mm)
  #text(font: display, style: "italic", size: 18pt)[Preisliste]
  #v(1.6mm)
  #text(font: display, style: "italic", size: 9.4pt, fill: accent)[Schönheit in jeder Farbe]
]

#section("Maniküre", rose)[
  #item(
    "Maniküre ohne Lack",
    "CHF 30",
    desc: "Handbad, Nägel kürzen und feilen, Nagelhautpflege, Handcreme und kurze Handmassage.",
  )
  #item(
    "Maniküre mit Nagellack",
    "CHF 40",
    desc: "Maniküre inklusive normalem Nagellack.",
  )
  #item("Shellac", "CHF 50")
]

#section("Gel-Nägel", lilac)[
  #item("Neues Set mit kurzer Verlängerung mit Farbe", "CHF 75")
  #item("Auffüllen mit Farbe", "CHF 65")
  #item("Neues Set mit kurzer Verlängerung ohne Farbe", "CHF 60")
  #item("Auffüllen ohne Farbe", "CHF 55")
  #item("French", "+ CHF 5")
  #item("Babyboomer", "+ CHF 10")
  #item("Chrom", "+ CHF 10")
]

#section("Pediküre", sage)[
  #item("Classic Pediküre ohne Lack", "CHF 50")
  #item("Classic Pediküre mit Nagellack", "CHF 60")
  #item("Classic Pediküre mit Shellac", "CHF 80")
  #item(
    "Bunt VIP – Apparative Pediküre mit Shellac",
    "CHF 100",
    desc: "Präzise Geräte-Pediküre, sorgfältige Nagel- und Nagelhautpflege sowie Bearbeitung verhornter Haut, inklusive Shellac.",
  )
  #item("Zehenmodellage", "CHF 10", unit: "pro Nagel")
  #item("Kürzen und feilen", "CHF 25")
]

// ============================================================
//  SEITE 2 — Augenbrauen · Entfernen · Extras · Kinder
// ============================================================

#pagebreak()

#place(
  top + left,
  dx: -24mm,
  dy: -25mm,
  circle(radius: 35mm, fill: lilac.transparentize(94%)),
)
#place(
  bottom + right,
  dx: 25mm,
  dy: 26mm,
  circle(radius: 31mm, fill: peach.transparentize(94%)),
)

#section("Augenbrauen & Wimpern", accent)[
  #item(
    "Wimpernlifting mit Farbe",
    "CHF 80",
    desc: "Inklusive Farbe und Formen der Augenbrauen.",
  )
  #item("Wimpernlifting ohne Farbe", "CHF 60")
]

#section("Entfernen", mist)[
  #item("Shellac entfernen", "CHF 20")
  #item(
    "Gel entfernen",
    "CHF 30",
    desc: "Entfernen von Gel mit Glitzer oder aufwendigem Design.",
  )
]

#section("Extras", peach)[
  #item("Nagelreparatur beim Auffüllen", "CHF 3", unit: "pro Nagel")
  #item("Nagelreparatur als separate Behandlung", "CHF 8", unit: "pro Nagel")
  #item("Strassstein", "CHF 1", unit: "pro Stein")
  #item("Muster (kleben)", "CHF 3", unit: "pro Nagel")
]

#section("Kinder – bis 12 Jahre", rose)[
  #item("Kinder-Maniküre mit Nagellack", "CHF 20")
  #item(
    "Kinder-Pediküre mit Nagellack",
    "CHF 20",
    desc: "Bei Bedarf etwas Handcreme.",
  )
]

// ---------------------- Gut zu wissen -----------------------
#v(7mm)
#block(
  width: 100%,
  fill: sage.transparentize(90%),
  radius: 1.6mm,
  inset: (x: 5mm, y: 4.2mm),
)[
  #text(size: 5.9pt, tracking: 0.2em, fill: sage.darken(25%))[GUT ZU WISSEN]
  #v(2mm)
  #grid(
    columns: (auto, 1fr),
    column-gutter: 2.2mm,
    row-gutter: 1.5mm,
    ..(
      (
        "Terminvereinbarung per Telefon oder SMS: +41 76 298 09 41.",
        "Nur kurze Nägel – keine langen Nägel.",
        "Bitte keine Hunde mitbringen. Vielen Dank für dein Verständnis!",
      ).map(line => (
        circle(radius: 0.65mm, fill: sage),
        text(size: 7.1pt)[#line],
      ))
    ).flatten(),
  )
]

// ------------------------- Abschluss ------------------------
#v(12mm)
#align(center)[
  #brand-dots(d: 1.8mm)
  #v(3.6mm)
  #text(font: display, style: "italic", size: 17pt)[Wir freuen uns auf dich!]
  #v(1.8mm)
  #text(size: 5.6pt, tracking: 0.24em, fill: taupe)[NAILS · PEDICURE · BEAUTY]
]










