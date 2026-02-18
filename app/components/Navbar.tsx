export default function Navbar({ activePage }: { activePage: string }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/images/flogo.png"
            alt="NIF - Nattraja Incubation Forum"
            className="logo-nif"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link${activePage === "home" ? " active" : ""}`} href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle${activePage === "about" ? " active" : ""}`} href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/about">About NIF</a></li>
                <li><a className="dropdown-item" href="/about/director">About Director</a></li>
                <li><a className="dropdown-item" href="/about/ceo">About CEO</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/about/innovation-voucher-programme">Innovation Voucher Programme</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={`nav-link${activePage === "events" ? " active" : ""}`} href="/events">Events</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${activePage === "facilities" ? " active" : ""}`} href="/facilities">Our Facilities</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${activePage === "incubatees" ? " active" : ""}`} href="/incubatees">Our Incubatees</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${activePage === "policies" ? " active" : ""}`} href="/policies">Policies</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${activePage === "contact" ? " active" : ""}`} href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <a
          href="https://www.jkkn.ac.in"
          className="d-none d-lg-block"
          target="_blank"
        >
          <img src="/images/logo.png" alt="JKKN Group" className="logo-jkkn" />
        </a>
      </div>
    </nav>
  );
}
