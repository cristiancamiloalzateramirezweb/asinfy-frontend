import React from "react";
import "./StoreSection.css";
import Check from "../../assets/images/check.svg";
import Store from "../../assets/images/img-store.svg";
import Square10 from "../../assets/images/square10.svg";

export const StoreSection = () => {
  return (
    <>
      <section className="store-section" id="descubre">
        <div className="store-content">
          <div className="image-container">
            <img src={Store} alt="¿Qué es Asinfy?"></img>
          </div>
          <div className="text-container">
            <span className="text-btn">Descubre Asinfy</span>
            <h3>Potenciando tu negocio</h3>
            <ul>
              <li>
                <img src={Check} alt=""></img> Optimiza tus operaciones
                empresariales con herramientas inteligentes de automatización.
              </li>
              <li>
                <img src={Check} alt=""></img> Accede a un soporte experto y
                personalizado para resolver tus dudas y desafíos financieros.
              </li>
              <li>
                <img src={Check} alt=""></img> Accede a un soporte experto y
                personalizado para resolver tus dudas y desafíos financieros.
              </li>
              <li>
                <img src={Check} alt=""></img> Accede a un soporte experto y
                personalizado para resolver tus dudas y desafíos financieros.
              </li>
            </ul>
          </div>
        </div>
        <img src={Square10} alt="Asinfy" className="square10"></img>
      </section>
    </>
  );
};
