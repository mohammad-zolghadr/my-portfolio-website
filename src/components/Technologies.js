import React from "react";
import parse from "html-react-parser";

import style from "../sass/Technologies.scss";

// Icon
import icoHtml from "../assets/images/html-ico.png";
import icoCss from "../assets/images/css-ico.png";
import icoJs from "../assets/images/js-ico.png";
import icoReact from "../assets/images/react-ico.png";
import icoSass from "../assets/images/sass.svg";
import icoBootstrap from "../assets/images/bootstrap-ico.png";
import icoGit from "../assets/images/git-ico.png";
import icoFigma from "../assets/images/figma-ico.png";

const imageData = [
  {
    data: "html",
    url: icoHtml,
    alt: "html icon",
    tech: ["Html 5", "Semantic Tags"],
  },
  { data: "css", url: icoCss, alt: "css icon", tech: ["Css 3"] },
  { data: "js", url: icoJs, alt: "javascript icon", tech: ["ES6"] },
  {
    data: "react",
    url: icoReact,
    alt: "react.js icon",
    tech: [
      "React Hooks",
      "React-Router-Dom (SPA)",
      "Redux",
      "Styled-Components",
      "Axios",
      "REST",
    ],
  },
  { data: "sass", url: icoSass, alt: "sass icon", tech: ["SCSS"] },
  {
    data: "bootstrap",
    url: icoBootstrap,
    alt: "bootstrap icon",
    tech: ["Bootstrap 5"],
  },
  {
    data: "git",
    url: icoGit,
    alt: "git icon",
    tech: "Git Description",
    tech: ["GUI git", "github"],
  },
  { data: "figma", url: icoFigma, alt: "figma icon", tech: ["UI/UX Design"] },
];

const create_ul_Tech = (whatTechnology) => {
  return `<ul>${create_li_fromData(whatTechnology)}<ul>`;
};

const create_li_fromData = (whatTechnology) => {
  let result = ``;
  const index = imageData.findIndex((e) => {
    return e.data === whatTechnology;
  });
  imageData[index].tech.map((e) => (result += ` <li>${e}</li>`));
  return result;
};

const Technologies = ({ data }) => {
  const tempUrl = imageData.find((e) => {
    return e.data === data ? e.url : "";
  });

  return (
    <>
      <div className="technologiesWrapper">
        <img src={tempUrl["url"]} alt={tempUrl["alt"]} />
        <span>{parse(create_ul_Tech(tempUrl["data"]))}</span>
      </div>
    </>
  );
};

export default Technologies;
