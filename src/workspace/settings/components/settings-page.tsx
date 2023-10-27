'use client';

import React, { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Globe, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GenericDialog from '@/src/common/components/generic-dialog';

type TSelectState = 'workspace' | 'private' | 'public';

const SettingsPage = () => {
    const [visibilty, setVisibility] = useState<TSelectState>('private');

    const handleChange = (value: TSelectState) => {
        setVisibility(value as TSelectState);
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="border-b pb-4 mb-4">
                <h1 className="text-lg font-bold">Workspace visibility</h1>
                <div className="text-gray-600 mt-2 flex justify-between md:items-center flex-col md:flex-row gap-4">
                    {visibilty === 'private' ? (
                        <p>
                            <Lock className="w-4 h-4 inline-block mr-2" />
                            This Workspace is private. It&apos;s not indexed or
                            visible to those outside the Workspace.
                        </p>
                    ) : visibilty === 'public' ? (
                        <p>
                            <Globe className="w-4 h-4 inline-block mr-2" />
                            This Workspace is public. It&apos;s indexed and
                            visible to those outside the Workspace.
                        </p>
                    ) : (
                        <p>
                            <Users className="w-4 h-4 inline-block mr-2" />
                            This Workspace is visible to everyone in the
                            Workspace.
                        </p>
                    )}
                    <div className="sm:w-[300px]">
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
            </div>
            <GenericDialog
                variant="error"
                title="Are you sure?"
                description="After deletion you wont be able to recover this workspace back"
                handleSubmit={() => {
                    console.log('Submitted');
                }}
            >
                <Button variant="destructive">Delete workspace</Button>
            </GenericDialog>
        </div>
    );
};

export default SettingsPage;
