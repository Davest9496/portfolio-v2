import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiCredly } from "react-icons/si";

export function Social() {
  return (
    <div className="social">
      <a
        className="social-links"
        href="https://github.com/Davest9496"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
      <a
        className="social-links"
        href="https://www.linkedin.com/in/dave-ejezie-896798b9/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="social-links"
        href="https://twitter.com/DuEjezie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        className="social-links"
        href="https://www.instagram.com/duejezie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        className="social-links"
        href="https://www.credly.com/users/dave-ejezie/badges#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiCredly />
      </a>
    </div>
  );
}
