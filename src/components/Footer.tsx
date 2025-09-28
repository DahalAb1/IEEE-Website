import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* IEEE TXST Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-circle">
                  <span className="logo-text">IEEE</span>
                </div>
                <span className="brand-text">TXST</span>
              </div>
              <p className="footer-description">
                Empowering the next generation of engineers and technology leaders 
                at Texas State University through innovation, collaboration, and excellence.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span className="social-icon">📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">💼</span>
                </a>
                <a href="#" className="social-link" aria-label="Discord">
                  <span className="social-icon">🎮</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <span className="social-icon">⚡</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#officers">Officers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li><a href="https://ieee.org" target="_blank" rel="noopener noreferrer">IEEE.org</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">IEEE Xplore</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Student Portal</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Career Center</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Get In Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href="mailto:ieee@txst.edu">ieee@txst.edu</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span>Texas State University<br />San Marcos, TX 78666</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <div className="contact-details">
                    <span className="contact-label">Meetings</span>
                    <span>Thursdays at 6:30 PM<br />Ingram 4th floor ...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} IEEE Texas State University Student Branch. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;