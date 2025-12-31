import React, { useState } from 'react';
import './UtilityPages.css';

const Grievance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grievanceType: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for submitting your grievance. We will address it within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      grievanceType: '',
      description: ''
    });
  };

  return (
    <div className="utility-page">
      <div className="page-hero">
        <div className="container">
          <h1>Grievance Redressal</h1>
          <p>We're here to help resolve your concerns</p>
        </div>
      </div>

      <div className="container">
        <div className="content-section">
          <section>
            <h2>About Grievance Redressal</h2>
            <p>
              At Teztecch Buzz, we are committed to addressing your concerns promptly and fairly. 
              If you have any grievances related to our content, services, or any other matter, 
              please use the form below to submit your complaint.
            </p>
          </section>

          <section>
            <h2>Grievance Officer</h2>
            <div className="officer-info">
              <p><strong>Name:</strong> [Grievance Officer Name]</p>
              <p><strong>Email:</strong> <a href="mailto:grievance@teztecchbuzz.in">grievance@teztecchbuzz.in</a></p>
              <p><strong>Phone:</strong> +91-XXX-XXX-XXXX</p>
              <p><strong>Response Time:</strong> Within 24-48 hours</p>
            </div>
          </section>

          <section>
            <h2>Submit Your Grievance</h2>
            <form onSubmit={handleSubmit} className="grievance-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="grievanceType">Type of Grievance *</label>
                <select
                  id="grievanceType"
                  name="grievanceType"
                  value={formData.grievanceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select type</option>
                  <option value="content">Content Related</option>
                  <option value="privacy">Privacy Concern</option>
                  <option value="technical">Technical Issue</option>
                  <option value="copyright">Copyright Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please provide detailed information about your grievance..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Submit Grievance</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Grievance;
