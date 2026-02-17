export default function CtaFooter() {
  return (
    <section className="nif-cta-section nif-section-padding" id="nif-contact" aria-label="Contact NIF">
      <div className="nif-cta-aurora">
        <div className="cta-glow-1"></div>
        <div className="cta-glow-2"></div>
      </div>
      <div className="nif-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="nif-cta-grid">
          <div className="nif-cta-content nif-reveal">
            <div className="nif-section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              Get In Touch
            </div>
            <h2 className="nif-section-title nif-reveal nif-reveal-delay-1">Ready to Transform Your <span className="nif-gradient-text">Healthcare Innovation</span>?</h2>
            <p className="nif-reveal nif-reveal-delay-2">Whether you&apos;re a student with a breakthrough idea, a researcher seeking clinical validation, or a startup ready to scale — NIF&apos;s bioconvergence ecosystem is built for you. Join India&apos;s first healthcare-focused incubation centre and turn your vision into impact.</p>
            <div className="nif-cta-buttons nif-reveal nif-reveal-delay-3">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3g7Z8FUm_irN58qYU4qyfp_RgmFWjIPT2OB0F9REDyDeGog/viewform?vc=0&c=0&w=1&flr=0" className="nif-btn nif-btn-primary" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                Apply for Incubation
              </a>
              <a href="/contact" className="nif-btn nif-btn-glass">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                Schedule a Visit
              </a>
            </div>
          </div>
          <div className="nif-cta-contact nif-reveal nif-reveal-delay-2">
            <div className="nif-cta-contact-item">
              <div className="nif-cta-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <h4>Address</h4>
                <p>NIF, JKKN Institutions, Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu — 638183</p>
              </div>
            </div>
            <div className="nif-cta-contact-item">
              <div className="nif-cta-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:nif@jkkn.ac.in">nif@jkkn.ac.in</a></p>
              </div>
            </div>
            <div className="nif-cta-contact-item">
              <div className="nif-cta-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+919688232957">+91 9688232957</a></p>
              </div>
            </div>
            <div className="nif-cta-contact-item">
              <div className="nif-cta-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
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
  );
}
