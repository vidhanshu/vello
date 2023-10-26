"use client";

import React, { useState } from "react";

import WorkspaceSidebar from "./sidebar/workspace-sidebar";
import { cn } from "@/lib/utils";
import WorkspaceHeader from "./sidebar/workspace-header";

const WorkspaceCustomLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex w-screen overflow-hidden">
      <WorkspaceSidebar handleToggle={() => setOpen((o) => !o)} open={open} />
      <div
        className={cn("flex-grow overflow-x-auto", !open ? "pl-[30px]" : "")}
      >
        <WorkspaceHeader />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceCustomLayout;
