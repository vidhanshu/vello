import { redirect } from 'next/navigation';

import { WORKSPACE_SIDEBAR } from '@/src/workspace/utils/constants';

const page = () => {
    // will redirect to first board in the list if exists otherwise will redirect to workspace home
    const board = WORKSPACE_SIDEBAR.boards[0].title;
    if (board) return redirect(`/b/${board}`);

    return redirect('/w/');
};

export default page;
