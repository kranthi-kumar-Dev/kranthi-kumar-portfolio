import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Certificates from './components/certificate.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';

// Main App component

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App;
