// import { NavItem } from "./App";

export function Nav() {
  return (
    <nav>
      <ul>
        <NavItem>{"about"}</NavItem>
        <NavItem>{"projects"}</NavItem>
        <NavItem>{"contact me"}</NavItem>
      </ul>
    </nav>
  );
}

export function NavItem({ children }) {
  return (
    <>
      <li className="nav-item">
        <span className="links"></span>
        <span className="links-text">
          <a href="#about">{children}</a>
        </span>{" "}
      </li>
      <br />
    </>
  );
}
