import React, { useState } from 'react';
import './Navigation.css';

const navigationLinks = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About Us', url: '/about' },
  { id: 3, name: 'Our Books', url: '/books' },
  { id: 4, name: 'Careers', url: '/careers' },
  { id: 5, name: 'Contact us', url: '/contact' },
];

const Navigation = ({ isMenuOpen, closeMenu }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (url) => {
    setActiveLink(url);
    closeMenu();
  };

  return (
    <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        {navigationLinks.map((link) => (
          <li key={link.id} className="nav-item">
            <a 
              href={link.url} 
              className={`nav-link ${activeLink === link.url ? 'active' : ''}`} 
              onClick={() => handleLinkClick(link.url)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
