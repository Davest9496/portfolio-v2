import "./styles.css";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";

export function App() {
  return (
    <div className="container">
      <div className="container-left">
        <Info />
      </div>
      <div className="container-right">
        <About />
        <Education/>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
