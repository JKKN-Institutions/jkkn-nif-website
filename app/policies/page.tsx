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

      {/* PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h1>Policies</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Policies</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* POLICIES CONTENT */}
      <section className="inner-content">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Governance</span>
            <h2>Transparency at Our Core</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="policy-card text-center">
                <div className="policy-icon"><i className="bi bi-file-earmark-text"></i></div>
                <h6>Incubation Policy</h6>
                <a href="#" className="btn btn-nif-outline">Download PDF</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="policy-card text-center">
                <div className="policy-icon"><i className="bi bi-file-earmark-lock"></i></div>
                <h6>IP Policy</h6>
                <a href="#" className="btn btn-nif-outline">Download PDF</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="policy-card text-center">
                <div className="policy-icon"><i className="bi bi-file-earmark-check"></i></div>
                <h6>Code of Conduct</h6>
                <a href="#" className="btn btn-nif-outline">Download PDF</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="policy-card text-center">
                <div className="policy-icon"><i className="bi bi-file-earmark-ruled"></i></div>
                <h6>Grievance Policy</h6>
                <a href="#" className="btn btn-nif-outline">Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="nif-2026">
        {/* CTA FOOTER */}
        <CtaFooter />
      </div>

      <BackToTop />
      <NifScripts />
    </>
  );
}
