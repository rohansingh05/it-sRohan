import React from 'react';
import './Projects.css';

const Projects = () => {
  // Your project data
  const projectList = [
    {
      id: 1,
      title: "Todo Web App",
      description: "A robust task management application that allows users to seamlessly add, edit, complete, and delete daily tasks using complex React state management.",
      tech: ["React", "JavaScript", "CSS"],
      liveLink: "https://mytodo-pro.netlify.app/", // Replace '#' with your actual Vercel/Netlify link
      githubLink: "https://github.com/rohansingh05" // Replace '#' with your GitHub repo link
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "A dynamic financial tool that fetches live exchange rates from an external API, allowing users to convert global currencies accurately in real-time.",
      tech: ["React", "API Integration", "JavaScript"],
      liveLink: "#currency-converter",
      githubLink: "https://github.com/rohansingh05"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A fully responsive, custom-built portfolio designed to showcase my web development projects, technical skills, and programming background.",
      tech: ["React", "CSS Grid", "Flexbox"],
      liveLink: "#my-portfolio",
      githubLink: "https://github.com/rohansingh05"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        <div className="projects-header">
          <h2>My Projects</h2>
          <p style={{maxWidth: '600px', margin: '0 auto' }}>
            A selection of my recent work, highlighting my ability to build functional, state-driven web applications.
          </p>
        </div>

        <div className="projects-grid">
          {projectList.map((project) => (
            <div className="project-card" key={project.id}>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-btn btn-live">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-btn btn-github">
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;