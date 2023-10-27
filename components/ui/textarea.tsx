import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: 'primary';
}

const getClassNameByVariant = (variant: TextareaProps['variant']) => {
    switch (variant) {
        case 'primary':
            return 'border-[2px] p-2 placeholder:text-sm hover:bg-gray-100 focus:bg-white focus-visible:ring-0 focus-visible:border-1 focus-visible:border-main focus-visible:ring-offset-0';
        default:
            return '';
    }
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    getClassNameByVariant(variant),
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';

export { Textarea };
