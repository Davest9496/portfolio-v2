import { MdArrowOutward } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

export function Certifications() {
  return (
    <div id="education" className="education">
      <h2 className="title">
        <span className="span-icon">
          <PiStudent />
        </span>
        Education
      </h2>
      <p>
        I currently studying AI Programming with Python at New City College,
        London, where I focus Deep Learning and AI development.
      </p>
      <h3 className="text-highlight">
        View certification details{" "}
        <span className="text-icon">
          <MdArrowOutward />
        </span>
      </h3>
    </div>
  );
}