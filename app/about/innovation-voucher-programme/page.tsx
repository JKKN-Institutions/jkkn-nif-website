import type { Metadata } from "next";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CtaFooter from "../../components/CtaFooter";
import BackToTop from "../../components/BackToTop";
import NifScripts from "../../NifScripts";

export const metadata: Metadata = {
  title: "Innovation Voucher Programme - Nattraja Incubation Forum",
  description:
    "Learn about NIF's Innovation Voucher Scheme (IVS) — a state government initiative supporting MSMEs and startups with funding up to ₹5,00,000 for prototyping and commercialisation.",
};

export default function InnovationVoucherPage() {
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                  Innovation Voucher Programme
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  Innovation <span className="nif-line-gradient">Voucher Scheme</span> (IVS)
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  A state government initiative supporting MSMEs and startups with financial vouchers for prototyping, product development, and commercialisation across diverse sectors.
                </p>
                <div className="nif-fac-hero-cta nif-reveal nif-reveal-delay-3">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3g7Z8FUm_irN58qYU4qyfp_RgmFWjIPT2OB0F9REDyDeGog/viewform?vc=0&c=0&w=1&flr=0" className="nif-btn nif-btn-primary" target="_blank">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    Apply Now
                  </a>
                  <a href="/contact" className="nif-btn nif-btn-glass">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="nif-fac-hero-visual nif-reveal nif-reveal-delay-2">
                <div className="nif-fac-hero-card">
                  <div className="nif-fac-hero-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                    <span>Voucher Tiers</span>
                  </div>
                  <div className="nif-fac-stats-grid">
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">&#8377;2L</span>
                      <span className="nif-fac-stat-label">Voucher A</span>
                    </div>
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">&#8377;5L</span>
                      <span className="nif-fac-stat-label">Voucher B</span>
                    </div>
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">6+</span>
                      <span className="nif-fac-stat-label">Sectors Covered</span>
                    </div>
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">NIF</span>
                      <span className="nif-fac-stat-label">Facilitated</span>
                    </div>
                  </div>
                  <div className="nif-fac-hero-floating-badge">
                    <span className="badge-label">IVS</span>
                    <span className="badge-text">State Govt. Initiative</span>
                  </div>
                  <div className="nif-fac-hero-floating-tag">Funding Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT IVS */}
        <section className="nif-about nif-section-padding" id="ivs-about">
          <div className="nif-container">
            <div className="nif-about-grid">
              <div className="nif-about-card-block nif-reveal">
                <div className="nif-about-card">
                  <h2 className="nif-about-card-title">Innovation Voucher Scheme</h2>
                  <div className="nif-about-accent-badge">
                    <h4>IVS</h4>
                    <p>State Govt. Initiative</p>
                  </div>
                </div>
                <div className="nif-about-features nif-reveal nif-reveal-delay-4">
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                    </div>
                    <div>
                      <h4>Research Advancement</h4>
                      <p>Funding for R&amp;D and innovation projects</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                    <div>
                      <h4>Multi-Sector</h4>
                      <p>Agriculture, energy, engineering, nanotech &amp; more</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                    </div>
                    <div>
                      <h4>MSME &amp; Startups</h4>
                      <p>Targeted at small enterprises and innovators</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nif-about-text">
                <div className="nif-section-badge nif-reveal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                  About the Programme
                </div>
                <h2 className="nif-section-title nif-reveal nif-reveal-delay-1">
                  Innovation <span className="nif-gradient-text">Voucher Scheme</span> (IVS)
                </h2>
                <p className="nif-lead nif-reveal nif-reveal-delay-2">
                  The <strong>Innovation Voucher Scheme (IVS)</strong> is a state government initiative targeting research advancement among <strong>MSMEs and startups</strong> across diverse sectors including agriculture, energy, engineering, nanotechnology, and deep technology.
                </p>
                <p className="nif-reveal nif-reveal-delay-2">
                  The programme facilitates collaboration between enterprises and research institutions, guiding participants from initial concept stages through product or process development. A <strong>state-level committee</strong> evaluates and approves viable proposals for funding consideration.
                </p>
                <p className="nif-reveal nif-reveal-delay-3">
                  NIF serves as a facilitating partner, helping healthcare and bioconvergence startups access IVS funding to accelerate their innovation journey — from concept validation to market-ready products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VOUCHER TIERS */}
        <section className="nif-mission-vision nif-section-padding" id="voucher-tiers">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "3rem" }}>
              <div className="nif-section-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                Funding Tiers
              </div>
              <h2 className="nif-section-title">Voucher <span className="nif-gradient-text">Categories</span></h2>
              <p className="nif-section-subtitle">
                Two tiers of financial support designed to take your innovation from concept to commercialisation.
              </p>
            </div>
            <div className="nif-mv-grid">
              <div className="nif-mv-card nif-mission nif-gradient-border nif-reveal nif-reveal-delay-1">
                <div className="nif-mv-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" /></svg>
                </div>
                <h3>Voucher A — Up to &#8377;2,00,000</h3>
                <p>
                  Designed for <strong>early-stage innovation</strong> — converting concepts into functional prototypes. This voucher supports startups and MSMEs in the critical ideation-to-prototype phase.
                </p>
                <ul>
                  <li>Concept validation and feasibility studies</li>
                  <li>Prototype development and design</li>
                  <li>Initial testing and proof-of-concept</li>
                  <li>Material and component procurement</li>
                </ul>
              </div>
              <div className="nif-mv-card nif-vision nif-gradient-border nif-reveal nif-reveal-delay-2">
                <div className="nif-mv-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <h3>Voucher B — Up to &#8377;5,00,000</h3>
                <p>
                  Designed for <strong>commercialisation efforts</strong> — taking validated prototypes to market-ready products. This voucher supports advanced development, testing, and market entry.
                </p>
                <ul>
                  <li>Product refinement and optimisation</li>
                  <li>Regulatory compliance and certification</li>
                  <li>Clinical trials and quality testing</li>
                  <li>Market research and go-to-market strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ELIGIBLE SECTORS */}
        <section className="nif-stats nif-section-padding-sm" id="ivs-sectors">
          <div className="nif-stats-aurora">
            <div className="glow-1"></div>
            <div className="glow-2"></div>
          </div>
          <div className="nif-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "2.5rem" }}>
              <div className="nif-section-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                Eligible Sectors
              </div>
              <h2 className="nif-section-title">
                Sectors <span className="nif-gradient-text">Covered</span> Under IVS
              </h2>
            </div>
            <div className="nif-stats-grid">
              <div className="nif-stat-card nif-reveal nif-reveal-delay-1">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Agriculture</div>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-2">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Energy</div>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-3">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Engineering</div>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-4">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Nanotechnology</div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="nif-faq nif-section-padding" id="ivs-process">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "2rem" }}>
              <div className="nif-section-badge" style={{ margin: "0 auto 1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                FAQ
              </div>
              <h2 className="nif-section-title">Frequently Asked <span className="nif-gradient-text">Questions</span></h2>
            </div>
            <div className="nif-faq-list">
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">
                  What is the Innovation Voucher Scheme (IVS)?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">The Innovation Voucher Scheme (IVS) is a state government initiative that provides financial support to MSMEs and startups for research, prototyping, and commercialisation across sectors like agriculture, energy, engineering, nanotechnology, and deep technology.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">
                  How much funding can I receive?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">There are two tiers: Voucher A provides up to &#8377;2,00,000 for converting concepts into functional prototypes, and Voucher B provides up to &#8377;5,00,000 for supporting commercialisation efforts and taking products to market.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-2">
                <button className="nif-faq-question" aria-expanded="false">
                  Who is eligible to apply?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">MSMEs and startups working in eligible sectors including agriculture, energy, engineering, nanotechnology, and deep technology can apply. The programme facilitates collaboration between enterprises and research institutions.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">
                  How are proposals selected?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">A state-level committee evaluates and approves viable proposals for funding. NIF assists applicants with proposal preparation, documentation, and submission to maximise their chances of approval.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">
                  How does NIF help with IVS applications?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF serves as a facilitating partner, helping healthcare and bioconvergence startups navigate the IVS application process, prepare proposals, connect with research institutions, and access the necessary infrastructure for prototype development and testing.</div></div>
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
