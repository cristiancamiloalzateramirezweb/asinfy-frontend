import React from "react";
import "./Header.css";
import LogoTipoAsinfy from "../../assets/images/logotipo.svg";

export const Header = ({ activo, scrollToSection }) => {  
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
                    <button onClick={() => scrollToSection('componente1')} className={activo === 'componente1' ? 'active' : ''}>Inicio</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('componente2')} className={activo === 'componente2' ? 'active' : ''}>¿Qué es?</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('componente3')} className={activo === 'componente3' ? 'active' : ''}>Elígenos</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('componente4')} className={activo === 'componente4' ? 'active' : ''}>Productos</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('componente5')} className={activo === 'componente5' ? 'active' : ''}>Procesos</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('componente6')} className={activo === 'componente6' ? 'active' : ''}>Descubre</button>
                  </li>
                </ul>
              </div>
              <div className="navbar-button">
                <ul>
                  <li>
                    <a href="/registrate">Regístrate</a>
                  </li>
                  <li>
                    <a href="/accede" className="link-button">Accede Gratis</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
