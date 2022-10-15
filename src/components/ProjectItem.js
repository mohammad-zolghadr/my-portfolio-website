import React, { useState } from "react";

import style from "../sass/ProjectItem.scss";

const ProjectItem = (data) => {
  const { title, description, technologies, link } = data.data;
  const [isDescriptionFullShow, setIsDescriptionFullShow] = useState(false);
  const PARAGRAPH_LENGTH_CHAR = 85;
  const fullDesc = description;
  console.log(fullDesc.length);

  const descriptionShowHandler = () => {
    setIsDescriptionFullShow(!isDescriptionFullShow);
  };

  const descriptionShow = () => {
    let result;
    {
      fullDesc.length > PARAGRAPH_LENGTH_CHAR && !isDescriptionFullShow
        ? (result = (
            <p className="projectDescription">
              {description.substring(0, PARAGRAPH_LENGTH_CHAR)}
              <span
                className="showParaghraphSpan"
                onClick={descriptionShowHandler}
              >
                {" "}
                ...
              </span>
            </p>
          ))
        : (result = <p className="projectDescription">{fullDesc}</p>);
    }

    return result;
  };

  return (
    <div className="projectItemWrapper">
      <h3>{title}</h3>
      {descriptionShow()}
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
