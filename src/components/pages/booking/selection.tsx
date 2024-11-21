import React, { useCallback, useMemo, useState } from 'react'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useBookingContext } from '@/context/booking-context'
import { areDatesEqual, cn, formatStartTime } from '@/lib/utils'
import { CinemaWithMovies } from '@/model/cinema'
import MovieCard from '@/components/movie-card'
import { Skeleton } from '@/components/ui/skeleton'
import DateFilter from '@/components/date-filter'

function Selection() {
   const {
      cities,
      selectCinema,
      isLoading,
      currentCinema,
      currentMovie,
      selectMovie,
      selectedDay,
      selectShow,
   } = useBookingContext()
   const hasShow = useMemo(() => {
      return currentMovie?.formats.some((format) => {
         return format.shows.some((show) => {
            const stringDate = `${show.startDate}`
            const startDate = new Date(stringDate)

            return areDatesEqual(startDate, selectedDay)
         })
      })
   }, [currentMovie, selectedDay])

   const renderShowtime = useCallback(() => {
      return currentMovie?.formats.map((format) => (
         <div
            className="flex items-center gap-12 pt-4 first:pt-0"
            key={format.id}
         >
            <p className="w-1/12 text-nowrap font-bold text-slate-500">
               {format.version} {format.caption}
            </p>
            <div className="flex flex-1 flex-wrap items-center gap-4">
               {format.shows
                  .filter((show) => {
                     const stringDate = `${show.startDate}T${show.startTime}`
                     const startDate = new Date(stringDate)

                     return startDate.getTime() >= selectedDay.getTime()
                  })
                  .map((show) => (
                     <Button
                        onClick={() => {
                           selectShow(format, show)
                        }}
                        key={show.id}
                        className="min-w-[73px]"
                        variant="showtime"
                     >
                        {formatStartTime(show.startTime)}
                     </Button>
                  ))}
            </div>
         </div>
      ))
   }, [currentMovie, selectedDay, selectShow])

   return (
      <div className="flex-1">
         <Accordion
            className="flex w-full flex-col gap-5.5"
            type="single"
            defaultValue={'location'}
         >
            <AccordionItem
               // defaultValue={'location'}
               className="overflow-hidden rounded-lg border-none ring-1 ring-inset ring-primary-900"
               value="location"
            >
               <AccordionTrigger className="bg-primary-900 px-8 py-5.5">
                  Location
               </AccordionTrigger>
               <AccordionContent className="flex flex-col gap-4 bg-white/[4%] px-8 pt-5.5">
                  {!isLoading ? (
                     cities?.map((city) => (
                        <div
                           className="flex justify-between"
                           key={`city-${city.id}`}
                        >
                           <div className="">{city.name}</div>
                           <div className="flex w-2/3 flex-wrap gap-4 rounded-2xl bg-white/[8%] p-2">
                              {city.cinemas.map((c, cinemaNum) => (
                                 <div key={`cinema-${c?.id}-${cinemaNum}`}>
                                    <Button
                                       onClick={() =>
                                          selectCinema(c as CinemaWithMovies)
                                       }
                                       variant={
                                          c.id === currentCinema?.id
                                             ? 'default'
                                             : null
                                       }
                                       className="w-full px-4"
                                    >
                                       {c.name}
                                    </Button>
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className="flex justify-between">
                        <Skeleton className="h-10 w-24"></Skeleton>
                        <Skeleton className="h-[104px] w-2/3 rounded-2xl"></Skeleton>
                     </div>
                  )}
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               className="overflow-hidden rounded-lg border-none ring-1 ring-inset ring-primary-900"
               value="movie"
            >
               <AccordionTrigger className="bg-primary-900 px-8 py-5.5">
                  Movie
               </AccordionTrigger>
               <AccordionContent className="flex flex-wrap gap-4 bg-white/[4%] px-8 pt-5.5">
                  {currentCinema?.movies.map((m) => {
                     return (
                        <MovieCard
                           onClick={() => selectMovie(m)}
                           poster={m.poster}
                           name={m.name}
                           slug={m.slug}
                           rating={m.sumOfRating / m.numberOfRating || 0}
                           key={m.id}
                           className={cn(
                              'w-1/3 cursor-pointer max-lg:max-w-[120px]',
                              {
                                 'bg-primary-900 hover:bg-primary-900':
                                    currentMovie?.id === m.id,
                              }
                           )}
                        />
                     )
                  })}
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               className="overflow-hidden rounded-lg border-none ring-1 ring-inset ring-primary-900"
               value="shows"
            >
               <AccordionTrigger className="bg-primary-900 px-8 py-5.5">
                  Shows
               </AccordionTrigger>
               <AccordionContent className="flex flex-col gap-12 bg-white/[4%] px-8 pt-5.5">
                  <div className="px-6">
                     <DateFilter />
                  </div>
                  <div className="flex flex-col gap-4 divide-y divide-gray-600">
                     {hasShow && renderShowtime()}
                  </div>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   )
}

export default Selection
