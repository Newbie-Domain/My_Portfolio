import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Seva point :', description: ' UI of  application - figma  ', link: 'https://www.figma.com/proto/KzKfNhbgtJGnGLcYKBi4L9/seva-point-UI?page-id=0%3A1&node-id=358-466&viewport=-844%2C906%2C0.08&t=BkD4Bxw0CedvnCf4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=468%3A239' },
    { title: 'E-book management system ', description: 'online book management system using  java ,spring boot, mysql , jdbc , thymeleaf ', link: '#' },
    { title: 'Help Earth', description: 'social website using HTMl5 , CSS3 , JavaScript, bootstrap', link: 'https://github.com/Newbie-Domain/HelpEarth-Website' },
  ];

  return (
    <section id="projects" style={{ background: '#fff' }}>
      <div className="container">
        <h2>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ background: '#f4f4f4', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;