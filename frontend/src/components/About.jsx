import React, { useState } from "react";
import "./About.css";

const About = () => {
  // State to track which tab is currently active
  const [activeTab, setActiveTab] = useState("education");

  // We store the content in an object to make rendering super clean
  const tabData = {
    education: {
      title: "My Academic Journey",
      content: (
        <p className="about-paragraph">
          I am currently studying at Coochbehar Government Engineering College,
          pursuing my degree in Computer Science and Engineering (CSE). My
          academic journey has built a strong foundation for my analytical and
          technical skills, preparing me for complex software development
          challenges.
        </p>
      ),
    },
    skills: {
      title: "My Technical Focus",
      content: (
        <p className="about-paragraph">
          My passion lies in technology, specifically building dynamic
          applications using the{" "}
          <span className="highlight-tech">MERN Stack</span>. I love the
          challenge of optimizing code and solving complex computational
          problems with{" "}
          <span className="highlight-tech">
            Data Structures & Algorithms (DSA)
          </span>
          .
        </p>
      ),
    },
    vision: {
      title: "My Future Goals",
      content: (
        <p className="about-paragraph">
          Ultimately, my goal is to become a{" "}
          <span className="highlight-tech">AI Software Engineer</span>. I want
          to build robust, scalable, and impactful digital experiences from the
          database straight to the browser, bridging the gap between heavy logic
          and intuitive design.
        </p>
      ),
    },
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
            <h2>About Me</h2>
            <p style={{maxWidth: '600px', margin: '0 auto' }} >
              Computer Science student and Full-Stack Developer driven to build clean, scalable web applications and solve complex algorithms.
            </p>
        </div>
        <div className="about-content">
          {/* Interactive Photo Section */}
          <div className="about-image-wrapper">
            <img src="/rohan_photo.jpeg" alt="Rohan" className="about-image" />
          </div>

          {/* Interactive Tabs Section */}
          <div className="about-text-wrapper">
            {/* Tab Navigation Buttons */}
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button
                className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Tech Focus
              </button>
              <button
                className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
                onClick={() => setActiveTab("vision")}
              >
                Vision
              </button>
            </div>

            {/* Dynamic Content Rendering based on activeTab */}
            {/* The key={activeTab} trick forces React to re-trigger the CSS fade-in animation */}
            <div className="tab-content" key={activeTab}>
              <h3>{tabData[activeTab].title}</h3>
              {tabData[activeTab].content}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
