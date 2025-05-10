import './ExpertiseCard.css';

// eslint-disable-next-line react/prop-types
const ExpertiseCard = ({ title, description, icon }) => {
  return (
    <div className="expertise-card">
      <div className="expertise-icon"><img src={icon} alt="" className='experties-icon'/></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ExpertiseCard;