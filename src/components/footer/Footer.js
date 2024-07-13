import React, { useState, useEffect } from "react";
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

  const paraArriba = () => {
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
              <img src={LogoTipoAsinfy} alt="Asinfy"></img>
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
                <li>
                  <a href="/">Aviso Legal</a>
                </li>
                <li>
                  <a href="/">Política de Privacidad</a>
                </li>
                <li>
                  <a href="/">Terminos y Condiciones</a>
                </li>
              </ul>
            </div>
            <div class="colspan">
              <h5>Asinfy</h5>
              <ul>
                <li>
                  <a href="/">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="/">Conocenos</a>
                </li>
              </ul>
            </div>
            <div class="colspan">
              <h5>Soporte</h5>
              <ul>
                <li>
                  <a href="/">Ayuda</a>
                </li>
                <li>
                  <a href="/">Contáctanos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <p>
            Copyright &copy; 2024{yearActual !== 2024 ? `-${yearActual}` : ""}{" "}
            Asinfy. Desarrollado por <strong>Asinfy</strong>, marca de AndarT.
          </p>
        </div>
        <div
          className={`container-fixed ${showButton ? "show" : ""}`}
          onClick={paraArriba}
        >
          <img src={UpArrow} alt="Asinfy"></img>
        </div>
      </footer>
    </>
  );
};
