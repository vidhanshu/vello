'use client';

import React, { useState } from 'react';
import { MoreHorizontal, Plus, X } from 'lucide-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { TBoardColumn } from '../types';
import BoardColumnCard from './board-column-card';
import AddCardForm from './add-card-form';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import GenericDialog from '@/src/common/components/generic-dialog';
import useBoardColumnContext from '@/src/board/context/board-column-context/use-board-column-context';

type TBoardColumnProps = {
    column: TBoardColumn;
    index: number;
};
const BoardColumn = ({ column, index }: TBoardColumnProps) => {
    const { toast } = useToast();
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
    const [cardTitle, setCardTitle] = useState('');
    const [cardEditStatus, setCardEditStatus] = useState<{
        adding: boolean;
        editing: boolean;
        id?: string;
    }>({ adding: false, editing: false });

    const { updateColumn, removeColumn, columns } = useBoardColumnContext();

    const handleStartEditing = (title: string, id: string) => {
        setCardTitle(title);
        setCardEditStatus((prev) => ({ ...prev, editing: true, id }));
    };

    return (
        <>
            {/* This draggable is list/column draggable */}
            <Draggable draggableId={column.title} index={index}>
                {(provided) => (
                    <li
                        ref={provided.innerRef}
                        key={column.id}
                        className="bg-[#f1f3f5] shadow-sm border px-2 rounded-xl h-fit max-h-[calc(100vh-150px)] min-w-[300px] max-w-[300px] overflow-y-auto overflow-x-hidden styled-scrollbar"
                        {...provided.draggableProps}
                    >
                        <div
                            className="flex items-center justify-between py-4 gap-x-4"
                            {...provided.dragHandleProps}
                        >
                            <Input
                                onChange={(e) => {
                                    updateColumn(column.id, {
                                        ...column,
                                        title: e.target.value,
                                    });
                                }}
                                className="bg-transparent cursor-pointer border-transparent focus-visible:border-main rounded-lg py-1 px-2 text-[45546E] font-bold text-sm"
                                variant="primary"
                                value={column.title}
                            />

                            <GenericDialog
                                open={isConfirmDialogOpen}
                                setOpen={setIsConfirmDialogOpen}
                                variant="error"
                                title="Are you sure, you want to delete this list?"
                                description="Once deleted can't be recovered"
                                handleSubmit={() => {
                                    removeColumn(column.id);
                                }}
                            />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="click-link">
                                        <MoreHorizontal className="w-4 h-4 text-gray-600" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        List actions
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => {
                                            toast({
                                                title: 'Coming soon',
                                                description:
                                                    'This feature is not yet implemented',
                                            });
                                        }}
                                    >
                                        Move list
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            setCardEditStatus((prev) => ({
                                                ...prev,
                                                adding: true,
                                            }));
                                        }}
                                    >
                                        Create Card
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            setIsConfirmDialogOpen(true);
                                        }}
                                    >
                                        Delete list
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* This droppable is for cards */}
                        <Droppable
                            type="ROW"
                            direction="vertical"
                            droppableId={column.id}
                        >
                            {(provided) => (
                                <div
                                    className="space-y-3"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {column.cards.map((card, index) => (
                                        <BoardColumnCard
                                            key={card.id}
                                            card={card}
                                            index={index}
                                            handleStartEditing={
                                                handleStartEditing
                                            }
                                        />
                                    ))}
                                    {provided.placeholder}
                                    {cardEditStatus.adding ||
                                    cardEditStatus.editing ? (
                                        <AddCardForm
                                            cardTitle={cardTitle}
                                            setCardTitle={setCardTitle}
                                            cardEditStatus={cardEditStatus}
                                            setCardEditStatus={
                                                setCardEditStatus
                                            }
                                            columnId={column.id}
                                        />
                                    ) : (
                                        <div className="pb-2">
                                            <button
                                                onClick={() =>
                                                    setCardEditStatus(
                                                        (prev) => ({
                                                            ...prev,
                                                            adding: true,
                                                        })
                                                    )
                                                }
                                                className="text-gray-600 click-link flex gap-x-4 items-center w-full"
                                            >
                                                <Plus className="text-gray-600 font-semibold w-4 h-4" />
                                                Add a card
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Droppable>
                    </li>
                )}
            </Draggable>
        </>
    );
};

export default BoardColumn;
