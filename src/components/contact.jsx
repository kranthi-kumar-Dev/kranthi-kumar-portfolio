import React from "react";
import "../contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <h3>grab a ☕ and let’s talk</h3>
        <p>Open for Work — Let’s collaborate!</p>
      </div>
      <form
        action="https://formspree.io/f/myzpoely"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://github.com/kranthi-kumar-Dev" target="_blank" rel="noopener noreferrer">
          <img src={"./src/assets/github.png"} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/pacha-kranthi-kumar-7b1090291/" target="_blank" rel="noopener noreferrer">
          <img src={"./src/assets/linkedin.png"} alt="LinkedIn" />
        </a>
        <a href="mailto:pachakranthi@gmail.com">
          <img src={"./src/assets/email.png"} alt="Email" />
        </a>
        <a href="tel:+917702285590">
          <img src={"./src/assets/phone logo.png"} alt="Phone" />
        </a>
        <a href={"/resume/kranthi_kumar_my_2025 resume.pdf"} target="_blank" rel="noopener noreferrer">
          <img src={"./src/assets/resume logo.png"} alt="Resume" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
