import React from "react";
import "./projects.css";
import musicenvivo from "../../assets/photos/musicenvivo.png";
import smarthomie from "../../assets/photos/smarthomie.png";
import { BsGithub } from "react-icons/bs";

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      <br />
      <p>Behold these are my projects!</p>

      <div className="row">
        <div class="column">
          {/* music en vivo project */}
          <a href="https://github.com/gmejia87/Music-en-Vivo">
            <BsGithub />
            Music en Vivo
          </a>
          <br />
          <a href="https://gmejia87.github.io/Music-en-Vivo/">
            <img src={musicenvivo} alt="music en vivo screenshot" />
          </a>
        </div>
        <div class="column">
          {/* smart homie project */}
          <a href="https://github.com/gmejia87/smart-homie">
            <BsGithub />
            Smart Homie
          </a>
          <br />
          <a href="https://smart-homie.herokuapp.com/">
            <img src={smarthomie} alt="smart homie screenshot" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
