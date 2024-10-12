import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default:
                    'hover:shadow-hover bg-primary-500 text-neutral-50 focus-visible:ring-white active:shadow-none disabled:bg-primary-800 disabled:text-primary-700',
                destructive:
                    'bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
                outline:
                    'border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
                secondary:
                    'bg-white/[8%] text-slate-300 shadow-inner shadow-white/[8%] hover:bg-white/[12%] hover:text-slate-100 hover:shadow-none focus-visible:ring-primary-400 active:bg-white/[8%] active:text-slate-50 disabled:bg-white/[4%] disabled:text-slate-600',
                ghost: 'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
                link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
                highlight:
                    'bg-highlight-500 text-white hover:bg-highlight-600 focus-visible:ring-white active:bg-highlight-500 disabled:bg-highlight-500 disabled:text-highlight-300',
            },
            size: {
                default: 'py-2',
                sm: 'rounded-md py-2.5',
                lg: 'rounded-md py-3',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    hasIcon?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size = 'default',
            asChild = false,
            hasIcon = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }), {
                    'gap-2': hasIcon,
                    'pl-9.5 pr-10': hasIcon && size === 'lg',
                    'pl-8.5 pr-9': hasIcon && size === 'default',
                    'pl-7.5 pr-8': hasIcon && size === 'sm',
                })}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
