"use client";

import * as z from "zod";
import React, { useState } from "react";
import { CheckIcon, Globe, Lock, Plus, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RECENTLY_VIEWED } from "@/src/home/utils/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  backgroundGradient: z.string().optional(),
  boardTitle: z.string().min(5, {
    message: "👋 Board title is required",
  }),
  workspace: z.string().min(5, {
    message: "👋 Workspace is required",
  }),
  visibility: z.enum(["workspace", "public", "private"]),
});

const CreateBoardPopover = ({ children }: { children: React.ReactNode }) => {
  const [selectedGradient, setSelectedGradient] = useState<string>(
    "linear-gradient(to right,#43cea2,#185a9d)"
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      backgroundGradient: "linear-gradient(to right,#43cea2,#185a9d)",
      boardTitle: "",
      workspace: "",
      visibility: "workspace",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // TODO: create board
  }

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer" asChild>
        {children}
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <div>
          <div
            style={{
              backgroundImage: `url('/images/home/board-preview.svg'), ${selectedGradient}`,
            }}
            className={`
                    h-[140px] 
                    bg-no-repeat
                    bg-[position:center]
                    rounded-md mb-4`}
          />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="backgroundGradient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#44546f] text-xs font-bold">
                      Background
                    </FormLabel>
                    <FormControl>
                      <div className="flex flex-wrap gap-2">
                        {RECENTLY_VIEWED.map((item) => (
                          <button
                            key={item.backgroundGradient}
                            type="button"
                            className="h-[30px] w-[35px] rounded-md hover:opacity-95 flex items-center justify-center"
                            style={{ backgroundImage: item.backgroundGradient }}
                            onClick={() => {
                              // using state to re-render when gradient changes
                              setSelectedGradient(item.backgroundGradient);
                              form.setValue(
                                "backgroundGradient",
                                item.backgroundGradient
                              );
                            }}
                          >
                            {field.value === item.backgroundGradient ? (
                              <CheckIcon className="w-4 h-w text-white" />
                            ) : (
                              ""
                            )}
                          </button>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="boardTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#44546f] text-xs font-bold">
                      Board title
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter board name"
                        variant="primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workspace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#44546f] text-xs font-bold">
                      Workspace
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select workspace" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from(
                          new Set(RECENTLY_VIEWED.map((item) => item.workspace))
                        ).map((workspace) => (
                          <SelectItem key={workspace} value={workspace}>
                            {workspace}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="visibility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#44546f] text-xs font-bold">
                      Visibility
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="workspace">
                          <div className="flex gap-x-4 items-center">
                            <Users className="w-4 h-4" />
                            <h1>Workspace</h1>
                          </div>
                        </SelectItem>
                        <SelectItem value="private">
                          <div className="flex gap-x-4 items-center">
                            <Lock className="w-4 h-4" />
                            <h1>Private</h1>
                          </div>
                        </SelectItem>
                        <SelectItem value="public">
                          <div className="flex gap-x-4 items-center">
                            <Globe className="w-4 h-4" />
                            <h1>Public</h1>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                variant="primary"
                size="sm"
                className="w-full md:w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Create
              </Button>
            </form>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CreateBoardPopover;
