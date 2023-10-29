'use client';

import React, { FormEvent, useState } from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useBoardColumnContext from '../../context/board-column-context/use-board-column-context';

type TAddCardFormProps = {
    cardEditStatus: {
        adding: boolean;
        editing: boolean;
        id?: string;
    };
    setCardEditStatus: React.Dispatch<
        React.SetStateAction<{
            adding: boolean;
            editing: boolean;
            id?: string;
        }>
    >;
    cardTitle: string;
    setCardTitle: React.Dispatch<React.SetStateAction<string>>;
    columnId: string;
};

const AddCardForm = ({
    cardEditStatus,
    setCardEditStatus,
    cardTitle,
    setCardTitle,
    columnId,
}: TAddCardFormProps) => {
    const { addCard, updateCardTitle } = useBoardColumnContext();

    const cancelCardEditing = () => {
        setCardTitle('');
        setCardEditStatus({ adding: false, editing: false });
    };

    const handleAddCard = (e: FormEvent) => {
        e.preventDefault();

        if (!cardTitle) return;

        addCard(columnId, cardTitle);
        cancelCardEditing();
    };

    const handleUpdateCard = (e: FormEvent, columnId: string) => {
        e.preventDefault();

        if (!cardTitle) return;

        updateCardTitle(columnId, cardEditStatus.id!, cardTitle);
        cancelCardEditing();
    };

    return (
        <form className="pb-2">
            <div className="pt-4 pb-6 px-2 bg-white shadow-[0px_1px_1px_#091E4240,_0px_0px_1px_#091E424F] rounded-lg w-full group">
                <Input
                    placeholder="Enter a card title"
                    variant="primary"
                    className="border-none bg-transparent hover:bg-transparent  py-1 text-xs"
                    value={cardTitle}
                    autoFocus={true}
                    onChange={(e) => setCardTitle(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-x-4 mt-3">
                <Button
                    type="submit"
                    onClick={
                        cardEditStatus.adding
                            ? (e) => handleAddCard(e)
                            : (e) => handleUpdateCard(e, columnId)
                    }
                    variant="primary"
                    size="sm"
                    className="h-8 text-sm"
                >
                    {cardEditStatus.adding ? 'Add card' : 'Update card'}
                </Button>
                <button
                    type="button"
                    onClick={cancelCardEditing}
                    className="h-8 click-link"
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>
            </div>
        </form>
    );
};

export default AddCardForm;
