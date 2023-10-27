import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { CircleDashed } from 'lucide-react';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary:
                    'bg-main hover:bg-blue-700 w-full max-w-lg md:w-auto rounded-sm text-white text-base disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 disabled:hover:text-gray-500',
                sec: 'bg-white hover:bg-blue-50 border-[1px] border-main w-full max-w-lg md:w-auto rounded-sm text-black text-base',
                secAq: 'bg-white hover:bg-sec/10 border-[1px] border-sec w-full max-w-lg md:w-auto rounded-sm text-black text-base',
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                primary: 'px-4 py-3',
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            loading,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn("relative",buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {loading ? (
                    <span>
                        <CircleDashed className="w-5 h-5 animate-spin absolute left-0 right-0 mx-auto" />
                        {/* to keep width same as it has */}
                        <span className='invisible'>{children}</span>
                    </span>
                ) : (
                    children
                )}
            </Comp>
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
