import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { FaChartLine, FaCode } from "react-icons/fa6";

export function Hero() {
  return (
    <div id= 'home' className="hero">
      <h2 className="title">
        {" "}
        <span className="span-icon">
          <RiHome2Line />
        </span>
        welcome!
      </h2>
      <div className="hero-text">
        <h2 className="hero-subHeading grey">dave ejezie</h2>
        <h1 className="hero-heading">
          Developer
          <span className="hero-icon">
            <FaCode />
          </span>
          <br />
          <span className="grey">+</span>Analyst
          <span className="hero-icon">
            <FaChartLine />
          </span>{" "}
        </h1>
      </div>
    </div>
  );
}
