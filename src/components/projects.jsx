import React from 'react';
import '../projects.css';
import househunt from '../assets/projects/house hunt.png';
import calculator from '../assets/projects/calculator.png';
import numbergame from '../assets/projects/number game.png';
import portfolio from '../assets/projects/portfolio.png';
import { logEvent } from '../analytics';

const projectsData = [
  {
    image: househunt,
    title: "House Hunt",
    description: "HouseHunt is a **MERN-based rental property platform** where users can browse, filter, and book houses, while owners can list and manage properties. It features **role-based access** for renters, owners, and admins with real-time booking and approval.",
    link: "https://glowing-trifle-9a1776.netlify.app/"
  },
  {
    image: calculator,
    title: "Responsive Calculator",
    description: "A responsive calculator built with **HTML, CSS, and JavaScript** that adapts seamlessly to mobile, tablet, and desktop screens. It offers a clean, user-friendly interface for performing basic arithmetic operations anytime, anywhere.",
    link: "https://calculator-eight-teal-68.vercel.app/"
  },
  {
    image: numbergame,
    title: "Number Guessing Game",
    description: "A fun and interactive **number guessing game** built with HTML, CSS, and JavaScript, where players try to guess a hidden number between 1 and 100. Features smart hints, an attempt counter, and a responsive design for all devices.",
    link: "https://number-guess-game-j45pmh4ce-pacha-kranthi-kumars-projects.vercel.app/"
  },
  {
    image: portfolio,
    title: "Portfolio",
    description: "A modern and responsive **personal portfolio website** built with HTML, CSS, JavaScript, and React, showcasing projects, skills, and certificates. Designed with a clean UI to highlight your work and demonstrate your technical expertise.",
    link: ""
  }
];

function Projects() {
  return (
    <div className='project' id='projects'>
      <h1>My Projects</h1>
      <div className='project-grid'>
        {projectsData.map((proj, index) => (
          <div className='project-container' key={index}>
            <div className='project-image'>
              <img src={proj.image} alt={proj.title} className='image' />
            </div>
            <div className='project-info'>
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
            </div>
            <div className='project-button'>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className='btn'
                onClick={() => logEvent("Project", "Click", proj.title)}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
