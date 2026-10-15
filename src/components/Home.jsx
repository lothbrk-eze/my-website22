import React from "react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiMysql,
  SiHtml5,
} from "react-icons/si";


const Home = () => {
  const experience = [
    {
      id: 1,
      role: "developer",
      company: "hood mobile app",
      period: "2025 march to present",
      description: "i am a developer at hood mobile app.",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "React", icon: <SiReact /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "HTML", icon: <SiHtml5 /> },
  ];

  const projects = [
    {
      id: 1,
      name: "hood",
      description:
        "Property rental and sales platform for the Kenyan market.House hunting app.",
      stack: "React Native · Expo · TypeScript · Flask · MySQL",
      image: "/hood.jpeg",
      link: "https://play.google.com/store/apps/details?id=com.bloom.hood&pcampaignid=web_share",
    },
    {
      id: 2,
      name: "Aircraft sale website",
      description:
        "An aircraft sale website with a React frontend and Flask backend, featuring user authentication, plane search, and sale functionality.",
      stack: "javascript · MySQL · react . flask",
      image: "/aviworldimg.jpeg",
      link: "https://aviworldskiess.netlify.app",
    },
    {
      id: 3,
      name: "flightbooking website landing page",
      description:
        "Landing page for a flight booking service with responsive design and interactive elements.",
      stack: " · CSS · html",
      image: "/htmlproject.jpeg",
      link: "https://flightbook-aviworld.netlify.app",
    },
  ];

  

  return (
    <section>
      <style>{`
        .navy-hero { background-color: #0A1F44; }
        .text-navy { color: #0A1F44; }
        .btn-navy { background-color: #0A1F44; border-color: #0A1F44; color: #fff; }
        .btn-navy:hover { background-color: #14335c; border-color: #14335c; color: #fff; }
        .card-navy-header { background-color: #0A1F44; color: #fff; }
        .border-navy { border-left: 4px solid #0A1F44; }
        .badge-navy { background-color: #0A1F44; color: #fff; border-radius: 20px; font-size: 0.95rem; padding: 8px 18px; }
        .badge-navy svg { font-size: 1.1rem; }
        .hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
        .hero-actions .btn { margin: 0 !important; }
        .project-card { height: 100%; }
        @media (max-width: 576px) {
          .hero-content { padding: 2rem 1rem !important; }
          .hero-content h1 { font-size: 2.5rem; }
          .hero-content .lead { font-size: 1.1rem; }
          .hero-actions .btn { width: 100%; }
          .mobile-section { margin-top: 3rem !important; margin-bottom: 3rem !important; }
        }
      `}</style>

      {/* Hero */}
      <div
        className="navy-hero text-white text-center d-flex align-items-center justify-content-center"
        style={{ minHeight: "65vh", backgroundImage: 'url("/cding%20image.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="hero-content p-5 rounded">
          <h1 className="display-3">Hi, I'm Ezekiel</h1>
          <p className="lead">Full-Stack Developer — mobile &amp; web</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-navy">View Projects</a>
            <a href="/contact" className="btn btn-outline-light">Get in Touch</a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container my-5 mobile-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="/profile23.jpeg"
              className="img-fluid rounded shadow"
              alt="Profile"
              style={{ width: "100%", maxHeight: "280px", objectFit: "cover" }}
            />

          </div>
          <div className="col-md-6">
            <h2 className="text-navy">About Me</h2>
            <p className="lead">
              I build full-stack mobile and web products — React Native/Expo
              on the frontend, Flask and MySQL on the backend.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="container my-5 mobile-section">
        <h2 className="text-center mb-4 text-navy">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="badge-navy d-inline-flex align-items-center gap-2"
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="container my-5 mobile-section">
        <h2 className="text-center mb-4 text-navy">Work Experience</h2>
        <div className="row">
          {experience.map((job) => (
            <div key={job.id} className="col-12 mb-3">
              <div className="card shadow p-3 border-navy">
                <div className="card-body">
                  <h5 className="card-title">{job.role} · {job.company}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{job.period}</h6>
                  <p className="card-text">{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="container my-5 mobile-section" id="projects">
        <h2 className="text-center mb-4 text-navy">Sample Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-4 mt-4">
              <div className="card shadow p-2 project-card">
              <img
                src={project.image}
                className="card-img-top"
                alt={`${project.name} screenshot`}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-header card-navy-header">
                <b>{project.name}</b>
              </div>
              <div className="card-body">
                <p>{project.description}</p>
                <p className="text-muted"><small>{project.stack}</small></p>
              </div>
              <div className="card-footer">
                <a
                  href={project.link}
                  className="btn btn-navy w-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      

     
    </section>
  );
};

export default Home;