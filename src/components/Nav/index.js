import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      This Portfolio BZ!
      <nav>
        <ul>
          <li>
            <Link to="about">About me</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact Me</Link>
          </li>
          <li>
            <Link to="resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
