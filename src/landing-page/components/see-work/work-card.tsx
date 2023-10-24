import Link from "next/link";
import React from "react";
import Image from "next/image";

import { TWorkCardProps } from "../types";

const WorkCard = ({
  Icon,
  description,
  img,
  link,
  linkTitle,
  title,
  color,
}: TWorkCardProps) => {
  return (
    <div className="p-8 grid grid-cols-12 gap-y-10 md:gap-x-10 bg-white rounded-lg shadow-xl md:items-center">
      <div className="col-span-12 md:col-span-7">
        <Image
          className="m-auto max-w-[550px] w-full h-auto"
          src={img}
          alt={title}
          width={550}
          height={250}
        />
      </div>
      <div className="col-span-12 md:col-span-5">
        <h1 className="flex gap-x-4 items-center font-bold mb-4">
          <Icon style={{ color }} className="" /> {title}
        </h1>
        <p className="text-xl mb-6">{description}</p>
        <Link href={link} className="text-blue-700 underline text-xl">
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
