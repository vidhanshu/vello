import Link from "next/link";
import Image from "next/image";
import React from "react";

import { FEATURES } from "@/src/landing-page/utils/constants";
import { Button } from "@/components/ui/button";
import { TFeatureCardProps } from "../types";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default Features;

const FeatureCard = ({
  description,
  img,
  link,
  linkTitle,
  title,
}: TFeatureCardProps) => {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg">
      <Image width={100} height={100} src={img} alt={title} />
      <h1 className="text-2xl font-semibold mt-4">{title}</h1>
      <p className="min-h-[100px] mt-2 mb-6">{description}</p>
      <Link href={link}>
        <Button size="primary" variant="sec">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};
