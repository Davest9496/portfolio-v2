import { Link } from "react-scroll";

export function Nav() {
  return (
    <nav>
      <ul>
        {/* ABOUT */}
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <NavItem>About</NavItem>
        </Link>
        {/* EDUCATION */}
        {/* <Link
          to="education"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <NavItem>Education</NavItem>
        </Link> */}
        {/* PROJECTS */}
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <NavItem>Projects</NavItem>
        </Link>
        {/* CONTACT */}
        <Link to="contact" spy={true} smooth={true} offset={-200} duration={500}>
          <NavItem>Contact</NavItem>
        </Link>
      </ul>
    </nav>
  );
}

export function NavItem({ children }) {
  return (
    <li className="nav-item">
      <span className="links"></span>
      <span className="links-text">
        <a href="##">{children}</a>
      </span>
    </li>
  );
}