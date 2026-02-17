import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "Our Incubatees - Nattraja Incubation Forum",
  description:
    "Meet the innovative startups incubated at NIF — from HealthTech and AgriTech to EdTech and Clean Energy. Discover how Nattraja Incubation Forum empowers visionary entrepreneurs.",
};

export default function IncubateesPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="incubatees" />

      <div className="nif-2026">
        {/* HERO SECTION */}
        <section className="nif-inc-hero">
          <div className="nif-inc-hero-aurora">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
          <div className="nif-inc-hero-grid"></div>
          <div className="nif-container" style={{ position: "relative", zIndex: 2 }}>
            <div className="nif-inc-hero-layout">
              <div className="nif-inc-hero-text nif-reveal">
                <div className="nif-section-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                  Our Incubatees
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">Empowering <span className="nif-line-gradient">Visionary Entrepreneurs</span></h1>
                <p className="nif-inc-hero-subtitle nif-reveal nif-reveal-delay-2">Transforming innovative ideas into impactful ventures. Discover the changemakers incubated at Nattraja Incubation Forum.</p>
                <div className="nif-inc-hero-cta nif-reveal nif-reveal-delay-3">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3g7Z8FUm_irN58qYU4qyfp_RgmFWjIPT2OB0F9REDyDeGog/viewform?vc=0&c=0&w=1&flr=0" className="nif-btn nif-btn-primary" target="_blank">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    Apply for Incubation
                  </a>
                  <a href="/contact" className="nif-btn nif-btn-glass">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                    Learn More
                  </a>
                </div>
              </div>
              <div className="nif-inc-hero-visual nif-reveal nif-reveal-delay-2">
                <div className="nif-inc-hero-card">
                  <div className="nif-inc-hero-card-inner">
                    <div className="nif-inc-hero-card-header">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                      <span>Impact at a Glance</span>
                    </div>
                    <div className="nif-inc-stats-grid">
                      <div className="nif-inc-stat-box">
                        <span className="nif-inc-stat-number">50+</span>
                        <span className="nif-inc-stat-label">Active Startups</span>
                      </div>
                      <div className="nif-inc-stat-box">
                        <span className="nif-inc-stat-number">25+</span>
                        <span className="nif-inc-stat-label">Graduated</span>
                      </div>
                      <div className="nif-inc-stat-box">
                        <span className="nif-inc-stat-number">&#8377;12Cr+</span>
                        <span className="nif-inc-stat-label">Funding Raised</span>
                      </div>
                      <div className="nif-inc-stat-box">
                        <span className="nif-inc-stat-number">500+</span>
                        <span className="nif-inc-stat-label">Jobs Created</span>
                      </div>
                    </div>
                  </div>
                  <div className="nif-inc-hero-floating-badge">
                    <span className="badge-label">NIF</span>
                    <span className="badge-text">JKKN Institutions</span>
                  </div>
                  <div className="nif-inc-hero-floating-tag">Bioconvergence Hub</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT INCUBATEES */}
        <section className="nif-inc-about nif-section-padding">
          <div className="nif-container">
            <div className="nif-inc-about-grid">
              <div className="nif-inc-about-image nif-reveal">
                <div className="nif-inc-about-card">
                  <div className="nif-inc-about-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                  </div>
                  <h3 className="nif-inc-about-card-title">NIF Incubation Ecosystem</h3>
                  <div className="nif-inc-about-card-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
              <div className="nif-inc-about-content nif-reveal nif-reveal-delay-1">
                <h3>Fostering Innovation &amp; Entrepreneurship</h3>
                <p>At Nattraja Incubation Forum (NIF), our incubatees are at the heart of everything we do. We support ambitious student entrepreneurs, alumni innovators, and early-stage startups who are passionate about solving real-world problems through technology, innovation, and social impact.</p>
                <p>Our incubatees receive comprehensive support including mentorship from industry experts, access to state-of-the-art infrastructure, seed funding opportunities, networking with investors, and guidance on business strategy, product development, and market entry.</p>
                <div className="nif-inc-about-highlights">
                  <div className="nif-inc-highlight">
                    <div className="nif-inc-highlight-num">1</div>
                    <div className="nif-inc-highlight-text">
                      <h4>Mentorship &amp; Guidance</h4>
                      <p>One-on-one mentoring from successful entrepreneurs, industry veterans, and faculty advisors.</p>
                    </div>
                  </div>
                  <div className="nif-inc-highlight">
                    <div className="nif-inc-highlight-num">2</div>
                    <div className="nif-inc-highlight-text">
                      <h4>Funding Support</h4>
                      <p>Access to seed funding, pitch competitions, and connections with angel investors and venture capital firms.</p>
                    </div>
                  </div>
                  <div className="nif-inc-highlight">
                    <div className="nif-inc-highlight-num">3</div>
                    <div className="nif-inc-highlight-text">
                      <h4>Infrastructure &amp; Resources</h4>
                      <p>Co-working spaces, prototyping labs, legal support, cloud credits, and business development tools.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED INCUBATEES */}
        <section className="nif-inc-featured nif-section-padding">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal">
              <div className="nif-section-badge" style={{ margin: "0 auto 1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                Featured Startups
              </div>
              <h2 className="nif-section-title">Featured <span className="nif-gradient-text">Incubatees</span></h2>
              <p className="nif-section-subtitle">Meet some of our most promising startups that are creating impact across diverse sectors.</p>
            </div>
            <div className="nif-inc-cards-grid">
              {/* Incubatee 1 */}
              <div className="nif-inc-card nif-reveal">
                <div className="nif-inc-card-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <div className="nif-inc-card-content">
                  <span className="nif-inc-sector">HealthTech</span>
                  <h3>HealthTech Innovations</h3>
                  <p>AI-powered diagnostic tools making healthcare accessible in rural Tamil Nadu. Their mobile app provides instant preliminary diagnosis support for primary health centers.</p>
                  <div className="nif-inc-card-meta">
                    <span className="nif-inc-year">Incubated: 2023</span>
                    <span className="nif-inc-status nif-inc-active">Active</span>
                  </div>
                </div>
              </div>
              {/* Incubatee 2 */}
              <div className="nif-inc-card nif-reveal nif-reveal-delay-1">
                <div className="nif-inc-card-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="nif-inc-card-content">
                  <span className="nif-inc-sector">AgriTech</span>
                  <h3>AgriSmart Solutions</h3>
                  <p>IoT-based precision agriculture platform helping small farmers optimize water usage, pest control, and crop yield through real-time field monitoring.</p>
                  <div className="nif-inc-card-meta">
                    <span className="nif-inc-year">Incubated: 2022</span>
                    <span className="nif-inc-status nif-inc-active">Active</span>
                  </div>
                </div>
              </div>
              {/* Incubatee 3 */}
              <div className="nif-inc-card nif-reveal nif-reveal-delay-2">
                <div className="nif-inc-card-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                </div>
                <div className="nif-inc-card-content">
                  <span className="nif-inc-sector">EdTech</span>
                  <h3>EduVerse</h3>
                  <p>Vernacular language learning platform using gamification and adaptive AI to improve learning outcomes for Tamil-medium students.</p>
                  <div className="nif-inc-card-meta">
                    <span className="nif-inc-year">Incubated: 2023</span>
                    <span className="nif-inc-status nif-inc-active">Active</span>
                  </div>
                </div>
              </div>
              {/* Incubatee 4 */}
              <div className="nif-inc-card nif-reveal">
                <div className="nif-inc-card-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                </div>
                <div className="nif-inc-card-content">
                  <span className="nif-inc-sector">Clean Energy</span>
                  <h3>GreenEnergy Solutions</h3>
                  <p>Affordable solar-powered solutions for rural households and small businesses, reducing dependence on conventional grid electricity.</p>
                  <div className="nif-inc-card-meta">
                    <span className="nif-inc-year">Incubated: 2021</span>
                    <span className="nif-inc-status nif-inc-graduated">Graduated</span>
                  </div>
                </div>
              </div>
              {/* Incubatee 5 */}
              <div className="nif-inc-card nif-reveal nif-reveal-delay-1">
                <div className="nif-inc-card-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                </div>
                <div className="nif-inc-card-content">
                  <span className="nif-inc-sector">Social Impact</span>
                  <h3>SkillBridge</h3>
                  <p>Connecting unemployed youth with skill development training and job placement support in manufacturing and service sectors.</p>
                  <div className="nif-inc-card-meta">
                    <span className="nif-inc-year">Incubated: 2022</span>
                    <span className="nif-inc-status nif-inc-active">Active</span>
                  </div>
                </div>
              </div>
              {/* Incubatee 6 */}
              <div className="nif-inc-card nif-reveal nif-reveal-delay-2">
                <div className="nif-inc-card-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                </div>
                <div className="nif-inc-card-content">
                  <span className="nif-inc-sector">Logistics Tech</span>
                  <h3>LogiTrack</h3>
                  <p>SaaS platform for hyperlocal logistics and last-mile delivery optimization, serving 200+ small e-commerce businesses across Tamil Nadu.</p>
                  <div className="nif-inc-card-meta">
                    <span className="nif-inc-year">Incubated: 2023</span>
                    <span className="nif-inc-status nif-inc-active">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTORS SECTION */}
        <section className="nif-inc-sectors nif-section-padding">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal">
              <div className="nif-section-badge" style={{ margin: "0 auto 1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                Industry Sectors
              </div>
              <h2 className="nif-section-title">Sectors We <span className="nif-gradient-text">Support</span></h2>
              <p className="nif-section-subtitle">Our incubatees span a wide range of industries, each addressing critical challenges and opportunities.</p>
            </div>
            <div className="nif-inc-sectors-grid">
              <div className="nif-inc-sector-card nif-reveal">
                <div className="nif-inc-sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <h3>HealthTech &amp; MedTech</h3>
                <p>AI diagnostics, telemedicine, rural healthcare, medical devices</p>
                <span className="nif-inc-sector-count">12</span>
              </div>
              <div className="nif-inc-sector-card nif-reveal nif-reveal-delay-1">
                <div className="nif-inc-sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <h3>AgriTech</h3>
                <p>Precision farming, supply chain, farmer marketplaces, IoT sensors</p>
                <span className="nif-inc-sector-count">15</span>
              </div>
              <div className="nif-inc-sector-card nif-reveal nif-reveal-delay-2">
                <div className="nif-inc-sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                </div>
                <h3>EdTech</h3>
                <p>Vernacular learning, skill development, exam prep, LMS platforms</p>
                <span className="nif-inc-sector-count">10</span>
              </div>
              <div className="nif-inc-sector-card nif-reveal nif-reveal-delay-3">
                <div className="nif-inc-sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></svg>
                </div>
                <h3>Clean Energy</h3>
                <p>Solar solutions, energy storage, waste management, sustainability</p>
                <span className="nif-inc-sector-count">8</span>
              </div>
              <div className="nif-inc-sector-card nif-reveal">
                <div className="nif-inc-sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                </div>
                <h3>Social Innovation</h3>
                <p>Rural employment, financial inclusion, women empowerment</p>
                <span className="nif-inc-sector-count">7</span>
              </div>
              <div className="nif-inc-sector-card nif-reveal nif-reveal-delay-1">
                <div className="nif-inc-sector-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
                <h3>SaaS &amp; B2B Tech</h3>
                <p>Enterprise software, automation, cloud services, data analytics</p>
                <span className="nif-inc-sector-count">6</span>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="nif-inc-stories nif-section-padding">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal">
              <div className="nif-section-badge" style={{ margin: "0 auto 1.25rem", color: "#7db247", background: "rgba(125,178,71,0.15)", borderColor: "rgba(125,178,71,0.25)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                Impact Stories
              </div>
              <h2 className="nif-section-title" style={{ color: "#ffffff" }}>Success <span style={{ color: "#7db247" }}>Stories</span></h2>
              <p className="nif-section-subtitle" style={{ color: "rgba(255,255,255,0.8)" }}>Real impact, measurable growth. See how our incubatees are scaling up.</p>
            </div>
            <div className="nif-inc-stories-grid">
              <div className="nif-inc-story-card nif-reveal">
                <div className="nif-inc-story-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <h3>From Campus to Market Leader</h3>
                <p>AgriSmart Solutions started as a college project and is now deployed across 5,000+ farms in Tamil Nadu, helping farmers save 40% on water usage and increase crop yield by 25%.</p>
                <div className="nif-inc-story-stats">
                  <div className="nif-inc-story-stat">
                    <span className="nif-inc-story-num">&#8377;2.5Cr</span>
                    <span className="nif-inc-story-label">Funding Raised</span>
                  </div>
                  <div className="nif-inc-story-stat">
                    <span className="nif-inc-story-num">5000+</span>
                    <span className="nif-inc-story-label">Farmers Served</span>
                  </div>
                </div>
              </div>
              <div className="nif-inc-story-card nif-reveal nif-reveal-delay-1">
                <div className="nif-inc-story-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <h3>HealthTech for Rural India</h3>
                <p>HealthTech Innovations won the National Startup Award 2024 for their AI-driven diagnostic app, which is now being piloted in 100+ primary health centers across Tamil Nadu and Karnataka.</p>
                <div className="nif-inc-story-stats">
                  <div className="nif-inc-story-stat">
                    <span className="nif-inc-story-num">50K+</span>
                    <span className="nif-inc-story-label">Patients Screened</span>
                  </div>
                  <div className="nif-inc-story-stat">
                    <span className="nif-inc-story-num">100+</span>
                    <span className="nif-inc-story-label">PHC Partners</span>
                  </div>
                </div>
              </div>
              <div className="nif-inc-story-card nif-reveal nif-reveal-delay-2">
                <div className="nif-inc-story-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                </div>
                <h3>EdTech Breaking Barriers</h3>
                <p>EduVerse achieved 1 lakh+ downloads within 6 months of launch, providing vernacular education to students from underprivileged backgrounds across India.</p>
                <div className="nif-inc-story-stats">
                  <div className="nif-inc-story-stat">
                    <span className="nif-inc-story-num">1L+</span>
                    <span className="nif-inc-story-label">Active Users</span>
                  </div>
                  <div className="nif-inc-story-stat">
                    <span className="nif-inc-story-num">15+</span>
                    <span className="nif-inc-story-label">State Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY JOIN NIF */}
        <section className="nif-inc-benefits nif-section-padding">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal">
              <div className="nif-section-badge" style={{ margin: "0 auto 1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                Benefits
              </div>
              <h2 className="nif-section-title">Why Join <span className="nif-gradient-text">NIF</span>?</h2>
              <p className="nif-section-subtitle">Comprehensive support ecosystem designed to accelerate your startup journey.</p>
            </div>
            <div className="nif-inc-benefits-grid">
              <div className="nif-inc-benefit-card nif-reveal">
                <span className="nif-inc-benefit-num">01</span>
                <h3>Expert Mentorship</h3>
                <p>Personalized guidance from successful entrepreneurs, industry leaders, JKKN faculty, and domain experts to navigate challenges and scale faster.</p>
              </div>
              <div className="nif-inc-benefit-card nif-reveal nif-reveal-delay-1">
                <span className="nif-inc-benefit-num">02</span>
                <h3>Seed Funding Access</h3>
                <p>Direct connections to angel investors, VC firms, government grants, and participation in pitch competitions to secure early-stage capital.</p>
              </div>
              <div className="nif-inc-benefit-card nif-reveal nif-reveal-delay-2">
                <span className="nif-inc-benefit-num">03</span>
                <h3>Infrastructure &amp; Workspace</h3>
                <p>Fully equipped co-working spaces, prototyping labs, meeting rooms, high-speed internet, and 24/7 facility access for your team.</p>
              </div>
              <div className="nif-inc-benefit-card nif-reveal nif-reveal-delay-3">
                <span className="nif-inc-benefit-num">04</span>
                <h3>Legal &amp; Compliance Support</h3>
                <p>Assistance with company registration, IP protection, contract drafting, regulatory compliance, and tax advisory services.</p>
              </div>
              <div className="nif-inc-benefit-card nif-reveal">
                <span className="nif-inc-benefit-num">05</span>
                <h3>Industry Networking</h3>
                <p>Exclusive access to investor meetups, startup summits, industry conferences, and JKKN&apos;s corporate partner network.</p>
              </div>
              <div className="nif-inc-benefit-card nif-reveal nif-reveal-delay-1">
                <span className="nif-inc-benefit-num">06</span>
                <h3>Technical Resources</h3>
                <p>Cloud credits (AWS, Azure, GCP), software licenses, development tools, and access to JKKN&apos;s research facilities and laboratories.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="nif-faq nif-section-padding">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal">
              <div className="nif-section-badge" style={{ margin: "0 auto 1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                FAQ
              </div>
              <h2 className="nif-section-title">Frequently Asked <span className="nif-gradient-text">Questions</span></h2>
              <p className="nif-section-subtitle">Everything you need to know about becoming an NIF incubatee.</p>
            </div>
            <div className="nif-faq-list">
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">
                  What is the Nattraja Incubation Forum (NIF)?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">Nattraja Incubation Forum (NIF) is the premier startup incubation center at JKKN Institutions, Tamil Nadu. NIF provides comprehensive support to student entrepreneurs and early-stage startups through mentorship, funding assistance, infrastructure, and industry networking opportunities.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">
                  Who are NIF incubatees?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF incubatees are innovative startups, student ventures, and early-stage companies that receive incubation support from the Nattraja Incubation Forum. These ventures span diverse sectors including healthcare technology, agriculture, education technology, renewable energy, and social innovation.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-2">
                <button className="nif-faq-question" aria-expanded="false">
                  What sectors do NIF incubatees operate in?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF incubatees operate across multiple sectors: HealthTech &amp; MedTech (AI diagnostics, telemedicine), AgriTech (precision farming, supply chain), EdTech (vernacular learning, skill development), Clean Energy (solar solutions, waste management), and Social Innovation (rural employment, financial inclusion).</div></div>
              </div>
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">
                  How can I apply to become an NIF incubatee?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">Students, alumni, and external entrepreneurs can apply to NIF through the online application portal on the NIF website. The selection process includes pitch evaluation, business model assessment, team capabilities review, and alignment with NIF&apos;s focus sectors. Applications are reviewed quarterly (March, June, September, December).</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">
                  What support does NIF provide to incubatees?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF provides comprehensive support including expert mentorship, seed funding access (up to &#8377;5 lakhs), co-working space, prototyping labs, legal and compliance support, industry networking, technical resources (cloud credits, software licenses), market research assistance, and pitch training.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-2">
                <button className="nif-faq-question" aria-expanded="false">
                  What is the incubation duration?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">The standard incubation period is 12-24 months, depending on the startup&apos;s progress and requirements. Extensions may be granted based on milestones achieved and growth potential. Graduated startups remain part of the NIF alumni network.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">
                  Is there any equity requirement?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF follows a flexible equity model. For infrastructure and mentorship support, there is no equity requirement. If NIF provides seed funding or investment, equity terms are negotiated on a case-by-case basis, typically ranging from 2-8% depending on investment amount and support provided.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">
                  Can non-JKKN students apply?
                  <span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span>
                </button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">Yes, NIF welcomes applications from JKKN students, alumni, faculty, and external entrepreneurs with innovative startup ideas. Priority is given to ventures aligned with NIF&apos;s focus sectors and those addressing problems relevant to Tamil Nadu and India.</div></div>
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
