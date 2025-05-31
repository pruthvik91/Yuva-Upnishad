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
          <svg  xmlns="http://www.w3.org/2000/svg"  width="100%"  height="100%"  viewBox="0 0 24 24"  fill="#1e40af"  stroke="#1e40af"  strokeWidth="1.536" strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
          
        </div>

        <div
          style={{
            position: "absolute",
            top: "5%",
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

        <div
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
         <svg fill="#1e40af" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#1e40af" strokeWidth="1.536"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M432.33,129.92a7.93,7.93,0,0,0-5.65-2.34h-38.1A359.67,359.67,0,0,0,392,77.74a8,8,0,0,0-8-8H128a8,8,0,0,0-8,8,360,360,0,0,0,3.43,49.86H85.32a8,8,0,0,0-8,8c0,26.33,9.85,51.85,28.49,73.81,17.38,20.48,41.63,37,70.22,47.86,12.67,14.91,27.08,26.39,42.8,33.54-1.57,47.84-24.13,82.8-31.32,92.77h-6.67a18,18,0,0,0-18,18v22.68a18,18,0,0,0,18,18H331.18a18,18,0,0,0,18-18V401.58a18,18,0,0,0-18-18h-6.57c-7.23-10.4-29.79-46.43-31.42-92.78,15.72-7.15,30.13-18.63,42.8-33.54,28.59-10.88,52.84-27.39,70.22-47.86,18.62-22,28.47-47.48,28.47-73.8v0A7.94,7.94,0,0,0,432.33,129.92ZM93.69,143.6h32.37c6.25,33.08,17.12,63,31.54,87.53C120.19,210.25,96.79,178.6,93.69,143.6Zm239.49,258v22.68a2,2,0,0,1-2,2H180.84a2,2,0,0,1-2-2V401.58a2,2,0,0,1,2-2H331.18A2,2,0,0,1,333.18,401.58Zm-126.4-18a189.48,189.48,0,0,0,27.81-87.21,85.93,85.93,0,0,0,42.86,0c2.51,39.13,18,70.56,28.08,87.22ZM282.2,278.09a71.43,71.43,0,0,1-52.39,0c-25.78-10-49.36-34.92-66.39-70.22-16.68-34.56-26.29-77.64-27.32-122.12H375.92c-1,44.48-10.64,87.56-27.32,122.12C331.57,243.16,308,268.1,282.2,278.09Zm72.22-47c14.43-24.56,25.3-54.46,31.54-87.54h32.36C415.22,178.57,391.83,210.23,354.42,231.12Z"></path></g></svg>
        </div>
      </section>
      <MainContent />
    </>
  );
};

export default Hero;
