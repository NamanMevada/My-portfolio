import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hello, I’m <span className="highlight">Naman Mevada</span>
        </h1>

        <h2 className="typewriter-code">
          <span className="code-bracket">&lt;</span>{" "}
          <Typewriter
            words={[
              "A Passionate Web Developer",
              "Frontend Developer",
              "React.js Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />{" "}
          <span className="code-bracket">/&gt;</span>
        </h2>

        <p>
          I’m a passionate developer who specializes in building responsive and user-friendly web interfaces using React.js. I'm eager to collaborate and grow by turning ideas into clean, functional web applications!
        </p>

        <div className="btn-group">
          <a href="#Works" className="btn primary">
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/naman-mevada-a5778124a/"
            className="btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
