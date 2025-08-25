import React, { useState } from "react";
import "../navbar.css";
import { logEvent } from "../analytics"; // import GA event function

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (link) => {
    logEvent("Navbar", "Click", link); // log click event
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${open ? "show" : ""}`}>
        <a href="#about" onClick={() => handleClick("About")}>About</a>
        <a href="#skills" onClick={() => handleClick("Skills")}>Skills</a>
        <a href="#certificates" onClick={() => handleClick("Certificates")}>Certificates</a>
        <a href="#projects" onClick={() => handleClick("Projects")}>Projects</a>
        <a href="#contact" onClick={() => handleClick("Contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
