import React from "react";

import style from "../sass/ProjectItem.scss";

const ProjectItem = (data) => {
  const { title, description, technologies, link } = data.data;

  console.log(data);
  return (
    <div className="projectItemWrapper">
      <h3>{title}</h3>
      <p className="projectDescription">{description}</p>
      <p className="projectTechnologies">{technologies}</p>
      <div className="projectCTA">
        <span></span>
        <button
          onClick={() => {
            window.open(link);
          }}
        >
          Github & Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
