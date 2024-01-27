import { FaCopyright } from "react-icons/fa";
import { Social } from "./Social";

export function Footer() {
  return (
    <footer>
      <p className="footer">
        <div className="footer-icons">
          <Social />
        </div>
        Revised portfolio website built with react and Sass by yours truly Dave
        Ejezie. <br />{" "}
        <span className="copyright">
          <FaCopyright /> 2023
        </span>
      </p>
    </footer>
  );
}
