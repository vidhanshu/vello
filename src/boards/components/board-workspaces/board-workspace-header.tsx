import WorkspaceAvatar from '@/src/home/components/home-sidebar/workspace-avatar';
import { Settings, Trello, User } from 'lucide-react';
import React from 'react';

const BoardWorkspaceHeader = ({ workspace }: { workspace: string }) => {
    return (
        <div className="flex justify-between flex-wrap gap-4 items-center">
            <div className="flex gap-x-2 items-center">
                <WorkspaceAvatar workspace={workspace} showName />
            </div>
            <div className="flex gap-x-4 items-center">
                <button className="text-xs md:text-sm lg:text-base click-link flex gap-x-2 items-center py-1 rounded-sm bg-gray-100">
                    <Trello className="w-4 h-4 text-gray-500" />
                    Boards
                </button>
                <button className="text-xs md:text-sm lg:text-base click-link flex gap-x-2 items-center py-1 rounded-sm bg-gray-100">
                    <User className="w-4 h-4 text-gray-500" />
                    Member
                </button>
                <button className="text-xs md:text-sm lg:text-base click-link flex gap-x-2 items-center py-1 rounded-sm bg-gray-100">
                    <Settings className="w-4 h-4 text-gray-500" />
                    Settings
                </button>
            </div>
        </div>
    );
};

export default BoardWorkspaceHeader;
