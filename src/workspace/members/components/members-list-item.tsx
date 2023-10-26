import { X } from "lucide-react";
import React from "react";

type TMembersListItemWithActionsProps = {
  email: string;
  username: string;
  role: string;
  request: string;
};

const MembersListItemWithActions = ({
  email,
  username,
}: TMembersListItemWithActionsProps) => {
  return (
    <div className="border-b max-w-4xl last:border-none py-4 flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <div className="w-8 h-8 uppercase flex justify-center items-center rounded-full bg-gray-200">
          {username.length ? username[0] : "N"}
        </div>
        <div>
          <h1>{email}</h1>
          <p className="text-xs">{username}</p>
        </div>
      </div>
      <button className="click-link px-2 py-1 bg-gray-100 rounded-sm flex gap-x-4 items-center text-sm cursor-pointer">
        <X className="w-4 h-4" />
        <span className="hidden md:block">Remove</span>
      </button>
    </div>
  );
};

export default MembersListItemWithActions;
