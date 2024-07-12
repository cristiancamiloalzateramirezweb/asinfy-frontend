import React from "react";
import { HeroSection } from "../../components/hero-section/HeroSection";
import { WhatSection } from "../../components/what-section/WhatSection";
import { ReasonSection } from "../../components/reason-section/ReasonSection";
import { ProductSection } from "../../components/product-section/ProductSection";
import { ProcessSection } from "../../components/process-section/ProcessSection";
import { StoreSection } from "../../components/store-section/StoreSection";
import { AlliesSection } from "../../components/allies-section/AlliesSection";

export const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <WhatSection></WhatSection>
      <ReasonSection></ReasonSection>
      <ProductSection></ProductSection>
      <ProcessSection></ProcessSection>
      <StoreSection></StoreSection>
      <AlliesSection></AlliesSection>
    </>
  );
};
