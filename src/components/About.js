import React from "react";

import style from "../sass/About.scss";

// components
import Technologies from "./Technologies";

const About = () => {
  const skills = [
    "html",
    "css",
    "js",
    "react",
    "sass",
    "bootstrap",
    "git",
    "figma",
  ];
  return (
    <>
      <h2 id="about" className="sectionTitle">
        About Me
      </h2>
      <div className="aboutSectionContent">
        <h3>Mohammad Zolghadr</h3>
        <h4>Front-end Developer</h4>
        <p>
          After +3 years Android programming & +2 years of trying to create a
          functional startup and attract +10,000 users, I decided to follow my
          main interest, which is front-end developer, and apply my past
          experiences with expertise and compassion in your company.
        </p>
      </div>
      <div className="TechnologiesContainer">
        {skills.map((e) => {
          return <Technologies key={e} data={e} />;
        })}
      </div>
    </>
  );
};

export default About;
