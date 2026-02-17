import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "Our Programmes - Nattraja Incubation Forum",
  description:
    "Explore NIF's comprehensive incubation programmes — from ideation and validation to MedTech product development, clinical trials, mentorship, and innovation vouchers for healthcare startups.",
};

export default function ProgrammesPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="programmes" />

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                  Our Programmes
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  End-to-End <span className="nif-line-gradient">Incubation Programmes</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  From ideation to commercialisation, NIF provides comprehensive programmes designed to transform healthcare concepts into market-ready products and scalable ventures — backed by 100+ mentors and world-class infrastructure.
                </p>
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

        {/* CTA FOOTER */}
        <CtaFooter />
      </div>

      <BackToTop />
      <NifScripts />
    </>
  );
}
