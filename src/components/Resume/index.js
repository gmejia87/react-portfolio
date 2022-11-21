import React from "react";
import "./resume.css";
import { HiDocument } from "react-icons/hi";

function Resume() {
  return (
    <section>
      <h2>My Resume</h2>
      <br />
      <p>
        <HiDocument />
        Download my resume.
      </p>
      <br />

      <br />
      <h3>Front-End:</h3>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <br />
      <h3>Back-End:</h3>
      <li>Node</li>
      <li>Express</li>
      <li>React</li>
      <li>Mongoose</li>
    </section>
  );
}

export default Resume;
