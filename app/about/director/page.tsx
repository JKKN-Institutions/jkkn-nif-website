import type { Metadata } from "next";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CtaFooter from "../../components/CtaFooter";
import BackToTop from "../../components/BackToTop";
import NifScripts from "../../NifScripts";

export const metadata: Metadata = {
  title: "About Director - Nattraja Incubation Forum",
  description:
    "Meet Mr. Ommsharravana, Director of Nattraja Incubation Forum (NIF) — the visionary behind India's first bioconvergence incubation centre.",
};

export default function DirectorPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="about" />

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  Director&apos;s Message
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  Visionary Leadership Driving <span className="nif-line-gradient">Bioconvergence Innovation</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  Meet the visionary behind India&apos;s first bioconvergence incubation centre — charting new frontiers where biology meets technology to shape the future of healthcare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTOR PROFILE */}
        <section className="nif-about nif-section-padding" id="director-profile">
          <div className="nif-container">
            <div className="nif-about-grid">
              <div className="nif-about-card-block nif-reveal">
                <div className="nif-about-card">
                  <h2 className="nif-about-card-title">Mr. Ommsharravana</h2>
                  <div className="nif-about-accent-badge">
                    <h4>Director</h4>
                    <p>Nattraja Incubation Forum</p>
                  </div>
                </div>
                <div className="nif-about-features nif-reveal nif-reveal-delay-4">
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </div>
                    <div>
                      <h4>Entrepreneur</h4>
                      <p>Visionary business leader and innovator</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                    </div>
                    <div>
                      <h4>Investor</h4>
                      <p>Strategic investor in healthcare innovation</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                    </div>
                    <div>
                      <h4>Educationalist</h4>
                      <p>Committed to nurturing future innovators</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nif-about-text">
                <div className="nif-section-badge nif-reveal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  About the Director
                </div>
                <h2 className="nif-section-title nif-reveal nif-reveal-delay-1">
                  Mr. <span className="nif-gradient-text">Ommsharravana</span>
                </h2>
                <p className="nif-lead nif-reveal nif-reveal-delay-2">
                  <strong>Mr. Ommsharravana</strong> is an entrepreneur, investor, and educationalist who conceived the visionary concept of <strong>bioconvergence</strong> that drives the identity and strategic direction of NIF. Under his leadership, NIF is charting new frontiers in this field — a first-of-its-kind endeavour globally.
                </p>
                <p className="nif-reveal nif-reveal-delay-2">
                  His vision integrates biology and technology to shape the future of healthcare and tech innovation. NIF&apos;s purpose, as articulated by Mr. Ommsharravana, is to incubate innovative startups and shape the future of healthcare and technology through the <strong>Nattraja Launchpad for Bioconvergence</strong> initiative.
                </p>
                <p className="nif-reveal nif-reveal-delay-3">
                  Under his guidance, NIF focuses on nurturing startups in bioconvergence, creating job opportunities, driving economic growth, and advancing academic research — building an ecosystem where healthcare innovation can thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTOR'S MESSAGE */}
        <section className="nif-mission-vision nif-section-padding" id="director-message">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "3rem" }}>
              <div className="nif-section-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                Director&apos;s Message
              </div>
              <h2 className="nif-section-title">A Message from the <span className="nif-gradient-text">Director</span></h2>
            </div>
            <div className="nif-mv-grid">
              <div className="nif-mv-card nif-mission nif-gradient-border nif-reveal nif-reveal-delay-1" style={{ gridColumn: "1 / -1" }}>
                <div className="nif-mv-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                </div>
                <h3>Leading the Bioconvergence Evolution</h3>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  &ldquo;At NIF, we are charting new frontiers in bioconvergence — a first-of-its-kind endeavour globally. Our mission is to integrate biology and technology to shape the future of healthcare innovation. We are not just part of the bioconvergence evolution; we are leading it.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Through the Nattraja Launchpad for Bioconvergence, we are creating an ecosystem that nurtures startups, generates employment, drives economic growth, and pushes the boundaries of academic research. I invite every healthcare innovator, researcher, and entrepreneur to join us in this transformative journey.&rdquo;
                </p>
                <p style={{ fontWeight: 600, color: "#0b6d41", marginTop: "1.5rem" }}>— Mr. Ommsharravana, Director, NIF</p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY GOALS */}
        <section className="nif-stats nif-section-padding-sm" id="director-goals">
          <div className="nif-stats-aurora">
            <div className="glow-1"></div>
            <div className="glow-2"></div>
          </div>
          <div className="nif-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "2.5rem" }}>
              <div className="nif-section-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                Strategic Goals
              </div>
              <h2 className="nif-section-title">
                Key <span className="nif-gradient-text">Goals</span> Under His Leadership
              </h2>
            </div>
            <div className="nif-stats-grid">
              <div className="nif-stat-card nif-reveal nif-reveal-delay-1">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Nurturing Startups</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Building bioconvergence ventures from ideation to market</p>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-2">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Creating Jobs</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Driving employment through healthcare innovation</p>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-3">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Economic Growth</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Contributing to India&apos;s healthcare economy</p>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-4">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Academic Research</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Advancing bioconvergence research and knowledge</p>
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
