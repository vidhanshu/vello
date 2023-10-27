import React from 'react';
import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

const BoardListItem = ({
    backgroundGradient,
    isFavorite,
    title,
    workspace,
}: {
    backgroundGradient: string;
    workspace: string;
    isFavorite: boolean;
    title: string;
}) => (
    <button className="group w-full click-link flex items-center gap-x-2 justify-between">
        <div className="flex gap-x-4 items-center">
            <div
                className="h-[30px] w-[35px] rounded-md"
                style={{ backgroundImage: backgroundGradient }}
            />
            <div>
                <h6 className="text-sm font-extrabold">{title}</h6>
                <p className="text-xs text-left">{workspace}</p>
            </div>
        </div>
        <div className="group-hover:block hidden click-link-deep">
            <Star
                className={cn(
                    'w-4 h-4',
                    isFavorite && 'text-yellow-500 fill-yellow-500'
                )}
            />
        </div>
    </button>
);

export default BoardListItem;
