'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AuthBaseCard = ({ type }: { type: 'SIGNUP' | 'LOGIN' }) => {
    const router = useRouter();

    return (
        <div
            className="
      bg-white h-screen flex flex-col justify-between px-4 py-10 w-full max-w-[480px]
      md:block md:h-auto md:border md:shadow-lg md:px-8 md:py-10 md:rounded-sm md:w-[400px]
      "
        >
            <div>
                <div className="space-y-4">
                    <Image
                        className="mx-auto"
                        src="/images/common/vello-logo.svg"
                        alt="logo"
                        width={117.5}
                        height={40}
                    />
                    <h1 className="font-bold text-center">
                        {type === 'SIGNUP'
                            ? 'Sign up to continue'
                            : 'Login to continue'}
                    </h1>
                    <div className="space-y-2">
                        <Input
                            className="border-[2px] p-2 placeholder:text-sm hover:bg-gray-100 focus:bg-white focus-visible:ring-0 focus-visible:border-1 focus-visible:border-main focus-visible:ring-offset-0"
                            placeholder="Enter your email"
                        />
                        <Input
                            className="border-[2px] p-2 placeholder:text-sm hover:bg-gray-100 focus:bg-white focus-visible:ring-0 focus-visible:border-1 focus-visible:border-main focus-visible:ring-offset-0"
                            placeholder="Enter password"
                        />
                        {type === 'LOGIN' && (
                            <p className="text-xs text-[#5e6c84]">
                                By signing up, I accept the Atlassian{' '}
                                <Link
                                    href="#"
                                    className="hover:underline text-main"
                                >
                                    Cloud Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link
                                    href="#"
                                    className="hover:underline text-main"
                                >
                                    acknowledge the Privacy Policy
                                </Link>
                                .
                            </p>
                        )}
                        <Button
                            onClick={() => {
                                // TODO: This handler will be passed via prop
                                router.push('/home');
                            }}
                            className="w-full md:w-full p-2 "
                            variant="primary"
                        >
                            {type === 'SIGNUP' ? 'Sign up' : 'Login'}
                        </Button>
                    </div>
                </div>

                <div className="my-4 text-center text-sm text-slate-600">
                    OR
                </div>

                <div className="flex flex-col gap-4">
                    <button className="p-2 rounded-sm shadow-sm  border hover:bg-gray-50 grid grid-cols-12 items-center">
                        <Image
                            src="/images/auth/google.svg"
                            width={18}
                            height={18}
                            alt="google icon"
                            className="col-span-1"
                        />
                        <span className="col-span-11 font-bold text-[#42526e]">
                            Continue with Google
                        </span>
                    </button>
                    <button className="p-2 rounded-sm shadow-sm  border hover:bg-gray-50 grid grid-cols-12 items-center">
                        <Image
                            src="/images/auth/ms.svg"
                            width={18}
                            height={18}
                            alt="google icon"
                            className="col-span-1"
                        />
                        <span className="col-span-11 font-bold text-[#42526e]">
                            Continue with Microsoft
                        </span>
                    </button>
                    <button className="p-2 rounded-sm shadow-sm  border hover:bg-gray-50 grid grid-cols-12 items-center">
                        <Image
                            src="/images/auth/apple.svg"
                            width={18}
                            height={18}
                            alt="google icon"
                            className="col-span-1"
                        />
                        <span className="col-span-11 font-bold text-[#42526e]">
                            Continue with Apple
                        </span>
                    </button>
                    <button className="p-2 rounded-sm shadow-sm  border hover:bg-gray-50 grid grid-cols-12 items-center">
                        <Image
                            src="/images/auth/slack.svg"
                            width={18}
                            height={18}
                            alt="google icon"
                            className="col-span-1"
                        />
                        <span className="col-span-11 font-bold text-[#42526e]">
                            Continue with Slack
                        </span>
                    </button>
                </div>

                {type === 'LOGIN' ? (
                    <div className="text-slate-500 text-center py-6 text-xs">
                        <Link href="/reset-password" className="link text-sm">
                            Can&apos;t log in?
                        </Link>{' '}
                        •{' '}
                        <Link href="/signup" className="link text-sm">
                            Create an account
                        </Link>
                    </div>
                ) : (
                    <div className="text-slate-500 text-center py-6 text-xs">
                        <Link href="/login" className="link text-sm">
                            Already have an Atlassian account? Log in
                        </Link>{' '}
                    </div>
                )}
            </div>

            <div className="pt-4 space-y-4 border-t">
                <Image
                    src="images/common/vidhanshu-logo.svg"
                    width={142}
                    height={24}
                    alt="vidhanshu-logo"
                    className="mx-auto"
                />
                <p className="text-xs text-center">
                    One account for Vello, Jira, Confluence and{' '}
                    <Link href="#" className="link text-xs">
                        more
                    </Link>
                    .
                </p>
                <div className="text-slate-700 text-center text-xs">
                    <Link href="/reset-password" className="hover:underline">
                        Privacy policy
                    </Link>{' '}
                    •{' '}
                    <Link href="/login" className="hover:underline">
                        User Notice
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AuthBaseCard;
