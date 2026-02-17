import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "About NIF - Nattraja Incubation Forum",
  description:
    "Learn about Nattraja Incubation Forum (NIF) — India's first bioconvergence incubation centre, established under JKKN Institutions in Tamil Nadu. Discover our mission, vision, and impact.",
};

export default function AboutPage() {
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                  About NIF
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  India&apos;s First <span className="nif-line-gradient">Bioconvergence Incubation Centre</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  Nattraja Incubation Forum (NIF) is India&apos;s pioneering healthcare innovation-focused incubation centre — where biology, technology, and entrepreneurship converge to create transformative solutions for the world&apos;s most pressing health challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section
          className="nif-about nif-section-padding"
          id="nif-about"
          aria-label="About NIF"
        >
          <div className="nif-container">
            <div className="nif-about-grid">
              <div className="nif-about-card-block nif-reveal">
                <div className="nif-about-card">
                  <h2 className="nif-about-card-title">
                    About NIF — Bioconvergence
                  </h2>
                  <div className="nif-about-accent-badge">
                    <h4>JKKN</h4>
                    <p>Group of Institutions</p>
                  </div>
                </div>
                <div className="nif-about-features nif-reveal nif-reveal-delay-4">
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <h4>Healthcare Focus</h4>
                      <p>
                        Dedicated to bioconvergence and MedTech innovation
                      </p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4>100+ Mentors</h4>
                      <p>Industry leaders guiding every startup</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <h4>10,000+ Sq Ft</h4>
                      <p>State-of-the-art IoT and healthcare workspace</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h4>Ethics Clearance</h4>
                      <p>In-house Institutional Ethics Committee support</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nif-about-text">
                <div className="nif-section-badge nif-reveal">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  About NIF
                </div>
                <h2 className="nif-section-title nif-reveal nif-reveal-delay-1">
                  India&apos;s Pioneering{" "}
                  <span className="nif-gradient-text">Bioconvergence</span>{" "}
                  Incubation Centre
                </h2>
                <p className="nif-lead nif-reveal nif-reveal-delay-2">
                  Nattraja Incubation Forum (NIF), also known as{" "}
                  <strong>
                    NLB — Nattraja Launchpad for Bioconvergence
                  </strong>
                  , is India&apos;s first healthcare innovation-focused
                  incubation centre, established under the aegis of{" "}
                  <strong>JKKN Institutions</strong> in Komarapalayam, Tamil
                  Nadu.
                </p>
                <p className="nif-reveal nif-reveal-delay-2">
                  Founded on the visionary concept of{" "}
                  <strong>bioconvergence</strong> by{" "}
                  <strong>Mr. Ommsharravana</strong> — an entrepreneur,
                  investor, and educationalist — NIF stands as a crucible of
                  ideas where biology, technology, and healthcare converge to
                  create transformative solutions for India&apos;s healthcare
                  challenges.
                </p>
                <p className="nif-reveal nif-reveal-delay-3">
                  NIF addresses three critical barriers that healthcare
                  innovators face: accessing{" "}
                  <strong>clinical mentorships</strong>, navigating{" "}
                  <strong>ethical clearance processes</strong>, and managing{" "}
                  <strong>animal house protocols</strong>. With over 10,000 sq
                  ft of dedicated workspace and strategic tri-party MOUs with 5+
                  hospitals, NIF provides the complete ecosystem for turning
                  healthcare ideas into market-ready products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MISSION & VISION */}
        <section
          className="nif-mission-vision nif-section-padding"
          id="nif-mission-vision"
          aria-label="Mission and Vision"
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
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                Our Purpose
              </div>
              <h2 className="nif-section-title">Mission &amp; Vision</h2>
              <p className="nif-section-subtitle">
                Driving India&apos;s healthcare transformation through
                bioconvergence — where scientific research meets entrepreneurial
                innovation to build a healthier future.
              </p>
            </div>
            <div className="nif-mv-grid">
              <div className="nif-mv-card nif-mission nif-gradient-border nif-reveal nif-reveal-delay-1">
                <div className="nif-mv-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To build India&apos;s most comprehensive bioconvergence
                  ecosystem that empowers healthcare innovators — from ideation
                  to market — by providing end-to-end incubation support,
                  world-class infrastructure, and strategic clinical
                  partnerships.
                </p>
                <ul>
                  <li>
                    Bridge the gap between healthcare research and commercial
                    viability
                  </li>
                  <li>
                    Provide clinical mentorship and ethical clearance support for
                    MedTech startups
                  </li>
                  <li>
                    Foster collaboration between academia, hospitals, and
                    industry
                  </li>
                  <li>
                    Democratise access to advanced laboratory and clinical trial
                    facilities
                  </li>
                </ul>
              </div>
              <div className="nif-mv-card nif-vision nif-gradient-border nif-reveal nif-reveal-delay-2">
                <div className="nif-mv-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To position India at the global forefront of bioconvergence
                  innovation by nurturing a generation of healthcare
                  entrepreneurs who develop scalable, affordable, and impactful
                  solutions for the world&apos;s most pressing health
                  challenges.
                </p>
                <ul>
                  <li>
                    Become India&apos;s leading bioconvergence incubation centre
                    by 2030
                  </li>
                  <li>
                    Launch 50+ healthcare startups with market-ready MedTech
                    products
                  </li>
                  <li>
                    Establish a pan-India network of clinical trial and
                    innovation partnerships
                  </li>
                  <li>
                    Create a replicable model for healthcare incubation across
                    emerging economies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY STATISTICS */}
        <section
          className="nif-stats nif-section-padding-sm"
          id="nif-stats"
          aria-label="Key Statistics"
        >
          <div className="nif-stats-aurora">
            <div className="glow-1"></div>
            <div className="glow-2"></div>
          </div>
          <div
            className="nif-container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="nif-text-center nif-reveal"
              style={{ marginBottom: "2.5rem" }}
            >
              <div className="nif-section-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
                NIF at a Glance
              </div>
              <h2 className="nif-section-title">
                Building India&apos;s Healthcare{" "}
                <span className="nif-gradient-text">Innovation Engine</span>
              </h2>
              <p className="nif-section-subtitle">
                Numbers that reflect our commitment to empowering healthcare
                startups with world-class infrastructure, mentorship, and
                clinical partnerships.
              </p>
            </div>
            <div className="nif-stats-grid">
              <div className="nif-stat-card nif-reveal nif-reveal-delay-1">
                <div className="nif-stat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <div className="nif-stat-number">
                  <span className="nif-counter" data-target="10000">
                    0
                  </span>
                  <span className="nif-counter-suffix">+</span>
                </div>
                <div className="nif-stat-label">Sq Ft Workspace</div>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-2">
                <div className="nif-stat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div className="nif-stat-number">
                  <span className="nif-counter" data-target="100">
                    0
                  </span>
                  <span className="nif-counter-suffix">+</span>
                </div>
                <div className="nif-stat-label">Expert Mentors</div>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-3">
                <div className="nif-stat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="nif-stat-number">
                  <span className="nif-counter" data-target="5">
                    0
                  </span>
                  <span className="nif-counter-suffix">+</span>
                </div>
                <div className="nif-stat-label">Hospital MOUs</div>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-4">
                <div className="nif-stat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="nif-stat-number">
                  <span className="nif-counter" data-target="6">
                    0
                  </span>
                  <span className="nif-counter-suffix">+</span>
                </div>
                <div className="nif-stat-label">Core Facilities</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: PARTNERS */}
        <section
          className="nif-partners nif-section-padding"
          id="nif-partners"
          aria-label="Our Partners"
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
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                Partners &amp; Collaborators
              </div>
              <h2 className="nif-section-title">
                Strategic{" "}
                <span className="nif-gradient-text">Partners</span> Powering
                Innovation
              </h2>
              <p className="nif-section-subtitle">
                NIF collaborates with leading hospitals, universities, government
                bodies, and industry partners — creating a comprehensive
                ecosystem that supports healthcare startups from concept to
                commercialisation.
              </p>
            </div>
            <div className="nif-partners-logos nif-reveal">
              <div className="nif-partner-logo-item">Hospital Partner 1</div>
              <div className="nif-partner-logo-item">Hospital Partner 2</div>
              <div className="nif-partner-logo-item">University Partner</div>
              <div className="nif-partner-logo-item">Government Body</div>
              <div className="nif-partner-logo-item">Industry Partner</div>
              <div className="nif-partner-logo-item">JKKN Institutions</div>
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
