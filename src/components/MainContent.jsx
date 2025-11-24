import React from "react";
import Lottie from "lottie-react";
import "./MainContent.css";
import animationData from "../assets/developer skills.json"; // your downloaded JSON

const MainContent = () => {
  return (
    <div className="maincontent">
      {/* Left info section */}
      <div className="info">
        <p className="p1">
          Hello, I’m Naman Mevada{" "}
          <span className="innerp">React.js Developer</span>
        </p>
        <p className="p2">
          I’m a passionate developer who specializes in building responsive
          and user-friendly web interfaces using React.js. I'm eager to
          collaborate and grow by turning ideas into clean, functional web
          applications!
        </p>
        <button className="touch">Get in Touch</button>
      </div>

      {/* Right animation section */}
      <div className="img-container">
        <Lottie
          animationData={animationData} // local JSON file
          loop={true}
          autoplay={true}
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default MainContent;
