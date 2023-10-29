'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import BoardColumn from './board-column';
import AddListForm from './add-list-form';
import useBoardColumnContext from '@/src/board/context/board-column-context/use-board-column-context';

const BoardLists = () => {
    const [isAddingList, setIsAddingList] = useState(false);

    const { columns, handleOnDragEnd } = useBoardColumnContext();

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="p-4 select-none h-[calc(100vh-106px)]">
                {/* This droppable is for lists/columns */}
                <Droppable
                    droppableId="board"
                    type="COLUMN"
                    direction="horizontal"
                >
                    {(provided) => (
                        <ol
                            className="flex gap-x-4 overflow-x-auto overflow-y-hidden pb-4 styled-scrollbar items-start"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {/* actual columns */}
                            {columns.map((column, idx) => (
                                <BoardColumn
                                    key={column.id}
                                    column={column}
                                    index={idx}
                                />
                            ))}
                            {provided.placeholder}
                            {/* create list button */}
                            <li className="min-w-[300px]">
                                {!isAddingList ? (
                                    <button
                                        onClick={() => setIsAddingList(true)}
                                        className="text-gray-600 bg-gray-100 font-medium click-link flex gap-x-4 items-center w-full md:w-full"
                                    >
                                        <Plus className="text-gray-600 font-semibold w-4 h-4" />
                                        Add another list
                                    </button>
                                ) : (
                                    <AddListForm
                                        setIsAddingList={setIsAddingList}
                                    />
                                )}
                            </li>
                        </ol>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default BoardLists;
