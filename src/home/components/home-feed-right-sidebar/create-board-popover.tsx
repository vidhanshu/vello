'use client';

import { useMediaQuery } from 'usehooks-ts';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import CreateBoardDialogue from './create-board-dialogue';
import CreateBoardForm from './create-board-form';
import useMounted from '@/src/common/hooks/useMounted';

const CreateBoardPopover = ({ children }: { children: React.ReactNode }) => {
    const mounted = useMounted();
    const isDownMd = useMediaQuery('(max-width: 768px)');

    if (!mounted) return null;

    // if on mobile or tab return dialogue
    if (isDownMd) {
        return <CreateBoardDialogue>{children}</CreateBoardDialogue>;
    }
    // else return popover
    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer" asChild>
                {children}
            </PopoverTrigger>

            <PopoverContent className="w-80">
                <CreateBoardForm />
            </PopoverContent>
        </Popover>
    );
};

export default CreateBoardPopover;
