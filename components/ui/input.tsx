import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary';
}

const getClassNameByVariant = (variant: InputProps['variant']) => {
    switch (variant) {
        case 'primary':
            return 'border-[2px] p-2 placeholder:text-sm hover:bg-gray-100 focus:bg-white focus-visible:ring-0 focus-visible:border-1 focus-visible:border-main focus-visible:ring-offset-0';
        default:
            return '';
    }
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex w-full rounded-md border border-input bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 transition focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-base',
                    getClassNameByVariant(variant),
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };
