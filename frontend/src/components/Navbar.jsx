import React, { useState } from "react";
import "./Navbar.css"; // Import your new CSS file here
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo / Brand */}
        <div className="logo-container nav-logo">MyInfo</div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            My Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a
            href="#contact"
            className="nav-cta"
          >
            Contact Me
          </a>
        <ThemeToggle></ThemeToggle>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close Icon (X)
            <svg
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-dropdown">
          <div className="toggle">
          <ThemeToggle></ThemeToggle>
          </div>
          <a href="#home" className="mobile-link">
            Home
          </a>
          <a href="#about" className="mobile-link">
            About
          </a>
          <a href="#skills" className="mobile-link">
            My Skills
          </a>
          <a href="#projects" className="mobile-link">
            Projects
          </a>
          <a
            href="#contact"
            className="nav-cta mobile-cta"
            >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
