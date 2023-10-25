import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const GetStartedToday = () => {
  return (
    <div className="
      bg-[linear-gradient(60deg,rgb(82,67,170),rgb(237,80,180))]
      lg:bg-[url('/images/landing-page/get-started/left.svg')_,_url('/images/landing-page/get-started/right.svg'),_linear-gradient(60deg,rgb(82,67,170),rgb(237,80,180))] 
      lg:bg-no-repeat 
      lg:bg-[position:left,_right] 
      lg:bg-contain 
      lg:box-border">
      <div className="max-w-screen-xlg m-auto px-4 py-20">
        <h1 className="text-center font-bold text-2xl md:text-4xl text-white mb-4">
          Get started with Trello today
        </h1>
        <div className="flex items-center gap-x-4 justify-center">
          <Input placeholder="Email" className="max-w-lg hidden md:block" />
          <Button className="md:w-fit" variant="primary" size="primary">
            Sign up - it&apos;s free!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedToday;
