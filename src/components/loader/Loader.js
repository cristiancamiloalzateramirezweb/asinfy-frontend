/* import React, { useState, useEffect } from "react";
import "./Loader.css";
import LogoTipo from "../../assets/images/logotipo.svg";

export const Loader = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const imageContainer = document.querySelector(".loader-container");
    imageContainer.classList.add("animate");

    const timer = setTimeout(() => {
      imageContainer.classList.remove("animate");
      setAnimationKey(prevKey => prevKey + 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
      imageContainer.classList.remove("animate");
    };
  }, [animationKey]);

  return (
    <>
      <div className="loader-container" key={animationKey}>
        <img src={LogoTipo} alt="Asincode"></img>
      </div>
    </>
  );
}; */

import React, { useState, useEffect } from "react";
import "./Loader.css";

export const Loader = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const imageContainer = document.querySelector(".loader-container");
    imageContainer.classList.add("animate");

    const timer = setTimeout(() => {
      imageContainer.classList.remove("animate");
      setAnimationKey((prevKey) => prevKey + 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
      imageContainer.classList.remove("animate");
    };
  }, [animationKey]);

  return (
    <>
      <div className="loader-container" key={animationKey}>
        <div className="load-slide">
          <span>A</span>
          <span>s</span>
          <span>i<div className="pared"></div></span>
          <span>n</span>
          <span>c</span>
          <span>o</span>
          <span>d</span>
          <span>e</span>
        </div>
      </div>
    </>
  );
};
