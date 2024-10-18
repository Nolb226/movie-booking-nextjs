import { cn } from '@/lib/utils'
import React from 'react'

interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

function Screen({ className, ...props }: ScreenProps) {
    return (
        <div className={cn('flex flex-col gap-4 py-5.5', className)} {...props}>
            <p className="text-center text-xl font-semibold text-slate-600">
                Screen
            </p>
            <div className="h-1 rounded-full bg-primary-700"></div>
        </div>
    )
}

export default Screen
