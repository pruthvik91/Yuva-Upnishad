import {useState} from 'react';
import {Heart, Coffee, Users, Zap, BookOpen, Trophy, Smile } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import './Careers.css';
import { toast } from 'react-toastify';
const Careers = () => {
  const [fileName, setFileName] = useState("");
 const [loading, setLoading] = useState(false); // Add loading state
 const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const handleFileChange = (e) => {
  const file = e.target.files[0];
  const validExtensions = ['.pdf', '.doc', '.docx']; // Allowed file extensions
  const fileName = file.name.toLowerCase();
  
  // Check if file extension is valid
  const isValidExtension = validExtensions.some(ext => fileName.endsWith(ext));
  
  if (file && isValidExtension) {
    setFormData({ ...formData, resume: file });
    setFileName(file.name);  // Store file name in the state
  } else {
    // Reset file input and show error message
    e.target.value = null;
    setFileName(""); // Clear file name in case of invalid file
    alert('Please upload a valid PDF or Word document (DOC/DOCX).');
  }
};

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();
setLoading(true); 
  const formDataToSubmit = new FormData();
  formDataToSubmit.append("fullName", formData.fullName);
  formDataToSubmit.append("email", formData.email);
  formDataToSubmit.append("phone", formData.phone);
  formDataToSubmit.append("message", formData.message);
  
  // Append the resume file to FormData
  if (formData.resume) {
    formDataToSubmit.append("resume", formData.resume);  // 'resume' should match the field name in PHP
  }

  try {
    const response = await fetch("http://localhost/yuva-Upnishad%2009/backend/api/careers.php", {
      method: "POST",
      body: formDataToSubmit,
    });

    const result = await response.json();
    
    if (result.status === "success") {
      toast.success('Your application has been submitted successfully!');
    } else {
      toast.error('There was an issue with your submission. Please try again later.');
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error('An error occurred. Please check your internet connection or try again later.');
  }finally{
    setLoading(false); 
  }
};



  

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
            <h3>Learning with Earning</h3>
<p>Our content developers grow by revising key subjects—many have cleared top exams and hold government posts.</p>

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
  <form className="application-form" onSubmit={handleSubmit} encType="multipart/form-data">
    <div className="form-group">
      <label >Full Name</label>
      <input type="text" id="fullName" name="fullName" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label >Email</label>
      <input type="email" id="email" name="email" onChange={handleChange} required />
    </div>
        <div className="form-group">
    <label>Phone</label>
    <input type="tel" id="phone" name="phone" onChange={handleChange} required />
  </div>
     <div className="form-group">
      <label>Select Post</label>
      <select id="post" name="post" onChange={handleChange} required>
        <option value="">-- Select a Position --</option>
        <option value="ContentDeveloper">Content Developer</option>
        <option value="GraphicsDesigner">Graphics Designer</option>
        <option value="Proofreader">Proof reader</option>
        <option value="Translator">Translator</option>
        <option value="HR">HR</option>
        <option value="Socialmarketer">Social Media Marketer</option>
      </select>
    </div>
    <div className="form-group">
      <label >Resume</label>
      <div className="file-input">
        <span>Upload Resume</span>
        <input type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" onChange={handleFileChange} required />
         {fileName && <div>Selected file: {fileName}</div>}
      </div>
    </div>
    <div className="form-group">
      <label >Message</label>
      <textarea id="message" name="message" onChange={handleChange} rows="4" required></textarea>
    </div>
    <div className="form-actions">
      <button type="submit" className="submit-button" disabled={loading}> {loading ? (
                <span>Submitting...</span> // Or you can use a spinner here
              ) : (
                'Submit'
              )}</button>
    </div>
  </form>
</section>

    </div>
  );
};

export default Careers;