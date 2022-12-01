import React from "react";
import "./about.css";
import gmejia from "../../assets/photos/gmejia.jpg";

function About() {
  return (
    <body>
      <div>
        <h2>About me</h2>
      </div>
      <br />
      <div>
        <img src={gmejia} alt="Graciela" className="my-photo" />
      </div>
      <div>
        <p className="intro">
          Hola! Welcome to my portfolio.
          <br />
          <br />
          My name is Graciela Mejia, pronounced 'Gracie-Ella' 'Meh-he-a' but you
          can call me Gracie if you'd like.
          <br />
          <br />
          Here you'll find projects I've worked on, my contact information and
          more.
          <br />
          <br />
          I'm currently in the health industry, I have years of customer service
          experience along with patient care experience, etc.
          <br />
          I am currently enrolled to UC Davis' Fullstack Flex Web Development
          bootcamp.
          <br />
          You may be wondering what brought me to this change.
          <br />
          Well I have always been good with tech and for years have been highly
          encouraged to seek a career in tech.
          <br />
          Since I was alwasy the go-to person when it came to any tech.
          <br />
          I remember doing some light coding in the myspace days, so here I am
          coding like I had then only better.
          <br />
          I am extremely excited to be completing this bootcamp soon, so that I
          can start applying my skills and new knowledge.
          <br />
          <br />
          ❤️ Graciela
        </p>
      </div>
    </body>
  );
}

export default About;
