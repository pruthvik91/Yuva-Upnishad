import SocialLinks from './SocialLinks';
import MainContent from './MainContent';
import './Hero.css';

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-background">
        <div className="books-overlay">
          <img 
            src="/books.png"
            alt="Slider-1"
            className="books-image"
          />
        </div>
      </div>
      <SocialLinks />
      <div className="hero-content">
        <div className="text-content">
         <h1 className="hero-title">
  <div className="line line1">Publisher of</div>
  <div className="line line2">All Competitive</div>
  <div className="line line3">Exam Books</div>
</h1>

          <p className="hero-subtitle">
            The most widely read and Popular Publication in<br />
            Gujarat for Competitive examinations.
          </p>
        </div>
      </div>
    </section>
    <MainContent />
    </>
  );
};

export default Hero;