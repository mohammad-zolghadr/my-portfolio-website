import React, { useEffect, useState } from "react";

// styles & icon
import style from "../sass/ScrollToTop.scss";
import arrowIco from "../assets/images/arrowUp.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scrollToTopWrapper">
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src={arrowIco} alt="arrow up" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
