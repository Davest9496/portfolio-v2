import { MdArrowOutward } from "react-icons/md";

export function Education() {
  return (
    <section id="ceducation" className="education">
      <h2 className="secondary-header">Education</h2>
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
    </section>
  );
}