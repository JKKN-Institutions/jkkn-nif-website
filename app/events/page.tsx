import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "Events & Workshops - Nattraja Incubation Forum",
  description:
    "Discover NIF's innovation events, MedTech challenges, hackathons, and knowledge workshops — connecting healthcare innovators, researchers, investors, and industry leaders.",
};

export default function EventsPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="events" />

      <div className="nif-2026">
        {/* HERO SECTION */}
        <section className="nif-fac-hero">
          <div className="nif-fac-hero-aurora">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
          <div className="nif-fac-hero-grid"></div>
          <div className="nif-container" style={{ position: "relative", zIndex: 2 }}>
            <div className="nif-fac-hero-layout">
              <div className="nif-fac-hero-text nif-reveal">
                <div className="nif-section-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  Events &amp; Workshops
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  Innovation Events &amp; <span className="nif-line-gradient">Knowledge Workshops</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  NIF hosts transformative events that connect healthcare innovators, researchers, investors, and industry leaders — fostering collaboration and accelerating bioconvergence breakthroughs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: EVENTS */}
        <section
          className="nif-events nif-section-padding"
          id="nif-events"
          aria-label="Events and Workshops"
        >
          <div className="nif-container">
            <div
              className="nif-text-center nif-reveal"
              style={{ marginBottom: "3rem" }}
            >
              <div className="nif-section-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                  />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Events &amp; Workshops
              </div>
              <h2 className="nif-section-title">
                Innovation Events &amp;{" "}
                <span className="nif-gradient-text">Knowledge Workshops</span>
              </h2>
              <p className="nif-section-subtitle">
                NIF hosts transformative events that connect healthcare
                innovators, researchers, investors, and industry leaders —
                fostering collaboration and accelerating bioconvergence
                breakthroughs.
              </p>
            </div>
            <div className="nif-events-grid">
              <div className="nif-event-card nif-reveal nif-reveal-delay-1">
                <div className="nif-event-header">
                  <div className="nif-event-date-badge">
                    <span className="day">15</span>
                    <span className="month">Nov 2024</span>
                  </div>
                  <span className="nif-event-status past">Completed</span>
                </div>
                <div className="nif-event-body">
                  <h3>IIC 7.0 — MedTech Innovation Challenge</h3>
                  <p>
                    A flagship national-level healthcare innovation challenge
                    that brought together 50+ teams from across India to pitch
                    groundbreaking MedTech solutions — evaluated by industry
                    leaders, clinicians, and venture capitalists.
                  </p>
                  <div className="nif-event-meta">
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      NIF Campus
                    </span>
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      50+ Teams
                    </span>
                  </div>
                </div>
              </div>
              <div className="nif-event-card nif-reveal nif-reveal-delay-2">
                <div className="nif-event-header">
                  <div className="nif-event-date-badge">
                    <span className="day">20</span>
                    <span className="month">Mar 2025</span>
                  </div>
                  <span className="nif-event-status upcoming">Open</span>
                </div>
                <div className="nif-event-body">
                  <h3>Innovation Voucher Programme</h3>
                  <p>
                    A rolling programme offering financial vouchers and resource
                    credits to early-stage healthcare startups — covering
                    prototype development, clinical testing, IP filing, and
                    market research costs.
                  </p>
                  <div className="nif-event-meta">
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      NIF Campus
                    </span>
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      Applications Open
                    </span>
                  </div>
                </div>
              </div>
              <div className="nif-event-card nif-reveal nif-reveal-delay-3">
                <div className="nif-event-header">
                  <div className="nif-event-date-badge">
                    <span className="day">10</span>
                    <span className="month">Jun 2025</span>
                  </div>
                  <span className="nif-event-status upcoming">Upcoming</span>
                </div>
                <div className="nif-event-body">
                  <h3>Bioconvergence Hackathon 2025</h3>
                  <p>
                    A 48-hour intensive hackathon challenging multidisciplinary
                    teams to develop innovative solutions at the intersection of
                    biology, technology, and healthcare — with mentorship from
                    100+ industry experts and top prizes.
                  </p>
                  <div className="nif-event-meta">
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      NIF Campus
                    </span>
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      48 Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <CtaFooter />
      </div>

      <BackToTop />
      <NifScripts />
    </>
  );
}
