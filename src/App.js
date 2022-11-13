import React from "react";

// style
import style from "./sass/App.scss";

// components
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects";
import Tutorial from "./components/Tutorial";
import Education from "./components/Education";
import SoftSkills from "./components/SoftSkills";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactMeFixed from "./components/ContactMeFixed";

const App = () => {
  return (
    <>
      <ContactMeFixed />
      <Navbar />
      <main>
        <About />
        <Projects />
        <Tutorial />
        <div className="mainPage_multiColumnWrapper">
          <Education />
          <SoftSkills />
        </div>
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default App;
