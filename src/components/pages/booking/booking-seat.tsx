'use client'
import { Button } from '@/components/ui/button'
import { ShowSeatBooking } from '@/model/show'
import React, { useEffect } from 'react'
import Seats from './seats'
import Screen from './screen'
import { useBookingContext } from '@/context/booking-context'
import { Cinema, CinemaWithMovies } from '@/model/cinema'
import { formatStartTime } from '@/lib/utils'
import useSWR from 'swr'
import { ENDPOINTS } from '@/constants/endpoint'
import { getShowSeat } from '@/service/show'
import { Skeleton } from '@/components/ui/skeleton'

function BookingSeat() {
   const { currentFormat, currentShow, selectedDay, selectShow } =
      useBookingContext()
   const { data, isLoading, mutate } = useSWR(
      ENDPOINTS.SHOW.SEAT(currentShow!.id),
      getShowSeat
   )

   return (
      <>
         <div className="flex flex-1 flex-col justify-center gap-8 rounded-lg bg-white/[4%] ring-1 ring-inset ring-primary-900">
            <div className="flex items-center gap-8 rounded-t-lg bg-primary-900 px-8 py-4 ring-1 ring-inset ring-primary-850">
               <p className="text-xl text-secondary-50">Showtime</p>
               <div className="flex flex-wrap gap-2.5">
                  {currentFormat?.shows
                     .filter((show) => {
                        const stringDate = `${show.startDate}T${show.startTime}`
                        const startDate = new Date(stringDate)

                        return startDate.getTime() >= selectedDay.getTime()
                     })
                     .map((show) => {
                        console.log(show)

                        console.log(currentShow?.startDate === show.startDate)

                        if (currentShow?.startDate === show.startDate)
                           return (
                              <Button
                                 key={show.id}
                                 onClick={() => {
                                    selectShow(currentFormat!, show)
                                    mutate()
                                 }}
                                 variant="showtime"
                              >
                                 {formatStartTime(show.startTime)}
                              </Button>
                           )
                     })}
               </div>
            </div>
            <div className="flex flex-col gap-3 px-5.5 pb-8">
               <div className="">
                  {!isLoading ? (
                     <Seats rows={data!.hall.rows} />
                  ) : (
                     <Skeleton className="h-[352px]" />
                  )}
               </div>
               <Screen />
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                     <div className="size-6 rounded-sm bg-secondary-900 ring-2 ring-inset ring-primary-850"></div>
                     <span>Đã bán</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="size-6 rounded-sm bg-highlight-500 ring-2 ring-inset ring-highlight-400"></div>
                     <span>Đang chọn</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default BookingSeat
