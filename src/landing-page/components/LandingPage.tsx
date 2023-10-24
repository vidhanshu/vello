import React from "react";

import HeroSection from "./hero/hero-section";
import Vello101 from "./vello-101/vello-101-section";
import VelloInAction from "./vello-in-action/vello-in-action-section";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Vello101 />
      <VelloInAction/>
    </>
  );
};

export default LandingPage;
