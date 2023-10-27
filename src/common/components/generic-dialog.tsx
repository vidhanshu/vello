'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    dialogClose,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { DialogClose } from '@radix-ui/react-dialog';
import { useState } from 'react';

type TGenericDialogProps = {
    variant?: 'success' | 'error' | 'warning' | 'info' | 'confirm';
    title: string;
    content?: React.ReactNode;
    children: React.ReactNode;
    description?: string;
    handleSubmit: () => void;
    buttonTitle?: string;
};
const getButtonPropsByVariant = (
    variant: TGenericDialogProps['variant']
): ButtonProps => {
    switch (variant) {
        case 'confirm':
            return {
                variant: 'primary',
            };
        case 'error':
            return {
                variant: 'destructive',
            };
        case 'info':
            return {
                className: 'bg-blue-400 hover:bg-blue-500 text-white',
            };
        case 'warning':
            return {
                className: 'bg-yellow-500 hover:bg-yellow-600 text-white',
            };
        case 'success':
            return {
                className: 'bg-green-500 hover:bg-green-600 text-white',
            };
        default:
            return {
                variant: 'primary',
            };
    }
};
const GenericDialog = ({
    children,
    title,
    content,
    description,
    variant = 'confirm',
    buttonTitle = "Ok, I'm sure",
    handleSubmit,
}: TGenericDialogProps) => {
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        try {
            setLoading(true);
            handleSubmit();
        } catch (error) {
            // handle error here
        } finally {
            setLoading(false);
            dialogClose();
        }
    };

    const { className, ...otherButtonProps } = getButtonPropsByVariant(variant);

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className='max-w-sm sm:max-w-xl'>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description ? (
                        <DialogDescription>{description}</DialogDescription>
                    ) : null}
                </DialogHeader>
                {content}
                <Separator />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        loading={loading}
                        onClick={onSubmit}
                        type="button"
                        className={cn('mb-4 md:mb-0', className)}
                        {...otherButtonProps}
                    >
                        {buttonTitle}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default GenericDialog;
