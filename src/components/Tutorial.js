import React from "react";

// styles & icons
import style from "../sass/Tutorial.scss";
import reactTutorialIco from "../assets/images/react-tutorial.png";
import responsiveTutorialIco from "../assets/images/responsive-tutorial.png";
import neumorphismTutorialIco from "../assets/images/neumorphism-tutorial.png";
import multiColomnTutorialIco from "../assets/images/multi-column - tutorial.png";

// component
import TutorialItem from "./TutorialItem";

const Tutorial = () => {
  const data = [
    {
      id: 1,
      platform: "faradars",
      time: 5,
      imgSrc: reactTutorialIco,
      title: "REST API (Axios & Fetch) in React.js",
      description:
        "In this tutorial, we are going to communicate with the server and receive, edit, delete or add information step by step using various methods and packages in React.js. Also, at the end of this tutorial, we will implement a practical mini-project and in this mini-project, using a Fake API, we will receive information from the real server in order to learn about the challenges of a real project.       ",
      link: "https://faradars.org/courses/professional-react-js-tutorial-using-fetch-and-axios-to-connect-api-fvwb106",
    },
    {
      id: 2,
      platform: "faradars",
      time: 3,
      imgSrc: responsiveTutorialIco,
      title: "Responsive LandingPage With Html Css Js",
      description:
        "In this training, we have tried to provide you with all the tips that are needed to implement a landing page or sell products with a simple and minimal design and implementation in the simplest ways and expressing basic and fundamental topics.",
      link: "https://faradars.org/courses/project-oriented-css-javascript-and-html-designing-responsive-landing-page-fvprm01021",
    },
    {
      id: 3,
      platform: "faradars",
      time: 5,
      imgSrc: neumorphismTutorialIco,
      title: "Neumorphism Design in Html Css",
      description:
        "These days, website design is one of the busiest branches of programming because it can be implemented in all operating systems. For the uniqueness of the website design, it is better to get familiar with the new design style. One of these new design styles that has become very trendy today is the Neomorphism style. This style is a new and minimal method for designs with a soft and extruded plastic appearance, which is made from the combination of two styles, one is minimalism and the other is skeuomorphism.",
      link: "https://faradars.org/courses/neumorphism-design-with-html-and-css-fvweb008",
    },
    {
      id: 4,
      platform: "youtube",
      time: 5,
      imgSrc: multiColomnTutorialIco,
      title: "Multi-Column Page with Html Css Bootstrap",
      description:
        "In this training course, we will learn complete tips about creating a multi-column landing page using html css bootstrap and I will teach you very important tips for implementation.",
      link: "https://www.youtube.com/watch?v=MOtJHOAItyI&list=PLexncsW0uxoWNsm8pHR1I8ztN5NTvqwtw",
    },
  ];

  return (
    <div>
      <h2 id="tutorial" className="sectionTitle">
        Tutorial
      </h2>
      <div className="tutorialWrapper">
        {data.map((e) => {
          return <TutorialItem key={e.id} data={e} />;
        })}
      </div>
      <div className="seeMoreWrapper">
        <button
          className="btnSeeMore"
          onClick={() => {
            window.open("https://faradars.org/instructors/mohammad-zolghadr");
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
