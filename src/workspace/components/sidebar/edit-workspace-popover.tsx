'use client';

import * as z from 'zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
    name: z.string().min(5).max(20),
    description: z.string().min(2).max(500),
});

const EditWorkspacePopover = ({
    children,
    defaultValues = {
        name: '',
        description: '',
    },
}: {
    children: React.ReactNode;
    defaultValues?: {
        name: string;
        description: string;
    };
}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        // TODO: create board
        console.log(data);
    }

    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer" asChild>
                {children}
            </PopoverTrigger>

            <PopoverContent className="w-80">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#44546f] text-xs font-bold">
                                        Name
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
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#44546f] text-xs font-bold">
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter board name"
                                            variant="primary"
                                            {...field}
                                        />
                                    </FormControl>
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
                            Update
                        </Button>
                    </form>
                </Form>
            </PopoverContent>
        </Popover>
    );
};

export default EditWorkspacePopover;
