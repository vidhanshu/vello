"use client";

import Image from "next/image";
import React from "react";

import Menu from "./menu";
import MobileMenu from "./mobile-menu";

import { APP_NAME } from "@/src/common/utils/constants";

const Navbar = () => {
  return (
    <nav className="shadow-md sticky top-0 bg-white py-2 lg:py-0 z-50">
      <div className="max-w-screen-xl m-auto flex justify-between lg:pl-4 px-4 items-center lg:items-stretch">
        <div className="flex">
          <Image
            src="/images/common/logo.svg"
            width={100}
            height={60}
            alt="logo"
            className="h-auto w-auto mr-4"
          />
          <div className="py-[10px] hidden lg:block">
            <Menu />
          </div>
        </div>
        <div className="hidden lg:flex">
          <button className="px-4 text-lg font-medium">Log in</button>
          <button className="px-4 text-lg font-medium bg-[#0165fe] hover:bg-blue-700 text-white">
            Get {APP_NAME} for free
          </button>
        </div>

        <div className="lg:hidden flex items-center justify-center">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
