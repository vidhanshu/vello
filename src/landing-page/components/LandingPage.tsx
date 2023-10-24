import React from "react";

import HeroSection from "./hero/hero-section";
import Vello101 from "./vello-101/vello-101-section";
import VelloInAction from "./vello-in-action/vello-in-action-section";
import SeeWorkSection from "./see-work/see-work-section";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Vello101 />
      <VelloInAction/>
      <SeeWorkSection/>
    </>
  );
};

export default LandingPage;
