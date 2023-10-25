"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import usePaginationOutside from "@/src/landing-page/hooks/usePaginationOutside";
import { VELLO_101_CAROUSEL } from "@/src/landing-page/utils/constants";
import { cn } from "@/lib/utils";

const Vello101Carousel = () => {
  const { activeIndex, setActiveIndex, setSwiper } = usePaginationOutside();

  return (
    <div className="grid grid-cols-12 mt-10 gap-y-8 lg:gap-x-8 lg:gap-y-0">
      <div className="col-span-12 row-start-13 lg:row-start-auto lg:col-span-4 flex flex-col justify-between">
        {VELLO_101_CAROUSEL.content.map((item, i) => (
          <div
            key={item.title}
            className={cn(
              "rounded-lg px-4 py-2 border-l-8 border-transparent select-none cursor-pointer",
              activeIndex == i &&
                "border-l-8 border-[#01c6e5] bg-white shadow-[rgba(9,30,66,0.15)_0px_0.5rem_1rem_0px] "
            )}
            onClick={() => setActiveIndex(i)}
          >
            <h1 className="font-bold">{item.title}</h1>
            <p className="font-medium">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="col-span-12 row-start-1 lg:row-start-auto lg:col-span-8">
        <Swiper
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="mySwiper"
          spaceBetween={14}
          onSwiper={setSwiper}
        >
          {VELLO_101_CAROUSEL.images.map((img) => (
            <SwiperSlide key={img}>
              <div className="h-[240px] sm:h-[400px] lg:h-[480px] rounded-lg relative">
                <Image draggable={false} src={img} alt="" fill />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Vello101Carousel;
