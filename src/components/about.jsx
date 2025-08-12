import React from 'react'
import '../about.css'
import profile from '../assets/kranthi2.jpg'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>I am Pacha Kranthi Kumar</h1>
          <p>
            I'm a Full-Stack Developer with a deep passion for coding and creating dynamic, 
            user-friendly webpages. My expertise covers the entire development process, 
            from crafting intuitive front-end interfaces to building robust and efficient 
            back-end systems. I thrive on solving problems and turning complex ideas into 
            reality through clean and effective code.
          </p>
        </div>
        <div className='about-image'>
          <img src={profile} alt="Kranthi Kumar" />
        </div>
      </div>
    </section>
  )
}

export default About
