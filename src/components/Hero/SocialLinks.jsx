import './SocialLinks.css';

const socialLinks = [
  { 
    id: 'youtube',
    icon: "/icons/youtube.svg",
    color: '#FF0000',
    link: 'https://youtube.com'
  },
  {
    id: 'telegram',
    icon: "/icons/telegram.svg",
    color: '#0088cc',
    link: 'https://t.me/yuvaupnishad'
  },
  {
    id: 'instagram',
    icon: "/icons/instagram.svg",
    color: '#E1306C',
    link: 'https://instagram.com/yuvaupnishad'
  },
  {
    id: 'facebook',
    icon: "/icons/facebook.svg",
    color: '#1877F2',
    link: 'https://facebook.com/yuvaupnishad'
  },
  {
    id: 'whatsapp',
    icon: "/icons/whatsapp.svg",
    color: '#25D366',
    link: 'https://wa.me/9904439298'
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.link}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.icon} alt={social.id} className="social-icon" />
        </a>
      ))}
    </div>
  );
};


export default SocialLinks;