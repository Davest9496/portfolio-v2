import React, { useEffect } from "react";
import "./styles.css";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
// import { Education } from "./components/Education";

// Custom hook for the light effect
function useLightEffect() {
  const [mousePosition, setMousePosition] = React.useState({ x: window.innerWidth /  2, y: window.innerHeight /  2 });

  useEffect(() => {
    const updateBackground = (e) => {
      setMousePosition({ x: e.pageX -  10, y: e.pageY -  10 });
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
      <div className="container-left">
        <Info />
      </div>
      <div className="container-right">
        <About />
        {/* <Education /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
