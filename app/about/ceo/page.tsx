import type { Metadata } from "next";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CtaFooter from "../../components/CtaFooter";
import BackToTop from "../../components/BackToTop";
import NifScripts from "../../NifScripts";

export const metadata: Metadata = {
  title: "About CEO - Nattraja Incubation Forum",
  description:
    "Meet Mr. S. Vijaysabari, CEO of Nattraja Incubation Forum (NIF) — leading healthcare innovation with expertise in critical care technology and AI integration.",
};

export default function CeoPage() {
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
                  CEO&apos;s Profile
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  Forward-Thinking Leadership in <span className="nif-line-gradient">Healthcare Innovation</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  Meet the leader driving NIF&apos;s day-to-day operations — empowering startups to harness clinical insight and technology for impactful, market-ready healthcare solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO PROFILE */}
        <section className="nif-about nif-section-padding" id="ceo-profile">
          <div className="nif-container">
            <div className="nif-about-grid">
              <div className="nif-about-card-block nif-reveal">
                <div className="nif-about-card">
                  <h2 className="nif-about-card-title">Mr. S. Vijaysabari</h2>
                  <div className="nif-about-accent-badge">
                    <h4>CEO</h4>
                    <p>Nattraja Incubation Forum</p>
                  </div>
                </div>
                <div className="nif-about-features nif-reveal nif-reveal-delay-4">
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                    </div>
                    <div>
                      <h4>BSc Cardio Pulmonary</h4>
                      <p>Cardio Pulmonary Technology specialist</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <div>
                      <h4>MSc Critical Care</h4>
                      <p>Critical Care Technology expertise</p>
                    </div>
                  </div>
                  <div className="nif-about-feature-item">
                    <div className="nif-about-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                    </div>
                    <div>
                      <h4>PhD (Pursuing)</h4>
                      <p>AI integration in healthcare</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nif-about-text">
                <div className="nif-section-badge nif-reveal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  About the CEO
                </div>
                <h2 className="nif-section-title nif-reveal nif-reveal-delay-1">
                  Mr. S. <span className="nif-gradient-text">Vijaysabari</span>
                </h2>
                <p className="nif-lead nif-reveal nif-reveal-delay-2">
                  <strong>Mr. S. Vijaysabari</strong> serves as the Chief Executive Officer of Nattraja Incubation Forum. With a strong foundation in <strong>Cardio Pulmonary Technology (BSc)</strong> and <strong>Critical Care Technology (MSc)</strong>, he brings deep clinical expertise to NIF&apos;s healthcare innovation ecosystem.
                </p>
                <p className="nif-reveal nif-reveal-delay-2">
                  Currently pursuing his <strong>PhD in Artificial Intelligence</strong> with a focus on AI integration in healthcare, Mr. Vijaysabari represents the perfect blend of clinical knowledge and technological vision that defines NIF&apos;s bioconvergence approach.
                </p>
                <p className="nif-reveal nif-reveal-delay-3">
                  His forward-thinking leadership fosters a dynamic environment within the incubation forum — empowering startups to harness clinical insight and technology for impactful, market-ready healthcare solutions. He emphasises interdisciplinary collaboration and evidence-based practice, creating conditions where startup ventures can integrate clinical knowledge with modern technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE AREAS */}
        <section className="nif-stats nif-section-padding-sm" id="ceo-expertise">
          <div className="nif-stats-aurora">
            <div className="glow-1"></div>
            <div className="glow-2"></div>
          </div>
          <div className="nif-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "2.5rem" }}>
              <div className="nif-section-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                Areas of Expertise
              </div>
              <h2 className="nif-section-title">
                Expertise &amp; <span className="nif-gradient-text">Leadership</span>
              </h2>
            </div>
            <div className="nif-stats-grid">
              <div className="nif-stat-card nif-reveal nif-reveal-delay-1">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Critical Care</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Cardio pulmonary &amp; critical care technology</p>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-2">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>AI in Healthcare</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Pioneering AI integration in clinical settings</p>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-3">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Startup Empowerment</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Fostering interdisciplinary collaboration</p>
              </div>
              <div className="nif-stat-card nif-reveal nif-reveal-delay-4">
                <div className="nif-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="nif-stat-label" style={{ fontSize: "1rem", fontWeight: 600 }}>Evidence-Based Practice</div>
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>Clinical validation &amp; research-driven approach</p>
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
