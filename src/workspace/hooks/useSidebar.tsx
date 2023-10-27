import { ElementRef, useRef, useState } from "react";

const useSidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const handleToggle = () => {
    setOpen((o) => {
      const updatedState = !o;
      if (sidebarRef.current) {
        sidebarRef.current.style.setProperty(
          "left",
          updatedState ? "0" : "-260px"
        );
      }
      if (navbarRef.current) {
        navbarRef.current.style.setProperty(
          "left",
          updatedState ? "-30px" : "0px"
        );
      }
      return updatedState;
    });
  };

  return {
    handleToggle,
    sidebarRef,
    navbarRef,
    open,
  };
};
export default useSidebar;
