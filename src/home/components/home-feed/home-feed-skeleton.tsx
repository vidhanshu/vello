import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const HomeFeedSkeleton = () => {
    return (
        <div className="space-y-12">
            {Array.from({ length: 5 }).map((val, idx) => (
                <div key={idx} className="shadow-sm space-y-4">
                    <Skeleton className="h-[100px]" />
                    <div className="flex gap-x-4 items-center">
                        <Skeleton className="w-[50px] h-[50px] rounded-full" />
                        <div className="space-y-4 w-full">
                            <Skeleton className="w-full h-3 rounded-xl" />
                            <Skeleton className="w-full h-3 rounded-xl" />
                        </div>
                    </div>
                    <Skeleton className="w-full h-3 rounded-xl" />
                    <Skeleton className="w-full h-3 rounded-xl" />
                    <Skeleton className="w-full h-3 rounded-xl" />
                </div>
            ))}
        </div>
    );
};

export default HomeFeedSkeleton;
