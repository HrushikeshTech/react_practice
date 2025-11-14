import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">📬 Contact Me</h1>
      <p className="contact-subtitle">Feel free to reach out through any platform below!</p>

      <div className="contact-links">

        <a href="mailto:hrushikesh1200@gmail.com" className="contact-card">
          <span className="icon">📧</span>
          <div>
            <h3>Email</h3>
            <p>Send me a message</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/hrushikesh-nandi-2395562b3/"
          target="_blank"
          className="contact-card"
        >
          <span className="icon">💼</span>
          <div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </div>
        </a>

        <a
          href="https://github.com/HrushikeshTech/react_practice.git"
          target="_blank"
          className="contact-card"
        >
          <span className="icon">🐙</span>
          <div>
            <h3>GitHub</h3>
            <p>View my projects</p>
          </div>
        </a>

      </div>
    </div>
  );
}
