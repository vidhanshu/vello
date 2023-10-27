import { cn } from '@/lib/utils';

type TIconButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    size?: 'sm' | 'md' | 'lg';
};

const getClassNameBySize = (size: TIconButtonProps['size']) => {
    switch (size) {
        case 'sm':
            return 'p-1';
        case 'md':
            return 'p-2';
        case 'lg':
            return 'p-3';
        default:
            return 'p-2';
    }
};

export default function IconButton({
    className,
    size = 'md',
    children,
    ...rest
}: TIconButtonProps) {
    return (
        <button
            className={cn('click-link', className, getClassNameBySize(size))}
            {...rest}
        >
            {children}
        </button>
    );
}
