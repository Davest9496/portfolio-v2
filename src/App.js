import "./styles.css";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { Article } from "./components/Article";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <div className="container">
      <div className="container-left">
        <Info />
      </div>
      <div className="container-right">
        <Article />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
