import './Footer.css';
import Logo from '../Header/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top"></div>
      <div className="container footer-container">
        <div className="footer-section about-section">
          <Logo src="/logo-f.svg" alt="Footer Logo" className="footer-logo-image" />
          <p className="footer-description">
            Yuva Upnishad Publication is dedicated to publishing insightful and educational content that enriches minds and inspires growth.
          </p>
        </div>
        
        <div className="footer-section links-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/publication">Our Publication</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="f-contact-info">
            <li>
              <img src="/icons/map-marker.svg" alt="Location" className="contact-icon" />
              <address>
                2nd Floor, Ankur Shopping Centre,<br/>
                Gujarat Gas Cir, opp. Vijay Dairy,<br/>
                Maitry Society, Muktanand Nagar,<br/>
                Adajan, Surat, Gujarat 395009
              </address>
            </li>
            <li>
              <img src="/icons/contact.svg" alt="Location" className="contact-icon" />
              <a href="tel:9909449289">+91 99094 49289</a>
            </li>
            <li>
              <img src="/icons/envelop.svg" alt="Location" className="contact-icon" />
              <a href="mailto:Yuvaupnishadpublication@gmail.com">
                Yuvaupnishadpublication@gmail.com
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section hours-section">
          <h3 className="footer-title">Working Hours</h3>
          <ul className="working-hours">
            <li>
              <span className="day">Monday - Saturday:</span>
              <span className="hours">7:00 AM - 9:00 PM</span>
            </li>
            <li>
              <span className="day">Sunday:</span>
              <span className="hours">7:00 AM - 4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {currentYear} Yuvaupnishad Publication. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
