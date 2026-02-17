export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="top-contact">
          <span>
            <i className="bi bi-telephone-fill"></i> +91 9688232957
          </span>
          <span>
            <i className="bi bi-envelope-fill"></i> nif@jkkn.ac.in
          </span>
        </div>
        <div className="top-social">
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
