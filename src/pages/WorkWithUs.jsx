import React from 'react';
import { Link } from 'react-router-dom';
import './UtilityPages.css';

const WorkWithUs = () => {
  return (
    <div className="utility-page">
      <div className="page-hero">
        <div className="container">
          <h1>Work With Us</h1>
          <p>Join our mission to inspire positive change</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <section>
            <h2>Opportunities to Collaborate</h2>
            <p>
              There are many ways to work with Teztecch Buzz. Whether you're a content creator, 
              storyteller, photographer, or organization with a story to share, we'd love to 
              hear from you.
            </p>
          </section>

          <section>
            <h2>For Content Contributors</h2>
            <div className="opportunity-card">
              <h3>Become a Contributor</h3>
              <p>
                Share your stories, insights, and perspectives with our audience. We welcome 
                contributions from writers, photographers, and videographers who are passionate 
                about positive storytelling.
              </p>
              <ul>
                <li>Flexible contribution schedule</li>
                <li>Fair compensation for published work</li>
                <li>Byline and author profile</li>
                <li>Reach millions of readers</li>
              </ul>
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
            </div>
          </section>

          <section>
            <h2>For Organizations</h2>
            <div className="opportunity-card">
              <h3>Partnership Opportunities</h3>
              <p>
                We partner with NGOs, social enterprises, and organizations working towards 
                positive change. Let's collaborate to amplify your impact.
              </p>
              <ul>
                <li>Feature your initiatives and success stories</li>
                <li>Co-create content campaigns</li>
                <li>Reach engaged, socially-conscious audience</li>
                <li>Custom collaboration packages</li>
              </ul>
              <Link to="/advertise" className="btn-primary">Learn More</Link>
            </div>
          </section>

          <section>
            <h2>For Advertisers & Brands</h2>
            <div className="opportunity-card">
              <h3>Brand Partnerships</h3>
              <p>
                Connect with our audience through meaningful brand partnerships and 
                sponsored content that aligns with our mission.
              </p>
              <ul>
                <li>Native advertising opportunities</li>
                <li>Sponsored content series</li>
                <li>Brand campaigns with social impact</li>
                <li>Custom solutions for your brand</li>
              </ul>
              <Link to="/advertise" className="btn-primary">Advertise With Us</Link>
            </div>
          </section>

          <section>
            <h2>Join Our Team</h2>
            <p>
              Looking for a full-time opportunity? Check out our current openings and join 
              our team of passionate storytellers.
            </p>
            <Link to="/career" className="btn-secondary">View Open Positions</Link>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              Have a unique collaboration idea? We're always open to creative partnerships.
              <br /><br />
              Email: <a href="mailto:partnerships@teztecchbuzz.in">partnerships@teztecchbuzz.in</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
