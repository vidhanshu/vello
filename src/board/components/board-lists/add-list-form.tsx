import React, { useState, FormEvent } from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useBoardColumnContext from '@/src/board/context/board-column-context/use-board-column-context';

type TAddListForm = {
    setIsAddingList: (status: boolean) => void;
};
const AddListForm = ({ setIsAddingList }: TAddListForm) => {
    const [listTitle, setListTitle] = useState('');
    const { addNewColumn } = useBoardColumnContext();

    const handleAddList = (e: FormEvent) => {
        e.preventDefault();

        if (!listTitle) return;
        addNewColumn(listTitle);
        setListTitle('');
    };

    return (
        <form className="pb-2 bg-gray-100 rounded-xl py-4 px-2">
            <div className="px-2rounded-lg w-full group">
                <Input
                    placeholder="Enter a card title"
                    variant="primary"
                    className="text-xs"
                    value={listTitle}
                    autoFocus={true}
                    onChange={(e) => setListTitle(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-x-4 mt-3">
                <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="h-8 text-sm"
                    onClick={handleAddList}
                >
                    Add list
                </Button>
                <button
                    type="button"
                    onClick={() => setIsAddingList(false)}
                    className="h-8 click-link"
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>
            </div>
        </form>
    );
};

export default AddListForm;
