import React, { useEffect } from "react";
import "./styles.css";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";

function App() {
  useEffect(() => {
    // Set initial position of the light effect to the center of the viewport
    document.body.style.setProperty("--x", `${window.innerWidth / 2}px`);
    document.body.style.setProperty("--y", `${window.innerHeight / 2}px`);

    const updateBackground = (e) => {
      document.body.style.setProperty("--x", `${e.pageX - 10}px`);
      document.body.style.setProperty("--y", `${e.pageY - 10}px`);
    };

    document.addEventListener("mousemove", updateBackground);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousemove", updateBackground);
    };
  }, []);

  return (
    <div className="container">
      <div className="container-left">
        <Info />
      </div>
      <div className="container-right">
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
