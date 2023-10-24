"use client";

import Link from "next/link";
import React from "react";

import Vello101Carousel from "./vello-101-carousel";

const Vello101 = () => {
  return (
    <section className="bg-gradient-to-t from-[#e6fcfe] from-[30%] pb-24 pt-4">
      <div className="max-w-screen-xlg m-auto px-4">
        <h1 className="font-bold mb-2">VELLO 101</h1>
        <h1 className="text-2xl md:text-4xl font-bold pb-4">A productivity powerhouse</h1>
        <p className="text-xl max-w-xl">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who's doing what and what needs to get
          done. Learn more in our{" "}
          <Link className="underline text-blue-600" href="#">
            guide for getting started.
          </Link>
        </p>
        <Vello101Carousel />
      </div>
    </section>
  );
};

export default Vello101;
