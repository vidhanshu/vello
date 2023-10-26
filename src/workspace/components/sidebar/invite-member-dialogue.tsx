"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";

type TInviteMemberDialogueProps = {
  children: React.ReactNode;
};
const InviteMemberDialogue = ({ children }: TInviteMemberDialogueProps) => {
  const [link, setLink] = useState("");

  const createLink = () => {
    setLink("https://example.com");
  };

  const disableLink = () => {
    setLink("");
  }

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-zinc-600">
            Invite to workspace
          </DialogTitle>
          <DialogDescription>
            <div className="space-y-6">
              <Input placeholder="Email address or name" variant="primary" />
              <div className="flex justify-between items-center">
                <div>
                  <p>Invite someone to this workspace using link:</p>
                  {link  && <span onClick={disableLink} className="link">disable link</span>}
                </div>
                <button
                  onClick={createLink}
                  className="click-link px-4 py-1 bg-gray-100 rounded-sm flex gap-x-4 items-center text-sm"
                >
                  <Link className="w-4 h-4" />
                  {link ? "Copy link" : "Create link"}
                </button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InviteMemberDialogue;
