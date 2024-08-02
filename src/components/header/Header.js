import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import LogoTipoAsinfy from "../../assets/images/logotipo.svg";

export const Header = ({ activo, scrollToSection }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <header>
        <div className="header-main">
          <div className="nav-main">
            <div className="brand-container">
              <a href="/">
                <img src={LogoTipoAsinfy} alt="Asincode"></img>
              </a>
            </div>
            <nav className="navbar-container">
              <div className="navbar">
                <ul>
                  <li>
                    <button
                      onClick={() => scrollToSection("componente1")}
                      className={activo === "componente1" ? "active" : ""}
                    >
                      Inicio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("componente2")}
                      className={activo === "componente2" ? "active" : ""}
                    >
                      Descúbrenos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("componente3")}
                      className={activo === "componente3" ? "active" : ""}
                    >
                      Elígenos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("componente4")}
                      className={activo === "componente4" ? "active" : ""}
                    >
                      Productos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("componente5")}
                      className={activo === "componente5" ? "active" : ""}
                    >
                      Servicios
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("componente6")}
                      className={activo === "componente6" ? "active" : ""}
                    >
                      Procesos
                    </button>
                  </li>
                  <li>
                  <NavLink /* to="/contactanos" */ className="link-button">
                    Contáctanos
                  </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="nav-button">
            <button className="btn-open" onClick={handleClick}>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        <div
          className={`header-mb ${open ? "show" : ""}`}
          onClick={handleClick}
        >
          <nav className="nav-main">
            <div className="nav-button">
              <button className="btn-close" onClick={handleClick}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <button
                    onClick={() => scrollToSection("componente1")}
                    className={activo === "componente1" ? "active" : ""}
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("componente2")}
                    className={activo === "componente2" ? "active" : ""}
                  >
                    Descúbrenos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("componente3")}
                    className={activo === "componente3" ? "active" : ""}
                  >
                    Elígenos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("componente4")}
                    className={activo === "componente4" ? "active" : ""}
                  >
                    Productos
                  </button>
                </li>
                <li>
                    <button
                      onClick={() => scrollToSection("componente5")}
                      className={activo === "componente5" ? "active" : ""}
                    >
                      Servicios
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("componente6")}
                      className={activo === "componente6" ? "active" : ""}
                    >
                      Procesos
                    </button>
                  </li>
                <li>
                  <NavLink /* to="/contactanos" */ className="link-button">
                    Contáctanos
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
