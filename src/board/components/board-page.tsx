import React from 'react';
import BoardNavbar from './board-navbar/board-navbar';
import BoardLists from './board-lists/board-list';

const BoardPage = () => {
    return (
        <div>
            <BoardNavbar />
            <BoardLists />
        </div>
    );
};

export default BoardPage;
