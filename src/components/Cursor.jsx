import React, { useEffect, useRef, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const dotRef = useRef(null);
  const borderRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Current cursor position
  const mouse = useRef({ x: 0, y: 0 });
  // Border position for trailing effect
  const borderPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse
    const moveCursor = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Mouse events
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hover effect
    const hoverTargets = document.querySelectorAll("a, button, .resume-btn");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Animate border
    const animateBorder = () => {
      borderPos.current.x += (mouse.current.x - borderPos.current.x) * 0.15;
      borderPos.current.y += (mouse.current.y - borderPos.current.y) * 0.15;

      if (borderRef.current) {
        borderRef.current.style.left = `${borderPos.current.x}px`;
        borderRef.current.style.top = `${borderPos.current.y}px`;
      }

      requestAnimationFrame(animateBorder);
    };
    animateBorder();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isClicking ? "click" : ""}`}
      ></div>
      <div
        ref={borderRef}
        className={`cursor-border ${isHovering ? "hovered" : ""}`}
      ></div>
    </>
  );
};

export default Cursor;
