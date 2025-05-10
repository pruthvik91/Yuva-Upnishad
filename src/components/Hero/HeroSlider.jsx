import Slider from 'react-slick';

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // use fade instead of slide
    arrows: false,
    pauseOnHover: false
  };

  return (
    <Slider {...settings} className="books-slider">
      <div><img src="/books.png" className="books-image" alt="Slide 1" /></div>
      <div><img src="/books2.png" className="books-image" alt="Slide 2" /></div>
      <div><img src="/books.png" className="books-image" alt="Slide 3" /></div>
    </Slider>
  );
};
export default HeroSlider;