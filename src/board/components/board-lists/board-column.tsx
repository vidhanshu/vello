import React from 'react';
import {
    AlignLeft,
    Edit,
    MessageSquare,
    MoreHorizontal,
    Pencil,
    Plus,
} from 'lucide-react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { TBoardColumn } from '../types';
import { cn } from '@/lib/utils';
import ActionToolTip from '@/src/common/components/action-tool-tip';
import BoardColumnCard from './board-column-card';

type TBoardColumnProps = {
    list: TBoardColumn;
};
const BoardColumn = ({ list }: TBoardColumnProps) => {
    return (
        <Droppable droppableId={list.id}>
            {(provided) => (
                <li
                    key={list.id}
                    className="bg-[#f1f3f5] shadow-sm border px-2 rounded-xl h-fit max-h-[calc(100vh-150px)] min-w-[300px] max-w-[300px] overflow-y-auto overflow-x-hidden styled-scrollbar snap-start"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <div className="flex items-center justify-between">
                        <h1 className="py-4 px-2 text-[45546E] font-bold text-sm">
                            {list.title}
                        </h1>
                        <button className="click-link">
                            <MoreHorizontal className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {list.cards.map((card, index) => (
                            <BoardColumnCard key={card.id} card={card} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                    <div className="py-2">
                        <button className="text-gray-600 click-link flex gap-x-4 items-center w-full">
                            <Plus className="text-gray-600 font-semibold w-4 h-4" />
                            Add a card
                        </button>
                    </div>
                </li>
            )}
        </Droppable>
    );
};

export default BoardColumn;
