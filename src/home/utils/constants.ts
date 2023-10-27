import { Activity, KanbanSquare } from 'lucide-react';
import { TRecentlyViewedBoard } from '@/src/home/components/types';

export const RECENTLY_VIEWED: TRecentlyViewedBoard[] = [
    {
        backgroundGradient: 'linear-gradient(to right,#ffb347,#ffcc33)',
        title: 'SVC Winning roadmap',
        workspace: 'Product',
        isFavorite: true,
    },
    {
        backgroundGradient: 'linear-gradient(to right,#43cea2,#185a9d)',
        title: 'Marketing Plan',
        workspace: 'Marketing',
        isFavorite: false,
    },
    {
        backgroundGradient: 'linear-gradient(to right,#ffa17f,#00223e)',
        title: 'Marketing Plan',
        workspace: 'Marketing',
        isFavorite: false,
    },
    {
        backgroundGradient: 'linear-gradient(to right,#360033,#0b8793)',
        title: 'Marketing Plan',
        workspace: 'Marketing',
        isFavorite: false,
    },
    {
        backgroundGradient: 'linear-gradient(to right,#d38312,#a83279)',
        title: 'Marketing Plan',
        workspace: 'Marketing',
        isFavorite: false,
    },
    {
        backgroundGradient: 'linear-gradient(to right,#fdfc47,#24fe41)',
        title: 'Marketing Plan',
        workspace: 'Marketing',
        isFavorite: false,
    },
    {
        backgroundGradient: 'linear-gradient(to right,#00c6ff,#0072ff)',
        title: 'Marketing Plan',
        workspace: 'Marketing',
        isFavorite: false,
    },
];

export const HOME_FEED_SIDEBAR = {
    links: [
        {
            Icon: KanbanSquare,
            title: 'Boards',
            href: '/boards',
        },
        {
            Icon: Activity,
            title: 'Home',
            href: '/home',
        },
    ],
    workspace: ['workspace1', 'workspace2'],
};
