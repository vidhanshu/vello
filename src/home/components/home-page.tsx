import React from 'react';

import HomeFeedRightSidebar from './home-feed-right-sidebar/home-feed-right-sidebar';
import HomeFeed from './home-feed/home-feed';

const HomePage = () => {
    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-7 md:px-4">
                <HomeFeed />
            </div>
            <div className="hidden md:block md:col-span-5 px-4">
                <HomeFeedRightSidebar />
            </div>
        </div>
    );
};

export default HomePage;
