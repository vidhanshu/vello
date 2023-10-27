import React from 'react';
import { Search } from 'lucide-react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const WorkspaceBoardFilter = () => {
    return (
        <div className="px-4 max-w-7xl mx-auto flex justify-between flex-wrap gap-4">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a filter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="0">Most recent</SelectItem>
                    <SelectItem value="1">Least recent</SelectItem>
                    <SelectItem value="2">Alphabetically A-Z</SelectItem>
                    <SelectItem value="3">Alphabetically Z-A</SelectItem>
                </SelectContent>
            </Select>

            <div className="border-2 w-full md:max-w-[300px] flex items-center px-2 py-1 rounded-sm">
                <Search className="w-4 h-4" />
                <Input
                    className="border-none py-1 px-2 placeholder:text-sm focus-visible:ring-offset-0"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default WorkspaceBoardFilter;
