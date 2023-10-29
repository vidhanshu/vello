'use client';

import { useContext } from 'react';
import BoardColumnContext from './board-column-context';
import { TBoardColumnContext } from '../types';

const useBoardColumnContext = (): TBoardColumnContext => {
    const context = useContext(BoardColumnContext);
    if (!context) {
        throw new Error(
            'BoardColumnContext must be used within BoardColumnContextProvider'
        );
    }
    return context;
};

export default useBoardColumnContext;
