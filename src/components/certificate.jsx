import React from 'react';
import '../certificate.css';
import smartbridge from '../assets/smartbridge.png';
import excelr from '../assets/excelr logo.png';
import udemy from '../assets/udemy logo.jpeg';
import nptel from '../assets/nptel.png';
import codio from '../assets/codio.png';
import cisco from '../assets/cisco.png';
import { logEvent } from '../analytics';

const certificatesData = [
  {
    logo: smartbridge,
    title: "Full Stack Development(MERN)",
    issuer: "SmartBridge",
    file: "/certificates/Certificate - SmartInternz.pdf"
  },
  {
    logo: excelr,
    title: "Full Stack Development(MERN)",
    issuer: "Excelr",
    file: "/certificates/EXCELR-2002356-Pacha Kranthi Kumar.pdf"
  },
  {
    logo: udemy,
    title: "Nodejs",
    issuer: "Udemy",
    file: "/certificates/nodejs certificate.pdf"
  },
  {
    logo: udemy,
    title: "Mastering Web Design",
    issuer: "Udemy",
    file: "/certificates/web design certificate-udemy.pdf"
  },
  {
    logo: udemy,
    title: "Mastering Python",
    issuer: "Udemy",
    file: "/certificates/python certificate-udemy.pdf"
  },
  {
    logo: nptel,
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    file: "/certificates/The Joy of Computing using Python.pdf"
  },
  {
    logo: codio,
    title: "Java programming Basic skills",
    issuer: "Codio",
    file: "/certificates/Codio java1.1 Certificate _ edX.pdf"
  },
  {
    logo: codio,
    title: "Java Programming Intermediate Concepts",
    issuer: "Codio",
    file: "/certificates/Codio java2.1 Certificate _ edX.pdf"
  },
  {
    logo: cisco,
    title: "Introduction to CyberSecurity",
    issuer: "Cisco",
    file: "/certificates/cisco certificate.pdf"
  }
];

const Certificates = () => {
  return (
    <div className="certificates" id='certificates'>
      <h1>My Certificates</h1>
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-image">
              <img src={cert.logo} alt={`${cert.issuer} logo`} />
            </div>
            <div className='certificate-info'>
              <h2>{cert.title}</h2>
              <p>Issued by {cert.issuer}</p>
            </div>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className='certificate-button'
              onClick={() => logEvent("Certificate", "Click", cert.title)}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates;
