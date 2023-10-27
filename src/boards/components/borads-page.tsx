import React from 'react';
import { Star, Ungroup, User } from 'lucide-react';

import BoardCard from './board-workspaces/board-card';
import { RECENTLY_VIEWED } from '@/src/home/utils/constants';
import BoardWorkspaces from './board-workspaces/board-workspaces';

const BoardsPage = () => {
    return (
        <div className="space-y-4 min-h-screen">
            <div>
                <h1 className="uppercase font-bold text-[#44546f] mb-2">
                    Starred Workspaces
                </h1>
                <div className="flex flex-wrap gap-4">
                    {RECENTLY_VIEWED.filter((item) => item.isFavorite).map(
                        (item, i) => (
                            <BoardCard key={i} {...item} />
                        )
                    )}
                </div>
            </div>
            <BoardWorkspaces />
        </div>
    );
};

export default BoardsPage;
