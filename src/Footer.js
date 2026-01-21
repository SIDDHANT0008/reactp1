import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BNK Sattva Wellness Pvt. Ltd.</h3>
          <p>Ancient Wisdom, Modern Wellness</p>
          <p>Bringing you patented Ayurvedic formulations for holistic health and vitality.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📧 info@bnksattva.com</p>
          <p>📞 +91-XXXXXXXXXX</p>
          <p>📍 Ayurvedic Wellness Center</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <button className="social-link">🌿 Facebook</button>
            <button className="social-link">🌸 Instagram</button>
            <button className="social-link">🍃 Twitter</button>
            <button className="social-link">🌺 LinkedIn</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 BNK Sattva Wellness Pvt. Ltd. All rights reserved.</p>
        <p>Made with ❤️ for holistic wellness</p>
      </div>
    </footer>
  );
}

export default Footer;