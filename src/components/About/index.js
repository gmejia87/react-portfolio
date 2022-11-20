import React from "react";
import "./about.css";
import gmejia from "../../assets/photos/gmejia.jpg";

function About() {
  return (
    <section>
      <div>
        <h2>About me</h2>
      </div>
      <br />
      <div>
        <img src={gmejia} alt="Graciela" className="my-photo" />
      </div>
      <div>
        <p>
          Holla! My name is Graciela Mejia, pronounced 'Gracie-Ella Meh-he-a'
          but you can call me Gracie if you'd like.
        </p>
        <br />
        <p>
          Welcome to my portfolio. Please take a look around. On this site
          you'll find projects I've worked on, my contact information and more.
          Please feel free to reach out. Gracias!
        </p>
      </div>
    </section>
  );
}

export default About;
