<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
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
>>>>>>> 467e81bf48a6a487c35fb8ad401e734cd872d574
