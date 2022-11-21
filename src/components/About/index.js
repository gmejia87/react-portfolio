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
          Holla! My name is Graciela Mejia, pronounced 'Gracie-Ella Meh-he-a'
          but you can call me Gracie if you'd like.
          <br />
          Welcome to my portfolio.
          <br />
          Please take a look around. Here you'll find projects I've worked on,
          my contact information and more. NOTE: I am currently enrolled to UC
          Davis' Fullstack Flex Web Development bootcamp. I have always been
          techy and encourage to seek a career in tech, so here I am pursuing
          that. I look forward to completing this bootcamp and finally moving in
          a diection that better aligns with my skills and new knowledge. Please
          feel free to reach out. Gracias!
        </p>
      </div>
    </body>
  );
}

export default About;
