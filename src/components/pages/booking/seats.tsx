'use client'

import { cn } from '@/lib/utils'
import { Seat as SeatType } from '@/model/cinema'
import React, { useRef } from 'react'

interface SeatsProps extends React.HTMLAttributes<HTMLDivElement> {
    seats: SeatType[]
}

const seatRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

function Seats({ className, seats, ...props }: SeatsProps) {
    return (
        <div
            className={cn('grid grid-cols-10 justify-center gap-3', className)}
        >
            {seats.map((seat) => {
                return <Seat {...seat} key={seat.id} />
            })}
        </div>
    )
}

interface SeatProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string
    rowIndex: number
    isReserved: boolean
    rowName: string
    order: number
}

function Seat({
    className,
    rowIndex,
    isReserved,
    order,
    rowName,
    id,
    ...props
}: SeatProps) {
    return (
        <label htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                className="peer hidden"
                disabled={isReserved}
                {...props}
            />
            <div
                className={cn(
                    'flex size-7 cursor-pointer select-none items-center justify-center rounded-sm bg-primary-900 ring-1 ring-inset ring-primary-850 hover:ring-highlight-500 peer-checked:bg-highlight-500 peer-checked:ring-highlight-400 peer-disabled:bg-secondary-900 peer-disabled:text-secondary-850',
                    className
                )}
            >
                {rowName}
                {rowIndex}
            </div>
        </label>
    )
}

export default Seats
