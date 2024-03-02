import { FaCopyright } from "react-icons/fa";
import { Social } from "./Social";

export function Footer() {
  return (
    <footer>
      <p className="footer">
        <div className="footer-icons">
          <Social />
        </div>
        Revised portfolio website, sketched on figma coded in Visual Studio
        Code and deployed Vercel. Built with React and vanilla CSS by yours truly. 
        Design inspired by Brittany Chang.{" "}
        <span className="copyright">
          <FaCopyright /> 2024
        </span>
      </p>
    </footer>
  );
}
