import React from 'react';
import './SocialLinks.css';

const socialLinksData = [
  { 
    id: 'youtube',
    icon: "/icons/youtube.svg",
    link: 'https://youtube.com/playlist?list=PL_L1pBrLbhPezfUtygVKSbgdyl4pUW2x-&si=kV7T5LD7sTJ8luYZ'
  },
  {
    id: 'telegram',
    icon: "/icons/telegram.svg",
    link: 'http://t.me/YuvaUpnishadFoundation'
  },
  {
    id: 'instagram',
    icon: "/icons/instagram.svg",
    link: 'https://www.instagram.com/yuvaupnishadpublication/'
  },
  {
    id: 'facebook',
    icon: "/icons/facebook.svg",
    link: 'https://www.facebook.com/yuvaupnishadfoundation'
  },
  {
    id: 'whatsapp',
    icon: "/icons/whatsapp.svg",
    link: 'https://wa.me/+919909449289'
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links-wrapper">
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
