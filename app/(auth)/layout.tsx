import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main
            className="
      min-h-screen 
      md:bg-[url('/images/auth/left.svg'),_url('/images/auth/right.svg')] 
      md:bg-[position:bottom_left,_bottom_right]
      md:bg-[size:368px,_368px]
      md:bg-no-repeat 
      md:bg-fixed
      flex justify-center items-center"
        >
            <Link href="/" className="absolute top-4 left-4">
                <Button variant="ghost" className="p-2">
                    <ArrowLeft />
                </Button>
            </Link>
            {children}
        </main>
    );
}
