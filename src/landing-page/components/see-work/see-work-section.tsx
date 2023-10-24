"use client";

import React from "react";
import { useMediaQuery } from "usehooks-ts";

import WorkCard from "./work-card";

import { Button } from "@/components/ui/button";
import { SEE_WORK_CARDS } from "@/src/landing-page/utils/constants";

const SeeWorkSection = () => {
  const isDownLg = useMediaQuery("(max-width: 1023px)");

  return (
    <section
      className="py-12 pb-0"
      style={{
        background: `${
          isDownLg
            ? ""
            : 'url("/images/landing-page/see-work/left.svg") left center / contain no-repeat scroll padding-box border-box, url("/images/landing-page/see-work/right.svg") right center / contain no-repeat scroll padding-box border-box, '
        } linear-gradient(240deg, rgb(0, 184, 217), rgb(0, 101, 255)) 0% 0% / auto repeat scroll padding-box border-box rgb(0, 101, 255)`,
      }}
    >
      <div className="max-w-screen-xlg m-auto px-4">
        <div className="space-y-4 ">
          <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
            See work in a whole new way
          </h1>
          <p className="text-xl text-white text-center max-w-2xl m-auto">
            View your team's projects from every angle and bring a fresh
            perspective to the task at hand.
          </p>
          <Button variant="sec" size="primary" className="m-auto block">
            Discover all Vello views
          </Button>
        </div>

        <div className="translate-y-10 space-y-10">
          {SEE_WORK_CARDS.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeWorkSection;
