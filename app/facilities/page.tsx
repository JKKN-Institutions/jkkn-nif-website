import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "Our Facilities - Nattraja Incubation Forum",
  description:
    "Explore NIF's world-class bioconvergence infrastructure — instrumentation lab, clinical trial facility, CPCSEA animal house, ethics committee, IoT lab, and co-working spaces.",
};

export default function FacilitiesPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="facilities" />

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  Our Facilities
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  World-Class Infrastructure for <span className="nif-line-gradient">Bioconvergence Innovation</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  NIF&apos;s 10,000+ sq ft campus houses advanced laboratories, clinical trial facilities, regulatory clearance support, and collaborative workspaces — providing healthcare startups with everything they need to go from concept to commercialisation under one roof.
                </p>
                <div className="nif-fac-hero-cta nif-reveal nif-reveal-delay-3">
                  <a href="#" className="nif-btn nif-btn-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    Schedule a Campus Tour
                  </a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3g7Z8FUm_irN58qYU4qyfp_RgmFWjIPT2OB0F9REDyDeGog/viewform?vc=0&c=0&w=1&flr=0" className="nif-btn nif-btn-glass" target="_blank">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    Apply for Incubation
                  </a>
                </div>
              </div>
              <div className="nif-fac-hero-visual nif-reveal nif-reveal-delay-2">
                <div className="nif-fac-hero-card">
                  <div className="nif-fac-hero-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    <span>Facility Highlights</span>
                  </div>
                  <div className="nif-fac-stats-grid">
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">10,000+</span>
                      <span className="nif-fac-stat-label">Sq Ft Workspace</span>
                    </div>
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">6</span>
                      <span className="nif-fac-stat-label">Core Facilities</span>
                    </div>
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">5+</span>
                      <span className="nif-fac-stat-label">Hospital MOUs</span>
                    </div>
                    <div className="nif-fac-stat-box">
                      <span className="nif-fac-stat-number">100+</span>
                      <span className="nif-fac-stat-label">Expert Mentors</span>
                    </div>
                  </div>
                  <div className="nif-fac-hero-floating-badge">
                    <span className="badge-label">NIF</span>
                    <span className="badge-text">JKKN Institutions</span>
                  </div>
                  <div className="nif-fac-hero-floating-tag">Healthcare Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAMPUS OVERVIEW */}
        <section className="nif-fac-overview nif-section-padding">
          <div className="nif-container">
            <div className="nif-fac-overview-grid">
              <div className="nif-fac-overview-card nif-reveal">
                <div className="nif-fac-overview-card-inner">
                  <div className="nif-fac-overview-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                  </div>
                  <h3 className="nif-fac-overview-card-title">NIF Campus<br />Bioconvergence Hub</h3>
                  <div className="nif-fac-overview-card-dots"><span></span><span></span><span></span></div>
                </div>
              </div>
              <div className="nif-fac-overview-text nif-reveal nif-reveal-delay-1">
                <div className="nif-section-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                  Campus Overview
                </div>
                <h2 className="nif-section-title">A Complete <span className="nif-gradient-text">Healthcare Innovation</span> Ecosystem</h2>
                <p className="nif-lead">
                  NIF&apos;s infrastructure is purpose-built for bioconvergence — where biology meets technology. Spanning over <strong>10,000 sq ft</strong> within the JKKN Institutions campus, our facility is designed to eliminate the three biggest barriers healthcare startups face: accessing <strong>clinical mentorships</strong>, navigating <strong>ethical clearance</strong>, and managing <strong>pre-clinical research</strong>.
                </p>
                <p>
                  Every facility is interconnected — startups can develop prototypes in the Instrumentation Lab, test formulations in the Animal House, secure ethics clearance from the in-house IEC, and validate products through clinical trials at partner hospitals — all without leaving the NIF ecosystem.
                </p>
                <div className="nif-fac-overview-highlights nif-reveal nif-reveal-delay-2">
                  <div className="nif-fac-highlight">
                    <div className="nif-fac-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
                    <span>Instrumentation Lab</span>
                  </div>
                  <div className="nif-fac-highlight">
                    <div className="nif-fac-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                    <span>Ethics Committee</span>
                  </div>
                  <div className="nif-fac-highlight">
                    <div className="nif-fac-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></div>
                    <span>Clinical Trial Centre</span>
                  </div>
                  <div className="nif-fac-highlight">
                    <div className="nif-fac-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
                    <span>CPCSEA Animal House</span>
                  </div>
                  <div className="nif-fac-highlight">
                    <div className="nif-fac-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
                    <span>Mini IoT Lab</span>
                  </div>
                  <div className="nif-fac-highlight">
                    <div className="nif-fac-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div>
                    <span>Co-Working Space</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility 01: Instrumentation Lab */}
        <section className="nif-fac-detail nif-section-padding" style={{ background: "#ffffff" }}>
          <div className="nif-container">
            <div className="nif-fac-detail-grid">
              <div className="nif-fac-detail-visual nif-reveal">
                <div className="nif-fac-detail-icon-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
              </div>
              <div className="nif-fac-detail-content nif-reveal nif-reveal-delay-1">
                <span className="nif-fac-label">Facility 01</span>
                <h2>Sophisticated <span className="nif-gradient-text">Instrumentation Laboratory</span></h2>
                <p>NIF&apos;s Instrumentation Laboratory is equipped with advanced analytical, diagnostic, and fabrication instruments essential for healthcare product development. From molecular-level analysis to device prototyping, this facility provides incubatees with research-grade capabilities.</p>
                <p>The lab supports a wide spectrum of bioconvergence activities — spectroscopic analysis for pharmaceutical formulations, precision measurement for medical device calibration, chromatographic techniques for quality control, and CNC-based prototyping for hardware startups.</p>
                <ul className="nif-fac-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>UV-Vis &amp; IR Spectrophotometers for compound analysis</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>High-Performance Liquid Chromatography (HPLC) systems</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>CNC machines &amp; 3D printers for rapid prototyping</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Digital microscopy &amp; precision measurement tools</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Dissolution testers &amp; stability chambers for pharma R&amp;D</li>
                </ul>
                <div className="nif-fac-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> Supports MedTech, Pharma &amp; Biotech Startups</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility 02: Clinical Trial */}
        <section className="nif-fac-detail nif-section-padding" style={{ background: "#f5f7fa" }}>
          <div className="nif-container">
            <div className="nif-fac-detail-grid nif-fac-reversed">
              <div className="nif-fac-detail-visual nif-reveal">
                <div className="nif-fac-detail-icon-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </div>
              </div>
              <div className="nif-fac-detail-content nif-reveal nif-reveal-delay-1">
                <span className="nif-fac-label">Facility 02</span>
                <h2><span className="nif-gradient-text">Clinical Trial</span> Facility</h2>
                <p>NIF&apos;s Clinical Trial Facility is one of the most critical differentiators for healthcare incubatees. Backed by <strong>tri-party Memorandums of Understanding (MOUs) with 5+ hospitals</strong>, this facility enables startups to conduct regulated Phase I–IV clinical studies, product validation trials, and patient-centric research.</p>
                <p>For healthcare startups, clinical validation is often the costliest and most time-consuming hurdle. NIF eliminates this barrier by providing direct access to clinical infrastructure, patient cohorts through hospital partnerships, and regulatory guidance.</p>
                <ul className="nif-fac-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Tri-party MOUs with 5+ hospitals for patient access</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Phase I–IV clinical study support &amp; coordination</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Bioavailability &amp; bioequivalence (BA/BE) studies</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Post-market surveillance &amp; real-world evidence studies</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Regulatory documentation &amp; CDSCO compliance guidance</li>
                </ul>
                <div className="nif-fac-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> 5+ Hospital MOUs — Regulated Clinical Pathways</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility 03: Animal House */}
        <section className="nif-fac-detail nif-section-padding" style={{ background: "#ffffff" }}>
          <div className="nif-container">
            <div className="nif-fac-detail-grid">
              <div className="nif-fac-detail-visual nif-reveal">
                <div className="nif-fac-detail-icon-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                </div>
              </div>
              <div className="nif-fac-detail-content nif-reveal nif-reveal-delay-1">
                <span className="nif-fac-label">Facility 03</span>
                <h2>CPCSEA-Registered <span className="nif-gradient-text">Animal House</span> Facility</h2>
                <p>NIF houses a <strong>CPCSEA (Committee for the Purpose of Control and Supervision of Experiments on Animals) registered</strong> animal research facility — a rare and essential infrastructure for healthcare startups requiring pre-clinical validation of drugs, formulations, and biomedical devices.</p>
                <p>The facility operates under strict ethical protocols with dedicated animal caretakers, standardised housing conditions, and comprehensive waste management.</p>
                <ul className="nif-fac-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>CPCSEA registration with full regulatory compliance</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Acute &amp; chronic toxicity studies for drug development</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Pharmacokinetic &amp; pharmacodynamic evaluations</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Standardised housing with climate-controlled environments</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Dedicated caretakers &amp; ethical protocol adherence</li>
                </ul>
                <div className="nif-fac-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> CPCSEA Registered — Ethical Pre-Clinical Research</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility 04: Ethics Committee */}
        <section className="nif-fac-detail nif-section-padding" style={{ background: "#f5f7fa" }}>
          <div className="nif-container">
            <div className="nif-fac-detail-grid nif-fac-reversed">
              <div className="nif-fac-detail-visual nif-reveal">
                <div className="nif-fac-detail-icon-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
              </div>
              <div className="nif-fac-detail-content nif-reveal nif-reveal-delay-1">
                <span className="nif-fac-label">Facility 04</span>
                <h2>Institutional <span className="nif-gradient-text">Ethics Committee</span> (IEC)</h2>
                <p>NIF&apos;s in-house <strong>Institutional Ethics Committee (IEC)</strong> is a constituted review board that provides ethical clearance for human research, clinical trials, and biomedical studies. For healthcare startups, ethics clearance is often the most significant bottleneck.</p>
                <p>The committee comprises medical professionals, legal experts, ethicists, and community representatives — ensuring rigorous review while maintaining efficiency.</p>
                <ul className="nif-fac-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>In-house ethical review board for rapid clearance</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Clearance for interventional, observational &amp; survey studies</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Compliance with ICMR, CDSCO &amp; GCP guidelines</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Multi-disciplinary review panel (medical, legal, ethics)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Informed consent documentation &amp; protocol guidance</li>
                </ul>
                <div className="nif-fac-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> ICMR &amp; GCP Compliant — Fast-Track Ethical Clearance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility 05: IoT Lab */}
        <section className="nif-fac-detail nif-section-padding" style={{ background: "#ffffff" }}>
          <div className="nif-container">
            <div className="nif-fac-detail-grid">
              <div className="nif-fac-detail-visual nif-reveal">
                <div className="nif-fac-detail-icon-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
              </div>
              <div className="nif-fac-detail-content nif-reveal nif-reveal-delay-1">
                <span className="nif-fac-label">Facility 05</span>
                <h2>Mini <span className="nif-gradient-text">IoT Lab</span> for Smart Healthcare</h2>
                <p>NIF&apos;s Mini IoT (Internet of Things) Lab is a dedicated space for startups developing connected healthcare devices. Equipped with sensors, microcontrollers, connectivity modules, and embedded systems tools, the lab enables rapid prototyping of wearable health monitors, remote patient monitoring systems, smart diagnostic tools, and IoT-enabled medical devices.</p>
                <ul className="nif-fac-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Arduino, Raspberry Pi &amp; ESP32 development boards</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Biomedical sensors (pulse, SpO2, ECG, EMG modules)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Wi-Fi, Bluetooth &amp; LoRa connectivity modules</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Oscilloscopes, logic analysers &amp; soldering stations</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>PCB design tools &amp; rapid embedded firmware development</li>
                </ul>
                <div className="nif-fac-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> Digital Health &amp; Connected Device Innovation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility 06: Co-Working */}
        <section className="nif-fac-detail nif-section-padding" style={{ background: "#f5f7fa" }}>
          <div className="nif-container">
            <div className="nif-fac-detail-grid nif-fac-reversed">
              <div className="nif-fac-detail-visual nif-reveal">
                <div className="nif-fac-detail-icon-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
              </div>
              <div className="nif-fac-detail-content nif-reveal nif-reveal-delay-1">
                <span className="nif-fac-label">Facility 06</span>
                <h2><span className="nif-gradient-text">Co-Working</span> &amp; Boardroom Space</h2>
                <p>NIF&apos;s co-working space is designed for startup productivity — offering modern hot desks, dedicated workstations, private cabins for focused teams, and a fully equipped boardroom for investor pitches, advisory board meetings, and client presentations.</p>
                <p>The NIF Admin Office provides incubatees with professional business support — including mail handling, visitor coordination, printing services, and administrative assistance.</p>
                <ul className="nif-fac-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Hot desks &amp; dedicated workstations with high-speed internet</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Private cabins for focused team collaboration</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Fully equipped boardroom with AV &amp; conferencing setup</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Admin office for professional business support</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>24/7 access for incubatees with secured entry</li>
                </ul>
                <div className="nif-fac-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg> Collaborative Workspace — Built for Startup Teams</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility 07: Research */}
        <section className="nif-fac-detail nif-section-padding" style={{ background: "#ffffff" }}>
          <div className="nif-container">
            <div className="nif-fac-detail-grid">
              <div className="nif-fac-detail-visual nif-reveal">
                <div className="nif-fac-detail-icon-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
              </div>
              <div className="nif-fac-detail-content nif-reveal nif-reveal-delay-1">
                <span className="nif-fac-label">Facility 07</span>
                <h2>General <span className="nif-gradient-text">Research Facilities</span></h2>
                <p>Beyond the specialised labs, NIF provides access to a broad range of research infrastructure supported by <strong>JKKN Institutions</strong> — one of Tamil Nadu&apos;s leading educational groups encompassing Dental, Pharmacy, Nursing, Engineering, Allied Health Sciences, and Arts &amp; Science colleges.</p>
                <p>Incubatees can leverage cross-disciplinary research through JKKN&apos;s institutional labs — pharmaceutical formulation labs, microbiology and biotechnology labs, dental materials testing facilities, and engineering workshops.</p>
                <ul className="nif-fac-features">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Access to JKKN College of Pharmacy formulation &amp; analysis labs</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Microbiology, biotechnology &amp; molecular biology labs</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>JKKN Dental College materials testing &amp; clinical simulation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Engineering workshops for mechanical &amp; electronic prototyping</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Library access with journals, databases &amp; research repositories</li>
                </ul>
                <div className="nif-fac-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg> Backed by JKKN Institutions — 10 Colleges, 1 Ecosystem</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NIF FACILITIES */}
        <section className="nif-fac-why nif-section-padding" style={{ background: "#f5f7fa" }}>
          <div className="nif-container">
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "3rem" }}>
              <div className="nif-section-badge" style={{ margin: "0 auto 1.25rem" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                Why NIF
              </div>
              <h2 className="nif-section-title">Why Choose NIF&apos;s <span className="nif-gradient-text">Facilities</span>?</h2>
              <p className="nif-section-subtitle">What makes NIF&apos;s infrastructure uniquely valuable for healthcare startups.</p>
            </div>
            <div className="nif-fac-why-grid">
              <div className="nif-fac-why-card nif-reveal">
                <div className="nif-fac-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg></div>
                <h3>All-Under-One-Roof</h3>
                <p>From prototyping to clinical trials, ethics clearance to animal testing — complete the entire healthcare product lifecycle without leaving NIF&apos;s campus.</p>
              </div>
              <div className="nif-fac-why-card nif-reveal nif-reveal-delay-1">
                <div className="nif-fac-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                <h3>Regulatory Fast-Track</h3>
                <p>In-house IEC clearance, CPCSEA-registered animal house, and CDSCO compliance guidance reduce regulatory timelines from years to months.</p>
              </div>
              <div className="nif-fac-why-card nif-reveal nif-reveal-delay-2">
                <div className="nif-fac-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div>
                <h3>100+ Expert Mentors</h3>
                <p>Direct access to 100+ mentors spanning clinical medicine, pharmaceutical sciences, biotech, business strategy, IP law, and venture capital.</p>
              </div>
              <div className="nif-fac-why-card nif-reveal nif-reveal-delay-3">
                <div className="nif-fac-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
                <h3>Hospital Network Access</h3>
                <p>Tri-party MOUs with 5+ hospitals give incubatees direct access to clinical environments, patient cohorts, and practicing clinicians.</p>
              </div>
              <div className="nif-fac-why-card nif-reveal">
                <div className="nif-fac-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <h3>JKKN Institutional Backing</h3>
                <p>Leverage the research labs, faculty expertise, and infrastructure of 10 JKKN institutions — creating unmatched cross-disciplinary capability.</p>
              </div>
              <div className="nif-fac-why-card nif-reveal nif-reveal-delay-1">
                <div className="nif-fac-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
                <h3>IoT &amp; Digital Health Ready</h3>
                <p>Purpose-built IoT lab with sensors, microcontrollers, and connectivity modules for developing the next generation of smart healthcare devices.</p>
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
              <p className="nif-section-subtitle">Common questions about NIF&apos;s facilities, access policies, and how incubatees can utilise our bioconvergence infrastructure.</p>
            </div>
            <div className="nif-faq-list">
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">What laboratory facilities are available at NIF?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF provides six core facilities: a Sophisticated Instrumentation Laboratory with HPLC, spectrophotometers, CNC machines, and 3D printers; a Clinical Trial Centre backed by 5+ hospital MOUs; a CPCSEA-registered Animal House for pre-clinical studies; an Institutional Ethics Committee for regulatory clearance; a Mini IoT Lab for smart healthcare device development; and a Co-Working Space with boardrooms.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">Does NIF have a CPCSEA-registered animal house?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">Yes. NIF operates a CPCSEA registered animal house facility supporting acute and chronic toxicity studies, pharmacokinetic evaluations, pharmacodynamic assessments, and efficacy testing for pharmaceutical, nutraceutical, and biomedical products with standardised climate-controlled housing and dedicated caretakers.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-2">
                <button className="nif-faq-question" aria-expanded="false">How does NIF support clinical trials?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF&apos;s Clinical Trial Facility provides end-to-end support through tri-party MOUs with 5+ hospitals. Incubatees can conduct Phase I–IV clinical studies, BA/BE studies, post-market surveillance, and real-world evidence studies with CDSCO regulatory compliance guidance.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">What is the Institutional Ethics Committee (IEC)?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF&apos;s IEC is an in-house review board providing ethical clearance for human research, clinical trials, and biomedical studies. The multi-disciplinary panel complies with ICMR, CDSCO, and GCP guidelines.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">Can non-incubatee startups use NIF&apos;s facilities?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF&apos;s core facilities are primarily for enrolled incubatees. External researchers and startups may access specific facilities through formal collaboration agreements. Contact NIF at nif@jkkn.ac.in for partnership opportunities.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-2">
                <button className="nif-faq-question" aria-expanded="false">What equipment is in the Instrumentation Laboratory?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">The lab houses UV-Vis and IR spectrophotometers, HPLC systems, CNC machines and 3D printers, digital microscopy and precision measurement tools, and dissolution testers and stability chambers for pharmaceutical R&amp;D.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal">
                <button className="nif-faq-question" aria-expanded="false">Does NIF have an IoT lab for smart healthcare devices?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">Yes. NIF&apos;s Mini IoT Lab includes Arduino, Raspberry Pi, and ESP32 boards; biomedical sensors; Wi-Fi, Bluetooth, and LoRa modules; oscilloscopes and logic analysers; and PCB design tools for developing wearable monitors and IoT-enabled medical devices.</div></div>
              </div>
              <div className="nif-faq-item nif-reveal nif-reveal-delay-1">
                <button className="nif-faq-question" aria-expanded="false">How large is NIF&apos;s workspace?<span className="nif-faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></span></button>
                <div className="nif-faq-answer"><div className="nif-faq-answer-inner">NIF spans 10,000+ sq ft with hot desks, dedicated workstations, private cabins, a fully equipped boardroom with AV and conferencing, an admin office, and 24/7 secured access for incubatees within the JKKN Institutions campus.</div></div>
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
