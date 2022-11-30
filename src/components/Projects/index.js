import React from "react";
import "./projects.css";
import musicenvivo from "../../assets/photos/musicenvivo.png";
import smarthomie from "../../assets/photos/smarthomie.png";
import notice from "../../assets/photos/notice.png";
import bookmeup from "../../assets/photos/book-me-up.png";
import horiseon from "../../assets/photos/horiseon-refactor-code.png";
import taskmaster from "../../assets/photos/taskmaster.png";
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
        <div class="column">
          {/* note taker project */}
          <a href="https://github.com/gmejia87/notice">
            <BsGithub />
            Notice
          </a>
          <br />
          <a href="https://pacific-stream-84238.herokuapp.com/">
            <img src={notice} alt="notice screenshot" />
          </a>
        </div>
        <div class="column">
          {/* book-me-up project */}
          <a href="https://github.com/gmejia87/book-me-up">
            <BsGithub />
            Book Me Up
          </a>
          <br />
          <a href="https://gmejia87.github.io/book-me-up/">
            <img src={bookmeup} alt="bookmeup screenshot" />
          </a>
        </div>
        <div class="column">
          {/* horiseon-code-refactor project */}
          <a href="https://github.com/gmejia87/horiseon-code-refactor">
            <BsGithub />
            Horiseon Code Refactor
          </a>
          <br />
          <a href="https://gmejia87.github.io/horiseon-code-refactor/">
            <img src={horiseon} alt="horiseon screenshot" />
          </a>
        </div>
        <div class="column">
          {/* taskmaster pro project */}
          <a href="https://gmejia87.github.io/taskmaster-pro/">
            <BsGithub />
            Taskmaster
          </a>
          <br />
          <a href="https://github.com/gmejia87/taskmaster-pro">
            <img src={taskmaster} alt="taskmaster screenshot" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
