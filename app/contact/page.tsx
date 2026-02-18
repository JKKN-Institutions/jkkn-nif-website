import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CtaFooter from "../components/CtaFooter";
import BackToTop from "../components/BackToTop";
import NifScripts from "../NifScripts";

export const metadata: Metadata = {
  title: "Contact Us - Nattraja Incubation Forum",
  description:
    "Get in touch with Nattraja Incubation Forum (NIF) — India's first bioconvergence incubation centre. Apply for incubation, schedule a visit, or reach us at nif@jkkn.ac.in.",
};

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar activePage="contact" />

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  Contact Us
                </div>
                <h1 className="nif-reveal nif-reveal-delay-1">
                  Get In Touch With <span className="nif-line-gradient">NIF</span>
                </h1>
                <p className="nif-fac-hero-subtitle nif-reveal nif-reveal-delay-2">
                  Whether you&apos;re a student with a breakthrough idea, a researcher seeking clinical validation, or a startup ready to scale — we&apos;re here to help you begin your bioconvergence journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="nif-section-padding" style={{ background: "#ffffff" }}>
          <div className="nif-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-1" style={{ textAlign: "center" }}>
                <div className="nif-programme-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3>Our Address</h3>
                <p>Natarajapuram, NH-544 (Salem to Coimbatore), Kumarapalayam &ndash; 638183, Namakkal (DT), Tamil Nadu</p>
              </div>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-2" style={{ textAlign: "center" }}>
                <div className="nif-programme-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                </div>
                <h3>Phone Number</h3>
                <p><a href="tel:+919688232957" style={{ color: "#0b6d41" }}>+91 9688232957</a><br /><a href="tel:+919688232977" style={{ color: "#0b6d41" }}>+91 9688232977</a></p>
              </div>
              <div className="nif-programme-card nif-reveal nif-reveal-delay-3" style={{ textAlign: "center" }}>
                <div className="nif-programme-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <h3>Email Address</h3>
                <p><a href="mailto:nif@jkkn.ac.in" style={{ color: "#0b6d41" }}>nif@jkkn.ac.in</a></p>
              </div>
            </div>

            {/* CONTACT FORM + MAP */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "3rem" }}>
              {/* FORM */}
              <div className="nif-reveal">
                <div className="nif-section-badge" style={{ marginBottom: "1rem" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                  Send a Message
                </div>
                <h2 className="nif-section-title" style={{ marginBottom: "0.5rem" }}>Send Us a <span className="nif-gradient-text">Message</span></h2>
                <p style={{ marginBottom: "1.5rem", color: "#666" }}>Have a question or want to schedule a visit? Fill out the form below.</p>
                <form action="#" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      style={{ padding: "0.85rem 1.2rem", border: "1.5px solid #ddd", borderRadius: "10px", fontSize: "0.9rem", fontFamily: "inherit", outline: "none", transition: "border-color 0.3s", background: "#f9f7f2" }}
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      style={{ padding: "0.85rem 1.2rem", border: "1.5px solid #ddd", borderRadius: "10px", fontSize: "0.9rem", fontFamily: "inherit", outline: "none", transition: "border-color 0.3s", background: "#f9f7f2" }}
                    />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      style={{ padding: "0.85rem 1.2rem", border: "1.5px solid #ddd", borderRadius: "10px", fontSize: "0.9rem", fontFamily: "inherit", outline: "none", transition: "border-color 0.3s", background: "#f9f7f2" }}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      style={{ padding: "0.85rem 1.2rem", border: "1.5px solid #ddd", borderRadius: "10px", fontSize: "0.9rem", fontFamily: "inherit", outline: "none", transition: "border-color 0.3s", background: "#f9f7f2" }}
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    style={{ padding: "0.85rem 1.2rem", border: "1.5px solid #ddd", borderRadius: "10px", fontSize: "0.9rem", fontFamily: "inherit", outline: "none", transition: "border-color 0.3s", resize: "vertical", background: "#f9f7f2" }}
                  />
                  <div>
                    <button type="submit" className="nif-btn nif-btn-primary" style={{ display: "inline-flex" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* MAP */}
              <div className="nif-reveal nif-reveal-delay-2">
                <div className="nif-section-badge" style={{ marginBottom: "1rem" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Our Location
                </div>
                <h2 className="nif-section-title" style={{ marginBottom: "0.5rem" }}>Find Us on <span className="nif-gradient-text">Map</span></h2>
                <p style={{ marginBottom: "1.5rem", color: "#666" }}>Visit our campus located on NH-544, Kumarapalayam.</p>
                <div style={{ borderRadius: "12px", overflow: "hidden", border: "1.5px solid #e5e5e5", height: "380px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d77.5!3d11.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE4JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
