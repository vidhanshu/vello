import { createContext } from 'react';

import { TBoardColumnContext } from '../types';

const BoardColumnContext = createContext<TBoardColumnContext>({
    columns: [],
    updateColumns() {},
    handleOnDragEnd() {},
    addNewColumn() {},
    removeColumn() {},
    addCard() {},
    updateCardTitle() {},
    updateColumn() {},
});

export default BoardColumnContext;
