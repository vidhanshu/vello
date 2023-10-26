import { cn } from "@/lib/utils";
import React from "react";

const WorkspaceAvatar = ({
  workspace = "Noname",
  showName = false,
  avatarProps: { className: avatarClassName, ...otherAvatarProps } = {},
  containerProps: {
    className: containerClassName,
    ...otherContainerProps
  } = {},
  children,
}: {
  workspace: string;
  showName?: boolean;
  avatarProps?: React.HTMLAttributes<HTMLDivElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("flex items-center gap-x-4", containerClassName)}
      {...otherContainerProps}
    >
      <div
        className={cn(
          "w-[30px] h-[30px] flex justify-center items-center bg-[linear-gradient(to_right,#00c6ff,#0072ff)] text-white rounded-sm",
          avatarClassName
        )}
        {...otherAvatarProps}
      >
        {workspace[0]}
      </div>
      {children ? children : showName ? workspace : ""}
    </div>
  );
};

export default WorkspaceAvatar;
