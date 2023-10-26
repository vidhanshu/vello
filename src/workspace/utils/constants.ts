import { RECENTLY_VIEWED } from "@/src/home/utils/constants";
import { Settings, Trello, UserPlus } from "lucide-react";

export const WORKSPACE_SIDEBAR = {
  links: [
    {
      title: "Boards",
      link: "",
      Icon: Trello,
    },
    {
      title: "Members",
      link: "/members",
      Icon: UserPlus,
    },
    {
      title: "Settings",
      link: "/settings",
      Icon: Settings,
    },
  ],
  boards: RECENTLY_VIEWED,
};
