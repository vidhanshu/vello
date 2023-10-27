import React from 'react';
import { Star } from 'lucide-react';

import { TRecentlyViewedBoard } from '@/src/home/components/types';
import { cn } from '@/lib/utils';

const BoardCard = ({
    backgroundGradient,
    isFavorite,
    title,
    workspace,
    className,
    ...props
}: TRecentlyViewedBoard & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                'w-full sm:w-[200px] h-[96px] rounded-md p-2  cursor-pointer hover:shadow-md transition-shadow',
                className
            )}
            style={{ backgroundImage: backgroundGradient }}
            {...props}
        >
            <div className="flex flex-col justify-between h-full">
                <h1 className="font-bold text-white">{title}</h1>
                <div className="flex justify-between">
                    <p className="text-sm text-white">{workspace}</p>
                    <Star
                        className={cn(
                            'w-4 h-4 hover:scale-110 transition-transform cursor-pointer',
                            isFavorite
                                ? 'fill-yellow-500 text-yellow-500'
                                : 'text-white'
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default BoardCard;
