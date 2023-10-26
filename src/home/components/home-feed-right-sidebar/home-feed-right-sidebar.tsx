import React from "react";
import { Clock4 } from "lucide-react";

import BoardListItem from "../navbar/board-list-item";

import { RECENTLY_VIEWED } from "@/src/home/utils/constants";
import CreateBoardPopover from "./create-board-popover";

const HomeFeedRightSidebar = () => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-sm flex items-center gap-x-2 mb-4">
          <Clock4 className="w-3 h-3" />
          Recently viewed
        </h1>

        <div className="space-y-2 max-h-[450px] overflow-y-auto">
          {RECENTLY_VIEWED.map((item) => (
            <BoardListItem key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-sm flex items-center gap-x-2 mb-4 mt-8">Links</h1>
        <CreateBoardPopover />
      </div>
    </div>
  );
};

export default HomeFeedRightSidebar;
