import React, { forwardRef, ElementRef } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import {
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    Plus,
    Star,
} from 'lucide-react';

import WorkspaceAvatar from '@/src/home/components/home-sidebar/workspace-avatar';
import CreateBoardPopover from '@/src/home/components/home-feed-right-sidebar/create-board-popover';
import { WORKSPACE_SIDEBAR } from '@/src/workspace/utils/constants';
import { cn } from '@/lib/utils';
import stringShortener from '@/src/common/utils/string-shortener';
import ActionToolTip from '@/src/common/components/action-tool-tip';

const WorkspaceSidebar = forwardRef<
    ElementRef<'aside'>,
    {
        open: boolean;
        handleToggle: () => void;
    }
>(({ open, handleToggle }, ref) => {
    const pathname = usePathname();
    const { workspace }: { workspace: string } = useParams();

    return (
        <>
            {/* Space provider for sidebar on left, since sidebar is position:fixed */}
            <div
                className={cn(
                    'min-w-[260px] h-[calc(100vh-52px)]',
                    open ? '' : '-ml-[260px]'
                )}
            >
                {/* Actual sidebar */}
                <aside
                    ref={ref}
                    className="min-w-[260px] h-[calc(100vh-52px)] bg-white overflow-y-auto fixed border-r duration-300"
                >
                    <div className="p-3 flex justify-between items-center border-b mb-4">
                        <WorkspaceAvatar workspace={workspace} showName />
                        <ActionToolTip
                            content="Collapse sidebar ["
                            toolTipContentProps={{
                                side: 'bottom',
                            }}
                        >
                            <div
                                onClick={handleToggle}
                                className="transform click-link"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </div>
                        </ActionToolTip>
                    </div>

                    <ul>
                        {WORKSPACE_SIDEBAR.links.map(
                            ({ Icon, title, link }, i) => {
                                const linkOfItem = `/w/${workspace}${link}`;
                                const active = pathname === linkOfItem;

                                return (
                                    <li
                                        key={link}
                                        className={cn(
                                            'click-link px-3 rounded-none py-2',
                                            active ? 'bg-main/10' : ''
                                        )}
                                    >
                                        <Link
                                            href={linkOfItem}
                                            className={cn(
                                                'flex gap-x-4 items-center text-sm',
                                                active
                                                    ? 'text-main font-semibold'
                                                    : ''
                                            )}
                                        >
                                            <Icon
                                                className={cn(
                                                    'w-4 h-4 text-gray-600',
                                                    active ? 'text-main' : ''
                                                )}
                                            />
                                            {title}
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>

                    <div className="mt-5">
                        <div className="flex justify-between items-center mb-2 px-3">
                            <h1 className="font-semibold text-sm text-[#172b4d]">
                                Your boards
                            </h1>
                            <CreateBoardPopover>
                                <div className="click-link p-1 rounded-sm cursor-pointer">
                                    <Plus className="w-4 h-4 text-gray-600" />
                                </div>
                            </CreateBoardPopover>
                        </div>
                        <ul>
                            {WORKSPACE_SIDEBAR.boards.map(
                                (
                                    {
                                        backgroundGradient,
                                        isFavorite,
                                        title,
                                        workspace,
                                    },
                                    i
                                ) => (
                                    <li
                                        key={i}
                                        className="click-link px-3 rounded-none py-2 flex justify-between items-center group"
                                    >
                                        <Link
                                            href="/"
                                            className="flex items-center gap-x-4 text-sm"
                                        >
                                            <div
                                                className="h-[25px] w-[30px] rounded-md"
                                                style={{
                                                    backgroundImage:
                                                        backgroundGradient,
                                                }}
                                            />
                                            <h1>
                                                {stringShortener(title, 16)}
                                            </h1>
                                        </Link>
                                        <div className="gap-x-2 items-center hidden group-hover:flex">
                                            <button className="click-link-deep p-1 rounded-sm">
                                                <MoreHorizontal className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button className="click-link-deep p-1 rounded-sm">
                                                <Star
                                                    className={cn(
                                                        'w-4 h-4',
                                                        isFavorite
                                                            ? 'fill-yellow-500 text-yellow-500'
                                                            : ''
                                                    )}
                                                />
                                            </button>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
});

export default WorkspaceSidebar;

WorkspaceSidebar.displayName = 'WorkspaceSidebar';
