import { TBoardColumn } from "../components/types";

export const LISTS:TBoardColumn[] = [
    {
        id: 'list-1',
        title: 'List-1',
        cards: [
            {
                id: 'list-1-card-1',
                title: "Card 1 I'm Card 1 I'm Card 1 I'm Card 1 I'm Card 1 I'm Card 1 I'm",
                description: 'Lorem ipsum doler set amet.....',
                comments: [
                    {
                        author: 'vidhanshu',
                        comment: 'good one!',
                    },
                ],
            },
            {
                id: 'list-1-card-2',
                title: "Card 2 I'm",
                labels: [
                    {
                        color: '#FF6100',
                        title: 'priority',
                    },
                    {
                        color: '#569dfe',
                        title: 'Bug',
                    },
                    {
                        color: '#FF00E6',
                        title: 'Quick fix',
                    },
                    {
                        color: '#6700FF',
                        title: 'closed',
                    },
                ],
            },
            {
                id: 'list-1-card-3',
                title: "Card 3 I'm",
                description: 'Lorem ipsum doler set amet.....',
            },
            {
                id: 'list-1-card-4',
                title: "Card 4 I'm",
            },
        ],
    },
    {
        id: 'list-2',
        title: 'List-2',
        cards: [
            {
                id: 'list-2-card-1',
                title: "Card 1 I'm",
                description: 'Lorem ipsum doler set amet.....',
            },
            {
                id: 'list-2-card-2',
                title: "Card 2 I'm",
                comments: [
                    {
                        author: 'vidhanshu',
                        comment: 'good one!',
                    },
                ],
                labels: [
                    {
                        color: '#FF6100',
                        title: 'priority',
                    },
                    {
                        color: '#569dfe',
                        title: 'Bug',
                    },
                ],
            },
            {
                id: 'list-2-card-3',
                title: "Card 3 I'm",
                description: 'Lorem ipsum doler set amet.....',
            },
            {
                id: 'list-2-card-4',
                title: "Card 4 I'm",
            },
        ],
    },
    {
        id: 'list-3',
        title: 'List-3',
        cards: [
            {
                id: 'list-3-card-1',
                title: "Card 1 I'm",
                description: 'Lorem ipsum doler set amet.....',
            },
            {
                id: 'list-3-card-2',
                title: "Card 2 I'm",
                labels: [
                    {
                        color: '#FF6100',
                        title: 'priority',
                    },
                    {
                        color: '#569dfe',
                        title: 'Bug',
                    },
                ],
            },
            {
                id: 'list-3-card-3',
                title: "Card 3 I'm",
                description: 'Lorem ipsum doler set amet.....',
            },
            {
                id: 'list-3-card-4',
                title: "Card 4 I'm",
            },
        ],
    },
    {
        id: 'list-4',
        title: 'List-4',
        cards: [
            {
                id: 'list-4-card-1',
                title: "Card 1 I'm",
                description: 'Lorem ipsum doler set amet.....',
            },
            {
                id: 'list-4-card-2',
                title: "Card 2 I'm",
                labels: [
                    {
                        color: '#FF6100',
                        title: 'priority',
                    },
                    {
                        color: '#569dfe',
                        title: 'Bug',
                    },
                ],
            },
            {
                id: 'list-4-card-3',
                title: "Card 3 I'm",
                description: 'Lorem ipsum doler set amet.....',
            },
            {
                id: 'list-4-card-4',
                title: "Card 4 I'm",
            },
        ],
    },
];
