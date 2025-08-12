import React from 'react';
import '../certificate.css';

const Certificates = () => {
return (
    <div className="certificates" id='certificates'>
        <h1>My Certificates</h1>
        <div className="certificates-grid">
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/smartbridge.png"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Full Stack Development(MERN)</h2>
                    <p>Issued by SmartBridge</p>
                </div>
                <a href={"/certificates/Certificate - SmartInternz.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/excelr logo.png"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Full Stack Development(MERN)</h2>
                    <p>Issued by Excelr</p>
                </div>
                <a href={"/certificates/EXCELR-2002356-Pacha Kranthi Kumar.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/udemy logo.jpeg"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Nodejs</h2>
                    <p>Issued by Udemy</p>
                </div>
                <a href={"/certificates/nodejs certificate.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/udemy logo.jpeg"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Mastering Web Design</h2>
                    <p>Issued by Udemy</p>
                </div>
                <a href={"/certificates/web design certificate-udemy.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/udemy logo.jpeg"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Mastering Python</h2>
                    <p>Issued by Udemy</p>
                </div>
                <a href={"/certificates/python certificate-udemy.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/nptel.png"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>The Joy of Computing using Python</h2>
                    <p>Issed by NPTEL</p>
                </div>
                <a href={"/certificates/The Joy of Computing using Python.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/codio.png"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Java programming Basic skills</h2>
                    <p>Issued by Codio</p>
                </div>
                <a href={"/certificates/Codio java1.1 Certificate _ edX.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/codio.png"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Java Programming Intermediate Concepts</h2>
                    <p>Issued by Codio</p>
                </div>
                <a href={"/certificates/Codio java2.1 Certificate _ edX.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
            <div className="certificate-card">
                <div className="certificate-image">
                    <img
                        src="./src/assets/cisco.png"
                        alt="logo"
                    />
                </div>
                <div className='certificate-info'>
                    <h2>Introduction to CyberSecurity</h2>
                    <p>Issued by Cisco</p>
                </div>
                <a href={"/certificates/cisco certificate.pdf"} target="_blank" rel="noopener noreferrer" className='certificate-button'>
                        view certificate
                </a>
            </div>
        </div>
    </div>
)
}

export default Certificates