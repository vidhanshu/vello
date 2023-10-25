import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NAVBAR } from "@/src/landing-page/utils/constants";
import { APP_NAME } from "@/src/common/utils/constants";

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetDescription>
              <Accordion type="single" collapsible className="text-left">
                {NAVBAR.map((component, i) =>
                  component.href ? (
                    <Link href={component.href} key={component.title}>
                      <div className="py-4 font-semibold text-black">
                        {component.title}
                      </div>
                    </Link>
                  ) : (
                    <AccordionItem
                      key={component.title}
                      value={component.title}
                    >
                      <AccordionTrigger className="hover:no-underline font-semibold text-black">
                        {component.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col divide-y-[1px]">
                          {component.items?.map((item) => (
                            <Link
                              href={item.href}
                              key={item.title}
                              className="py-4 pl-4 last:pb-0 hover:text-main"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
              <div className="space-y-4 mt-4">
                <Link className="block" href="/signup">
                  <Button variant="primary">Get {APP_NAME} for free</Button>
                </Link>
                <Link className="block" href="/login">
                  <Button variant="sec">Login</Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
