import Timeline from '../components/Timeline';
import './Aboutus.css'; 

const AboutUs = () => {
  return (
    <div className="about-container main-container">
      <section className="aboutus" data-aos="fade-right">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <p>
           Yuva Upanishad Publication has been a beacon of excellence in the field of competitive examination book publishers that publishes highly useful books for competitive exam preparation alongside classroom education.

          </p>
          <p>
            Since 2016, it has been publishing books related to competitive exams, starting with the Current Affairs monthly magazine and expanding to over 100 books in various subjects. It has made a lasting impact on the educational landscape, reaching many students with our quality books.

          </p>
        </div>
      </section>
      <section className="aboutus" >
        <h2 className="section-title">Meet the Minds Behind the Pages</h2>
        <div className="about-content">
          <p>
            The Content Developer Team at our publication house plays a pivotal role in creating content for various subject books as per the syllabus pattern and topics of competitive examination. The team places a strong emphasis on ensuring conceptual clarity, accuracy, and thorough quality assurance to support students' learning and exam readiness.
Our proficient proofreaders meticulously examine each book for accuracy, grammar, and clarity, guaranteeing a flawless final book.

          </p>
          <p>
           Our Typing Team ensures the creation of precise and easily readable text, while our Design Team develops visually appealing layouts that enhance clarity and presentation of every book.

          </p>
          <p>
           The Management Department supervises the work, ensures efficient coordination, and guarantees the on-time delivery of each book.
          </p>
        </div>
      </section>
      {/* <section className="journey-section hidden-element" data-aos="fade-up">
      <h2>Our Journey</h2>
      <Timeline />
    </section> */}
    </div>
  );
};

export default AboutUs;
