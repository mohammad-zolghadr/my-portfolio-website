import React from "react";

import style from "../sass/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div></div>
        <nav>
          <ul>
            <li>
              <a href="#about">
                <span>#</span>About
              </a>
            </li>
            <li>
              <a href="#projects">
                <span>#</span>Projects
              </a>
            </li>
            <li>
              <a href="#tutorial">
                <span>#</span>Tutorial
              </a>
            </li>
            <li>
              <a href="#education">
                <span>#</span>Education
              </a>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open("https://mohammadzolghadr.ir/files/resume.pdf")
                }
              >
                Download Resume
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
