import React from "react";
import imagen1 from "../assets/th-1.jpg";
import imagen2 from "../assets/th.jpg";

function AboutPage() {
  return (
    <div>
      <h2>Sobre el proyecto</h2>
      <p className="about-text">
        {" "}
        Sazón Digital es la aplicación para guardar todas tus recetas y que no
        se te olviden. Almacena toda la información que necesitas (ingredientes,
        calorías, raciones), consúltala en cualquier momento y crea tu propio
        libro online de recetas.
      </p>
      <h2>Quiénes somos</h2>
      <h3>Josep Climent</h3>
      <div className="about-profiles">
        <div style={{marginRight: "20px"}}>
        <img src={imagen1} alt="imagen1" />
        </div>
          <div>
        <a href="https://github.com/josepcliment92/" className="about-links">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/josep-climent-07508082/" className="about-links">
          LinkedIn
        </a>
        </div>
      </div>
      <h3>Pablo Sánchez</h3>
      <div className="about-profiles">
        <div style={{marginRight: "20px"}}>
        <img src={imagen2} alt="imagen2" />
        </div>
        <div>
        <a href="https://github.com/PabloSanchezCamara" className="about-links">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/pablo-sanchez-camara-b143892b4/" className="about-links">
          LinkedIn
        </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
