"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  History,
  Plus,
  Search,
  Star,
  UserCircle,
} from "lucide-react";

import NavbarSkeleton from "./navbar-skeleton";
import BoardListItem from "./board-list-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ActionToolTip from "@/src/common/components/action-tool-tip";
import { RECENTLY_VIEWED } from "@/src/home/utils/constants";
import useMounted from "@/src/common/hooks/useMounted";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const mounted = useMounted();

  if (!mounted) {
    return <NavbarSkeleton />;
  }

  return (
    <nav className="px-4 md:px-8 py-1 border-b flex justify-between items-center sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-x-1 md:gap-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/home" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "p-0 md:px-4 md:py-2"
                  )}
                >
                  <Image
                    src="/images/common/vello-logo.svg"
                    width={75}
                    height={32}
                    alt="logo"
                  />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="h-[30px]">
                Recents
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[350px] space-y-4 p-4">
                  {RECENTLY_VIEWED.map((item) => (
                    <BoardListItem key={item.title} {...item} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="h-[30px]">
                Starred
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[350px] p-4">
                  <Image
                    src="/images/home/starred.svg"
                    width={300}
                    height={300}
                    alt="starred boards"
                    className="mx-auto"
                  />
                  <p className="text-[#44546f] my-4 text-center">
                    Star important boards to access them quickly and easily.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden rounded-sm px-2 h-[30px] flex items-center gap-x-2">
            More <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <History className="w-4 h-4 mr-2" />
              Recents
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star className="w-4 h-4 mr-2" /> Starred
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="primary" className="h-[30px]">
          <span className="hidden md:block">Create</span>
          <Plus className="md:hidden w-4 h-4" />
        </Button>
      </div>
      <div className="flex gap-x-2 items-center">
        <ActionToolTip
          content={
            <div className="flex items-center gap-x-2">Search [ / ]</div>
          }
        >
          <div className="hidden border md:flex items-center px-2 py-1 rounded-sm">
            <Search className="w-3 h-3" />
            <Input
              className="border-none py-0 px-2 placeholder:text-sm focus-visible:ring-offset-0"
              placeholder="Search"
            />
          </div>
          <div className="md:hidden p-1 w-8 h-8 rounded-full click-link flex justify-center items-center">
            <Search className="w-4 h-4" />
          </div>
        </ActionToolTip>
        <ActionToolTip content="Notifications">
          <div className="p-1 w-8 h-8 rounded-full click-link flex justify-center items-center">
            <Bell className="w-4 h-4" />
          </div>
        </ActionToolTip>
        <ActionToolTip content="Profile">
          <div className="p-1 w-8 h-8 rounded-full click-link flex justify-center items-center">
            <UserCircle className="w-4 h-4" />
          </div>
        </ActionToolTip>
      </div>
    </nav>
  );
};

export default Navbar;
