import "./MainContent.css";
import {
  Lightbulb,
  Book,
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Target,
  Users,
} from "lucide-react";
import ExpertiseCard from "../ExpertiseCard";
import Achievements from "../Achievements/Achievements";

const MainContent = () => {
  return (
    <>
      <Achievements />
      <section className="why-read-books-section">
        <h2>Why read our books?</h2>
      <div className="why-read-books-container">
        <p>
          At Yuva Upnishad Publication, our books are meticulously crafted to meet the specific requirements of a wide range of competitive examinations, catering to the diverse needs of aspirants.
        </p>
        <p>
          Our content is based on authentic and official sources, including NCERT/GCERT textbooks, Granthnirman publications, and information from national and state-level government websites as well as standard magazines etc.
        </p>
        <p>
          We offer a specially designed NCERT/GCERT book series, presented in both Descriptive format and multiple-choice questions (MCQs), providing flexibility for comprehensive learning and targeted practice.
        </p>
        <p>
          To aid quick understanding and revision—especially for prelims exams—we present important information in the form of tables, charts, and figures. These visual aids also enhance answer presentation in mains exams, making responses more structured and impressive.
        </p>
        <p>
          For subjects like Mathematics and Reasoning, we include shortcut tricks, detailed solutions, and step-by-step methods to simplify problem-solving. Our Gujarati and English grammar books offer grammar rules explained with examples.
        </p>
        <p>We also provide:</p>
        <ul>
          <li>Detailed analyses of previous years' question papers</li>
          <li>Topic-wise sub-bifurcation based on exam syllabi</li>
          <li>Exhaustive explanations, solved question banks, practice sets, and mock tests</li>
        </ul>
        <p>
          These features help aspirants understand the pattern, depth, and theme of exam questions effectively.
        </p>
        <p>
          Thousands of students have already achieved success through our comprehensive, updated, and easy-to-understand publications, making Yuva Upnishad a trusted name in the field of competitive exam preparation.
        </p>
      </div>
    </section>

      <section className="expertise-section hidden-element" data-aos="fade-up">
        <h2>Our Expertise</h2>
        <p className="section-intro">
          Yuva Upnishad Publication is dedicated to empowering aspirants
          preparing for a broad spectrum of state and central government
          competitive examinations. With a profound understanding of examination
          patterns and evolving syllabi, we provide high-quality, exam-oriented
          study materials in both Gujarati and English.
        </p>

        <div className="expertise-grid">
          <ExpertiseCard
            title="UPSC"
            description="Civil Services: IAS, IPS, IFS, IRS, IES etc."
            icon="/icons/judge.svg"
          />
          <ExpertiseCard
            title="GPSC"
            description="Class 1/2, Dy. SO, Dy. Mamlatdar, STI, PI, ACF, RFO, TDO, Civil, Mechanical Engineering etc."
            icon="/icons/books.svg"
          />
          <ExpertiseCard
            title="GSSSB"
            description="CCE (Group A & B), Revenue Talati, Forest Guard and various Technical Exams"
            icon="/icons/id-card.svg"
          /><ExpertiseCard
            title="GPSSB"
            description="Talati cum mantri , Junior Clerk, Nayab Chitnis, Mukhya Sevika, MPHW, FHW, and Gram Sevak"
            icon="/icons/people-group.svg"
          />
          <ExpertiseCard
            title="Gujarat Police Recruitment Board"
            description="PSI, ASI, Constable"
            icon="/icons/police-badge-shield.svg"
          />
          <ExpertiseCard
            title="Gujarat High Court"
            description="High Court Dy.So.,  Court Assistant, Bailiff, Peon, Driver  and more."
            icon="/icons/law.svg"
          />
          <ExpertiseCard
            title="Bank"
            description="IBPS PO/Clerk, SBI PO/Clerk, RRB Clerk, and RBI Assistant roles."
            icon="/icons/bank.svg"
          />
          <ExpertiseCard
            title="RRB"
            description="NTPC, Loco Pilot, and Group-D"
            icon="/icons/train.svg"
          />
          <ExpertiseCard
            title="Others"
            description="UGC-NET and SLET, TET/TAT/HTAT, Conductor, SSC CGL, CHSL and MTS."
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
                {/* <h3>Quality Education</h3> */}
                  <p> At Yuva Upnishad Publication, our
                  mission is to reach the last person through books, help them
                  secure a government job by reading our materials, promote a
                  long-lasting life, and encourage their valuable and ethical
                  contributions to the development of society and the nation.
                  </p>
              </div>
              {/* <div className="mission-card">
                <Users className="mission-icon" />
                <h3>Accessibility</h3>
                <p>Making quality education resources available to all aspirants, regardless of their background or location.</p>
              </div> */}
            </div>
            {/* <p className="mission-text">
              We are committed to continuously evolving our books to reflect the latest examination patterns and pedagogical innovations, ensuring our resources remain relevant, comprehensive, and effective.
            </p> */}
          </div>
          <div className="mission-section-image">
            <img
              src="/mission.png"
              alt="Student studying"
            />
          </div>
        </div>
      </section>

      <section className="vision-section hidden-element" data-aos="fade-up">
        <div className="mission-section-container section-container">
          <div className="mission-section-image">
            <img
              src="./vision.png"
              alt="Students reading books"
            />
          </div>
          <div className="section-content">
            <h2>Our Vision</h2>
            <div className="mission-cards">
              <div className="mission-card">
                <Lightbulb className="mission-icon" />
                <p>
                  At Yuva Upanishad Publication, we envision becoming a
                  cornerstone of academic empowerment. Through an expansive
                  array of publications—ranging from competitive exam books and
                  current affairs magazines to literature and regional
                  studies—we aim to foster a generation of not only
                  knowledgeable but socially responsible individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section hidden-element" data-aos="fade-up">
        <div className="section-container our-values">
          <div className="section-content">
            <h2>Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>Quality</h3>
                <p>
                  We are committed to maintaining the highest standards in our
                  content, ensuring accuracy, relevance, and pedagogical
                  excellence.
                </p>
              </div>
              <div className="value-item">
                <h3>Accessibility</h3>
                <p>
                  We believe in making quality education resources accessible to
                  all aspirants, regardless of their background or
                  circumstances.
                </p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>
                  We continuously evolve our content and delivery methods to
                  incorporate the latest developments in education and
                  examination patterns.
                </p>
              </div>
              <div className="value-item">
                <h3>Empathy</h3>
                <p>
                  We understand the challenges faced by aspirants and design our
                  resources with their needs and concerns in mind.
                </p>
              </div>
            </div>
          </div>
          <div className="section-image our-values-img">
            <img
              src="/Value.png?w=1260&h=750&dpr=1"
              alt="Team collaboration"
              width="800px"
            />
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
              <p>
                Our publication cover various subjects including Indian Polity,
                History, Culture, Geography, Economics, and more, based on
                trusted sources like GCERT, NCERT, NIOS, Tamilnadu Education
                Board curricula, Gujarat Granth Nirman Board, Authentic and
                Official websites
              </p>
            </div>
            <div className="offering-card">
              <Book className="offering-icon" />
              <h3>Monthly Current Affairs</h3>
              <p>
                Stay updated with our monthly magazine focused on Current
                Affairs, providing crucial insights for competitive exams.
              </p>
            </div>
            <div className="offering-card">
              <Award className="offering-icon" />
              <h3>Practice Resources</h3>
              <p>
                Access detailed explanations, previous year questions with
                analysis, and mock tests based on current trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="availability-section" data-aos="fade-up">
        <div className="section-container">
          <h2>Availability</h2>
          <div className="availability-content">
            <div className="availability-text">
              <p>
                Our books are widely available across Gujarat and can be purchased through various online platforms such as :
              </p>
              <ul>
                <li>
                  E-commerce platforms &nbsp;
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <a
                      href="https://www.amazon.in/storefront?me=A1HV7Z9ZMP49GP&ref_=ssf_share"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./icons/amazon.png"
                        alt="Amazon"
                        style={{ height: "20px" }}
                      />
                    </a>
                    Amazon
                  </span>
                  &nbsp;,&nbsp;
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <a href="javascript:void(0)" rel="noopener noreferrer">
                      <img
                        src="./icons/flipkart.png"
                        alt="Flipkart"
                        style={{ height: "20px" }}
                      />
                    </a>
                    Flipkart
                  </span>
                </li>
                <li> local bookstores as well as from our various branches of our institute.</li>
                <li>Additionally, some reading materials are available for free download in PDF format, providing accessible resources for students.</li>
              </ul>
              {/* className="highlight" */}
             
            </div>
            <div className="availability-image">
              <img
                src="/available.png"
                alt="Books on display"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
