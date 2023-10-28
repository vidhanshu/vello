export type TBoardColumnCard = {
    id: string;
    title: string;
    description?: string;
    labels?: {
        color: string;
        title: string;
    }[];
    comments?: {
        author: string;
        comment: string;
    }[];
};

export type TBoardColumn = {
    id: string;
    title: string;
    cards: TBoardColumnCard[];
};
