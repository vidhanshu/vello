import React from "react";

import HomeFeedRightSidebar from "./home-feed-right-sidebar/home-feed-right-sidebar";
import HomeFeed from "./home-feed/home-feed";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-7 px-4">
        <HomeFeed />
      </div>
      <div className="col-span-5 px-4">
        <HomeFeedRightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
