import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export function Social() {
  return (
    <div className="social">
      <a className="social-links" href="#git">
        <FaGithubSquare />
      </a>
      <a className="social-links" href="#linkedIn">
        <FaLinkedin />
      </a>
      <a className="social-links" href="#twitter">
        <FaTwitter />
      </a>
      <a className="social-links" href="#instagram">
        <FaInstagram />
      </a>
    </div>
  );
}
