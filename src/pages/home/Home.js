import React, { useState, useEffect } from "react";
import { HeroSection } from "../../components/hero-section/HeroSection";
import { WhatSection } from "../../components/what-section/WhatSection";
import { ReasonSection } from "../../components/reason-section/ReasonSection";
import { ProductSection } from "../../components/product-section/ProductSection";
import { ProcessSection } from "../../components/process-section/ProcessSection";
import { DiscoverSection } from "../../components/discover-section/DiscoverSection";
import { AlliesSection } from "../../components/allies-section/AlliesSection";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  const [activo, setActivo] = useState("componente1");

  useEffect(() => {
    const handleScroll = () => {
      const componentes = [
        document.getElementById("componente1"),
        document.getElementById("componente2"),
        document.getElementById("componente3"),
        document.getElementById("componente4"),
        document.getElementById("componente5"),
        document.getElementById("componente6"),
      ];

      const scrollPosition = window.scrollY;
      const posComponentes = componentes.map((comp) => comp.offsetTop);

      let componenteActivo = "";
      posComponentes.forEach((pos, index) => {
        if (
          scrollPosition >= pos &&
          (index === posComponentes.length - 1 ||
            scrollPosition < posComponentes[index + 1])
        ) {
          componenteActivo = `componente${index + 1}`;
        }
      });
      setActivo(componenteActivo);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActivo(id);
    }
  };

  return (
    <>
      <Header activo={activo} scrollToSection={scrollToSection}></Header>
      <div id="componente1">
        <HeroSection></HeroSection>
      </div>
      <div id="componente2">
        <WhatSection></WhatSection>
      </div>
      <div id="componente3">
        <ReasonSection></ReasonSection>
      </div>
      <div id="componente4">
        <ProductSection></ProductSection>
      </div>
      <div id="componente5">
        <ProcessSection></ProcessSection>
      </div>
      <div id="componente6">
        <DiscoverSection></DiscoverSection>
      </div>
      <AlliesSection></AlliesSection>
      <Footer></Footer>
    </>
  );
};
