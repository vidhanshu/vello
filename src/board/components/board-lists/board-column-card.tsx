import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TBoardColumnCard } from '../types';
import { cn } from '@/lib/utils';
import { AlignLeft, MessageSquare, Pencil } from 'lucide-react';
import ActionToolTip from '@/src/common/components/action-tool-tip';

type TBoardColumnCardProps = {
    card: TBoardColumnCard;
    index: number;
};

const BoardColumnCard = ({ card, index }: TBoardColumnCardProps) => {
    return (
        <Draggable key={card.id} draggableId={card.id} index={index}>
            {(provided, snapshot) => (
                <div
                    key={card.id}
                    className={cn(
                        'p-4 hover:ring-black hover:ring-[2px] cursor-pointer bg-white shadow-[0px_1px_1px_#091E4240,_0px_0px_1px_#091E424F] rounded-lg w-full space-y-3 group',
                        snapshot.isDragging && 'opacity-75'
                    )}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <div className="flex items-start justify-between gap-x-2">
                        <div className="space-y-2">
                            {card.labels ? (
                                <div className="flex gap-x-2 flex-wrap">
                                    {card.labels.map((label) => (
                                        <ActionToolTip
                                            key={label.title}
                                            content={label.title}
                                        >
                                            <div
                                                className="flex flex-wrap min-w-[30px] h-2 rounded-full"
                                                style={{
                                                    background: label.color,
                                                }}
                                            />
                                        </ActionToolTip>
                                    ))}
                                </div>
                            ) : null}
                            <h1 className="text-xs">{card.title}</h1>
                        </div>
                        <button className="click-link rounded-full invisible group-hover:visible">
                            <Pencil className="w-3 h-3 text-gray-600" />
                        </button>
                    </div>
                    {card.description || card.comments ? (
                        <div className="flex gap-x-4 items-center text-gray-600">
                            {card.description && (
                                <ActionToolTip content="This card has a description">
                                    <AlignLeft className="w-4 h-4" />
                                </ActionToolTip>
                            )}
                            {card.comments && (
                                <ActionToolTip content="Comments">
                                    <span className="text-xs flex items-center gap-x-1">
                                        <MessageSquare className="w-4 h-4" />{' '}
                                        {card.comments.length}
                                    </span>
                                </ActionToolTip>
                            )}
                        </div>
                    ) : null}
                </div>
            )}
        </Draggable>
    );
};

export default BoardColumnCard;
