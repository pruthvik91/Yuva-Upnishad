import SocialLinks from "./SocialLinks";
import MainContent from "./MainContent";
import "./Hero.css";
import "./HeroSlider.css";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { allBooks } from "./Book";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const books = allBooks.slice(0, 5);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  const getSlideClassName = (index) => {
    const position = (index - currentIndex + books.length) % books.length;
    switch (position) {
      case 0:
        return "active";
      case 1:
        return "next";
      case 2:
        return "next-2";
      case books.length - 1:
        return "prev";
      case books.length - 2:
        return "prev-2";
      default:
        return "";
    }
  };
  return (
    <>
      <section className="hero main-container">
        <div className="book-shapes">
          <div className="shape square"></div>
        </div>

        <div className="hero-carousel">
          <div className="hero-content-slider">
            <div className="slider-container">
              <div className="slider-track">
                {books.map((book, index) => (
                  <div
                    key={book.id}
                    className={`slide ${getSlideClassName(index)}`}
                  >
                    <img src={book.cover} alt={book.title} />
                  </div>
                ))}
              </div>

              <div className="slider-controls">
                <button className="slider-btn" onClick={prevSlide}>
                  <ChevronLeft size={24} />
                </button>
                <button className="slider-btn" onClick={nextSlide}>
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* <div className={`book-info ${currentIndex === 0 ? "active" : ""}`}>
              <h2>{books[currentIndex].title}</h2>
              <p>{books[currentIndex].author}</p>
              <button className="btn btn-primary">Learn More</button>
            </div> */}
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
              The most widely read and Popular Publication in
              <br />
              Gujarat for Competitive examinations.
            </p>
          </div>
        </div>
        
        {/* --- Floating SVG Icons --- */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "48px",
            height: "48px",
            opacity: 0.6,
            animation: "floatSlow 8s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 5,
          }}
          aria-hidden="true"
        >
          {/* Open Book Icon */}
          <svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="#1e40af"  stroke="#1e40af"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
          
        </div>

        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "5%",
            width: "40px",
            height: "40px",
            opacity: 0.5,
            animation: "floatFast 5s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 5,
          }}
          aria-hidden="true"
        >
          {/* Book Stack Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#1e40af"
            width="100%"
            height="100%"
          >
            <path d="M4 6h16v2H4V6zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
          </svg>
        </div>

        {/* <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "64px",
            height: "64px",
            opacity: 0.7,
            animation: "float 7s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 5,
          }}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#1e3a8a"
            width="100%"
            height="100%"
          >
            <path d="M12 2a10 10 0 0 0-7.07 17.07A10 10 0 1 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
          </svg> 
        </div>*/}
      </section>
      <MainContent />
    </>
  );
};

export default Hero;
