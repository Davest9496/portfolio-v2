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
        Self-motivated individual with a strong foundation in computer science
        principles, driven to apply my skills and knowledge in a professional
        setting and gain real-world experience with web development
        technologies. Seeking an entry-level role where I can leverage my
        technical skills, problem-solving abilities, collaborative spirit, and
        dedication to drive successful project outcomes under the guidance of
        experienced colleagues.<br/> <br/> Proficient in programming languages including
        JavaScript, React, SCSS, Python, and Flask. I have applied these skills
        in academic and personal projects, such as developing my portfolio
        website. Committed to life-long learning, I continuously seek to broaden
        my understanding of software development methodologies and best
        practices.
      </p>
      <div className="action-call">
        <button className="cta-contact">Contact Me</button>
        <button className="cta-cv">Download CV</button>
      </div>
    </section>
  );
}