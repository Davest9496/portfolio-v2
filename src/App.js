import React, { useEffect } from "react";
import "./styles.css";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Certifications } from "./components/Certifications";
import { Hero } from "./components/Hero";

// Custom hook for the light effect
function useLightEffect() {
  const [mousePosition, setMousePosition] = React.useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const updateBackground = (e) => {
      setMousePosition({ x: e.pageX - 10, y: e.pageY - 10 });
    };

    document.addEventListener("mousemove", updateBackground);

    return () => {
      document.removeEventListener("mousemove", updateBackground);
    };
  }, []);

  useEffect(() => {
    document.body.style.setProperty("--x", `${mousePosition.x}px`);
    document.body.style.setProperty("--y", `${mousePosition.y}px`);
  }, [mousePosition]);
}

function App() {
  useLightEffect();

  return (
    <div className="container">
      <Info />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
