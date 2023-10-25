import React from "react";

import { Button } from "@/components/ui/button";
import { PRICING_CARDS } from "@/src/landing-page/utils/constants";

import { TPricingCardProps } from "../types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <div className="pb-20 pt-10">
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-bold">
          Trello priced your way
        </h1>
        <p className="text-center max-w-2xl m-auto text-xl">
          Trusted by millions, Trello powers teams all around the world.
        </p>
        <Button className="block m-auto" variant="primary" size="primary">
          Compare plans
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-14 gap-y-4 md:gap-y-0">
        {PRICING_CARDS.map((pricing) => (
          <PricingCard key={pricing.name} {...pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;

const PricingCard = ({
  description,
  frequencyInfo,
  link,
  linkTitle,
  name,
  price,
}: TPricingCardProps) => {
  return (
    <div
      className={cn(
        "py-6 px-4 bg-white space-y-6 md:space-y-4 last:border-r-[1px] md:last:border-l-0",
        name === "PREMIUM" ? "border-sec border-[2px]" : "border-[1px] md:border-r-0"
      )}
    >
      <h1 className="font-bold">{name}</h1>
      <div className="space-y-2">
        <h2 className="font-semibold text-5xl">
          <span className="text-base">$</span>
          {price}
          <span className="text-base">USD</span>
        </h2>
        <p className="text-xs text-slate-600 md:h-9">{frequencyInfo}</p>
      </div>
      <p className="font-medium text-base min-h-12 md:h-48 pb-4">{description}</p>
      <Link href={link}>
        <Button className={cn("w-fit",name === "PREMIUM" ? "bg-sec/10": "")} variant="secAq" size="primary">
          {linkTitle}
        </Button>
      </Link>
      <div>
        <Link className="underline text-blue-700 font-semibold" href="/">
          Learn more about <span className="lowercase">{name}</span>
        </Link>
      </div>
    </div>
  );
};
