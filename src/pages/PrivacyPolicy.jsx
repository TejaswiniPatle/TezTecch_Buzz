import React from 'react';
import './UtilityPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="utility-page">
      <div className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: December 29, 2025</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Teztecch Buzz. We respect your privacy and are committed to protecting 
              your personal data. This privacy policy will inform you about how we look after 
              your personal data and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul>
              <li>Identity Data: name, username or similar identifier</li>
              <li>Contact Data: email address and telephone numbers</li>
              <li>Technical Data: IP address, browser type and version, device information</li>
              <li>Usage Data: information about how you use our website and services</li>
              <li>Marketing and Communications Data: your preferences in receiving marketing</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To send you newsletters and marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data 
              from being accidentally lost, used, or accessed in an unauthorized way. We limit 
              access to your personal data to those who have a business need to know.
            </p>
          </section>

          <section>
            <h2>5. Your Legal Rights</h2>
            <p>Under data protection laws, you have rights including:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service 
              and hold certain information. You can instruct your browser to refuse all cookies 
              or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: <a href="mailto:privacy@teztecchbuzz.in">privacy@teztecchbuzz.in</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
