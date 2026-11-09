import { useEffect, useRef, useState, type AnchorHTMLAttributes } from "react";
import logoSrc from "../images/visit_card_logo.png";
import nasimSrc from "../images/nasim_sakkaki.png";
import "./App.css";

const bookingUrl = "https://buntnails.setmore.com/buntnails";
const phoneNumber = "+41 76 298 09 41";
const phoneHref = "tel:+41762980941";
// Set to true to restore the Setmore booking section, modal, and CTAs.
// See README → Online-Buchung.
const ONLINE_BOOKING_ENABLED: boolean = false;
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Regensbergstrasse%20175%208050%20Z%C3%BCrich";

type ExternalAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type PriceItem = {
  name: string;
  price: string;
  description?: string;
  unit?: string;
};

type PriceTone = "rose" | "lilac" | "sage" | "terracotta" | "mist" | "peach";

type PriceCategory = {
  title: string;
  tone: PriceTone;
  items: PriceItem[];
};

const priceList: PriceCategory[] = [
  {
    title: "Maniküre",
    tone: "rose",
    items: [
      {
        name: "Maniküre ohne Lack",
        price: "CHF 30",
        description:
          "Handbad, Nägel kürzen und feilen, Nagelhautpflege, Handcreme und kurze Handmassage.",
      },
      {
        name: "Maniküre mit Nagellack",
        price: "CHF 40",
        description: "Maniküre inklusive normalem Nagellack.",
      },
      { name: "Shellac", price: "CHF 50" },
    ],
  },
  {
    title: "Gel-Nägel",
    tone: "lilac",
    items: [
      { name: "Neues Set mit kurzer Verlängerung mit Farbe", price: "CHF 75" },
      { name: "Auffüllen mit Farbe", price: "CHF 65" },
      { name: "Neues Set mit kurzer Verlängerung ohne Farbe", price: "CHF 60" },
      { name: "Auffüllen ohne Farbe", price: "CHF 55" },
      { name: "French", price: "+ CHF 5" },
      { name: "Babyboomer", price: "+ CHF 10" },
      { name: "Chrom", price: "+ CHF 10" },
    ],
  },
  {
    title: "Pediküre",
    tone: "sage",
    items: [
      { name: "Classic Pediküre ohne Lack", price: "CHF 50" },
      { name: "Classic Pediküre mit Nagellack", price: "CHF 60" },
      { name: "Classic Pediküre mit Shellac", price: "CHF 80" },
      {
        name: "Bunt VIP – Apparative Pediküre mit Shellac",
        price: "CHF 100",
        description:
          "Präzise Geräte-Pediküre, sorgfältige Nagel- und Nagelhautpflege sowie Bearbeitung verhornter Haut, inklusive Shellac.",
      },
      { name: "Zehenmodellage", price: "CHF 10", unit: "pro Nagel" },
      { name: "Kürzen und feilen", price: "CHF 25" },
    ],
  },
  {
    title: "Augenbrauen & Wimpern",
    tone: "terracotta",
    items: [
      {
        name: "Wimpernlifting mit Farbe",
        price: "CHF 80",
        description: "Inklusive Farbe und Formen der Augenbrauen.",
      },
      { name: "Wimpernlifting ohne Farbe", price: "CHF 60" },
    ],
  },
  {
    title: "Entfernen",
    tone: "mist",
    items: [
      { name: "Shellac entfernen", price: "CHF 20" },
      {
        name: "Gel entfernen",
        price: "CHF 30",
        description: "Entfernen von Gel mit Glitzer oder aufwendigem Design.",
      },
    ],
  },
  {
    title: "Extras",
    tone: "peach",
    items: [
      {
        name: "Nagelreparatur beim Auffüllen",
        price: "CHF 3",
        unit: "pro Nagel",
      },
      {
        name: "Nagelreparatur als separate Behandlung",
        price: "CHF 8",
        unit: "pro Nagel",
      },
      { name: "Strassstein", price: "CHF 1", unit: "pro Stein" },
      { name: "Muster (kleben)", price: "CHF 3", unit: "pro Nagel" },
    ],
  },
  {
    title: "Kinder – bis 12 Jahre",
    tone: "rose",
    items: [
      { name: "Kinder-Maniküre mit Nagellack", price: "CHF 20" },
      {
        name: "Kinder-Pediküre mit Nagellack",
        price: "CHF 20",
        description: "Bei Bedarf etwas Handcreme.",
      },
    ],
  },
];

function ExternalAnchor({ href, children, className = "", ...props }: ExternalAnchorProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

function Header() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#top" className="brand-mark" aria-label="Bunt Nails Startseite">
          {logoFailed ? (
            <span className="brand-fallback">BUNT NAILS</span>
          ) : (
            <img
              src={logoSrc}
              alt="Bunt Nails Logo"
              onError={() => setLogoFailed(true)}
            />
          )}
        </a>

        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#ueber-team">Über das Team</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        {ONLINE_BOOKING_ENABLED ? (
          <ExternalAnchor href={bookingUrl} className="nav-cta">
            Termin buchen
          </ExternalAnchor>
        ) : (
          <a href={phoneHref} className="nav-cta">
            Termin per Telefon
          </a>
        )}
      </div>
    </header>
  );
}

function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="top" className="hero section-shell" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Zürich-Oerlikon · Regensbergstrasse 175</p>
          <h1 id="hero-title" className="text-display font-display">
            Präzision &amp; Eleganz für Ihre Nägel.
          </h1>
          <p className="hero-subtitle">
            Ihr exklusives Studio für professionelle Maniküre, Pediküre, Gel-Nägel
            und Beauty in Zürich-Oerlikon.
          </p>

          <div className="hero-actions">
            {ONLINE_BOOKING_ENABLED ? (
              <button
                type="button"
                className="button button-primary"
                onClick={onOpenBooking}
              >
                Termin online buchen
              </button>
            ) : (
              <a href={phoneHref} className="button button-primary">
                Termin per Telefon
              </a>
            )}
            <a href="#leistungen" className="button button-ghost">
              Leistungen ansehen
            </a>
          </div>

          <dl className="studio-facts" aria-label="Studio Highlights">
            <div>
              <dt>Studio</dt>
              <dd>Bunt Nails</dd>
            </div>
            <div>
              <dt>Ort</dt>
              <dd>Oerlikon</dd>
            </div>
            <div>
              <dt>Fokus</dt>
              <dd>Gel &amp; Pflege</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual reveal" aria-label="Portrait im Studio">
          <div className="portrait-frame">
            <img
              src={nasimSrc}
              alt="Teammitglied von Bunt Nails im Studio"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <aside className="floating-note" aria-label="Studio Hinweis">
            <span>Studio Bunt</span>
            <strong>Leise Präzision.</strong>
            <em>Handgefertigte Ästhetik für natürliche Eleganz.</em>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="leistungen" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Leistungen &amp; Preise</p>
          </div>
          <div>
            <h2 id="services-title" className="text-editorial font-display">
              Ein Menü für gepflegte Hände, ruhige Schritte und haltbare Eleganz.
            </h2>
            <p className="price-intro">
              Alle Behandlungen und Preise auf einen Blick. Termine nach
              Verfügbarkeit – telefonisch, per SMS oder E-Mail. Alle Preise in CHF.
            </p>
          </div>
        </div>

        <div className="price-grid reveal">
          {priceList.map((category) => (
            <article
              key={category.title}
              className={`price-card tone-${category.tone}`}
            >
              <header className="price-card-head">
                <span className="price-dot" aria-hidden="true" />
                <h3>{category.title}</h3>
              </header>

              <ul className="price-items">
                {category.items.map((item) => (
                  <li className="price-item" key={item.name}>
                    <div className="price-line">
                      <span className="price-name">
                        {item.name}
                        {item.unit ? (
                          <span className="price-unit">{item.unit}</span>
                        ) : null}
                      </span>
                      <span className="price-leader" aria-hidden="true" />
                      <span className="price-amount">{item.price}</span>
                    </div>
                    {item.description ? (
                      <p className="price-description">{item.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="price-notes reveal">
          <div className="price-note">
            <span>Termin</span>
            <p>
              Per Telefon oder SMS: <a href={phoneHref}>{phoneNumber}</a>
            </p>
          </div>
          <div className="price-note">
            <span>Hinweis</span>
            <p>Nur kurze Nägel – keine langen Nägel.</p>
          </div>
          <div className="price-note">
            <span>Bitte</span>
            <p>Keine Hunde mitbringen. Vielen Dank für dein Verständnis!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="ueber-team"
      className="section section-canvas"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-image reveal">
          <img
            src={nasimSrc}
            alt="Bunt Nails Team im Studio"
            loading="lazy"
          />
          <span className="signature">Bunt Nails Team</span>
        </div>

        <div className="about-copy reveal">
          <p className="eyebrow">Über das Team</p>
          <h2 id="about-title" className="text-editorial font-display">
            Perfektion beginnt mit Ruhe, Sauberkeit und einem geschulten Blick.
          </h2>
          <p>
            Das Bunt Nails Team arbeitet mit einem klaren Anspruch: jedes Detail
            soll bewusst gesetzt sein. Von der Vorbereitung des Arbeitsplatzes bis
            zum letzten Pinselstrich stehen ein ruhiger, hygienischer und
            persönlicher Ablauf im Mittelpunkt.
          </p>
          <p>
            Die Arbeit verbindet präzise Nagelpflege mit individueller Ästhetik.
            Ob dezenter Alltagsglanz, elegante Gel-Modellage oder feine Nail Art:
            jedes Ergebnis wird auf Form, Haltung und Persönlichkeit abgestimmt.
          </p>

          <ul className="about-list" aria-label="Arbeitsweise des Teams">
            <li>
              <strong>Hygiene als Ritual</strong>
              <span>Saubere Tools, klare Abläufe und ein ruhiges Studio.</span>
            </li>
            <li>
              <strong>Maßgeschneiderte Formen</strong>
              <span>Nagelform und Länge werden gemeinsam abgestimmt.</span>
            </li>
            <li>
              <strong>Leise Eleganz</strong>
              <span>Ergebnisse, die gepflegt wirken und natürlich bleiben.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Booking({ onOpenBooking }: { onOpenBooking: () => void }) {
  if (!ONLINE_BOOKING_ENABLED) {
    return (
      <section id="booking" className="section" aria-labelledby="booking-title">
        <div className="container">
          <div className="booking-panel reveal">
            <div>
              <p className="eyebrow">Termin</p>
              <h2 id="booking-title" className="text-editorial font-display">
                Termine nach Verfügbarkeit – telefonisch, per SMS oder E-Mail.
              </h2>
              <p className="booking-copy">
                Rufen Sie uns an, senden Sie eine SMS oder schreiben Sie eine
                E-Mail. Wir melden uns mit einem passenden Termin.
              </p>
            </div>
            <div className="booking-actions">
              <a href={phoneHref} className="button button-primary">
                {phoneNumber}
              </a>
              <a
                href="mailto:kontakt@buntnails.ch"
                className="button button-ghost"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section" aria-labelledby="booking-title">
      <div className="container">
        <div className="booking-panel reveal">
          <div>
            <p className="eyebrow">Termin buchen</p>
            <h2 id="booking-title" className="text-editorial font-display">
              Ihr nächster Nageltermin ist nur einen Klick entfernt.
            </h2>
            <p className="booking-copy">
              Wählen Sie online einen passenden Slot und starten Sie mit einem
              klaren, unkomplizierten Ablauf in Ihr Bunt Nails Erlebnis.
            </p>
          </div>
          <div className="booking-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={onOpenBooking}
            >
              Setmore öffnen
            </button>
            <ExternalAnchor href={bookingUrl} className="button button-ghost">
              Direkt zu Setmore
            </ExternalAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="kontakt" className="footer" aria-labelledby="contact-title">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="footer-brand" aria-label="Zur Startseite">
            BUNT NAILS
          </a>
          <p className="footer-intro">
            Professionelle Maniküre, Pediküre, Gel-Nägel und Beauty in Zürich-Oerlikon.
          </p>
        </div>

        <address>
          <h2 id="contact-title">Kontakt</h2>
          <p>
            <ExternalAnchor href={mapUrl}>Regensbergstrasse 175, 8050 Zürich</ExternalAnchor>
          </p>
          <p>
            <a href={phoneHref}>{phoneNumber}</a>
          </p>
          <p>
            <a href="mailto:kontakt@buntnails.ch">kontakt@buntnails.ch</a>
          </p>
          <p>
            <ExternalAnchor href="https://buntnails.ch">buntnails.ch</ExternalAnchor>
          </p>
        </address>

        <div className="footer-notes">
          <a href="#leistungen">Leistungen</a>
          <a href="#ueber-team">Über das Team</a>
          {ONLINE_BOOKING_ENABLED ? (
            <ExternalAnchor href={bookingUrl}>Termin buchen</ExternalAnchor>
          ) : (
            <a href={phoneHref}>Termin per Telefon</a>
          )}
        </div>
      </div>

      <div className="container legal-strip" aria-label="Rechtliche Hinweise">
        <details id="impressum">
          <summary>Impressum</summary>
          <p>
            Platzhalter für gesetzlich erforderliche Angaben gemäss Schweizer
            Impressumspflicht.
          </p>
        </details>
        <details id="datenschutz">
          <summary>Datenschutz</summary>
          <p>
            Platzhalter für Datenschutzhinweise zu Buchung, Kontaktformular und
            eingesetzten externen Diensten.
          </p>
        </details>
      </div>
    </footer>
  );
}

function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const focusTarget =
      dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]") ??
      dialogRef.current;
    focusTarget?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        ref={dialogRef}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <p className="eyebrow">Setmore</p>
            <h2 id="booking-modal-title">Termin online buchen</h2>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            data-autofocus
            aria-label="Buchungsfenster schliessen"
          >
            ×
          </button>
        </div>

        <div className="iframe-wrap">
          <iframe
            title="Setmore Buchungssystem"
            src={bookingUrl}
            loading="lazy"
            allow="clipboard-write"
          />
        </div>

        <p className="modal-fallback">
          Falls das Buchungsfenster nicht lädt,{" "}
          <ExternalAnchor href={bookingUrl}>öffnen Sie Setmore direkt</ExternalAnchor>.
        </p>
      </section>
    </div>
  );
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main">
        <Hero onOpenBooking={() => setBookingOpen(true)} />
        <Services />
        <Booking onOpenBooking={() => setBookingOpen(true)} />
        <About />
        <Contact />
      </main>
      {ONLINE_BOOKING_ENABLED ? (
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      ) : null}
    </>
  );
}
