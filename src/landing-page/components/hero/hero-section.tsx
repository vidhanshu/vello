import Image from "next/image";
import React from "react";
import { PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { APP_NAME } from "@/src/common/utils/constants";

const HeroSection = () => {
  return (
    <section
      className="
        px-4 
        bg-[url('//images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRLaVk2MdBjtJ/99c266ed4cb8cc63bd0c388071f01ff6/white-wave-bg.svg'),_linear-gradient(60deg,rgb(82,67,170),rgb(237,80,180))]
        bg-[position:center_bottom]
        bg-[size:100%]
        bg-no-repeat
        "
    >
      <div className="max-w-[1100px] m-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-4 lg:pr-2 py-16 lg:py-24">
          <h1 className="text-3xl md:text-[44px] lg:text-5xl font-bold text-white md:leading-[1.25] max-w-xl md:max-w-2xl text-center m-auto lg:text-left">
            {APP_NAME} brings all your tasks, teammates, and tools together
          </h1>
          <p className="text-xl text-white text-center lg:text-left lg:max-w-lg">
            Keep everything in the same place—even if your team isn't.
          </p>
          <div className="flex flex-col gap-y-6 items-center lg:items-start">
            <div className="lg:mt-4 flex items-center gap-x-4">
              <Input
                placeholder="Email"
                className="flex-shrink-0 hidden lg:block"
              />
              <Button className="mt-2 lg:mt-0" variant="primary" size="primary">
                Sign up - it's free!
              </Button>
            </div>
            <div className="group hover:text-white text-[#e3daee] flex gap-x-2 cursor-pointer">
              <span className="underline">Watch video</span>
              <PlayCircle className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
        <div className="lg:pl-2 lg:py-20 w-fit m-auto">
          <Image
            src="/images/landing-page/hero/hero.png"
            alt="hero-image"
            width={633}
            height={559}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
