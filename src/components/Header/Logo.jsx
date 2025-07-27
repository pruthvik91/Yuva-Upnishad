import './Logo.css';

// eslint-disable-next-line react/prop-types
const Logo = ({ src = '/yuvaassets/Logo.svg', alt = 'Yuva Upnishad Publication Logo', className = 'logo-image' }) => {
  return (
    <div className="logo">
      <a href="/" className="logo-link">
        <img 
          src={src} 
          alt={alt} 
          className={className}
        />
      </a>
    </div>
  );
};

export default Logo;
