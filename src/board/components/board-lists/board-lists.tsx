'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import BoardColumn from './board-column';
import { LISTS } from '@/src/board/utils/constants';

const BoardLists = () => {
    const [lists, setLists] = useState(LISTS);

    const handleOnDragEnd = (e: DropResult) => {
        const { source, destination } = e;

        // if dropped, somwhere outside
        if (!destination) return;

        // if dropped at same place as source
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        const sourceIdx = source.index;
        const destinationIdx = destination.index;
        const newState = [...LISTS];
        const [removed] = newState
            .find((list) => list.id === source.droppableId)!
            .cards.splice(sourceIdx, 1);
        newState
            .find((list) => list.id === destination.droppableId)!
            .cards.splice(destinationIdx, 0, removed);
        setLists(newState);
    };

    return (
        <div className="p-4 select-none h-[calc(100vh-106px)]">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <ol className="flex gap-x-4 overflow-x-auto overflow-y-hidden pb-4 styled-scrollbar items-start snap-x snap-mandatory">
                    {lists.map((list) => (
                        <BoardColumn key={list.id} list={list} />
                    ))}
                    <button className="text-gray-600 bg-gray-100 font-medium click-link flex gap-x-4 items-center min-w-[300px]">
                        <Plus className="text-gray-600 font-semibold w-4 h-4" />
                        Add another list
                    </button>
                </ol>
            </DragDropContext>
        </div>
    );
};

export default BoardLists;
