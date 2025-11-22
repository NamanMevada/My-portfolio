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
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY - 100;
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Call once on mount to set initial active state

    // Close menu when clicking outside
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#Home" onClick={() => handleNavClick("Home")}>
            NAMAN
          </a>
        </div>

        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${animate ? "animate" : ""} ${menuOpen ? "open" : ""}`}>
          {["Home", "About", "Experience", "Works", "Contact"].map((sec, index) => (
            <li key={sec} style={{ animationDelay: `${index * 0.1}s` }}>
              <a
                href={`#${sec}`}
                className={active === sec ? "active" : ""}
                onClick={() => handleNavClick(sec)}
              >
                {sec}
              </a>
            </li>
          ))}
          <li className="resume-item" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://drive.google.com/drive/u/0/folders/1s_azBj2C-pZBpCVxEMNcV9xt729Y_kJC"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu overlay */}
        <div 
          className={`menu-overlay ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;