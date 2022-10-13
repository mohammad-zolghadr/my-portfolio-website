import React from "react";

// styles
import styles from "../sass/Education.scss";

const Education = () => {
  return (
    <>
      <div className="educationWrapper">
        <h2 id="education" className="sectionTitle">
          EDUCATION
        </h2>
        <div className="educationDataWrapper">
          <h3>
            Bachelor of <span>Computer Science</span>
          </h3>
          <p className="educationTime">Sep 2017 - Jun 2022</p>
          <p className="educationUniversity">
            University : SalmanFarsi Kazeroon
          </p>
        </div>
      </div>
    </>
  );
};

export default Education;
