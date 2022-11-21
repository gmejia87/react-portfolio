import React from "react";
import "./projects.css";
import musicenvivo from "../../assets/photos/musicenvivo.png";
import smarthomie from "../../assets/photos/smarthomie.png";

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      <br />
      <p>Behold these are my projects!</p>

      <div className="row">
        <div class="column">
          <a href="https://gmejia87.github.io/Music-en-Vivo/">
            <img src={musicenvivo} />
          </a>
          <a href="https://smart-homie.herokuapp.com/">
            <img src={smarthomie} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
