import React from "react";
import Features from "./features";
import TestimonialCarousel from "./testimonial-carousel";
import Pricing from "./pricing";
import VelloStats from "./vello-stats";
import GetStartedToday from "./get-started-today";

const WaysToGrow = () => {
  return (
    <section className="bg-gradient-to-t from-transparent via-[#e6fcfe] to-transparent pt-48">
      <div className="max-w-screen-xlg m-auto px-4">
        <h1 className="font-bold mb-2">POWERFUL WAYS TO GROW</h1>
        <h1 className="text-2xl md:text-4xl font-bold pb-4">
          Do more with Vello
        </h1>
        <p className="text-xl max-w-xl mb-6">
          Vello&apos;s intuitive features give any team the ability to quickly set
          up and customize workflows for just about anything.
        </p>
        <Features />
        <TestimonialCarousel />
        <Pricing />
        <VelloStats />
      </div>
      <GetStartedToday />
    </section>
  );
};

export default WaysToGrow;
