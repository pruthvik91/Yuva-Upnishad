import { useState, useEffect } from 'react'
import './HeroSlider.css'
import { allBooks } from './Book'

const HeroBookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const books = allBooks.filter(book => book.slider === 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 1000)
    return () => clearInterval(interval)
  }, [])

  const getSlideClassName = (index) => {
    const position = (index - currentIndex + books.length) % books.length
    switch (position) {
      case 0:
        return 'active'
      case 1:
        return 'next'
      case 2:
        return 'next-2'
      case books.length - 1:
        return 'prev'
      case books.length - 2:
        return 'prev-2'
      default:
        return ''
    }
  }

  return (

    <div className="slider-main-container d-flex">
    
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
              ←
            </button>
            <button className="slider-btn" onClick={nextSlide}>
              →
            </button>
          </div>
        </div>

        <div className={`book-info ${currentIndex === 0 ? 'active' : ''}`}>
          <h2>{books[currentIndex].title}</h2>
          <p>{books[currentIndex].author}</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
    <div className='hero-information'>
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
    </div>

  )
}

export default HeroBookCarousel