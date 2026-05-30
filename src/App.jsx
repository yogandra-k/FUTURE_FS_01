import "./App.css";

function App() {
  const skills = [
    "C",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Software Testing",
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive professional portfolio website built using React to showcase my skills, education, internships, projects, and contact details.",
      tech: "React, JavaScript, CSS",
    },
    {
      title: "Mini CRM System",
      description:
        "A client lead management system planned for tracking leads, updating lead status, and managing follow-up notes.",
      tech: "React, Node.js, Express, MongoDB",
    },
    {
      title: "Local Business Website",
      description:
        "A professional website project for a local business to improve online visibility, customer trust, and contact accessibility.",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">KY</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="status">Available for Internship Opportunities</p>
          <h1>
            Hi, I'm <span>Kalisetti Yogandra</span>
          </h1>
          <h2>Computer Science Undergraduate and Aspiring Software Developer</h2>
          <p className="hero-description">
            B.Tech Computer Science and Engineering student at GITAM University,
            Visakhapatnam. I am passionate about full stack development,
            problem solving, web technologies, and building practical software
            projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a
              href="https://github.com/yogandra-k"
              target="_blank"
              className="secondary-btn"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/GV2023001287/"
              target="_blank"
              className="secondary-btn"
            >
              LeetCode
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">KY</div>
          <h3>Kalisetti Yogandra</h3>
          <p>Full Stack Web Development Intern</p>
          <div className="mini-stats">
            <div>
              <h4>8.00</h4>
              <p>CGPA</p>
            </div>
            <div>
              <h4>92.1%</h4>
              <p>XII</p>
            </div>
            <div>
              <h4>99%</h4>
              <p>X</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">About Me</p>
        <h2>Building skills through real projects and continuous learning</h2>
        <p className="section-text">
          I am a Computer Science undergraduate with a strong interest in
          software development, full stack web development, and software
          testing. I enjoy learning new technologies and applying them through
          hands-on projects. My current focus is on improving my React,
          JavaScript, Java, Python, and problem-solving skills.
        </p>
      </section>

      <section className="section stats-section">
        <div className="stat-box">
          <h3>2023 - 2027</h3>
          <p>B.Tech CSE</p>
        </div>
        <div className="stat-box">
          <h3>8.00</h3>
          <p>Current CGPA</p>
        </div>
        <div className="stat-box">
          <h3>3+</h3>
          <p>Internship / Learning Experiences</p>
        </div>
        <div className="stat-box">
          <h3>10+</h3>
          <p>Technical Skills</p>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="section-label">Skills</p>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-label">Education</p>
        <h2>Academic Background</h2>
        <div className="timeline">
          <div className="timeline-card">
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>GITAM University, Visakhapatnam</p>
            <span>2023 - 2027 | CGPA 8.00</span>
          </div>
          <div className="timeline-card">
            <h3>Intermediate MPC</h3>
            <p>Ascent Junior College</p>
            <span>2023 | 92.1%</span>
          </div>
          <div className="timeline-card">
            <h3>SSC</h3>
            <p>Sri Chaitanya Techno School</p>
            <span>2021 | 99%</span>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">Experience</p>
        <h2>Internships and Learning Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Full Stack Web Development Intern</h3>
            <p>Future Interns</p>
            <span>2026</span>
            <p>
              Working on web development tasks including portfolio website, mini
              CRM system, and local business website projects.
            </p>
          </div>
          <div className="experience-card">
            <h3>Summer Internship 2026</h3>
            <p>VLED Lab, IIT Ropar</p>
            <span>2026</span>
            <p>
              Selected for a structured internship program focused on real
              open-source software and India-centric problem solving.
            </p>
          </div>
          <div className="experience-card">
            <h3>Full Stack Development Internship</h3>
            <p>InLighnX Global Pvt Ltd</p>
            <span>Completed</span>
            <p>
              Gained hands-on exposure to HTML, CSS, JavaScript, React,
              responsive web development, and frontend project workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Projects</p>
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-label">Certifications</p>
        <h2>Certifications and Achievements</h2>
        <div className="certification-card">
          <p>NPTEL Software Testing Course with 100 percent course progress</p>
          <p>Full Stack Development Internship at InLighnX Global Pvt Ltd</p>
          <p>Selected for Full Stack Web Development Internship at Future Interns</p>
          <p>Selected for Summer Internship 2026 at VLED Lab IIT Ropar</p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="section-label">Contact</p>
        <h2>Let's Connect</h2>
        <p>
          I am open to internship opportunities, software development projects,
          and learning collaborations.
        </p>

        <div className="contact-grid">
          <a href="mailto:kalisettiyogandra@gmail.com">Email</a>
          <a href="https://github.com/yogandra-k" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kalisetti-yogandra-91303a374"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/GV2023001287/" target="_blank">
            LeetCode
          </a>
        </div>
      </section>

      <footer>
        <p>Built by Kalisetti Yogandra using React</p>
      </footer>
    </div>
  );
}

export default App;