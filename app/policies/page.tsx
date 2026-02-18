import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "Policies - Nattraja Incubation Forum",
  description:
    "View and download NIF policies — Incubation Policy, IP Policy, Code of Conduct, and Grievance Policy. Transparency at the core of Nattraja Incubation Forum.",
};

export default function PoliciesPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="policies" />

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                  Policies
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  Governance &amp; <span className="nif-line-gradient">Transparency</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  Transparency is at the core of everything we do at NIF. Access our policies that govern incubation operations, intellectual property, conduct standards, and grievance redressal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* POLICIES CARDS */}
        <section className="nif-programmes nif-section-padding">
          <div className="nif-container">
            <div className="nif-text-center nif-reveal" style={{ marginBottom: "3rem" }}>
              <div className="nif-section-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Governance
              </div>
              <h2 className="nif-section-title">
                Transparency at Our <span className="nif-gradient-text">Core</span>
              </h2>
              <p className="nif-section-subtitle">
                Our policies ensure fair, transparent, and ethical operations across all incubation activities at Nattraja Incubation Forum.
              </p>
            </div>
            <div className="nif-programmes-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>

              {/* Incubation Policy */}
              <div className="nif-programme-card nif-reveal nif-reveal-delay-1" style={{ textAlign: "center", display: "flex", flexDirection: "column" as const }}>
                <div className="nif-programme-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                </div>
                <h3>Incubation Policy</h3>
                <p>
                  Defines the framework for startup selection, incubation tenure, support services, milestones, exit criteria, and the rights and responsibilities of both NIF and incubatees.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                  <a href="#" className="nif-btn nif-btn-primary" style={{ display: "inline-flex" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Download PDF
                  </a>
                </div>
              </div>

              {/* IP Policy */}
              <div className="nif-programme-card nif-reveal nif-reveal-delay-2" style={{ textAlign: "center", display: "flex", flexDirection: "column" as const }}>
                <div className="nif-programme-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                </div>
                <h3>IP Policy</h3>
                <p>
                  Outlines intellectual property ownership, licensing arrangements, confidentiality obligations, and IP protection mechanisms for innovations developed during the incubation period.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                  <a href="#" className="nif-btn nif-btn-primary" style={{ display: "inline-flex" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Download PDF
                  </a>
                </div>
              </div>

              {/* Code of Conduct */}
              <div className="nif-programme-card nif-reveal nif-reveal-delay-3" style={{ textAlign: "center", display: "flex", flexDirection: "column" as const }}>
                <div className="nif-programme-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <h3>Code of Conduct</h3>
                <p>
                  Establishes behavioural standards, ethical guidelines, professional conduct expectations, and compliance requirements for all NIF incubatees, mentors, and staff members.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                  <a href="#" className="nif-btn nif-btn-primary" style={{ display: "inline-flex" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Download PDF
                  </a>
                </div>
              </div>

              {/* Grievance Policy */}
              <div className="nif-programme-card nif-reveal nif-reveal-delay-1" style={{ textAlign: "center", display: "flex", flexDirection: "column" as const }}>
                <div className="nif-programme-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                </div>
                <h3>Grievance Policy</h3>
                <p>
                  Provides a structured grievance redressal mechanism for incubatees, mentors, and stakeholders — ensuring fair resolution of complaints, disputes, and concerns within the NIF ecosystem.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                  <a href="#" className="nif-btn nif-btn-primary" style={{ display: "inline-flex" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Download PDF
                  </a>
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
