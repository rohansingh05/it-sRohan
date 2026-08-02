import React from 'react';
import './Skills.css';


const Skills = () => {
  // Web Development skills formatted as Shield Badges (Added Git and GitHub)
  const webSkills = [
    { id: 'html', name: 'HTML5', bgColor: '#c165413a' },
    { id: 'css', name: 'CSS3', bgColor: '#1573b64a' },
    { id: 'js', name: 'JAVASCRIPT', bgColor: '#3233305a' },
    { id: 'react', name: 'REACT', bgColor: '#20232a63' },
    { id: 'tailwind', name: 'TAILWINDCSS', bgColor: '#06b5d463' },
    { id: 'node', name: 'NODE.JS', bgColor: '#20d42f51' },
    { id: 'express', name: 'EXPRESS.JS', bgColor: '#49474775' },
    { id: 'mongodb', name: 'MONGODB', bgColor: '#2abe0c9a' },
    { id: 'git', name: 'GIT', bgColor: '#f04e3261' },
    { id: 'github', name: 'GITHUB', bgColor: '#1817176e' },
  ];

  // Programming & CS Skills (Git & GitHub moved to Web Dev)
  const programmingSkills = [
    { id: 'c', name: 'C' },
    { id: 'cpp', name: 'C++' },
    { id: 'dsa', name: 'Data Structures & Algorithms' },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        {/* Section Header */}
        <div className="skills-header">
          <span className="section-badge">Capabilities</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A combination of front-end web engineering, core computer science fundamentals, and problem-solving.
          </p>
        </div>

        <div className="skills-grid">
          
          {/* Left Side: Web Development Shield Badges */}
          <div className="skill-card">
            <h3 className="category-title">
              <span className="title-accent"></span>
              Web Development
            </h3>
            <div className="shield-badges-wrap">
              {webSkills.map((skill) => (
                <div 
                  className="shield-badge-item" 
                  key={skill.id} 
                  style={{ backgroundColor: skill.bgColor }}
                >
                  {/* <span className="shield-icon">{skill.icon}</span> */}
                  <span className="shield-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Programming & CS Fundamentals */}
          <div className="skill-card">
            <h3 className="category-title">
              <span className="title-accent"></span>
              Programming & Core CS
            </h3>
            <div className="badges-container">
              {programmingSkills.map((skill) => (
                <div className="skill-badge" key={skill.id}>
                  <span className="badge-dot"></span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;