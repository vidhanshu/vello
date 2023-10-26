import React from "react";

import MembersSidebar from "@/src/workspace/members/components/members-sidebar/members-sidebar";

const MembersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <MembersSidebar />
        <div className="col-span-12 md:col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default MembersLayout;
