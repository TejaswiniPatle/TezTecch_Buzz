import React from 'react';
import './UtilityPages.css';

const TermsOfUse = () => {
  return (
    <div className="utility-page">
      <div className="page-hero">
        <div className="container">
          <h1>Terms of Use</h1>
          <p>Last updated: December 29, 2025</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Teztecch Buzz, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to these terms, 
              please do not use our service.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on Teztecch Buzz's 
              website for personal, non-commercial use only. This license shall automatically 
              terminate if you violate any of these restrictions.
            </p>
          </section>

          <section>
            <h2>3. User Content</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Any content you post or submit to our platform</li>
              <li>Ensuring your content does not violate any laws or regulations</li>
              <li>Ensuring you have the right to post the content you submit</li>
              <li>Not posting harmful, offensive, or inappropriate content</li>
            </ul>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, 
              is the property of Teztecch Buzz or its content suppliers and is protected by 
              copyright laws. Unauthorized use of any content may violate copyright, trademark, 
              and other laws.
            </p>
          </section>

          <section>
            <h2>5. Disclaimer</h2>
            <p>
              The materials on Teztecch Buzz's website are provided "as is". We make no 
              warranties, expressed or implied, and hereby disclaim and negate all other 
              warranties including, without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section>
            <h2>6. Limitations</h2>
            <p>
              In no event shall Teztecch Buzz or its suppliers be liable for any damages 
              arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2>7. Modifications</h2>
            <p>
              Teztecch Buzz may revise these terms of use at any time without notice. By using 
              this website, you agree to be bound by the current version of these terms.
            </p>
          </section>

          <section>
            <h2>8. Contact Information</h2>
            <p>
              For questions about these Terms of Use, please contact us at:
              <br />
              Email: <a href="mailto:legal@teztecchbuzz.in">legal@teztecchbuzz.in</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
