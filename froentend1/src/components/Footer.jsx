import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About HealthCare Plus</h3>
          <p>Providing quality healthcare services with experienced doctors and modern facilities.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/doctors">Find Doctors</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📞 +1-800-HEALTH-1</p>
          <p>📧 info@healthcareplus.com</p>
          <p>📍 123 Medical Center, Healthcare City</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HealthCare Plus. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
