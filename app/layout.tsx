import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
