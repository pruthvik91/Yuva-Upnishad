import './Navigation.css';

const navigationLinks = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Careers', url: '/careers' },
  { id: 3, name: 'Gallary', url: '/gallary' },
  { id: 4, name: 'About Us', url: '/about' },
  { id: 5, name: 'Contact us', url: '/contact' },
  { id: 6, name: 'Hero Section', url: '/hero' }
];

const Navigation = ({ isMenuOpen, closeMenu }) => {
  return (
    <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        {navigationLinks.map((link) => (
          <li key={link.id} className="nav-item">
            <a 
              href={link.url} 
              className="nav-link" 
              onClick={closeMenu}
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