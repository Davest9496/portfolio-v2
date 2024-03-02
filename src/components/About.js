import { MdArrowOutward } from "react-icons/md";

export function About() {
  return (
    <section id="about">
      <h2 className="secondary-header">About Me</h2>
      <p>
        I am a passionate web developer with experience in creating responsive
        and user-friendly web applications. I specialize in React and have a
        deep understanding of modern web development practices.
      </p>
      <p>
        My journey in web development started with an online course in UI/UX
        where i came in contact with basics of HTML and CSS, and I have since
        expanded my skills to include JavaScript, React, Node.js and more. I am
        always eager to learn new technologies and improve my craft.
      </p>
      <p>
        When I'm not coding, you can find me reading
        about the latest and exciting tech trends, studying 
        online to develop or acquire more soft skills, 
        or spending time with family.
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