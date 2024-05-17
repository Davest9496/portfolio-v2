import React from "react";
import { ToolsItem } from "./ToolsItem";
import { FaLink } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { PiFolderSimple } from "react-icons/pi";

const Projects = () => {
  const project = [
    {
      title: "Weather App",
      desc: "8 Days Weather Forecast",
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
      desc: "A Mean Calculator",
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
      desc: "Restaurant Website",
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
      <ul className="project">
        <h2 className="title">
          <span className="span-icon">
            <PiFolderSimple />
          </span>
          Projects
        </h2>
        {project.map((item, id) => (
          <ProjectItems items={item} key={id} />
        ))}
        <h3 className="text-highlight">
          View project archive <MdArrowOutward />
        </h3>
      </ul>
    </section>
  );
};

const ProjectItems = React.memo(function ProjectItems({ items }) {
  const { title, desc, info, image, tools } = items;

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
        <p className="text-highlight">{desc}</p>
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
