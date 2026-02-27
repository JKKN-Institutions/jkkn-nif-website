import NifScripts from "./NifScripts";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar activePage="home" />

      {/* ========== NEW HOMEPAGE CONTENT ========== */}
      <main className="nif-2026">
        {/* SECTION 1: HERO */}
        <section className="nif-hero" id="home" aria-label="Hero Banner">
          <div className="nif-hero-aurora">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
          <div className="nif-hero-grid"></div>

          <div className="nif-container">
            <div className="nif-hero-content">
              <div className="nif-hero-label nif-reveal">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                India&apos;s First Bioconvergence Incubation Centre
              </div>
              <h1 className="nif-reveal nif-reveal-delay-1">
                Where Healthcare Meets
                <span className="nif-line-gradient">
                  Innovation &amp; Technology
                </span>
              </h1>
              <p className="nif-hero-subtitle nif-reveal nif-reveal-delay-2">
                Nattraja Incubation Forum (NIF) is India&apos;s pioneering
                incubation centre dedicated to{" "}
                <strong>bioconvergence</strong> — empowering healthcare startups
                with world-class mentorship, clinical trial facilities, and a
                10,000+ sq ft innovation workspace in Tamil Nadu.
              </p>
              <div className="nif-hero-cta nif-reveal nif-reveal-delay-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf3g7Z8FUm_irN58qYU4qyfp_RgmFWjIPT2OB0F9REDyDeGog/viewform?vc=0&c=0&w=1&flr=0"
                  className="nif-btn nif-btn-primary"
                  target="_blank"
                  aria-label="Apply for incubation"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Apply for Incubation
                </a>
                <a
                  href="#nif-programmes"
                  className="nif-btn nif-btn-glass"
                  aria-label="Explore programmes"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  Explore Programmes
                </a>
              </div>
              <div className="nif-hero-stats-row nif-reveal nif-reveal-delay-4">
                <div className="nif-hero-stat-item">
                  <h4>
                    <span className="nif-counter" data-target="10000">
                      0
                    </span>
                    +
                  </h4>
                  <p>Sq Ft Workspace</p>
                </div>
                <div className="nif-hero-stat-item">
                  <h4>
                    <span className="nif-counter" data-target="100">
                      0
                    </span>
                    +
                  </h4>
                  <p>Expert Mentors</p>
                </div>
                <div className="nif-hero-stat-item">
                  <h4>
                    <span className="nif-counter" data-target="5">
                      0
                    </span>
                    +
                  </h4>
                  <p>Hospital MOUs</p>
                </div>
                <div className="nif-hero-stat-item">
                  <h4>
                    <span className="nif-counter" data-target="4">
                      0
                    </span>
                  </h4>
                  <p>Active Incubatees</p>
                </div>
              </div>
            </div>

            <div className="nif-hero-visual nif-reveal nif-reveal-delay-2">
              <div className="nif-hero-card">
                <img
                  src="/images/nif-innovation-hub.png"
                  alt="NIF Innovation Hub - Nattraja Incubation Forum workspace"
                  className="nif-hero-card-img"
                />
              </div>
              <div className="nif-hero-floating-badge">
                <span className="badge-label">NLB</span>
                <span className="badge-text">
                  Nattraja Launchpad
                  <br />
                  for Bioconvergence
                </span>
              </div>
              <div className="nif-hero-floating-tag">
                Healthcare + Technology
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
                  <img
                    src="/images/nif-about-lab.png"
                    alt="NIF Bioconvergence research lab"
                    className="nif-about-card-img"
                  />
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

        {/* SECTION 5: PROGRAMMES */}
        <section
          className="nif-programmes nif-section-padding"
          id="nif-programmes"
          aria-label="Incubation Programmes"
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
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
                Our Programmes
              </div>
              <h2 className="nif-section-title">
                End-to-End{" "}
                <span className="nif-gradient-text">Incubation Support</span>{" "}
                for Healthcare Innovators
              </h2>
              <p className="nif-section-subtitle">
                From ideation to commercialisation, NIF provides comprehensive
                programmes designed to transform healthcare concepts into
                market-ready products and scalable ventures.
              </p>
            </div>
            <div className="nif-programmes-grid">
              <div className="nif-programme-card nif-reveal nif-reveal-delay-1">
                <div className="nif-programme-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
                  </svg>
                </div>
                <h3>Ideation &amp; Validation Programme</h3>
                <p>
                  Transform raw healthcare ideas into validated concepts through
                  structured mentorship, market research support, and
                  feasibility assessments guided by 100+ domain experts.
                </p>
                <div className="nif-programme-tags">
                  <span className="nif-programme-tag">Idea Screening</span>
                  <span className="nif-programme-tag">Market Validation</span>
                  <span className="nif-programme-tag">Feasibility Study</span>
                </div>
              </div>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-2">
                <div className="nif-programme-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>MedTech Product Development</h3>
                <p>
                  Access sophisticated instrumentation laboratories, IoT
                  workspaces, and CNC prototyping facilities to design, develop,
                  and iterate bioconvergence products at NIF&apos;s 10,000+ sq
                  ft innovation hub.
                </p>
                <div className="nif-programme-tags">
                  <span className="nif-programme-tag">Prototyping</span>
                  <span className="nif-programme-tag">IoT Lab</span>
                  <span className="nif-programme-tag">Instrumentation</span>
                </div>
              </div>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-3">
                <div className="nif-programme-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3>Clinical Trial &amp; Ethics Support</h3>
                <p>
                  Navigate complex regulatory pathways with NIF&apos;s in-house
                  Institutional Ethics Committee, dedicated clinical trial
                  facilities, and tri-party hospital partnerships for seamless
                  clinical validation.
                </p>
                <div className="nif-programme-tags">
                  <span className="nif-programme-tag">Ethics Clearance</span>
                  <span className="nif-programme-tag">Clinical Trials</span>
                  <span className="nif-programme-tag">Hospital MOUs</span>
                </div>
              </div>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-1">
                <div className="nif-programme-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Pre-Clinical &amp; Animal Research</h3>
                <p>
                  Conduct pre-clinical studies in NIF&apos;s state-of-the-art
                  animal house facility with standardised protocols, dedicated
                  caretakers, and full compliance with CPCSEA guidelines.
                </p>
                <div className="nif-programme-tags">
                  <span className="nif-programme-tag">Animal House</span>
                  <span className="nif-programme-tag">Pre-Clinical</span>
                  <span className="nif-programme-tag">CPCSEA Compliant</span>
                </div>
              </div>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-2">
                <div className="nif-programme-icon">
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
                <h3>Mentorship &amp; Industry Connect</h3>
                <p>
                  Get paired with domain-specific mentors from healthcare,
                  technology, and business. Access NIF&apos;s network of
                  clinicians, researchers, investors, and industry leaders for
                  strategic guidance.
                </p>
                <div className="nif-programme-tags">
                  <span className="nif-programme-tag">1:1 Mentoring</span>
                  <span className="nif-programme-tag">Industry Network</span>
                  <span className="nif-programme-tag">Expert Panels</span>
                </div>
              </div>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-3">
                <div className="nif-programme-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                </div>
                <h3>Innovation Voucher Programme</h3>
                <p>
                  Eligible startups receive financial support through NIF&apos;s
                  Innovation Voucher Programme — covering prototyping costs, lab
                  access fees, and early-stage product development expenses.
                </p>
                <div className="nif-programme-tags">
                  <span className="nif-programme-tag">Funding Support</span>
                  <span className="nif-programme-tag">Vouchers</span>
                  <span className="nif-programme-tag">Cost Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FACILITIES */}
        <section
          className="nif-facilities nif-section-padding"
          id="nif-facilities"
          aria-label="World-Class Facilities"
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Our Facilities
              </div>
              <h2 className="nif-section-title">
                World-Class{" "}
                <span className="nif-gradient-text">Infrastructure</span> for
                Healthcare Innovation
              </h2>
              <p className="nif-section-subtitle">
                NIF&apos;s 10,000+ sq ft campus houses cutting-edge
                laboratories, clinical trial facilities, and collaborative
                workspaces — everything a healthcare startup needs under one
                roof.
              </p>
            </div>
            <div className="nif-facilities-grid">
              <div className="nif-facility-card nif-reveal nif-reveal-delay-1">
                <div className="nif-facility-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="6" cy="15" r="3" />
                    <path d="M9 15h6m-3-3v6M20 7l-2.5 2.5M17 10l-2-2m0 0L12 5" />
                  </svg>
                </div>
                <div className="nif-facility-body">
                  <h3>Sophisticated Instrumentation Laboratory</h3>
                  <p>
                    Advanced analytical and diagnostic instruments including CNC
                    machines, spectroscopy tools, and precision measurement
                    equipment for MedTech product development and quality
                    testing.
                  </p>
                </div>
              </div>
              <div className="nif-facility-card nif-reveal nif-reveal-delay-2">
                <div className="nif-facility-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="nif-facility-body">
                  <h3>Clinical Trial Facility</h3>
                  <p>
                    Dedicated clinical testing space supported by tri-party MOUs
                    with 5+ hospitals, enabling regulated clinical studies,
                    product validation, and patient-centric research.
                  </p>
                </div>
              </div>
              <div className="nif-facility-card nif-reveal nif-reveal-delay-3">
                <div className="nif-facility-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="nif-facility-body">
                  <h3>Mini IoT Lab</h3>
                  <p>
                    Equipped with sensors, microcontrollers, and connectivity
                    modules for developing Internet of Things (IoT) healthcare
                    devices — from wearable health monitors to smart diagnostic
                    tools.
                  </p>
                </div>
              </div>
              <div className="nif-facility-card nif-reveal nif-reveal-delay-1">
                <div className="nif-facility-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="nif-facility-body">
                  <h3>Animal House Facility</h3>
                  <p>
                    CPCSEA-compliant animal research facility for pre-clinical
                    studies, pharmacological testing, and biomedical research —
                    with standardised protocols and dedicated caretakers.
                  </p>
                </div>
              </div>
              <div className="nif-facility-card nif-reveal nif-reveal-delay-2">
                <div className="nif-facility-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="nif-facility-body">
                  <h3>Institutional Ethics Committee</h3>
                  <p>
                    In-house ethics review board for human research, clinical
                    trials, and biomedical studies — streamlining the ethical
                    clearance process that is often the biggest bottleneck for
                    healthcare startups.
                  </p>
                </div>
              </div>
              <div className="nif-facility-card nif-reveal nif-reveal-delay-3">
                <div className="nif-facility-icon">
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
                <div className="nif-facility-body">
                  <h3>Co-Working &amp; Boardroom Space</h3>
                  <p>
                    Modern co-working desks, private cabins, and fully equipped
                    boardrooms for team collaboration, investor pitches, and
                    advisory board meetings — designed for startup productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: INCUBATEES */}
        <section
          className="nif-incubatees nif-section-padding"
          id="nif-incubatees"
          aria-label="Our Incubatees"
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
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                Our Incubatees
              </div>
              <h2 className="nif-section-title">
                Startups Shaping the{" "}
                <span className="nif-gradient-text">Future of Healthcare</span>
              </h2>
              <p className="nif-section-subtitle">
                Meet the innovative ventures currently incubated at NIF — each
                tackling critical healthcare challenges through bioconvergence,
                technology, and sustainable solutions.
              </p>
            </div>
            <div className="nif-incubatees-grid">
              <div className="nif-incubatee-card nif-reveal nif-reveal-delay-1">
                <h3>Biomakerz</h3>
                <p className="nif-domain">Bioconvergence &amp; Biotech</p>
                <p>
                  A pioneering bioconvergence startup developing innovative
                  biotechnology solutions that merge biology with advanced
                  engineering to address healthcare challenges in diagnostics,
                  therapeutics, and sustainable bio-manufacturing.
                </p>
              </div>
              <div className="nif-incubatee-card nif-reveal nif-reveal-delay-2">
                <h3>Milir Naturals</h3>
                <p className="nif-domain">Natural Healthcare Products</p>
                <p>
                  Developing evidence-based natural healthcare products by
                  blending traditional Indian medicinal knowledge with modern
                  scientific research — creating clinically validated herbal
                  formulations for preventive and therapeutic care.
                </p>
              </div>
              <div className="nif-incubatee-card nif-reveal nif-reveal-delay-3">
                <h3>Native News</h3>
                <p className="nif-domain">
                  Digital Media &amp; Health Journalism
                </p>
                <p>
                  A digital media platform focused on bridging the healthcare
                  information gap in regional communities — delivering verified
                  health news, wellness content, and medical awareness in local
                  languages across Tamil Nadu.
                </p>
              </div>
              <div className="nif-incubatee-card nif-reveal nif-reveal-delay-4">
                <h3>PAM Square</h3>
                <p className="nif-domain">Healthcare Technology</p>
                <p>
                  Building next-generation healthcare technology platforms that
                  leverage data analytics, automation, and digital health
                  solutions to improve patient outcomes, streamline clinical
                  workflows, and enhance hospital management efficiency.
                </p>
              </div>
            </div>
            <div
              className="nif-text-center nif-reveal"
              style={{ marginTop: "2.5rem" }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf3g7Z8FUm_irN58qYU4qyfp_RgmFWjIPT2OB0F9REDyDeGog/viewform?vc=0&c=0&w=1&flr=0"
                className="nif-btn nif-btn-primary"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="18"
                  height="18"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Apply for Incubation
              </a>
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

        {/* SECTION 10: TESTIMONIALS */}
        <section
          className="nif-testimonials nif-section-padding"
          id="nif-testimonials"
          aria-label="Testimonials"
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
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Testimonials
              </div>
              <h2 className="nif-section-title">
                What Our{" "}
                <span className="nif-gradient-text">Incubatees</span> Say
              </h2>
              <p className="nif-section-subtitle">
                Hear from the founders and innovators whose healthcare ventures
                were accelerated through NIF&apos;s bioconvergence incubation
                ecosystem.
              </p>
            </div>
            <div className="nif-testimonials-grid">
              <div className="nif-testimonial-card nif-reveal nif-reveal-delay-1">
                <div className="nif-quote-icon">&ldquo;</div>
                <blockquote>
                  NIF provided us with exactly what we needed — access to
                  clinical trial facilities and ethics committee clearance under
                  one roof. The mentorship from healthcare industry leaders
                  helped us refine our biotech product from concept to a
                  market-ready prototype in just 8 months.
                </blockquote>
                <div className="nif-testimonial-author">
                  <div className="nif-testimonial-author-info">
                    <h4>Biomakerz Founder</h4>
                    <p>Bioconvergence &amp; Biotech Startup</p>
                  </div>
                </div>
              </div>
              <div className="nif-testimonial-card nif-reveal nif-reveal-delay-2">
                <div className="nif-quote-icon">&ldquo;</div>
                <blockquote>
                  The animal house facility and instrumentation lab at NIF are
                  game-changers for any healthcare startup. We were able to
                  validate our natural formulations through proper pre-clinical
                  testing — something that would have taken years and millions
                  elsewhere.
                </blockquote>
                <div className="nif-testimonial-author">
                  <div className="nif-testimonial-author-info">
                    <h4>Milir Naturals Founder</h4>
                    <p>Natural Healthcare Products</p>
                  </div>
                </div>
              </div>
              <div className="nif-testimonial-card nif-reveal nif-reveal-delay-3">
                <div className="nif-quote-icon">&ldquo;</div>
                <blockquote>
                  NIF&apos;s network of 100+ mentors and 5+ hospital MOUs opened
                  doors that we never imagined possible for a tech startup. The
                  co-working space, boardroom access, and investor connect events
                  made our journey from idea to revenue incredibly smooth.
                </blockquote>
                <div className="nif-testimonial-author">
                  <div className="nif-testimonial-author-info">
                    <h4>PAM Square Founder</h4>
                    <p>Healthcare Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: FAQ */}
        <section
          className="nif-faq nif-section-padding"
          id="nif-faq"
          aria-label="Frequently Asked Questions"
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
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
                </svg>
                FAQs
              </div>
              <h2 className="nif-section-title">
                Frequently Asked{" "}
                <span className="nif-gradient-text">Questions</span>
              </h2>
              <p className="nif-section-subtitle">
                Everything you need to know about NIF&apos;s bioconvergence
                incubation programmes, facilities, and application process.
              </p>
            </div>
            <div className="nif-faq-list">
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">
                  <span>
                    What is Nattraja Incubation Forum (NIF) and what does it do?
                  </span>
                  <span className="nif-faq-toggle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="nif-faq-answer">
                  <div className="nif-faq-answer-inner">
                    Nattraja Incubation Forum (NIF), also known as NLB —
                    Nattraja Launchpad for Bioconvergence, is India&apos;s first
                    healthcare innovation-focused incubation centre. Established
                    under JKKN Institutions in Komarapalayam, Tamil Nadu, NIF
                    provides startups with world-class mentorship, clinical trial
                    facilities, ethics committee clearance, animal house access,
                    and a 10,000+ sq ft innovation workspace to accelerate
                    healthcare and bioconvergence ventures.
                  </div>
                </div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">
                  <span>
                    What is bioconvergence and why is it important?
                  </span>
                  <span className="nif-faq-toggle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="nif-faq-answer">
                  <div className="nif-faq-answer-inner">
                    Bioconvergence is the intersection of biology, technology,
                    engineering, and data science to create transformative
                    healthcare solutions. It combines disciplines like
                    biotechnology, medical devices, AI-driven diagnostics, and
                    digital health to solve complex medical challenges. NIF is
                    India&apos;s pioneering centre dedicated to fostering
                    bioconvergence startups.
                  </div>
                </div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-2">
                <button className="nif-faq-question" aria-expanded="false">
                  <span>Who can apply for incubation at NIF?</span>
                  <span className="nif-faq-toggle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="nif-faq-answer">
                  <div className="nif-faq-answer-inner">
                    NIF welcomes applications from healthcare innovators, biotech
                    researchers, MedTech startups, students with validated ideas,
                    pharmaceutical entrepreneurs, and working professionals
                    seeking to launch healthcare ventures. Both early-stage
                    (ideation) and growth-stage startups focused on
                    bioconvergence, healthcare technology, natural products, or
                    medical devices are eligible.
                  </div>
                </div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-2">
                <button className="nif-faq-question" aria-expanded="false">
                  <span>
                    What facilities does NIF provide to incubatees?
                  </span>
                  <span className="nif-faq-toggle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="nif-faq-answer">
                  <div className="nif-faq-answer-inner">
                    NIF provides a comprehensive ecosystem including: an advanced
                    Instrumentation Lab for product testing and prototyping,
                    Clinical Trial Centre with hospital MOUs for human trials,
                    Institutional Ethics Committee for regulatory clearance,
                    CPCSEA-registered Animal House for pre-clinical studies, a
                    modern Co-Working Space with boardrooms, and access to 100+
                    mentors from healthcare, business, and technology domains.
                  </div>
                </div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-3">
                <button className="nif-faq-question" aria-expanded="false">
                  <span>
                    Does NIF help with clinical trials and ethics clearance?
                  </span>
                  <span className="nif-faq-toggle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="nif-faq-answer">
                  <div className="nif-faq-answer-inner">
                    Yes. NIF is one of the few incubation centres in India that
                    provides in-house Institutional Ethics Committee (IEC)
                    clearance, direct access to clinical trial infrastructure
                    through tri-party MOUs with 5+ hospitals, and
                    CPCSEA-registered animal house facilities. This end-to-end
                    regulatory support significantly reduces the time and cost of
                    bringing healthcare innovations to market.
                  </div>
                </div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-3">
                <button className="nif-faq-question" aria-expanded="false">
                  <span>How do I apply for incubation at NIF?</span>
                  <span className="nif-faq-toggle">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="nif-faq-answer">
                  <div className="nif-faq-answer-inner">
                    To apply for incubation at NIF, visit the official website at
                    nifglobal.org and complete the online application form. The
                    process includes: (1) submitting your business idea or
                    concept, (2) initial screening by the NIF selection
                    committee, (3) pitch presentation before the expert panel,
                    and (4) onboarding and programme assignment. Applications are
                    accepted on a rolling basis, and the team typically responds
                    within 10 business days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: CTA & CONTACT */}
        <section
          className="nif-cta-section nif-section-padding"
          id="nif-contact"
          aria-label="Contact NIF"
        >
          <div className="nif-cta-aurora">
            <div className="cta-glow-1"></div>
            <div className="cta-glow-2"></div>
          </div>
          <div
            className="nif-container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="nif-cta-grid">
              <div className="nif-cta-content nif-reveal">
                <div className="nif-section-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Get In Touch
                </div>
                <h2 className="nif-section-title nif-reveal nif-reveal-delay-1">
                  Ready to Transform Your{" "}
                  <span className="nif-gradient-text">
                    Healthcare Innovation
                  </span>
                  ?
                </h2>
                <p className="nif-reveal nif-reveal-delay-2">
                  Whether you&apos;re a student with a breakthrough idea, a
                  researcher seeking clinical validation, or a startup ready to
                  scale — NIF&apos;s bioconvergence ecosystem is built for you.
                  Join India&apos;s first healthcare-focused incubation centre
                  and turn your vision into impact.
                </p>
                <div className="nif-cta-buttons nif-reveal nif-reveal-delay-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3g7Z8FUm_irN58qYU4qyfp_RgmFWjIPT2OB0F9REDyDeGog/viewform?vc=0&c=0&w=1&flr=0"
                    className="nif-btn nif-btn-primary"
                    target="_blank"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="18"
                      height="18"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    Apply for Incubation
                  </a>
                  <a href="#" className="nif-btn nif-btn-glass">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="18"
                      height="18"
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
                    Schedule a Visit
                  </a>
                </div>
              </div>
              <div className="nif-cta-contact nif-reveal nif-reveal-delay-2">
                <div className="nif-cta-contact-item">
                  <div className="nif-cta-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>
                      NIF, JKKN Institutions, Natarajapuram, NH-544 (Salem To
                      Coimbatore National Highway), Komarapalayam (TK), Namakkal
                      (DT), Tamil Nadu — 638183
                    </p>
                  </div>
                </div>
                <div className="nif-cta-contact-item">
                  <div className="nif-cta-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:nif@jkkn.ac.in">nif@jkkn.ac.in</a>
                    </p>
                  </div>
                </div>
                <div className="nif-cta-contact-item">
                  <div className="nif-cta-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+919688232957">+91 9688232957</a>
                    </p>
                  </div>
                </div>
                <div className="nif-cta-contact-item">
                  <div className="nif-cta-contact-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon — Sat: 9:00 AM — 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BackToTop />
      <NifScripts />
    </>
  );
}
