import React, { useEffect, useRef } from "react";
import "./About.css";
import { FaGraduationCap } from "react-icons/fa";

// Import PNG logos
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/js.png";
import bootstrapLogo from "../assets/skills/bootstrap.png";
import reactLogo from "../assets/skills/react.png";
import figmaLogo from "../assets/skills/figma.png";
import gitLogo from "../assets/skills/git.png";

// Import your Lottie JSON file
import developerAnimation from "../assets/developer skills.json";

// Import Lottie Player
import Lottie from "lottie-react";

const About = () => {
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add("slide-in-left");
          animationRef.current.classList.add("slide-in-right");
        } else {
          contentRef.current.classList.remove("slide-in-left");
          animationRef.current.classList.remove("slide-in-right");
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (animationRef.current) observer.observe(animationRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (animationRef.current) observer.unobserve(animationRef.current);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content" ref={contentRef}>
          <h2>About Me</h2>
          <p>
            Hi, I’m <span className="highlight">Naman Mevada</span>, a passionate Frontend Developer focused on building responsive, user-friendly web applications.
          </p>

          {/* Education Section */}
          <div className="education">
            <h2>Education</h2>
            <div className="edu-card">
              <h3>
                <FaGraduationCap className="grad-icon" /> B.Tech in Information Technology
              </h3>
              <h4>@ Sankalchand Patel College of Engineering, Visnagar</h4>
              <span className="duration">Oct 2021 - Apr 2025</span>
              <p>Successfully completed my B.Tech with a <strong>7.3 CGPA</strong>.</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h2>My Skills</h2>
            <div className="skills-icons">
              <img src={htmlLogo} alt="HTML" title="HTML5" className="skill-logo" />
              <img src={cssLogo} alt="CSS" title="CSS3" className="skill-logo" />
              <img src={jsLogo} alt="JavaScript" title="JavaScript" className="skill-logo" />
              <img src={bootstrapLogo} alt="Bootstrap" title="Bootstrap" className="skill-logo" />
              <img src={reactLogo} alt="React" title="React" className="skill-logo" />
              <img src={figmaLogo} alt="Figma" title="Figma" className="skill-logo" />
              <img src={gitLogo} alt="Git" title="Git" className="skill-logo" />
            </div>
          </div>
        </div>

        {/* Right Lottie Animation */}
        <div className="about-animation" ref={animationRef}>
          <div className="animation-box">
            <Lottie 
              animationData={developerAnimation} 
              loop={true} 
              autoplay={true} 
              style={{ width: "300px", height: "300px" }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
