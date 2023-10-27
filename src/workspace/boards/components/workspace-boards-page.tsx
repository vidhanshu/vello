'use client';

import React from 'react';

import BoardCard from '@/src/boards/components/board-workspaces/board-card';
import CreateBoardPopover from '@/src/home/components/home-feed-right-sidebar/create-board-popover';
import { RECENTLY_VIEWED } from '@/src/home/utils/constants';
import WorkspaceBoardFilter from './workspace-boards-filter';

const WorkspaceBoardsPage = () => {
    return (
        <div className="mt-4">
            <WorkspaceBoardFilter />
            {/* boards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl gap-4 w-full p-4 mx-auto mt-4">
                <CreateBoardPopover>
                    <div className="h-[96px] rounded-md p-2 flex justify-center items-center click-link bg-gray-100 cursor-pointer">
                        <h1>Create new board</h1>
                    </div>
                </CreateBoardPopover>
                {RECENTLY_VIEWED.map((item, i) => (
                    <BoardCard className="w-auto sm:w-auto" key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default WorkspaceBoardsPage;
