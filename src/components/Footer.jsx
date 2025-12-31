import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribe:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>STORIES</h3>
            <ul>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/stories">Startup</Link></li>
              <li><Link to="/stories">Travel</Link></li>
              <li><Link to="/stories">Farming</Link></li>
              <li><Link to="/stories">Education</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>MORE</h3>
            <ul>
              <li><Link to="/advertise">Advertise With Us</Link></li>
              <li><Link to="/work-with-us">Work With Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use">Terms of Use</Link></li>
              <li><Link to="/grievance">Grievance</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>CONTACT</h3>
            <div className="contact-info">
              <p className="contact-label">SHARE YOUR STORY:</p>
              <a href="mailto:hello@teztecchbuzz.in" className="contact-email">hello@teztecchbuzz.in</a>
              <p className="contact-label">SEND FEEDBACK:</p>
              <a href="https://www.teztecchbuzz.in" className="contact-link" target="_blank" rel="noopener noreferrer">www.teztecchbuzz.in</a>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>WEEKLY DIGEST</h3>
            <p className="digest-text">Fill your inbox with positivity!</p>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input 
                type="text" 
                placeholder="Your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
