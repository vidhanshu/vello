import React from 'react';
import BoardWorkspaceHeader from './board-workspace-header';
import { TRecentlyViewedBoard } from '@/src/home/components/types';
import BoardCard from './board-card';
import CreateBoardPopover from '@/src/home/components/home-feed-right-sidebar/create-board-popover';

type TRenderWorkspaceProps = {
    workspace: string;
    boards: TRecentlyViewedBoard[];
};
const RenderWorkspace = ({ workspace, boards }: TRenderWorkspaceProps) => {
    return (
        <div>
            <BoardWorkspaceHeader workspace={workspace} />
            <div className="flex gap-4 flex-wrap mt-4">
                {boards.map((item, i) => (
                    <BoardCard key={i} {...item} />
                ))}
                <CreateBoardPopover>
                    <div className="w-full sm:w-[200px] h-[96px] rounded-md p-2 flex justify-center items-center click-link bg-gray-100 cursor-pointer">
                        <h1>Create new board</h1>
                    </div>
                </CreateBoardPopover>
            </div>
        </div>
    );
};

export default RenderWorkspace;
