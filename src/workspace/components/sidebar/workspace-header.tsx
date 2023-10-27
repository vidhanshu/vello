import React from 'react';
import { Edit, UserPlus, Lock } from 'lucide-react';

import EditWorkspacePopover from './edit-workspace-popover';
import { Button } from '@/components/ui/button';
import WorkspaceAvatar from '@/src/home/components/home-sidebar/workspace-avatar';
import InviteMemberDialogue from './invite-member-dialogue';

const WorkspaceHeader = () => {
    return (
        <div className="px-4 py-8 border-b max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <WorkspaceAvatar
                    avatarProps={{
                        className: 'w-[35px] h-[35px] md:w-[50px] md:h-[50px]',
                    }}
                    containerProps={{
                        className: 'items-start',
                    }}
                    workspace="Testing"
                >
                    <div>
                        <h1 className="text-sm md:text-lg lg:text-xl font-bold flex items-center gap-x-4">
                            Testing workspace
                            <EditWorkspacePopover
                                defaultValues={{
                                    name: 'Testing workspace',
                                    description: '',
                                }}
                            >
                                <Edit className="w-4 h-4 text-gray-500" />
                            </EditWorkspacePopover>
                        </h1>
                        <p className="flex gap-x-2 items-center text-xs">
                            <Lock className="w-3 h-3" />
                            Private
                        </p>
                    </div>
                </WorkspaceAvatar>

                <InviteMemberDialogue>
                    <Button
                        variant="primary"
                        size="sm"
                        asChild
                        className="flex items-center gap-x-4 text-sm w-fit"
                    >
                        <div className="cursor-pointer">
                            <UserPlus className="w-4 h-4 text-white" />
                            <span className="hidden md:block">
                                Invite members
                            </span>
                        </div>
                    </Button>
                </InviteMemberDialogue>
            </div>
        </div>
    );
};

export default WorkspaceHeader;
