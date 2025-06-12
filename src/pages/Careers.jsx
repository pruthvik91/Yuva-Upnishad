import { useState } from "react";
import {
  Heart,
  Coffee,
  Users,
  Zap,
  BookOpen,
  Trophy,
  Smile,
  Keyboard,
  PenLine,
  Paintbrush2,
  SpellCheck,
  Megaphone,
} from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import "./Careers.css";
import { toast } from "react-toastify";
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
    const validExtensions = [".pdf", ".doc", ".docx"]; // Allowed file extensions
    const fileName = file.name.toLowerCase();

    // Check if file extension is valid
    const isValidExtension = validExtensions.some((ext) =>
      fileName.endsWith(ext)
    );

    if (file && isValidExtension) {
      setFormData({ ...formData, resume: file });
      setFileName(file.name); // Store file name in the state
    } else {
      // Reset file input and show error message
      e.target.value = null;
      setFileName(""); // Clear file name in case of invalid file
      alert("Please upload a valid PDF or Word document (DOC/DOCX).");
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
      formDataToSubmit.append("resume", formData.resume); // 'resume' should match the field name in PHP
    }

    try {
      const response = await fetch(
        "http://localhost/yuva-Upnishad%2009/backend/api/careers.php",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Your application has been submitted successfully!");
      } else {
        toast.error(
          "There was an issue with your submission. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred. Please check your internet connection or try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="careers-container main-container">
      {/* <section className="careers-hero">
        <h1>Join Our Team</h1>
        <p>Help us shape the future of education</p>
      </section> */}

      {/* <section className="why-join-us">
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
      </section> */}
      <section>
        <h2>What Are We Looking For?</h2>
        <div className="looking-for">
        <p>
          At <strong>Yuva Upnishad Publication</strong>, we aim to be the
          ultimate support system for civil service aspirants. We're fueled by
          talent, innovation, and impactful guidance to create resources that
          give students a true edge.
        </p>
        <p>
          We're always on the lookout for passionate individuals who align with
          our values and strive for educational excellence.
        </p>
        <p>
          Keep checking this page for the latest job openings. Have questions?
          Email us at
          <a href="mailto:info@yuva-upnishad.com"> info@yuva-upnishad.com</a>.
        </p>
        </div>
      </section>

      <section className="work-culture">
        <div className="culture-content">
          <div className="culture-text">
            <h2>Work Culture At Yuva Upanishad Publication</h2>
            <div className="culture-values">
              <div className="culture-value">
                {/* <BookOpen className="culture-icon" /> */}
                <div>
                  {/* <h3>Our Passion Drives Us</h3> */}
                  <p>
                    At <strong>Yuva Upnishad Publication</strong>, We believe that our diverse experiences enrich the way we learn, teach, and grow—we believe in creating a vibrant, inclusive environment and belonging that enables us to work together through diversity and technological advancement.
                  </p>
                </div>
              </div>
              {/* <div className="culture-value">
                <Trophy className="culture-icon" />
                <div>
                  <h3>A Culture of Openness & Inclusion</h3>
                  <p>
                    We foster open, respectful communication with authors and
                    content developers. Our inclusive culture values equality,
                    with a balanced gender workforce.
                  </p>
                </div>
              </div>
              <div className="culture-value">
                <Smile className="culture-icon" />
                <div>
                  <h3>Leading with Responsibility</h3>
                  <p>
                    As Gujarat’s leading publisher, we embrace sustainable,
                    responsible practices. We publish with purpose — empowering
                    minds and protecting our planet.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="culture-image">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Team collaboration"
            />
          </div> */}
        </div>
      </section>
      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <BookOpen className="team-icon" />
            <span>Subject Experts</span>
          </div>
          <div className="team-member">
            <PenLine className="team-icon" />
            <span>Content Developer</span>
          </div>
          <div className="team-member">
            <SpellCheck className="team-icon" />
            <span>Proof Reader</span>
          </div>
          <div className="team-member">
            <Keyboard className="team-icon" />
            <span>Typist</span>
          </div>
          <div className="team-member">
            <Paintbrush2 className="team-icon" />
            <span>Graphics Designer</span>
          </div>
          <div className="team-member">
            <Megaphone className="team-icon" />
            <span>Digital Marketer</span>
          </div>
        </div>
      </section>


      <section className="application-section">
        <h2>Apply Now</h2>
        <form
          className="application-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Post</label>
            <select id="post" name="post" onChange={handleChange} required>
              <option value="">-- Select a Position --</option>
              <option value="contentdeveloper">Content Developer</option>
              <option value="graphicsdesigner">Graphics Designer</option>
              <option value="proofreader">Proof reader</option>
              <option value="translator">Translator</option>
              <option value="hr">HR</option>
              <option value="socialmediamarketer">Social Media Marketer</option>
            </select>
          </div>
          <div className="form-group">
            <label>Resume</label>
            <div className="file-input">
              <span>Upload Resume</span>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                required
              />
              {fileName && <div>Selected file: {fileName}</div>}
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={loading}>
              {" "}
              {loading ? (
                <span>Submitting...</span> // Or you can use a spinner here
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Careers;
