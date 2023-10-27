'use client';

import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import CreateBoardForm from './create-board-form';

type TCreateBoardDialogueProps = {
    children: React.ReactNode;
};
const CreateBoardDialogue = ({ children }: TCreateBoardDialogueProps) => {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent className="w-full max-w-sm">
                <DialogHeader>
                    <DialogTitle className="text-xl text-zinc-600">
                        Create board
                    </DialogTitle>
                    <DialogDescription>
                        <CreateBoardForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreateBoardDialogue;
