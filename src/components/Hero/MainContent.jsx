import './MainContent.css';
import { Book, Award, BookOpen, GraduationCap , Heart, Target, Users } from 'lucide-react';
import {  } from 'lucide-react';
import ExpertiseCard from '../ExpertiseCard';
import Timeline from '../Timeline';

const MainContent = () => {
  return (
    <>
   <section className="expertise-section hidden-element">
        <h2>Our Expertise</h2>
        <p className="section-intro">
          Yuva Upnishad Publication is dedicated to empowering aspirants preparing for a broad spectrum of state and central government competitive examinations. With a profound understanding of examination patterns and evolving syllabi, we provide high-quality, exam-oriented study materials in both Gujarati and English.
        </p>
        
        <div className="expertise-grid">
          <ExpertiseCard 
            title="UPSC & GPSC"
            description="Comprehensive materials for Civil Services Examinations at both national and state levels."
            icon="/icons/books.svg"
          />
          <ExpertiseCard 
            title="SSC & Banking"
            description="Specialized resources for Staff Selection Commission and Banking entrance examinations."
            icon="/icons/bank.svg"
          />
          <ExpertiseCard 
            title="Police & Judicial"
            description="Tailored study guides for PSI/ASI, Police Constable, and High Court examinations."
            icon="/icons/policeman.svg"
          />
          <ExpertiseCard 
            title="Teaching & Railway"
            description="Expert materials for TET-TAT and Railway recruitment examinations."
            icon="/icons/teacher.svg"
          />
        </div>
      </section>
<section className="mission-section hidden-element">
        <div className="mission-section-container section-container reverse">
          <div className="section-content">
            <h2>Our Mission</h2>
            <div className="mission-cards">
              <div className="mission-card">
                <Target className="mission-icon" />
                <h3>Quality Education</h3>
                <p>Providing comprehensive and up-to-date study materials that meet the highest standards of educational excellence.</p>
              </div>
              <div className="mission-card">
                <Users className="mission-icon" />
                <h3>Accessibility</h3>
                <p>Making quality education resources available to all aspirants, regardless of their background or location.</p>
              </div>
            </div>
            <p className="mission-text">
              We are committed to continuously evolving our content to reflect the latest examination patterns, curriculum changes, and pedagogical innovations, ensuring our resources remain relevant, comprehensive, and effective.
            </p>
          </div>
          <div className="mission-section-image">
            <img src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Student studying" />
          </div>
        </div>
      </section>
     

      <section className="values-section hidden-element">
        <div className="section-container our-values">
          <div className="section-image our-values-img">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team collaboration" />
          </div>
          <div className="section-content">
            <h2>Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>Quality</h3>
                <p>We are committed to maintaining the highest standards in our content, ensuring accuracy, relevance, and pedagogical excellence.</p>
              </div>
              <div className="value-item">
                <h3>Accessibility</h3>
                <p>We believe in making quality education resources accessible to all aspirants, regardless of their background or circumstances.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We continuously evolve our content and delivery methods to incorporate the latest developments in education and examination patterns.</p>
              </div>
              <div className="value-item">
                <h3>Empathy</h3>
                <p>We understand the challenges faced by aspirants and design our resources with their needs and concerns in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="offerings-section">
        <div className="section-container">
          <h2>Our Offerings</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <BookOpen className="offering-icon" />
              <h3>Comprehensive Study Materials</h3>
              <p>Our publications cover subjects including Indian Polity, History, Culture, Geography, Economics, and more, based on trusted sources like GCERT and NCERT.</p>
            </div>
            <div className="offering-card">
              <Book className="offering-icon" />
              <h3>Monthly Current Affairs</h3>
              <p>Stay updated with our monthly magazine focused on Current Affairs, providing crucial insights for competitive exams.</p>
            </div>
            <div className="offering-card">
              <Award className="offering-icon" />
              <h3>Practice Resources</h3>
              <p>Access detailed explanations, previous year questions with analysis, and mock tests based on current trends.</p>
            </div>
          </div>
        </div>
      </section>
        <section className="journey-section hidden-element">
            <h2>Our Journey</h2>
            <Timeline />
        </section>
      <section className="availability-section">
        <div className="section-container">
          <h2>Availability</h2>
          <div className="availability-content">
            <div className="availability-text">
              <p>Our books are widely available across Gujarat and can be purchased through:</p>
              <ul>
                <li>E-marketplace platforms (Flipkart, Amazon)</li>
                <li>Local bookstores</li>
                <li>Our institute branches</li>
              </ul>
              <p className="highlight">Our books are ranked among the top in the competitive exam category on Amazon, offering logical analysis and covering important concepts relevant to changing exam patterns.</p>
            </div>
            <div className="availability-image">
              <img src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Books on display" />
            </div>
          </div>
        </div>
      </section>
      
      </>
  );
};

export default MainContent;