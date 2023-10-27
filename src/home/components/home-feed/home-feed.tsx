'use client';

import { useEffect, useState } from 'react';
import HomeFeedSkeleton from './home-feed-skeleton';
import NoFeedCard from './no-feed-card';

export default function HomeFeed() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let id = setInterval(() => setLoading(false), 3000);
        return () => clearInterval(id);
    }, []);

    if (loading) {
        return <HomeFeedSkeleton />;
    }
    return <NoFeedCard />;
}
