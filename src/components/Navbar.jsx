import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setAnimate(true); // trigger animation on mount

    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      const sections = ["Home", "About", "Experience", "Works", "Contact"];
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Naman</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${animate ? "animate" : ""} ${menuOpen ? "open" : ""}`}>
        {["Home", "About", "Experience", "Works", "Contact"].map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              className={active === sec ? "active" : ""}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {sec}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
