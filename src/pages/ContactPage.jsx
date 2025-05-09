import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setState] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-section">
        <div className="contact-left-line"></div>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.947005268989!2d72.79886351084002!3d21.19426408041557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dd501924317%3A0xf60a4302e50025ec!2sYuva%20Upnishad%20Foundation%20and%20Publication!5e0!3m2!1sen!2sin!4v1746812132467!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <div className="info-icon location">
            <img 
            src="/icons/google-maps.svg" 
            alt="maps" 
            className="g-map contactpage-icon"
          /></div>
          <p> 2nd Floor, Ankur Shopping Centre,<br/>
                Gujarat Gas Cir, opp. Vijay Dairy,<br/>
                Maitry Society, Muktanand Nagar,<br/>
                Adajan, Surat, Gujarat 395009</p>
        </div>
        <div className="info-item">
          <div className="info-icon phone"><img 
            src="/icons/contacts.svg" 
            alt="contact" 
            className="contact contactpage-icon"
          /></div>
          <p>+91 99094 49289</p>
        </div>
        <div className="info-item">
          <div className="info-icon email"><img 
            src="/icons/envelope-closed.svg" 
            alt="envelope" 
            className="envelope contactpage-icon"
          /></div>
          <p>yuvaupnishadpublication@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;