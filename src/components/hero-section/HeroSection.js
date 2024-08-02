import React from "react";
import "./HeroSection.css";
import {AlliesSection} from "../../components/allies-section/AlliesSection";
import heroImage from "../../assets/images/hero-image.png";

export const HeroSection = () => {
  return (
    <>
      <section className="hero-section" id="inicio">
        <div className="hero-content">
        <div className="hero-image">
            <img src={heroImage} alt="Asincode"></img>
          </div>
          <div className="hero-text">
            <h1>Simplificando la manera de mejorar tus resultados</h1>
            <span className="para">
              Asincode, tu mejor aliado tecnológico.
            </span>
            <a target="_blank" rel="noreferrer" href="https://wa.me/573011778476" className="link-btn">Contacta a nuestro equipo</a>
          </div>
          <h2>Quienes confían en nosotros</h2>
        </div>
        <AlliesSection></AlliesSection>
      </section>
    </>
  );
};
