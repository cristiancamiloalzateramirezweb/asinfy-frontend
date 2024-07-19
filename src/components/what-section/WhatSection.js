import React from "react";
import "./WhatSection.css";
import WhatAsinfy from "../../assets/images/what-asinfy.svg";
import Square03 from "../../assets/images/square03.svg";

export const WhatSection = () => {
  return (
    <>
      <section className="what-section" id="que-es">
        <div className="what-content">
          <div className="text-container">
            <h2>¿Qué es Asincode?</h2>
            <p className="para">
              Asinfy es tu solución integral para simplificar la contabilidad y
              la facturación en tu empresa. Automatiza procesos, genera facturas
              electrónicas al instante y obtén insights financieros claros para
              impulsar el crecimiento de tu negocio. Descubre cómo Asinfy puede
              transformar tu gestión financiera hoy mismo.
            </p>
            <a href="/" className="btn-cta">¡Comienza Ahora!</a>
          </div>
          <div className="image-container">
            <img src={WhatAsinfy} alt="¿Qué es Asincode?"></img>
          </div>
        </div>
        <img src={Square03} alt="Asincode" className="square03"></img>
      </section>
    </>
  );
};
