import React from "react";
import "./Header.css";
import LogoTipoAsinfy from "../../assets/images/logotipo.svg";

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-main">
          <div className="nav-main">
            <div className="brand-container">
              <a href="/">
                <img src={LogoTipoAsinfy} alt="Asinfy"></img>
              </a>
            </div>
            <nav className="navbar-container">
              <div className="navbar">
                <ul>
                  <li>
                    <a href="#inicio">Inicio</a>
                  </li>
                  <li>
                    <a href="#que-es">¿Qué es?</a>
                  </li>
                  <li>
                    <a href="#eligenos">Elígenos</a>
                  </li>
                  <li>
                    <a href="#productos">Productos</a>
                  </li>
                  <li>
                    <a href="#procesos">Procesos</a>
                  </li>
                  <li>
                    <a href="#descubre">Descubre</a>
                  </li>
                </ul>
              </div>
              {/* <div className="navbar-buthrefn">
                <ul>
                  <li>
                    <a href="/registrate">Regístrate</a>
                  </li>
                  <li>
                    <a href="/accede" className="link-buthrefn">Accede Gratis</a>
                  </li>
                </ul>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
