import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "./analytics";
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Certificates from './components/certificate.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Initialize GA once
  }, []);

  useEffect(() => {
    logPageView(); // Track page view on route change
  }, [location]);

  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
