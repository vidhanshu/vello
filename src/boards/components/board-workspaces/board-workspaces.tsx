import React from "react";

import RenderWorkspace from "./render-workspace";
import { WORKSPACES_BOARDS } from "../../utils/constants";

const BoardWorkspaces = () => {
  return (
    <div>
      <h1 className="uppercase font-bold text-[#44546f] mb-4">
        Your Workspaces
      </h1>

      <div className="space-y-8">
        {WORKSPACES_BOARDS.map((workspace, i) => (
          <RenderWorkspace key={i} {...workspace} />
        ))}
      </div>
    </div>
  );
};

export default BoardWorkspaces;
