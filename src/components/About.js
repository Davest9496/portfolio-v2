import { MdArrowOutward } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

export function About() {
  return (
    <section id="about">
      <h2 className="title">
        <span className="span-icon">
          <AiOutlineUser />
        </span>
        About Me
      </h2>
      <p>
        I am a tech enthusiast with skills in web development and data
        analytics.
      </p>
      <p>
        My journey in computer programming started with an online course in
        UI/UX where i came in contact with basics of HTML and CSS, and I have
        since expanded my programming skills to include Python, SQL, JavaScript,
        React, and more. I am always eager to learn new technologies and improve
        my craft.
      </p>
      <p>
        When I'm not coding, you can find me reading about the latest and
        exciting technology trends, studying online to develop or acquire more
        skills, or spending time with family.
      </p>
      <a
        href="/resume.pdf"
        className="text-highlight"
        aria-label="View my resume"
      >
        View my resume <MdArrowOutward />
      </a>
    </section>
  );
}