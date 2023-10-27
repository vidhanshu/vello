'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Plus, Settings, Trello, UserPlus } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { HOME_FEED_SIDEBAR } from '@/src/home/utils/constants';
import WorkspaceAvatar from './workspace-avatar';

const HomeSidebar = () => {
    const pathname = usePathname();

    return (
        <div className="fixed w-[250px]">
            <ul className="space-y-2 border-b pb-2">
                {HOME_FEED_SIDEBAR.links.map(({ Icon, href, title }, idx) => {
                    const active = pathname.includes(href);

                    return (
                        <li
                            key={idx}
                            className={cn(
                                'hover:bg-gray-200 rounded-sm',
                                active ? 'bg-blue-50' : ''
                            )}
                        >
                            <Link href={href}>
                                <button
                                    className={cn(
                                        'p-2 rounded-md flex gap-x-4 items-center font-semibold text-sm',
                                        active ? 'text-main' : ''
                                    )}
                                >
                                    <Icon
                                        className={cn(
                                            'w-4 h-4 text-[#44556e]',
                                            active ? 'text-main' : ''
                                        )}
                                    />{' '}
                                    {title}
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="py-4">
                <div className="flex justify-between items-center px-2 mb-2">
                    <h1 className="text-xs text-gray-500 font-bold">
                        Workspaces
                    </h1>
                    <button className="p-1 click-link">
                        <Plus className="text-slate-600 w-4 h-4" />
                    </button>
                </div>
                <Accordion type="multiple">
                    {HOME_FEED_SIDEBAR.workspace.map((workspace, idx) => (
                        <AccordionItem
                            key={idx}
                            value={workspace}
                            className="border-none"
                        >
                            <AccordionTrigger className="click-link focus:no-underline hover:no-underline py-2 text-sm font-semibold">
                                <WorkspaceAvatar
                                    showName
                                    workspace={workspace}
                                />
                            </AccordionTrigger>
                            <AccordionContent className="pl-4 py-2 text-[#45546e]">
                                <ul>
                                    <li className="click-link py-2">
                                        <Link
                                            href={`/w/${workspace}`}
                                            className="flex gap-x-4 items-center"
                                        >
                                            <Trello className="w-4 h-4" />
                                            Boards
                                        </Link>
                                    </li>
                                    <li className="click-link py-2 group">
                                        <Link
                                            href={`/w/${workspace}/members`}
                                            className="flex justify-between items-center"
                                        >
                                            <div className="flex items-center gap-x-4">
                                                <UserPlus className="w-4 h-4" />
                                                Members
                                            </div>
                                            <div className="flex gap-x-4 items-center">
                                                <Plus className="group-hover:-translate-x-1 transition w-4 h-4 text-gray-500" />
                                                <ChevronRight className="hidden transition translate-x-2 group-hover:block group-hover:-translate-x-2  h-4 text-gray-500" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="click-link py-2">
                                        <Link
                                            href={`/w/${workspace}/settings`}
                                            className="flex gap-x-4 items-center"
                                        >
                                            <Settings className="w-4 h-4" />
                                            Settings
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default HomeSidebar;
