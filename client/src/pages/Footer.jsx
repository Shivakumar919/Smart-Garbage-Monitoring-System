import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">🌱 EcoBins</h2>

        <p className="footer-text">
          Smart Garbage Monitoring System for a Cleaner and Greener Environment.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/complaint">Complaint</Link>
          <Link to="/request">Collection</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <hr />

        <p className="footer-copy">
          © 2026 EcoBins. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;