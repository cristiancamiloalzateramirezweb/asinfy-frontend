import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import LogoTipoAsinfy from "../../assets/images/logotipo.svg";
import UpArrow from "../../assets/images/up-arrow.svg";

export const Footer = () => {
  const yearActual = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="brand-container">
            <a href="/">
              <img src={LogoTipoAsinfy} alt="Asincode"></img>
            </a>
            <ul>
              <li>
                <a href="/">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="rowspan">
            <div class="colspan">
              <h5>Legal</h5>
              <ul>
                {/* <li>
                  <NavLink to="/legal">Aviso Legal</NavLink>
                </li>
                <li>
                  <NavLink to="/legal">Política de Privacidad</NavLink>
                </li>
                <li>
                  <NavLink to="/legal">Terminos y Condiciones</NavLink>
                </li> */}
                <li>
                  Aviso Legal
                </li>
                <li>
                  Política de Privacidad
                </li>
                <li>
                  Terminos y Condiciones
                </li>
              </ul>
            </div>
            <div class="colspan">
              <h5>Quiénes Somos</h5>
              <ul>
                {/* <li>
                  <NavLink to="/conocenos">Conocenos</NavLink>
                </li> */}
                <li>
                  Conocenos
                </li>
              </ul>
            </div>
            <div class="colspan">
              <h5>Servicio al cliente</h5>
              <ul>
                {/* <li>
                  <NavLink to="/ayuda">Ayuda</NavLink>
                </li>
                <li>
                  <NavLink to="/contactanos">Contáctanos</NavLink>
                </li> */}
                <li>
                  Ayuda
                </li>
                <li>
                  Contáctanos
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <p>
            Copyright &copy; 2024{yearActual !== 2024 ? `-${yearActual}` : ""}{" "}
            Asincode. Desarrollado por <strong>Asincode&reg;</strong> marca de{" "}
            {/* <NavLink to="/legal">AndarT SAS.</NavLink> */}AndarT SAS.
          </p>
        </div>
        <div
          className={`container-fixed ${showButton ? "show" : ""}`}
          onClick={goTop}
        >
          <img src={UpArrow} alt="Asincode"></img>
        </div>
      </footer>
    </>
  );
};
