import { Link } from "react-scroll";
import { MdContactMail } from "react-icons/md";
import { FaUserGraduate, FaFolder, FaUser, FaHome } from "react-icons/fa";

export function Nav() {
  return (
    <nav id="nav">
      <ul className="nav-container">
        {/* HOME */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active-link"
        >
          <li className="nav-item">
            <span className="links">
              <FaHome />
            </span>
            <span className="links-text">
              Home
            </span>
          </li>
        </Link>
        {/* ABOUT */}
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active-link"
        >
          <li className="nav-item">
            <span className="links">
              <FaUser />
            </span>
            <span className="links-text">
             About
            </span>
          </li>
        </Link>
        {/* PROJECTS */}
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          activeClass="active-link"
        >
          <li className="nav-item">
            <span className="links">
              <FaFolder />
            </span>
            <span className="links-text">
              Projects
            </span>
          </li>
        </Link>
        {/* EDUCATION */}
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          activeClass="active-link"
        >
          <li className="nav-item">
            <span className="links">
              <FaUserGraduate />
            </span>
            <span className="links-text">
              Certifications
            </span>
          </li>
        </Link>
        {/* CONTACT */}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          activeClass="active-link"
        >
          <li className="nav-item">
            <span className="links">
              <MdContactMail />
            </span>
            <span className="links-text">
              Contact
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}