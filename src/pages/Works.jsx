import React from "react";
import "./Works.css";
import furneoImg from "../assets/Projects/project1.jpg";
import cloudyImg from "../assets/Projects/project2.png"; 
import portfolioImg from "../assets/Projects/project3.png";
import { FaLaptopCode } from "react-icons/fa";

const Works = () => {
  
  const projects = [
    {
      title: "Furneo",
      detail: "Have a look at a full furniture e-commerce website design",
      img: furneoImg,
      link: "https://furneo.netlify.app/",
    },
    {
      title: "CloudyBuddy",
      detail: "Have a look at simple weather forecast website with live updates",
      img: cloudyImg,
      link: "https://cloudybuddy.netlify.app/",
    },
    {
      title: "My Portfolio",
      detail: "This is my personal portfolio showcasing my projects and skills",
      img: portfolioImg,
      link: "https://yourportfolio.netlify.app/", // replace with your live link
    },
  ];

  return (
    <section id="Works" className="works">
      {/* Header with icon */}
      <div className="works-header">
        <FaLaptopCode className="works-icon" />
        <h2>My Works</h2>
      </div>

      <div className="works-container">
        {projects.map((project, index) => (
          <div className="work-card project-card" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="work-img-wrapper">
                <img src={project.img} alt={project.title} className="work-img" />
                <div className="overlay">
                  <span>Click to View</span>
                </div>
              </div>
            </a>
            <div className="work-content">
              <h3>{project.title}</h3>
              <div className="project-detail-container">
                <span className="detail-arrow">→</span>
                <p>{project.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
