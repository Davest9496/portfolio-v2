import { FaArrowRight } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

export function Certifications() {
  return (
    <div id="education">
      <h2 className="title">
        <span className="span-icon">
          <PiStudent />
        </span>
        Qualification
      </h2>
      <div className="eduHistory">
        <h1>To be updated shortly...</h1>
        {/* <div>
          <h3>course 1</h3>
          <p>details here</p>
          <hr/>
          <h3>course 1</h3>
          <p>details here</p>
        </div> */}
       
      </div>
      <h3 className="text-highlight">
        View Certifications{" "}
        <a
          href="https://www.credly.com/users/dave-ejezie/badges#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaArrowRight className="arrowRight" />
        </a>
      </h3>
    </div>
  );
}
