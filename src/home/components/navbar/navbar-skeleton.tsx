import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const NavbarSkeleton = () => {
    return (
        <div className="border-b h-[49px] flex items-center justify-between px-4 py-1 md:px-8 sticky top-0 z-50 bg-white">
            <div className="px-2 flex gap-x-2 items-center">
                <Skeleton className="w-[100px] h-[30px] rounded-sm" />
                <Skeleton className="hidden md:block w-[100px] h-[30px] rounded-sm" />
                <Skeleton className="hidden md:block w-[100px] h-[30px] rounded-sm" />
                <Skeleton className="hidden md:block w-[100px] h-[30px] rounded-sm" />
            </div>
            <div className="flex gap-x-2 items-center">
                <Skeleton className="w-[30px] h-[30px] rounded-full" />
                <Skeleton className="w-[30px] h-[30px] rounded-full" />
                <Skeleton className="w-[30px] h-[30px] rounded-full" />
            </div>
        </div>
    );
};

export default NavbarSkeleton;
