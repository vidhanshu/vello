import React from 'react';

import WorkCard from './work-card';

import { Button } from '@/components/ui/button';
import { SEE_WORK_CARDS } from '@/src/landing-page/utils/constants';

const SeeWorkSection = () => {
    return (
        <section
            className="
        py-12 pb-0
        bg-[linear-gradient(240deg,rgb(0,184,217),rgb(0,101,255))]
        lg:bg-[url('/images/landing-page/see-work/left.svg')_,url('/images/landing-page/see-work/right.svg')_,linear-gradient(240deg,rgb(0,184,217),rgb(0,101,255))]
        lg:bg-no-repeat
        lg:bg-[position:left_center,_right_center]"
        >
            <div className="max-w-screen-xlg m-auto px-4">
                <div className="space-y-4 ">
                    <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
                        See work in a whole new way
                    </h1>
                    <p className="text-xl text-white text-center max-w-2xl m-auto">
                        View your team&apos;s projects from every angle and
                        bring a fresh perspective to the task at hand.
                    </p>
                    <Button
                        variant="sec"
                        size="primary"
                        className="m-auto block"
                    >
                        Discover all Vello views
                    </Button>
                </div>

                <div className="translate-y-24 space-y-10">
                    {SEE_WORK_CARDS.map((item, idx) => (
                        <WorkCard key={item.title} idx={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeeWorkSection;
