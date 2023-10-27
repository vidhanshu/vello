import Image from 'next/image';
import React from 'react';

const VelloStats = () => {
    return (
        <div className="mb-20">
            <h1 className="text-xl text-center mb-6 font-semibold">
                Join over 2,000,000 teams worldwide that are using Trello to get
                more done.
            </h1>
            <Image
                className="m-auto"
                src="/images/landing-page/ways-to-grow/vello-stats.svg"
                width={900}
                height={76}
                alt="vello statistics"
            />
        </div>
    );
};

export default VelloStats;
