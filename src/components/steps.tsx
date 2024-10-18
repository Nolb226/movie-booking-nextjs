import React from 'react'
import { cn } from '@/lib/utils'

type StepStates = 'pending' | 'completed' | 'in-progress'

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {}

function Steps({ className, children, ...props }: StepsProps) {
    return (
        <div
            className={cn('flex items-center justify-center', className)}
            {...props}
        >
            {children}
        </div>
    )
}

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {}

const Step = ({ className, ...props }: StepProps) => {
    return (
        <div
            data-state={'in-progress'}
            className={cn(
                'group flex w-full max-w-55 flex-col gap-8 py-2.5 pr-8',
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-2.5">
                <div className="flex size-5 items-center justify-center rounded-full bg-primary-800">
                    <div className="size-3.5 rounded-full ring-inset ring-primary-700 group-data-[state=pending]:bg-primary-500 group-data-[state=pending]:ring"></div>
                </div>
                <div className="h-[1.5px] flex-1 bg-primary-800 group-data-[state=pending]:bg-primary-500" />
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm text-slate-500">STEP 1</p>
                <p className="text-xl/relaxed text-secondary-100">
                    Select Movie
                </p>
                <p className="text-xs font-semibold text-primary-800 group-data-[state=pending]:text-primary-500">
                    In Progress
                </p>
            </div>
        </div>
    )
}
export { Steps, Step }
