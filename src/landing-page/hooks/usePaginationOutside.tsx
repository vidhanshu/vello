import { useEffect, useState } from 'react';

const usePaginationOutside = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [swiper, setSwiper] = useState<any>(null);

    const slideTo = (index: number) => swiper?.slideTo(index);

    const slideNext = () => swiper?.slideNext();
    const slidePrev = () => swiper?.slidePrev();

    // change the slide when active index changes
    useEffect(() => {
        slideTo(activeIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex]);

    return {
        activeIndex,
        swiper,
        slideTo,
        setActiveIndex,
        setSwiper,
        slideNext,
        slidePrev,
    };
};

export default usePaginationOutside;
