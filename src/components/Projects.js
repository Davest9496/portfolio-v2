import React from "react";
import { ToolsItem } from "./ToolsItem";
import { FaLink } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { PiFolderSimple } from "react-icons/pi";

const Projects = () => {
  const project = [
    {
      title: "Weather App",
      info: `In today's fast-paced world, staying ahead of the weather is more than just a convenience—it's a necessity. The Weather App, designed to provide an 8-day forecast, is your go-to companion for planning your week with confidence. Built with precision and user-friendliness in mind, this application leverages modern web technologies to deliver accurate and timely weather predictions right at your fingertips.`,
      image: (
        <img
          src="/weather.png"
          className="image"
          alt="8 Days Weather Forecast"
        />
      ),
      link: `https://github.com/Davest9496/weather-app.git`,
      tools: ["Python", "Flask", "JavaScript", "CSS"],
    },
    {
      title: "Mean Cal",
      info: `The Mean Calculator is designed to serve as a practical tool for anyone needing to quickly calculate averages without delving into cumbersome spreadsheets or calculators. Whether you're a student, teacher, researcher, or simply someone who needs to perform basic statistical analysis, this application offers a user-friendly interface that makes the process effortless.`,
      image: (
        <img src="/mean.png" className="image" alt="8 Days Weather Forecast" />
      ),
      link: `https://github.com/Davest9496/mean_calculator.git`,
      tools: ["Python", "Flask", "JavaScript", "CSS"],
    },
    {
      title: "Cravings",
      info: `Cravings is a restaurant website that elegantly combines HTML and SASS to offer a seamless and visually appealing online presence. Designed to reflect the upscale ambiance of the restaurant, the site provides a comprehensive view of the menu. Its minimalist design, enhanced by warm colors and high-quality images, ensures a luxurious browsing experience across all devices. The use of SASS for styling allows for efficient maintenance and scalability, while HTML structures the content for optimal usability and SEO. Cravings exemplifies how simplicity and sophistication can harmonize in web development, creating an engaging platform that mirrors the restaurant's commitment to quality and innovation.`,
      image: (
        <img
          src="/cravings.png"
          className="image"
          alt="Cravings Restaurant Website"
        />
      ),
      link: `https://cravings.vercel.app`,
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
        View project archive{" "}
        <a
          href="https://github.com/Davest9496?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaArrowRight className="arrowRight" />
        </a>
      </h3>
    </section>
  );
};

const ProjectItems = React.memo(function ProjectItems({ items }) {
  const { title, info,link, image, tools } = items;

  return (
    <li className="project-box">
      <div className="project-img">
        <figure>{image}</figure>
      </div>
      <div className="project-info">
        <h3 className="project-title">
          {title}
          <span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaLink className="title-icon" />
            </a>
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
// https://cravings.vercel.app