"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipContentProps } from "@radix-ui/react-tooltip";
import { FC } from "react";
import { useMediaQuery } from "usehooks-ts";
import useMounted from "../hooks/useMounted";

interface IActionToolTipProps {
  children: React.ReactNode;
  toolTipContentProps?: TooltipContentProps;
  content: React.ReactNode;
}
const ActionToolTip: FC<IActionToolTipProps> = ({
  toolTipContentProps: { className, ...otherContentProps } = {},
  children,
  content,
}) => {
  const mounted = useMounted();
  const isDownMd = useMediaQuery("(max-width: 767px)");

  if (!mounted) {
    return null;
  }

  if (isDownMd) {
    return children;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          className={cn(
            "shadow-none bg-black/70 text-white text-xs",
            className
          )}
          {...otherContentProps}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionToolTip;
