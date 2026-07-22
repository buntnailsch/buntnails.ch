import { useEffect, useRef, useState, type AnchorHTMLAttributes } from "react";
import logoSrc from "../images/visit_card_logo.png";
import nasimSrc from "../images/nasim_sakkaki.png";
import "./App.css";

const bookingUrl = "https://buntnails.setmore.com/buntnails";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=175A%20Regensbergstrasse%208050%20Z%C3%BCrich";

type ExternalAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type Service = {
  title: string;
  description: string;
  note: string;
};

const services: Service[] = [
  {
    title: "Maniküre",
    description:
      "Pflege und Perfektion für Ihre Hände. Klassische Maniküre, Nagelpflege und individuelle Lackierung.",
    note: "Für gepflegte Hände mit feinem Finish",
  },
  {
    title: "Pediküre",
    description:
      "Verwöhnende Fußpflege für Ihr Wohlbefinden. Präzises Feilen, Hornhautentfernung und pflegendes Finish.",
    note: "Ruhig, sauber und wohltuend",
  },
  {
    title: "Nagel Gel",
    description:
      "Langanhaltende Eleganz und Verstärkung. Hochwertige Gel-Modellagen, Neuset, Refill und kreative Nail Art.",
    note: "Haltbare Ästhetik nach Mass",
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

        <ExternalAnchor href={bookingUrl} className="nav-cta">
          Termin buchen
        </ExternalAnchor>
      </div>
    </header>
  );
}

function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="top" className="hero section-shell" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Zürich-Oerlikon · Regensbergstrasse 175A</p>
          <h1 id="hero-title" className="text-display font-display">
            Präzision &amp; Eleganz für Ihre Nägel.
          </h1>
          <p className="hero-subtitle">
            Ihr exklusives Studio für professionelle Maniküre, Pediküre und
            Gel-Nageldesign in Zürich-Oerlikon.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={onOpenBooking}
            >
              Termin online buchen
            </button>
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
            <p className="eyebrow">Leistungen</p>
          </div>
          <div>
            <h2 id="services-title" className="text-editorial font-display">
              Ein Menü für gepflegte Hände, ruhige Schritte und haltbare Eleganz.
            </h2>
          </div>
        </div>

        <div className="service-menu reveal">
          {services.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span className="service-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ExternalAnchor href={bookingUrl} className="service-link">
                {service.note}
              </ExternalAnchor>
            </article>
          ))}
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
            Professionelle Maniküre, Pediküre und Gel-Nageldesign in Zürich-Oerlikon.
          </p>
        </div>

        <address>
          <h2 id="contact-title">Kontakt</h2>
          <p>
            <ExternalAnchor href={mapUrl}>175A Regensbergstrasse, 8050 Zürich</ExternalAnchor>
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
          <ExternalAnchor href={bookingUrl}>Termin buchen</ExternalAnchor>
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
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
