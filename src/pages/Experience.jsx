import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>
        <FaBriefcase className="exp-icon" /> Work Experience
      </h2>

      <div className="exp-card">
        <h3>Softs Solution Service, Ahmedabad</h3>
        <h4>React JS Trainee</h4>
        <span className="duration">Feb 2025 – Present</span>

        <ul>
  <li>
    Learned basics of <span className="highlight">C and C++</span> to understand
    programming fundamentals and object-oriented concepts.
  </li>
  <li>
    Practiced <span className="highlight">HTML, CSS, and JavaScript</span> for
    building simple and responsive web pages.
  </li>
  <li>
    Started working with <span className="highlight">React.js</span> to develop
    user interfaces and understand component-based development.
  </li>
  <li>
    Gained exposure to writing clean code and following best practices in
    front-end development.
  </li>
</ul>

      </div>
    </section>
  );
};

export default Experience;
