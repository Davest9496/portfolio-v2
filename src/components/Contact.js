import Forms from "./Forms";
import { RiContactsBookLine } from "react-icons/ri";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="title">
        <span className="span-icon">
          <RiContactsBookLine />
        </span>
        Contact Me
      </h2>
      <p>
        If you're interested in working together or have any questions, feel
        free to reach out. I'm always open to researching new ideas and
        collaborations, or just a chat about tech over a cup of coffee.
      </p>
      <Forms />
    </section>
  );
}