import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "Our Incubatees - Nattraja Incubation Forum",
  description:
    "Meet the innovative healthcare startups incubated at NIF — Biomakerz, Milir Naturals, Native News, and PAM Square — each tackling critical challenges through bioconvergence and technology.",
};

export default function IncubateesPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="incubatees" />

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                  Our Incubatees
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  Startups Shaping the <span className="nif-line-gradient">Future of Healthcare</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  Meet the innovative ventures currently incubated at NIF — each tackling critical healthcare challenges through bioconvergence, technology, and sustainable solutions.
                </p>
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

        {/* CTA FOOTER */}
        <CtaFooter />
      </div>

      <BackToTop />
      <NifScripts />
    </>
  );
}
