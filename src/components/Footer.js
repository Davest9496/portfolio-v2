import { FaCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <p className="footer">
        Revised portfolio website built with react and Sass by your truly Dave
        Ejezie. <br />{" "}
        <span className="copyright">
          <FaCopyright /> 2023
        </span>
      </p>
    </footer>
  );
}
