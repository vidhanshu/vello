"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, KanbanSquare } from "lucide-react";

import { cn } from "@/lib/utils";

const SIDEBARS = [
  {
    Icon: KanbanSquare,
    title: "Boards",
    href: "/boards",
  },
  {
    Icon: Activity,
    title: "Home",
    href: "/home",
  },
];

const HomeSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed w-[250px]">
      <ul className="space-y-2 border-b pb-2">
        {SIDEBARS.map(({ Icon, href, title }, idx) => {
          const active = pathname.includes(href);

          return (
            <li
              key={idx}
              className={cn(
                "hover:bg-gray-200 rounded-sm",
                active ? "bg-blue-50" : ""
              )}
            >
              <Link href={href}>
                <button
                  className={cn(
                    "p-2 rounded-md flex gap-x-4 items-center font-semibold text-sm",
                    active ? "text-main" : ""
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 text-[#44556e]",
                      active ? "text-main" : ""
                    )}
                  />{" "}
                  {title}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeSidebar;
