"use client";

import React, { useEffect, useState } from "react";

import WorkspaceSidebar from "./sidebar/workspace-sidebar";
import { cn } from "@/lib/utils";
import WorkspaceHeader from "./sidebar/workspace-header";

const WorkspaceCustomLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen((o) => !o)
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "[") {
        handleToggle();
      }
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="flex w-screen overflow-hidden">
      <WorkspaceSidebar handleToggle={handleToggle} open={open} />
      <div
        className={cn("flex-grow overflow-x-auto", !open ? "pl-[15px]" : "")}
      >
        <div className={cn(open ? "w-screen md:w-full" : "")}>
          <WorkspaceHeader />
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCustomLayout;
