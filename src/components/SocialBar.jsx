import React from "react";
import "./SocialBar.css";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="https://www.linkedin.com/in/naman-mevada-a5778124a/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/NamanMevada" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="mailto:yourmail@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialBar;
