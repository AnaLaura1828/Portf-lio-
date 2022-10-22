import React from "react";
import Linkedin from "../images/linkedin.png";
import Email from "../images/email.png";
import "../App2.css";

export const Contact = () => {
  return (
    <div>
      <div id="contacts">
        <h2 className="about-heading contacts">Contatos</h2>
      </div>
      <div className="main">
        <a
          href="https://www.linkedin.com/in/dev-analaura/"
          target="blank"
        >
          <img className="contact" src={ Linkedin } alt="Linkedin logo" />
        </a>
        <a
          href="mailto:aninhamelo.8santos@gmail.com"
          target="blank"
        >
        <img className="contact" src={ Email } alt="Linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
