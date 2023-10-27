import { Metadata } from 'next';

import { APP_NAME } from '@/src/common/utils/constants';
import WorkspaceCustomLayout from '@/src/workspace/components/workspace-layout';

export const metadata: Metadata = {
    title: `Board | ${APP_NAME}`,
    description: `Make the impossible, possible with ${APP_NAME}. The ultimate teamwork project management tool. Start up a board in seconds, automate tedious tasks, and collaborate anywhere, even on mobile.`,
};

export default function BoardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <WorkspaceCustomLayout showHeader={false}>{children}</WorkspaceCustomLayout>;
}
