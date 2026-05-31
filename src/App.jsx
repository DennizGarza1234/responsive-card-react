import React, { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    /*
      The empty dependency array means this effect runs only once
      when the component mounts. If the dependency array were omitted,
      the effect would run after every render, creating unnecessary
      event listeners and hurting performance.
    */
  }, []);

  const isMobile = windowSize.width < 768;

  const cardStyle = {
    backgroundColor: isMobile ? "#4A90E2" : "#4CAF50",
    color: "white",
    padding: "25px",
    borderRadius: "12px",
    width: isMobile ? "280px" : "450px",
    textAlign: "center",
    margin: "20px auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h2>{isMobile ? "Mobile View" : "Desktop View"}</h2>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
}

export default App;