import Image from "next/image";
import React from "react";

const NoFeedCard = () => {
  return (
    <div className="shadow-md border rounded-md overflow-hidden">
      <div className="relative h-[129px] bg-[url('/images/home/no-feed.svg')] bg-no-repeat bg-cover bg-center" />
      <div className="p-4">
        <h1 className="text-lg font-bold text-center mb-2">
          Stay on track and up to date
        </h1>
        <p className="text-center text-sm text-slate-700">
          Invite people to boards and cards, leave comments, add due dates, and
          we&apos;ll show the most important activity here.
        </p>
      </div>
    </div>
  );
};

export default NoFeedCard;
