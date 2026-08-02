import React from 'react';
import './Footer.css';

const Footer = () => {
  // This automatically gets the current year so your footer is never outdated!
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Rohan. All rights reserved.
        </p>
        <p className="footer-text">
          Built with <span className="heart">♥</span> using <span className="footer-highlight">React</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;