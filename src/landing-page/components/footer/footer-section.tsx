import Image from 'next/image';
import React from 'react';

import { FOOTER } from '@/src/landing-page/utils/constants';
import Link from 'next/link';

const FooterSection = () => {
    return (
        <footer className="bg-[#172a4c]">
            <div className="max-w-screen-xlg m-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 py-4 divide-y-[.5px] divide-[#516992] md:divide-y-0">
                    <div className="py-4 px-4 md:pb-0 flex justify-between items-center md:block">
                        <Image
                            src="/images/common/dark-logo.svg"
                            width={111.98}
                            height={37.55}
                            alt="dark-logo"
                            className="mb-4"
                        />
                        <Link
                            href="/"
                            className="text-white hover:underline font-semibold"
                        >
                            Login
                        </Link>
                    </div>
                    {FOOTER.top.map((item, idx) => (
                        <Link
                            href={item.link}
                            key={idx}
                            className="p-4 text-white hover:bg-[#344563] rounded-sm"
                        >
                            <h1 className="font-bold pb-2">{item.title}</h1>
                            <p className="text-xs">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-4">
                <div className="w-full h-[1px] bg-[#516992]" />
            </div>
            <div className="p-4 text-white max-w-screen-xlg m-auto px-4 flex flex-col md:flex-row md:justify-between gap-y-8 md:gap-y-0">
                <ul className="px-4 flex flex-col md:flex-row md:gap-x-4 md:items-center gap-y-4 md:gap-y-0">
                    <li>
                        <Link className="hover:underline text-xs" href="/">
                            Notice at Collection
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline text-xs" href="/">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline text-xs" href="/">
                            Terms
                        </Link>
                    </li>
                    <li className="text-xs">Copyright © 2023 Vidhanshu</li>
                </ul>
                <ul className="flex gap-x-4 px-4">
                    {FOOTER.socials.map(({ Icon, link }, idx) => (
                        <li
                            key={idx}
                            className="border-[1px] group rounded-full p-2"
                        >
                            <Link
                                target="_blank"
                                referrerPolicy="no-referrer"
                                href={link}
                            >
                                <Icon className="group-hover:scale-90 w-4 h-4" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default FooterSection;
