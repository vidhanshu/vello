import { Metadata } from 'next';

import Navbar from '@/src/home/components/navbar/navbar';
import { APP_NAME } from '@/src/common/utils/constants';

export const metadata: Metadata = {
    title: `Home | ${APP_NAME}`,
    description: `Make the impossible, possible with ${APP_NAME}. The ultimate teamwork project management tool. Start up a board in seconds, automate tedious tasks, and collaborate anywhere, even on mobile.`,
};

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
