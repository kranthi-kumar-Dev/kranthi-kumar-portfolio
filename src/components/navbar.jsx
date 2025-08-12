import React, { useState } from "react";
import "../navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#certificates" onClick={() => setOpen(false)}>Certificates</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
