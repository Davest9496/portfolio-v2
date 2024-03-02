import { ToolsItem } from "./ToolsItem";
import { FaLink } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export function Projects() {
  const project = [
    {
      title: "Cravings",
      desc: "Restaurant Website",
      info: `Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident,`,
      image: (
        <img
          src="/cravings.png"
          className="image"
          alt="Cravings Restaurant Website"
        />
      ),
      tools: ["HTML", "SASS"],
    },
    // ... other unique projects
  ];

  return (
    <section id="projects">
      <ul className="project">
        <h2 className="secondary-header">Projects</h2>
        {project.map((item, id) => (
          <ProjectItems items={item} key={id} />
        ))}
        <h3 className="text-highlight">
          View project archive <MdArrowOutward />
        </h3>
      </ul>
    </section>
  );
}

export function ProjectItems({ items }) {
  return (
    <li className="project-box">
      <div className="project-img">
        <figure>{items.image}</figure>
      </div>
      <div className="project-info">
        <h3 className="project-title">
          {items.title}
          <span className="title-icon">
            <FaLink />
          </span>
        </h3>
        <p className="text-highlight">{items.desc}</p>
        <p className="project-info">{items.info}</p>
        <div className="tools">
          {items.tools.map((tool, index) => (
            <ToolsItem toolItems={tool} key={index} />
          ))}
        </div>
      </div>
    </li>
  );
}
