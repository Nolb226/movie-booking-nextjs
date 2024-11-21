'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'
import { useBookingContext } from '@/context/booking-context'

type StepStates = 'pending' | 'completed' | 'in-progress'

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
   value: string
   label: string
}

const Step = ({ value, className, label, ...props }: StepProps) => {
   const { currentStep } = useBookingContext()
   const stepState =
      currentStep! > +value
         ? 'completed'
         : currentStep === +value
           ? 'in-progress'
           : 'pending'

   const stepText =
      currentStep! > +value
         ? 'Completed'
         : currentStep === +value
           ? 'In Progress'
           : 'Pending'

   return (
      <div
         data-state={stepState}
         className={cn(
            'group flex w-full max-w-55 flex-col gap-8 py-2.5 pr-8',
            className
         )}
         {...props}
      >
         <div className="flex items-center gap-2.5">
            <div className="flex size-5 items-center justify-center rounded-full bg-primary-800 transition-all duration-200 ease-linear group-data-[state=completed]:hidden">
               <div className="size-3.5 rounded-full ring-inset ring-primary-700 transition-all duration-200 ease-linear group-data-[state=in-progress]:bg-primary-500 group-data-[state=in-progress]:ring"></div>
            </div>
            <div className="hidden size-5 items-center justify-center rounded-full bg-teal-900 group-data-[state=completed]:flex">
               <CheckIcon className="size-3.5 text-teal-300" />
            </div>
            <div className="h-[1.5px] flex-1 bg-primary-800 transition-all duration-200 ease-linear group-data-[state=completed]:bg-teal-500 group-data-[state=in-progress]:bg-primary-500" />
         </div>
         <div className="flex flex-col gap-4">
            <p className="text-xs text-slate-500 sm:text-sm">STEP {value}</p>
            <p className="text-nowrap text-sm text-secondary-100 sm:text-base sm:text-xl/relaxed">
               {label}
            </p>
            <p className="text-xs font-semibold text-primary-800 group-data-[state=completed]:text-teal-500 group-data-[state=in-progress]:text-primary-500">
               {stepText}
            </p>
         </div>
      </div>
   )
}
export { Step }
