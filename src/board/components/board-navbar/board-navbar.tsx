'use client';

import React, { useState } from 'react';
import { UserPlus, Star } from 'lucide-react';
import { useParams } from 'next/navigation';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Globe, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InviteMemberDialogue from '@/src/workspace/components/sidebar/invite-member-dialogue';

type TSelectState = 'workspace' | 'private' | 'public';
const BoardNavbar = () => {
    const { board }: { board: string } = useParams();
    const [visibilty, setVisibility] = useState<TSelectState>('private');

    const handleChange = (value: TSelectState) => {
        setVisibility(value as TSelectState);
    };

    return (
        <nav className="px-4 h-[57px] border-b flex justify-between items-center">
            <div className="flex items-center gap-x-4">
                <h1 className="text-xl font-bold">{board}</h1>
                <button className="click-link rounded-full">
                    <Star className="w-4 h-4 text-gray-600" />
                </button>
                <div className="sm:w-[150px]">
                    <Select value={visibilty} onValueChange={handleChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Change visibility" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="workspace">
                                <div className="flex gap-x-4 items-center">
                                    <Users className="w-4 h-4" />
                                    <h1>Workspace</h1>
                                </div>
                            </SelectItem>
                            <SelectItem value="private">
                                <div className="flex gap-x-4 items-center">
                                    <Lock className="w-4 h-4" />
                                    <h1>Private</h1>
                                </div>
                            </SelectItem>
                            <SelectItem value="public">
                                <div className="flex gap-x-4 items-center">
                                    <Globe className="w-4 h-4" />
                                    <h1>Public</h1>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <InviteMemberDialogue>
                    <Button variant="primary" className="h-[30px]">
                        <span className="hidden md:block">Share</span>
                        <UserPlus className="md:ml-2 w-4 h-4" />
                    </Button>
                </InviteMemberDialogue>
            </div>
        </nav>
    );
};

export default BoardNavbar;
