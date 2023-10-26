"use client";

import { cn } from "@/lib/utils";
import { Briefcase, CircleDashed, User2 } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const SIDEBAR = [
  {
    title: "Workspace members",
    link: "",
  },
  {
    title: "Guests",
    link: "/guests",
  },
  {
    title: "Pending",
    link: "/pending",
  },
];

const MembersSidebar = () => {
  const { workspace }: { workspace: string } = useParams();
  const pathname = usePathname();

  return (
    <ul className="md:col-span-3 col-span-12 p-4 md:space-y-1 flex flex-col gap-y-1 md:block">
      <li className="mb-4">
        <h1 className="font-bold text-blue-900">Members</h1>
      </li>
      {SIDEBAR.map(({ link, title }, i) => {
        const linkOfItem = `/w/${workspace}/members${link}`;
        const active = pathname === linkOfItem;

        return (
          <li
            key={link}
            className={cn("click-link py-2", active ? "bg-main/10" : "")}
          >
            <Link
              href={linkOfItem}
              className={cn(
                "flex gap-x-4 items-center text-sm",
                active ? "text-main font-semibold" : ""
              )}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MembersSidebar;
