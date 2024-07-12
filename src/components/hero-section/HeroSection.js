import React from "react";
import "./HeroSection.css";
import IsoTipoAsinfy from "../../assets/images/isotipo.svg";
import Square01 from "../../assets/images/square01.svg";
import Square02 from "../../assets/images/square02.svg";

export const HeroSection = () => {
  return (
    <>
      <section className="hero-section" id="inicio">
        <div className="hero-content">
          <div className="hero-image">
            <img src={IsoTipoAsinfy} alt="Asinfy"></img>
          </div>
          <div className="hero-text">
            <h1>Soluciones Tecnológicas que impulsan tu negocio</h1>
            <span className="para">
              Asinfy, tu oportunidad de potenciar tu negocio.
            </span>
          </div>
        </div>
        <img src={Square01} alt="" className="square01"></img>
        <img src={Square02} alt="" className="square02"></img>
      </section>
    </>
  );
};
