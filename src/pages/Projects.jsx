import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Google Earth Kart",
      description: "Google Earth Kart is a web-based video game that was created in a group for my Vanderbilt CS Senior Immersion Project. This video game uniquely incorporates Google Earth 3D rendering, allowing players to select various car models and race around Vanderbilt's campus. Demonstrates React and Websockets while providing a fun racing experience.",
      image: './img/google_earth_kart.jpg',
      tags: ["ThreeJS", "Websockets", "ReactJS"],
      githubLink: "https://github.com/vu-cs4289-25s/google_earth_kart",
      demoLink: null,
      award: "3rd Place - VU CS Immersion Showcase",
      featured: true
    },
    {
      id: 2,
      title: "Geovision Industries Website",
      description: "Created a website using a combination of AI and manual coding to meet the client’s requested features on a short timeline.",
      image: './img/geovision.jpg',
      tags: ["Web Development", "Typescript", "UI/UX Design"],
      githubLink: "https://github.com/jacfrist/geovision-hub",
      demoLink: "https://geovisionindustries.vercel.app/",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div>
      {/* Header */}
      <section className="container-section">
        <div className="container py-5">
            <div className="row">
            <div className="col-1"></div>
            <div className="col-11">
              </div>
        <h1 className="title">My Projects</h1>
        <p className="lead text-battleship-gray mx-auto" style={{ maxWidth: "800px" }}>A collection of projects I've made during my time at Vanderbilt University.</p>
        </div>
        </div>
      </section>

        <section className="container bg-white-50 rounded" style={{padding:"32px"}}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="flex flex-wrap">

            <div className="project-card">
                <span className="award">3rd Place - VU CS Immersion Showcase</span>
                <img src='./img/google_earth_kart.jpg' alt="Google Earth Kart" className="project-image" />
                <div className="project-content">
                  <h3>Google Earth Kart</h3>
                  <div className="project-tags">
                    <span className="tag">ThreeJS</span>
                    <span className="tag">WebSockets</span>
                    <span className="tag">ReactJS</span>
                  </div>
                  <p>Google Earth Kart is a web-based video game that was created in a group for my Vanderbilt CS Senior Immersion Project. This video game uniquely incorporates Google Earth 3D rendering, allowing players to select various car models and race around Vanderbilt's campus. Demonstrates React and Websockets while providing a fun racing experience.</p>
                  <div className="project-links">
                    <a href="https://github.com/vu-cs4289-25s/google_earth_kart" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <img src='./img/geovision.jpg' alt="Geovision Industries Website" className="project-image" />
                <div className="project-content">
                  <h3>Geovision Industries Website</h3>
                  <div className="project-tags">
                    <span className="tag">Web Development</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">UI/UX Design</span>
                  </div>
                  <p>Created a website using a combination of AI and manual coding to meet the client’s requested features on a short timeline.</p>
                  <div className="project-links">
                      <a href="https://geovisionindustries.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </div>
                </div>
              </div>

          </div>
        </section>
    </div>
  );
};

export default Projects;
