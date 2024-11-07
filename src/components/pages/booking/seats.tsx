'use client'

import { useBookingContext } from '@/context/booking-context'
import { cn } from '@/lib/utils'
import { RowSeat, Seat as SeatType } from '@/model/cinema'
import React, { useCallback, useMemo, useRef } from 'react'

interface SeatsProps extends React.HTMLAttributes<HTMLDivElement> {
   rows: RowSeat[]
}

function Seats({ className, rows, ...props }: SeatsProps) {
   const maxColumn = useMemo(
      () => Math.max(...rows.map((row) => row.seats.length)),
      [rows]
   )

   const renderSeat = useCallback(
      (row: RowSeat) => {
         return Array.from({ length: maxColumn }).map((_, index) => {
            const seat = row.seats.find((seat) => seat.rowIndex === index)
            return seat ? (
               <Seat key={seat.id} seat={{ ...seat, rowName: row.rowName }} />
            ) : (
               <div key={index} className="size-7"></div>
            )
         })
      },
      [maxColumn]
   )

   return (
      <div className={cn('flex flex-col-reverse gap-2', className)} {...props}>
         {rows.map((row) => {
            return (
               <div key={row.rowName} className="flex">
                  <div className="">{row.rowName}</div>
                  <div className="flex flex-1 justify-center gap-2">
                     {renderSeat(row)}
                  </div>
                  <div className="">{row.rowName}</div>
               </div>
            )
         })}
      </div>
   )
}

interface SeatProps extends React.HTMLAttributes<HTMLDivElement> {
   seat: SeatType
}

function Seat({
   className,
   seat: { id, isReserved, order, rowIndex, rowName, status },
   ...props
}: SeatProps) {
   const { selectSeat } = useBookingContext()
   return (
      <label htmlFor={id}>
         <input
            id={id}
            type="checkbox"
            className="peer hidden"
            disabled={isReserved}
         />
         <div
            onClick={() =>
               selectSeat({
                  id,
                  isReserved,
                  order,
                  rowIndex,
                  rowName,
                  status,
               })
            }
            className={cn(
               'flex size-7 cursor-pointer select-none items-center justify-center rounded-sm bg-primary-900 ring-1 ring-inset ring-primary-850 hover:ring-highlight-500 peer-checked:bg-highlight-500 peer-checked:ring-highlight-400 peer-disabled:bg-secondary-900 peer-disabled:text-secondary-850',
               className
            )}
            {...props}
         >
            {/* {rowName} */}
            {rowIndex}
         </div>
      </label>
   )
}

export default Seats
