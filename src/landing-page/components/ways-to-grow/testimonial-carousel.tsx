'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Button } from '@/components/ui/button';
import { TESTIMONIAL_CAROUSEL } from '@/src/landing-page/utils/constants';
import usePaginationOutside from '@/src/landing-page/hooks/usePaginationOutside';
import { cn } from '@/lib/utils';

import { TTestimonialCarouselCardProps } from '../types';

const TestimonialCarousel = () => {
    const { activeIndex, setActiveIndex, setSwiper, slideNext, slidePrev } =
        usePaginationOutside();

    const isFirstSlide = activeIndex === 0;
    const isLastSlide = activeIndex === TESTIMONIAL_CAROUSEL.length - 1;

    return (
        <div className="py-12">
            <div className="flex justify-end">
                <div className="hidden md:flex gap-x-4 items-center">
                    <div className="flex gap-x-2">
                        {Array.from(
                            { length: TESTIMONIAL_CAROUSEL.length },
                            (_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={cn(
                                        'w-2 h-2 bg-black rounded-full transition cursor-pointer',
                                        activeIndex == i
                                            ? 'w-16 bg-gray-500'
                                            : ''
                                    )}
                                />
                            )
                        )}
                    </div>

                    <Button
                        onClick={!isFirstSlide ? slidePrev : () => {}}
                        variant="ghost"
                        className={cn(
                            'group rounded-full p-2 bg-zinc-100',
                            isFirstSlide && 'cursor-not-allowed'
                        )}
                    >
                        <ChevronLeft
                            className={cn(
                                !isFirstSlide
                                    ? 'text-gray-600 group-hover:text-[#01c6e5] transition'
                                    : 'text-gray-400'
                            )}
                        />
                    </Button>
                    <Button
                        onClick={!isLastSlide ? slideNext : () => {}}
                        variant="ghost"
                        className={cn(
                            'group rounded-full p-2 bg-zinc-100',
                            isLastSlide && 'cursor-not-allowed'
                        )}
                    >
                        <ChevronRight
                            className={cn(
                                !isLastSlide
                                    ? 'text-gray-600 group-hover:text-[#01c6e5] transition'
                                    : 'text-gray-400'
                            )}
                        />
                    </Button>
                </div>
            </div>
            <Swiper
                className="mySwiper"
                spaceBetween={14}
                onSwiper={setSwiper}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                }}
            >
                {TESTIMONIAL_CAROUSEL.map((testimonial, i) => (
                    <SwiperSlide key={i} className="py-4">
                        <TestimonialCarouselCard {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex md:hidden justify-center mt-4">
                <div className="flex  gap-x-2">
                    {Array.from(
                        { length: TESTIMONIAL_CAROUSEL.length },
                        (_, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={cn(
                                    'w-2 h-2 bg-black rounded-full transition cursor-pointer',
                                    activeIndex == i ? 'w-16 bg-gray-500' : ''
                                )}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;

const TestimonialCarouselCard = ({
    author,
    designation,
    feedback,
    info,
    orgLogo: { img, height, width },
}: TTestimonialCarouselCardProps) => {
    return (
        <div className="h-[760px] sm:h-[550px] md:h-[480px] rounded-lg shadow-lg overflow-hidden bg-[#fefeff] bg-[url('/images/landing-page/ways-to-grow/testimonial-card-bg.svg')] bg-no-repeat grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 px-8 py-10 flex flex-col justify-between">
                <p className="text-2xl">{feedback}</p>
                <div>
                    <div>
                        <div className="w-48 h-[1px] bg-black mb-4" />
                        <p>{author}</p>
                        <p>{designation}</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                        <Image
                            className="mt-6"
                            src={img}
                            width={height}
                            height={width}
                            style={{
                                width: '100%',
                                maxWidth: width,
                                height: 'auto',
                            }}
                            alt={author}
                        />
                        <Link className="underline text-blue-700" href="/">
                            Read the story
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-gradient-to-tr from-[#6554c0] to-[#f99cdb] px-8 py-10 flex flex-col justify-between gap-2">
                <h3 className="text-white text-2xl md:text-2xl lg:text-4xl font-bold">
                    {info}
                </h3>
                <Link className="underline text-[#ffffffcc]" href="/">
                    Vello TechValidate story
                </Link>
            </div>
        </div>
    );
};
