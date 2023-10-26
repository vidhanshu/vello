import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Star,
} from "lucide-react";

import WorkspaceAvatar from "@/src/home/components/home-sidebar/workspace-avatar";
import CreateBoardPopover from "@/src/home/components/home-feed-right-sidebar/create-board-popover";
import { WORKSPACE_SIDEBAR } from "@/src/workspace/utils/constants";
import { cn } from "@/lib/utils";
import stringShortener from "@/src/common/utils/string-shortener";
import ActionToolTip from "@/src/common/components/action-tool-tip";

const WorkspaceSidebar = ({
  open,
  handleToggle,
}: {
  open: boolean;
  handleToggle: () => void;
}) => {
  const pathname = usePathname();
  const { workspace }: { workspace: string } = useParams();

  return (
    <>
      <div
        className={cn(
          "min-w-[260px] h-[calc(100vh-52px)]",
          open ? "" : "-ml-[260px]"
        )}
      >
        <div
          className={cn(
            "min-w-[260px] h-[calc(100vh-52px)] overflow-y-auto fixed border-r",
            open ? "" : "-l-[260px]"
          )}
        >
          <div className="p-3 flex justify-between items-center border-b mb-4">
            <WorkspaceAvatar workspace={workspace} showName />
            <ActionToolTip
              content="Collapse sidebar ["
              toolTipContentProps={{
                side: "bottom",
              }}
            >
              <div onClick={handleToggle} className="transform click-link">
                <ChevronLeft className="w-4 h-4" />
              </div>
            </ActionToolTip>
          </div>

          <ul>
            {WORKSPACE_SIDEBAR.links.map(({ Icon, title, link }, i) => {
              const linkOfItem = `/w/${workspace}${link}`;
              const active = pathname === linkOfItem;

              return (
                <li
                  key={link}
                  className={cn(
                    "click-link rounded-none py-2",
                    active ? "bg-main/10" : ""
                  )}
                >
                  <Link
                    href={linkOfItem}
                    className={cn(
                      "flex gap-x-4 items-center text-sm",
                      active ? "text-main font-semibold" : ""
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4 text-gray-600",
                        active ? "text-main" : ""
                      )}
                    />
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-5">
            <div className="flex justify-between items-center mb-2 px-3">
              <h1 className="font-semibold text-sm text-[#172b4d]">
                Your boards
              </h1>
              <CreateBoardPopover>
                <button className="click-link p-1 rounded-sm">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </CreateBoardPopover>
            </div>
            <ul>
              {WORKSPACE_SIDEBAR.boards.map(
                ({ backgroundGradient, isFavorite, title, workspace }, i) => (
                  <li
                    key={i}
                    className="click-link rounded-none py-2 flex justify-between items-center group"
                  >
                    <Link
                      href="/"
                      className="flex items-center gap-x-4 text-sm"
                    >
                      <div
                        className="h-[25px] w-[30px] rounded-md"
                        style={{ backgroundImage: backgroundGradient }}
                      />
                      <h1>{stringShortener(title, 16)}</h1>
                    </Link>
                    <div className="gap-x-2 items-center hidden group-hover:flex">
                      <button className="click-link-deep p-1 rounded-sm">
                        <MoreHorizontal className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="click-link-deep p-1 rounded-sm">
                        <Star
                          className={cn(
                            "w-4 h-4",
                            isFavorite ? "fill-yellow-500 text-yellow-500" : ""
                          )}
                        />
                      </button>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <ActionToolTip content="Expand sidebar [">
        <div
          onClick={handleToggle}
          className={cn(
            "bg-zinc-400  hover:bg-zinc-500 fixed top-0 bottom-0 w-[15px] group cursor-pointer",
            !open ? "left-0" : "-left-[30px]"
          )}
        >
          <div className="transform click-link p-1 bg-gray-300 rounded-full absolute top-16 left-1 group-hover:bg-gray-400">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </ActionToolTip>
    </>
  );
};

export default WorkspaceSidebar;
