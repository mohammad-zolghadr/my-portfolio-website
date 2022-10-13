import React from "react";

// style & icons
import style from "../sass/ContactMeFixed.scss";
import githubIco from "../assets/images/github.png";
import linkedinIco from "../assets/images/linkedin.png";
import whatsappIco from "../assets/images/whatsapp.png";
import gmailIco from "../assets/images/gmail.png";
import instagramIco from "../assets/images/instagram.png";

const ContactMeFixed = () => {
  return (
    <>
      <div className="contactMeWrapper">
        <a href="https://github.com/mohammad-zolghadr" target="_blank">
          <img src={githubIco} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-zolghadr/"
          target="_blank"
        >
          <img src={linkedinIco} alt="linkedin" />
        </a>
        <a href="https://wa.me/+989164538713" target="_blank">
          <img src={whatsappIco} alt=" whatsapp" />
        </a>
        <a href="mailto:mohammad.zol9978@gmail.com" target="_blank">
          <img src={gmailIco} alt="gmail" />
        </a>
        <a href="https://instagram.com/mozo.ui" target="_blank">
          <img src={instagramIco} alt="instagram" />
        </a>
      </div>
    </>
  );
};

export default ContactMeFixed;
