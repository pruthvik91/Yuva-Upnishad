import Timeline from '../components/Timeline';
import './Aboutus.css'; 

const AboutUs = () => {
  return (
    <div className="about-container main-container">
      <section className="aboutus" data-aos="fade-up">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <p>
            Yuva Upanishad Publication is a prominent publication that publishes
            highly useful books for competitive exam preparation, alongside
            classroom education.
          </p>
          <p>
            Since 2016, it has been publishing books related to competitive
            exams, starting with the 'Current Affairs' series and expanding to
            over 100 books in various subjects.
          </p>
        </div>
      </section>
      <section className="aboutus" data-aos="fade-up">
        <h2 className="section-title">Meet the Minds Behind the Pages</h2>
        <div className="about-content">
          <p>
            <strong>Publication team :</strong>
          </p>
          <p>
            The Content Development Team at our publication house plays a
            critical role in maintaining academic integrity and relevance. With
            a focus on syllabus alignment, conceptual clarity, and quality
            assurance, the team ensures that each book meets the highest
            educational standards.
          </p>
          <p>
            Our skilled proof readers carefully check each book for accuracy,
            grammar, and clarity, ensuring a polished final product. Our Typing
            Team prepares accurate and easy-to-read text, and our Design Team
            creates layouts that bring clarity and visual appeal to each
            information and page.
          </p>
          <p>
            The management department oversees workflow, smooth coordination,
            and timely production, ensuring every book is delivered on time and
            to the highest standard.
          </p>
        </div>
      </section>
      <section className="aboutus" data-aos="fade-up">
        <h2 className="section-title">Our Mission</h2>
        <div className="about-content">
          <p>
            We are committed to continuously evolving our books to reflect the latest examination patterns and pedagogical innovations, ensuring our resources remain relevant, comprehensive,and effective.
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
