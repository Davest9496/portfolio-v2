import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { FaChartLine, FaCode, FaArrowDownLong } from "react-icons/fa6";

export function Hero() {
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const heroIcon = document.querySelector(".hero-heading");
  const heroIcon2 = document.querySelector(".hero-icon2");

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      heroIcon.style.animation = "changeColors 1s linear infinite";
       heroIcon2.style.animation = "moveDownUp 5s ease-in-out infinite";
    } else {
      heroIcon.style.animation = "none";
      heroIcon2.style.animation = "none";
    }
  });

  observer.observe(hero);
});

  return (
    <div id="home" className="hero">
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
          <span className="hero-icon2">
            <FaArrowDownLong />
          </span>
        </h1>
      </div>
    </div>
  );
}
