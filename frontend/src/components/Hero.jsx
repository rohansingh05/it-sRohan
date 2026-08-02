import React from 'react';
import './Hero.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        
        <h1 className="hero-title">
          Hi, I'm <span>Rohan</span>.
        </h1>
        
        <h2 className="hero-subtitle">
          Mern stack Developer & programmer
        </h2>
        
        <p className="hero-description">
          I specialize in building dynamic, full-stack web applications using the MERN stack. Driven by a strong foundation in Data Structures and Algorithms, I write clean, efficient code to solve complex problems.
        </p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
          <a 
            href="/Rohan_Resume.pdf" 
            download 
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>

      </div>
      <div className="hero-socials">
          
          {/* GitHub Icon */}
          <a href="https://github.com/rohansingh05" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub className='social-icon' />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://linkedin.com/in/r0han-s1ngh" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin className='social-icon' />
          </a>

        </div>
    </section>
  );
};

export default Hero;