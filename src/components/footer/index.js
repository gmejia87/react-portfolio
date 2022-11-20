import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <h3>
        <a href="https://www.github.com/gmejia87">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/gracielamejia1/">
          <BsLinkedin />
        </a>
        <a href="mailto:graciela.mejia1@yahoo.com">
          <BsFillEnvelopeFill />
        </a>
      </h3>
    </footer>
  );
}

export default Footer;
