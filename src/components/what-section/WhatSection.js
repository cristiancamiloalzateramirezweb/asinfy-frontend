import React from "react";
import { Link } from "react-router-dom";
import "./WhatSection.css";
import DiscoverAsincode from "../../assets/images/discover-image.png";

export const WhatSection = () => {
  return (
    <>
      <section className="what-section" id="que-es">
        <div className="what-content">
          <div className="text-container">
            <h2>Descubre Asincode</h2>
            <p className="para">
              Asincode es tu solución integral para simplificar procesos,
              adaptar soluciones a tu línea de negocio y ajustarnos a tus
              necesidades, contribuyendo así a un mejor desempeño tecnológico.
            </p>
            <Link /* to="/conocenos" */ className="btn-cta">
              Conócenos 
            </Link>
          </div>
          <div className="image-container">
            <img src={DiscoverAsincode} alt="¿Qué es Asincode?"></img>
          </div>
        </div>
      </section>
    </>
  );
};
