'use client';

import React, { ElementRef, useEffect, useRef, useState } from 'react';

import WorkspaceSidebar from './sidebar/workspace-sidebar';
import { cn } from '@/lib/utils';
import WorkspaceHeader from './sidebar/workspace-header';
import ActionToolTip from '@/src/common/components/action-tool-tip';
import { ChevronRight } from 'lucide-react';
import useSidebar from '../hooks/useSidebar';

const WorkspaceCustomLayout = ({
    children,
    showHeader = true,
}: {
    children: React.ReactNode;
    showHeader?: boolean;
}) => {
    const { handleToggle, navbarRef, open, sidebarRef } = useSidebar();

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === '[') {
                handleToggle();
            }
        };
        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex w-screen overflow-hidden">
            {/* sidebar */}
            <>
                <WorkspaceSidebar
                    ref={sidebarRef}
                    handleToggle={handleToggle}
                    open={open}
                />
                {/* this is a line which is visible when navbar is close on left */}
                <ActionToolTip content="Expand sidebar [">
                    <div
                        ref={navbarRef}
                        onClick={handleToggle}
                        className="bg-zinc-400  hover:bg-zinc-500 fixed top-0 bottom-0 w-[15px] group cursor-pointer left-0 duration-300"
                    >
                        <div className="transform click-link p-1 bg-gray-300 rounded-full absolute top-16 left-1 group-hover:bg-gray-400">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>
                </ActionToolTip>
            </>
            {/* main content */}
            <div
                className={cn(
                    'flex-grow overflow-x-auto',
                    !open ? 'pl-[15px]' : ''
                )}
            >
                <div className={cn(open ? 'w-screen md:w-full' : '')}>
                    {showHeader && <WorkspaceHeader />}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default WorkspaceCustomLayout;
