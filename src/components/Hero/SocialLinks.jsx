import React, { useState,useEffect,useRef } from 'react';
import './SocialLinks.css';

const socialLinksData = [
  { id: 'youtube', icon: '/icons/youtube.svg', link: 'https://youtube.com/...' },
  { id: 'telegram', icon: '/icons/telegram.svg', link: 'http://t.me/...' },
  { id: 'instagram', icon: '/icons/instagram.svg', link: 'https://www.instagram.com/...' },
  { id: 'facebook', icon: '/icons/facebook.svg', link: 'https://www.facebook.com/...' },
  { id: 'whatsapp', icon: '/icons/whatsapp.svg', link: 'https://wa.me/...' }
];

const SocialLinks = () => {
  const [open, setOpen] = useState(false);
 // Close on outside click
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);
  return (
    <div className={`social-links-wrapper ${open ? 'open' : ''}`} ref={wrapperRef}>
      <div className="toggle-button" onClick={() => setOpen(prev => !prev)}>
        <img src="/icons/contact-mobile.svg" alt="toggle" />

      </div>
      <div className="social-links">
        {socialLinksData.map((social) => (
          <a key={social.id} href={social.link} className="social-link" target="_blank" rel="noreferrer">
            <img src={social.icon} alt={social.id} className="social-icon" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
