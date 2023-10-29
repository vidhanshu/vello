export type TBoardColumnContext = {
    columns: TBoardColumn[];
    updateColumns: (newColumns: TBoardColumn[]) => void;
    handleOnDragEnd: (e: DropResult) => void;
    addNewColumn: (title: string) => void;
    removeColumn: (id: string) => void;
    addCard: (columnId: string, title: string) => void;
    updateCardTitle: (
        columnId: string,
        cardId: string,
        updatedCard: TBoardColumn
    ) => void;
    updateColumn: (columnId: string, updatedColumn: TBoardColumn) => void;
    moveList: (sourceIdx: number, destinationIdx: number) => void;
};
