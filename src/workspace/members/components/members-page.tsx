import React from 'react';
import { Link } from 'lucide-react';

import { Input } from '@/components/ui/input';
import MembersListItemWithActions from './members-list-item';
import { MEMBERS } from '@/src/workspace/members/utils/constants';
import InviteMemberDialogue from '@/src/workspace/components/sidebar/invite-member-dialogue';

const WorkspaceMembersPage = () => {
    return (
        <div className="p-4">
            <div className="border-b pb-4">
                <h1 className="text-lg font-bold">Workspace members (3)</h1>
                <p className="text-gray-600 mt-2">
                    Workspace members can view and join all Workspace visible
                    boards and create new boards in the Workspace.
                </p>
            </div>
            <div className="border-b py-4">
                <h1 className="text-lg font-bold">
                    Invite members to join you
                </h1>
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                    <p className="text-gray-600 mt-2">
                        Anyone with an invite link can join this Free Workspace.
                        You can also disable and create a new invite link for
                        this Workspace at any time
                    </p>
                    <InviteMemberDialogue>
                        <div className="click-link w-[150px] px-2 py-1 bg-gray-100 rounded-sm flex gap-x-4 items-center text-sm cursor-pointer">
                            <Link className="w-4 h-4" />
                            Invite with link
                        </div>
                    </InviteMemberDialogue>
                </div>
            </div>

            <div className="py-4">
                <Input
                    placeholder="Filter by name"
                    variant="primary"
                    className="max-w-[300px]"
                />

                <div>
                    {MEMBERS.filter(
                        (item) => item.role === 'workspace_member'
                    ).map((item) => (
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

export default WorkspaceMembersPage;
