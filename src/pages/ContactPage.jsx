import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setState] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("fullName", formData.fullName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("mobile", formData.mobile);
    formDataToSubmit.append("city", formData.city);
    formDataToSubmit.append("message", formData.message);

    try {
      const response = await fetch("https://yuvaupnishadpublication.com//backend/api/contact.php", {
        method: "POST",
        body: formDataToSubmit
      });

      const result = await response.json();
      if (result.status === "success") {
        toast.success("Your message has been sent successfully.");
      } else {
        toast.error("There was an issue with your submission. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please check your internet connection.");
    } finally {
      setLoading(false); // Reset loading state after submission (success or failure)
    }
  };

  return (
    <div className="contact-container main-container">
      <div className="contact-content">
        <div className="contact-form-section">
          <div className="contact-left-line"></div>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name <span style={{ color: "red" }}>*</span></label>
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
                <label htmlFor="email">Email Address <span style={{ color: "red" }}>*</span></label>
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
                <label htmlFor="mobile">Mobile Number <span style={{ color: "red" }}>*</span></label>
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
                <label htmlFor="city">City <span style={{ color: "red" }}>*</span></label>
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
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? (
                <span>Loading...</span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
        
        {/* Map Section */}
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

      {/* Contact Info */}
      <div className="contact-info">
        {/* Address, Phone, and Email Info */}
      </div>
    </div>
  );
};

export default ContactPage;
