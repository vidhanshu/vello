'use client';

import React, { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';

import BoardColumnContext from './board-column-context';
import { TBoardColumn } from '@/src/board/components/types';
import { LISTS } from '@/src/board/utils/constants';

const BoardColumnContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [columns, setColumns] = useState<TBoardColumn[]>(LISTS);

    const updateColumns = (newColumns: TBoardColumn[]) => {
        setColumns(newColumns);
    };

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
        const newState = [...columns];

        // if list/column is getting moved
        if (
            destination.droppableId === source.droppableId &&
            source.droppableId === 'board'
        ) {
            const [removed] = newState.splice(sourceIdx, 1);
            newState.splice(destinationIdx, 0, removed);
        }
        // if card is getting moved
        else {
            const [removed] = newState
                .find((list) => list.id === source.droppableId)!
                .cards.splice(sourceIdx, 1);
            newState
                .find((list) => list.id === destination.droppableId)!
                .cards.splice(destinationIdx, 0, removed);
        }
        setColumns(newState);
    };

    const addNewColumn = (title: string) => {
        setColumns((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title,
                cards: [],
            },
        ]);
    };

    const removeColumn = (id: string) => {
        setColumns((prev) => prev.filter((col) => col.id !== id));
    };

    const addCard = (columndId: string, title: string) => {
        setColumns((prev) =>
            prev.map((col) => {
                if (col.id === columndId) {
                    return {
                        ...col,
                        cards: [
                            ...col.cards,
                            {
                                id: Date.now().toString(),
                                title,
                            },
                        ],
                    };
                }
                return col;
            })
        );
    };

    const updateColumn = (colId: string, updatedCol: TBoardColumn) => {
        setColumns((prev) =>
            prev.map((col) => {
                if (col.id === colId) {
                    return updatedCol;
                }
                return col;
            })
        );
    };

    const updateCardTitle = (colId: string, cardId: string, title: string) => {
        setColumns((prev) => {
            return prev.map((col) => {
                if (col.id == colId) {
                    return {
                        ...col,
                        cards: col.cards.map((card) => {
                            if (card.id === cardId) {
                                return {
                                    ...card,
                                    title,
                                };
                            }
                            return card;
                        }),
                    };
                }
                return col;
            });
        });
    };

    const moveList = (sourceIdx: number, destinationIdx: number) => {
        const newColumns = [...columns];
        const [removed] = newColumns.splice(sourceIdx, 1);
        newColumns.splice(destinationIdx, 0, removed);
        setColumns(newColumns);
    };

    return (
        <BoardColumnContext.Provider
            value={{
                columns,
                updateColumns,
                handleOnDragEnd,
                addNewColumn,
                removeColumn,
                addCard,
                updateColumn,
                updateCardTitle,
                moveList
            }}
        >
            {children}
        </BoardColumnContext.Provider>
    );
};

export default BoardColumnContextProvider;
