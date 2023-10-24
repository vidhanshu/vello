"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "usehooks-ts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

import { Button } from "@/components/ui/button";
import usePaginationOutside from "@/src/landing-page/hooks/usePaginationOutside";
import { VELLO_IN_ACTION_CAROUSEL } from "@/src/landing-page/utils/constants";
import { cn } from "@/lib/utils";

const VelloInAction = () => {
  const { activeIndex, setActiveIndex, setSwiper, slideNext, slidePrev } =
    usePaginationOutside();

  const isDown2xl = useMediaQuery("(max-width: 1535px)");
  const isDownXl = useMediaQuery("(max-width: 1279px)");
  const isDownLg = useMediaQuery("(max-width: 1023px)");
  const isDownMd = useMediaQuery("(max-width: 767px)");
  const isDownSm = useMediaQuery("(max-width: 639px)");

  const SLIDES_PER_VIEW = isDownSm
    ? 1
    : isDownMd
    ? 2
    : isDownLg || isDownXl
    ? 3
    : isDown2xl
    ? 4
    : 5;

  const isFirstSlide = activeIndex === 0;
  const isLastSlide =
    activeIndex === VELLO_IN_ACTION_CAROUSEL.length - SLIDES_PER_VIEW;

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xlg m-auto px-4">
        <h1 className="font-bold mb-2">VELLO IN ACTION</h1>
        <h1 className="text-2xl md:text-4xl font-bold pb-4">
          Workflows for any project, big or small
        </h1>
        <div className="flex justify-end">
          <div className="flex gap-x-4">
            <Button
              onClick={!isFirstSlide ? slidePrev : () => {}}
              variant="ghost"
              className={cn(
                "group rounded-full p-2 bg-zinc-100",
                isFirstSlide && "cursor-not-allowed"
              )}
            >
              <ChevronLeft
                className={cn(
                  !isFirstSlide
                    ? "text-gray-600 group-hover:text-[#01c6e5] transition"
                    : "text-gray-400"
                )}
              />
            </Button>
            <Button
              onClick={!isLastSlide ? slideNext : () => {}}
              variant="ghost"
              className={cn(
                "group rounded-full p-2 bg-zinc-100",
                isLastSlide && "cursor-not-allowed"
              )}
            >
              <ChevronRight
                className={cn(
                  !isLastSlide
                    ? "text-gray-600 group-hover:text-[#01c6e5] transition"
                    : "text-gray-400"
                )}
              />
            </Button>
          </div>
        </div>
      </div>
      <Swiper
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        className="mySwiper"
        spaceBetween={14}
        onSwiper={setSwiper}
        slidesPerView={SLIDES_PER_VIEW}
      >
        {VELLO_IN_ACTION_CAROUSEL.map(({ color, description, title, Icon }) => (
          <SwiperSlide key={title}>
            <div className="rounded-lg overflow-hidden shadow-lg min-h-[260px] my-5 mx-4 cursor-pointer">
              <div
                className={"h-12 px-6 relative"}
                style={{ background: color }}
              >
                <div className="w-12 h-12 flex items-center justify-center absolute top-1/2 bg-white rounded-lg">
                  <Icon className={cn("w-8 h-8")} style={{ color }} />
                </div>
              </div>
              <div className="p-6 pt-8">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-w-screen-xlg m-auto px-4 flex flex-col gap-6 items-center pt-8 md:flex-row">
        <p className="text-xl">
          No need to start from scratch. Jump-start your workflow with a proven
          playbook designed for different teams. Customize it to make it yours.
        </p>
        <Button variant="sec">Explore all Use Cases</Button>
      </div>
    </section>
  );
};

export default VelloInAction;
