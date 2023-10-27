import { LucideIcon } from 'lucide-react';

export type TWorkCardProps = {
    Icon: LucideIcon;
    title: string;
    description: string;
    link: string;
    linkTitle: string;
    img: string;
    color: string;
};

export type TFeatureCardProps = {
    title: string;
    description: string;
    img: string;
    link: string;
    linkTitle: string;
};

export type TTestimonialCarouselCardProps = {
    feedback: string;
    author: string;
    designation: string;
    orgLogo: {
        img: string;
        width: number;
        height: number;
    };
    info: string;
};

export type TPricingCardProps = {
    name: string;
    price: number;
    frequencyInfo: string;
    description: string;
    link: string;
    linkTitle: string;
};
