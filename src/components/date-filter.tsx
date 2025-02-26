'use client'
import React, { useMemo, useRef, useState } from 'react'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { useBookingContext } from '@/context/booking-context'

const DateFilter = () => {
   const { selectDay, selectedDay } = useBookingContext()
   const today = useMemo(() => new Date(), [])
   const days = useRef([...Array(8)])
   const handleSelectingDay = (day: Date) => {
      selectDay(day)
   }

   const renderDayButton = (day: Date, index: number) => (
      <CarouselItem className="basis-1/6" key={`date-${day.getDay()}-${index}`}>
         <Button
            variant={
               selectedDay.getDate() === day.getDate() ? 'default' : 'showtime'
            }
            className="flex w-full flex-col"
            onClick={() => handleSelectingDay(day)}
         >
            <span>
               {day
                  .toLocaleDateString('en-US', { weekday: 'long' })
                  .slice(0, 3)}
            </span>
            <span className="text-primary-200 underline underline-offset-2">
               {day.toLocaleDateString('en-US', { day: 'numeric' })}
            </span>
            <span className="text-xs">
               {day.toLocaleDateString('en-US', { month: 'short' })}
            </span>
         </Button>
      </CarouselItem>
   )

   return (
      <Carousel>
         <CarouselContent className="w-fit">
            {days.current.map((_, index) => {
               const day = new Date(today)
               day.setDate(today.getDate() + index)

               return renderDayButton(day, index)
            })}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
   )
}

export default DateFilter
