import { redirect } from 'next/navigation';

export default function Page() {
    // redirect to home if user visited /w
    return redirect('/home');
}
