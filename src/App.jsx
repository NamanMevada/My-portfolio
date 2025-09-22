import React from "react";
import Navbar from "./components/Navbar";
import CanvasBackground from "./components/CanvasBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Works from "./pages/Works";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";


import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>



      {/* Background Canvas */}
      <CanvasBackground />

      {/* Sticky Social Icons */}
      <SocialBar />

      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <section id="Home" className="section">
          <Home />
        </section>

        <section id="About" className="section">
          <About />
        </section>

        <section id="Experience" className="section">
          <Experience />
        </section>

        <section id="Works" className="section">
          <Works />
        </section>

        <section id="Contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />

    </>
  );
}

export default App;
