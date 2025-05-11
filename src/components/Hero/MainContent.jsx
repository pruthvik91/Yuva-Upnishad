import './MainContent.css';
import { Book, Award, BookOpen, GraduationCap , Heart, Target, Users } from 'lucide-react';
import ExpertiseCard from '../ExpertiseCard';

const MainContent = () => {
  return (
    <>
   <section className="expertise-section hidden-element" data-aos="fade-up">
        <h2>Our Expertise</h2>
        <p className="section-intro">
          Yuva Upnishad Publication is dedicated to empowering aspirants preparing for a broad spectrum of state and central government competitive examinations. With a profound understanding of examination patterns and evolving syllabi, we provide high-quality, exam-oriented study materials in both Gujarati and English.
        </p>
        
        <div className="expertise-grid">
            <ExpertiseCard 
            title="UPSC"
            description="Civil Services: IAS, IPS, IFS, IRS, IES etc."
            icon="/icons/judge.svg"
            />
            <ExpertiseCard 
            title="GPSC"
            description="Class 1/2, Dy. SO, Dy. Mamlatdar, STI, PI, ACF, RFO, TDO, Civil, Mechanical and more."
            icon="/icons/books.svg"
            />
            <ExpertiseCard 
            title="Class 3 Exams"
            description="CCE (Group A & B), PSI, ASI, Constable, Clerk (Head Clerk, Senior Clerk, Junior Clerk, Binsachivalay, Municipal Corporation), Talati, Mukhya Sevika, Gram Sevak, Forest Guard, TET/TAT/HTAT and Conductor."
            icon="/icons/id-card.svg"
            />
            <ExpertiseCard 
            title="Judiciary"
            description="High Court Dy.So.,  Court Assistant, Bailiff, Peon, Driver  and more."
            icon="/icons/bank.svg"
            /> 
            <ExpertiseCard 
            title="Bank"
            description="IBPS PO/Clerk, SBI PO/Clerk, RRB Clerk, and RBI Assistant roles."
            icon="/icons/bank.svg"
            />
            <ExpertiseCard 
            title="SSC"
            description="SSC CGL, CHSL, and MTS"
            icon="/icons/briefcase.svg"
            />
            <ExpertiseCard 
            title="RRB"
            description="NTPC, Loco Pilot, and Group-D"
            icon="/icons/train.svg"
            />
            <ExpertiseCard 
            title="Others"
            description="MPHW, FHW, UGC-NET and SLET"
            icon="/icons/books.svg"
            />
        </div>

      </section>
    <section className="mission-section hidden-element" data-aos="fade-up">
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
     

      <section className="values-section hidden-element" data-aos="fade-up">
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
       <section className="offerings-section" data-aos="fade-up">
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
        
      <section className="availability-section" data-aos="fade-up">
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
              <p className="highlight">Our aim is to make exam preparation easier, smarter, and more accessible for each and every student. Students can prepare effectively and succeed in competitive exams.</p>
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