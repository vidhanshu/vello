'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import MembersListItemWithActions from './members-list-item';
import { Input } from '@/components/ui/input';
import { MEMBERS } from '@/src/workspace/members/utils/constants';

const WorkspaceMembersTypePage = () => {
    const { memberType }: { memberType: string } = useParams();

    return (
        <div className="p-4">
            {memberType === 'pending' ? (
                <div className="border-b pb-4">
                    <h1 className="text-lg font-bold">Pending</h1>
                    <p className="text-gray-600 mt-2">
                        These people have requested to join this Workspace. All
                        Workspace members are admins and can edit Workspace
                        settings.
                    </p>
                </div>
            ) : (
                <div className="border-b pb-4">
                    <h1 className="text-lg font-bold">Guests</h1>
                    <p className="text-gray-600 mt-2">
                        Guests can only view and edit the boards to which
                        they&apos;ve been added.
                    </p>
                </div>
            )}

            <div className="py-4">
                <Input
                    placeholder="Filter by name"
                    variant="primary"
                    className="md:max-w-[300px]"
                />

                <div>
                    {MEMBERS.filter((item) => {
                        if (memberType === 'guests') {
                            return item.role === 'guest';
                        }
                        if (memberType === 'pending') {
                            return item.request === 'pending';
                        }
                        return false;
                    }).map((item) => (
                        <MembersListItemWithActions
                            key={item.email}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkspaceMembersTypePage;
