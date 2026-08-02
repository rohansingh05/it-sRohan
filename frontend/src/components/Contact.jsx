import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // States to manage loading and UI response messages
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const VITE_API_URL = 'https://it-srohan-4.onrender.com'

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ text: '', isError: false });

    try {
      // Replace URL with your actual backend endpoint if different
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({ text: `Thanks, ${formData.name}! Your message has been sent.`, isError: false });
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setStatusMessage({ 
          text: data.message || 'Failed to send message. Please try again later.', 
          isError: true 
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatusMessage({ 
        text: 'Unable to reach the server. Please check your connection.', 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p style={{maxWidth: '600px', margin: '0 auto' }} >
            Have a question, a project idea, or just want to say hi? Drop me a message!
          </p>
        </div>

        <div className="contact-content">
          
          {/* Left Side: Info & Socials */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for new opportunities and collaborations. Whether you have a question about my MERN stack projects, want to discuss algorithms, or just want to connect, my inbox is always open.
            </p>
            
            <div className="contact-details">
              <a href="mailto:rohan03cse@gmail.com" className="contact-link">
                <MdEmail/> rohan03cse@gmail.com
              </a>
              <a href="https://github.com/rohansingh05" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaGithub/> GitHub Profile
              </a>
              <a href="https://linkedin.com/in/r0han-s1ngh" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/> LinkedIn
              </a>
              <a href="https://instagram.com/the_smart_coder" className="contact-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram/> @the_smart_coder
              </a>
            </div>
          </div>

          {/* Right Side: The Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="form-input" 
                placeholder="Enter your name"
                required 
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-input" 
                placeholder="Enter your email"
                required 
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="form-textarea" 
                placeholder="How can I help you?"
                required 
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Response status message */}
            {statusMessage.text && (
              <p style={{ 
                marginTop: '15px', 
                color: statusMessage.isError ? '#ef4444' : '#10b981',
                fontSize: '0.95rem'
              }}>
                {statusMessage.text}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;