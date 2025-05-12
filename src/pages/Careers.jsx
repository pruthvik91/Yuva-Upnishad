import {Heart, Coffee, Users, Zap, BookOpen, Trophy, Smile } from 'lucide-react';
import './Careers.css';


const Careers = () => {
  return (
    <div className="careers-container main-container">
      <section className="careers-hero">
        <h1>Join Our Team</h1>
        <p>Help us shape the future of education</p>
      </section>

      <section className="why-join-us">
        <h2>Why Join Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <Heart className="benefit-icon" />
            <h3>Work-Life Balance</h3>
            <p>We focus on professional growth, collaboration, and a respectful work environment.</p>
          </div>
          <div className="benefit-card">
            <Coffee className="benefit-icon" />
            <h3>Learning with earning</h3>
            <p>A content developer can revise and learn various subjects on their journey of becoming government officers. Most of our content developers cracked various exams, and they are at designated posts in government.</p>
          </div>
          <div className="benefit-card">
            <Users className="benefit-icon" />
            <h3>Collaborative Culture</h3>
            <p>Work with passionate educators and innovators in a supportive team environment.</p>
          </div>
          <div className="benefit-card">
            <Zap className="benefit-icon" />
            <h3>Innovation Focus</h3>
            <p>Be part of creating cutting-edge educational solutions and methodologies.</p>
          </div>
        </div>
      </section>

      <section className="work-culture">
        <div className="culture-content">
          <div className="culture-text">
            <h2>Our Work Culture</h2>
            <div className="culture-values">
              <div className="culture-value">
                <BookOpen className="culture-icon" />
                <div>
                  <h3>Our Passion Drives Us</h3>
                  <p>At YUVA UPNISHAD PUBLICATION, we’re united by a love for books and knowledge.
Diverse, creative minds drive our success through constant innovation.</p>
                </div>
              </div>
              <div className="culture-value">
                <Trophy className="culture-icon" />
                <div>
                  <h3>A Culture of Openness & Inclusion</h3>
                  <p>We foster open, respectful communication with authors and content developers.
Our inclusive culture values equality, with a balanced gender workforce.</p>
                </div>
              </div>
              <div className="culture-value">
                <Smile className="culture-icon" />
                <div>
                  <h3>Leading with Responsibility</h3>
                  <p>As Gujarat’s leading publisher, we embrace sustainable, responsible practices.
We publish with purpose — empowering minds and protecting our planet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="culture-image">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Team collaboration" />
          </div>
        </div>
      </section>

      <section className="application-section">
  <h2>Apply Now</h2>
  <form className="application-form">
    <div className="form-group">
      <label >Full Name</label>
      <input type="text" id="fullName" name="fullName" required />
    </div>
    <div className="form-group">
      <label >Email</label>
      <input type="email" id="email" name="email" required />
    </div>
     <div className="form-group">
      <label>Select Post</label>
      <select id="post" name="post" required>
        <option value="">-- Select a Position --</option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="designer">UI/UX Designer</option>
        <option value="manager">Project Manager</option>
        <option value="intern">Intern</option>
      </select>
    </div>
    <div className="form-group">
      <label >Resume</label>
      <div className="file-input">
        <span>Upload Resume</span>
        <input type="file" id="resume" name="resume" />
      </div>
    </div>
    <div className="form-group">
      <label >Message</label>
      <textarea id="message" rows="4"></textarea>
    </div>
    <div className="form-actions">
      <button type="submit" className="submit-button">Submit</button>
    </div>
  </form>
</section>

    </div>
  );
};

export default Careers;