import React from "react";

// styles & icons
import style from "../sass/TutorialItem.scss";
import clockIco from "../assets/images/clock-ico.png";
import faradarsIco from "../assets/images/faradars.svg";
import youtubeIco from "../assets/images/youtube.svg";

const TutorialItem = (data) => {
  const { title, description, time, platform, imgSrc, link } = data.data;
  return (
    <div className="tutorialItemWrapper">
      <div className="tutorialItemWrapperHeading">
        <div className="tiwh-platformWrapper">
          <img
            src={platform === "faradars" ? faradarsIco : youtubeIco}
            alt=""
          />
        </div>
        <div className="tiwh-mainPicWrapper">
          <img src={imgSrc} alt="" />
        </div>
        <div className="tiwh-timingWrapper">
          <img src={clockIco} alt="" /> <span>{time} hours</span>
        </div>
      </div>
      <h3 className="tutorialItemTitle">{title}</h3>
      <p className="tutorialItemDescription">{description}</p>
      <div className="tutorialItemButtonWrapper">
        <button
          onClick={() => {
            window.open(link);
          }}
        >
          Start Tutorial
        </button>
      </div>
    </div>
  );
};

export default TutorialItem;
