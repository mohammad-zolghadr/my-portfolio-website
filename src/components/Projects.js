import React from "react";

import style from "../sass/Projects.scss";

// components
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const data = [
    {
      id: 1,
      title: "Mozo Blog",
      description:
        "a Blog that using Firebase : Register with Gmail, Create a Post (RichText) in Diffrence Mood (Categories) , Voice Typing",
      technologies:
        "React.Js - GoogleFirebase - React-Router-Dom (SPA) - React Hooks - SASS - LocalStorage Save - CKeditor (RichText Editor)",
      link: "https://github.com/mohammad-zolghadr/mozo.blog",
    },
    {
      id: 2,
      title: "Proffessional Todo",
      description:
        "Professional Todo App : Add or Remove a Task (you can fill all fields with voice), Auto Analyze(Soon)",
      technologies:
        "React.Js - Redux - React-Router-Dom (SPA) - Local Storage - SpeechRecognition - React Hooks",
      link: "https://github.com/mohammad-zolghadr/Pro-Todo",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description:
        "Shopping Cart : Shopping Cart : Landing Page , Product Page , Product Detail Page , Add To Cart , Checkout Page etc.",
      technologies:
        "React.Js - Redux - React-Router-Dom (SPA) - Axios - REST API - React Hooks",
      link: "https://github.com/mohammad-zolghadr/Shopping-Cart-E-commerce-Website-",
    },
    {
      id: 4,
      title: "Speech Recognition Birthday",
      description:
        "Tell your date of birth by gregorian month or month shamsi and this program tells you how many years, how many months and how many days you are and also how many days are left until your birthday.",
      technologies: "Html Css - Vanilla Javascript - Speech Recognition",
      link: "https://github.com/mohammad-zolghadr/speech-recognation-birthday",
    },
  ];
  return (
    <>
      <h2 id="projects" className="sectionTitle">
        Projects
      </h2>
      <div className="projectsWrapper">
        {data.map((e) => {
          return <ProjectItem key={e.id} data={e} />;
        })}
      </div>
      <div className="seeMoreWrapper">
        <button
          className="btnSeeMore"
          onClick={() => {
            window.open("https://github.com/mohammad-zolghadr");
          }}
        >
          See More
        </button>
      </div>
    </>
  );
};

export default Projects;
