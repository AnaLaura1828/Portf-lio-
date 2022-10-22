import React from "react";
import author from "../images/minhaFoto.jpeg";

const AboutMe = () => {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={ author } alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Sobre Mim</h1>
          <p>
            Olá!! Eu sou Ana Laura de Melo Santos, venho da área da produção e atualmente estudo desenvolvimento web
            na Trybe ! Estou aprendendo sobre o Front-end com React, Redux, React,
            metodologias ágeis como Kanbam e Scrum. Tambem sobre Back-end com SQL, 
            MongoDB, Docker, NodeJs, dominando o uso de bancos de dados e a construção 
            de APIs com testes automatizados. Sempre busco me aprimorar e desenvolver minhas Soft Skils e Hard Skiils.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
