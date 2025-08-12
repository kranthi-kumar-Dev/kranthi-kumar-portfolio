import React from 'react'
import '../projects.css';
import househunt from '../assets/projects/house hunt.png';
import calculator from '../assets/projects/calculator.png';
import numbergame from '../assets/projects/number game.png';
import portfolio from '../assets/projects/portfolio.png';

function Projects() {
  return (
    <div className='project' id='projects'>
        <h1>My Projects</h1>
    <div className='project-grid'>
      <div className='project-container'>
        <div className='project-image'>
            <img src={househunt} alt="Project 1" className='image' />
        </div>
        <div className='project-info'>
          <h2>House Hunt</h2>
          <p>HouseHunt is a **MERN-based rental property platform** where users can browse, filter, and book houses, while owners can list and manage properties.
          It features **role-based access** for renters, owners, and admins with real-time booking and approval.
          </p> 
          </div>
        <div className='project-button'>
          <a href="https://glowing-trifle-9a1776.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn'>View Project</a>
        </div>
      </div>
      <div className='project-container'>
        <div className='project-image'>
            <img src={calculator} alt="Project 1" className='image'/>
        </div>
        <div className='project-info'>
          <h2>Responsive Calculator</h2>
          <p>A responsive calculator built with **HTML, CSS, and JavaScript** that adapts seamlessly to mobile, tablet, and desktop screens.
            It offers a clean, user-friendly interface for performing basic arithmetic operations anytime, anywhere.
          </p> 
          </div>
        <div className='project-button'>
          <a href="https://calculator-eight-teal-68.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn'>View Project</a>
        </div>
      </div>
      <div className='project-container'>
        <div className='project-image'>
            <img src={numbergame} alt="Project 1" className='image' />
        </div>
        <div className='project-info'>
          <h2>Number Guessing Game</h2>
          <p>A fun and interactive **number guessing game** built with HTML, CSS, and JavaScript, where players try to guess a hidden number between 1 and 100.
            Features smart hints, an attempt counter, and a responsive design for all devices.
          </p> 
          </div>
        <div className='project-button'>
          <a href="https://number-guess-game-j45pmh4ce-pacha-kranthi-kumars-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn'>View Project</a>
        </div>
        </div>
        <div className='project-container'>
          <div className='project-image'>
            <img src={portfolio} alt="Project 1" className='image'/>
          </div>
        <div className='project-info'>
          <h2>Portfolio</h2>
          <p>A modern and responsive **personal portfolio website** built with HTML, CSS, JavaScript, and React, showcasing projects, skills, and certificates.
                Designed with a clean UI to highlight your work and demonstrate your technical expertise.
          </p> 
          </div>
        <div className='project-button'>
          <a href="" target="_blank" rel="noopener noreferrer" className='btn'>View Project</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
