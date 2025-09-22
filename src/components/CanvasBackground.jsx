import React, { useEffect } from "react";
import "./CanvasBackground.css";

const CanvasBackground = () => {
  useEffect(() => {
    const canvas = document.querySelector(".canvas-2");
    const ctx = canvas.getContext("2d");

   const colorDot = [
  "rgb(81, 162, 233)",
  "rgb(81, 162, 233)",
  "rgb(255, 77, 90)",
  "rgb(255, 77, 90)",
];


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = 0.3;

    const windowSize = window.innerWidth;
    let dots;

    if (windowSize > 1600) dots = { nb: 50, array: [] };     // was 100
else if (windowSize > 1300) dots = { nb: 35, array: [] }; // was 75
else if (windowSize > 1100) dots = { nb: 25, array: [] }; // was 50
else dots = { nb: 5, array: [] };                         // was 10


    // Dot constructor
    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.2 + Math.random() * 0.4; // slow velocity
      this.vy = -0.2 + Math.random() * 0.4;
      this.radius = Math.random() * 2;
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype.create = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.colour.replace("rgb", "rgba").replace(")", ",0.8)");
      ctx.fill();
    };

    Dot.prototype.animate = function () {
      dots.array.forEach((dot) => {
        if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
        dot.x += dot.vx;
        dot.y += dot.vy;
      });
    };

    function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (dots.array.length === 0) {
        for (let i = 0; i < dots.nb; i++) dots.array.push(new Dot());
      }
      dots.array.forEach((dot) => dot.create());
      Dot.prototype.animate();
      requestAnimationFrame(createDots); // smooth animation
    }

    createDots();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return <canvas className="canvas-2" />;
};

export default CanvasBackground;
