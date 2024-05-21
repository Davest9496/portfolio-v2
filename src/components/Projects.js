import React from "react";
import { ToolsItem } from "./ToolsItem";
import { FaLink } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { PiFolderSimple } from "react-icons/pi";

const Projects = () => {
  const project = [
    {
      title: "Weather App",
      info: `about the weather app...`,
      image: (
        <img
          src="/weather.png"
          className="image"
          alt="8 Days Weather Forecast"
        />
      ),
      tools: ["Python", "Flask", "JavaScript", "CSS"],
    },
    {
      title: "Mean Cal",
      info: `about the meaan calculator app...`,
      image: (
        <img
          src="/mean.png"
          className="image"
          alt="8 Days Weather Forecast"
        />
      ),
      tools: ["Python", "Flask", "JavaScript", "CSS"],
    },
    {
      title: "Cravings",
      info: `Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,`,
      image: (
        <img
          src="/cravings.png"
          className="image"
          alt="Cravings Restaurant Website"
        />
      ),
      tools: ["HTML", "SASS"],
    },
  ];

  return (
    <section id="projects">
        <h2 className="title">
          <span className="span-icon">
            <PiFolderSimple />
          </span>
          Projects
        </h2>
      <ul className="project">
        {project.map((item, id) => (
          <ProjectItems items={item} key={id} />
        ))}
      </ul>
        <h3 className="text-highlight">
          View project archive <MdArrowOutward />
        </h3>
    </section>
  );
};

const ProjectItems = React.memo(function ProjectItems({ items }) {
  const { title, info, image, tools } = items;

  return (
    <li className="project-box">
      <div className="project-img">
        <figure>{image}</figure>
      </div>
      <div className="project-info">
        <h3 className="project-title">
          {title}
          <span className="title-icon">
            <FaLink />
          </span>
        </h3>
        <p className="project-info">{info}</p>
        <div className="tools">
          {tools.map((tool, index) => (
            <ToolsItem toolItems={tool} key={index} />
          ))}
        </div>
      </div>
    </li>
  );
});

export { Projects };
