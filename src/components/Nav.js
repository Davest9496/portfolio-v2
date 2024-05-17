import { Link } from "react-scroll";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { PiStudent, PiFolderSimple } from "react-icons/pi";

export function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-container">
        {/* HOME */}
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <li className="nav-item">
            <span className="links">
              <RiHome2Line />
            </span>
            <span className="links-text">
              <a href="##">Home</a>
            </span>
          </li>
        </Link>
        {/* ABOUT */}
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <li className="nav-item">
            <span className="links">
              <AiOutlineUser />
            </span>
            <span className="links-text">
              <a href="##">About</a>
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
        >
          <li className="nav-item">
            <span className="links">
              <PiFolderSimple />
            </span>
            <span className="links-text">
              <a href="##">Projects</a>
            </span>
          </li>
        </Link>
        {/* EDUCATION */}
        <Link
          to="certifications"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <li className="nav-item">
            <span className="links">
              <PiStudent />
            </span>
            <span className="links-text">
              <a href="##">Certifications</a>
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
        >
          <li className="nav-item">
            <span className="links">
              <RiContactsBookLine />
            </span>
            <span className="links-text">
              <a href="##">Contact Me</a>
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

// export function NavItem({ children }) {
//   return (
//     <li className="nav-item">
//       {/* <span className="links">
//         <BsHouse />
//       </span> */}
//       <span className="links-text">
//         <a href="##">{children}</a>
//       </span>
//     </li>
//   );
// }
