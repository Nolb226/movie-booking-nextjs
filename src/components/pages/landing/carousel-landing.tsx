'use client'

import { Movie } from '@/model/movie'
import MainSlider from '@/components/pages/landing/main-slider'
import MovieThumbnail from '@/components/pages/movie/movie-thumbnail'
import {
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'
import React, { useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function CarouselLanding({ movies }: { movies: Movie[] }) {
   const [api, setApi] = React.useState<CarouselApi>()
   const [current, setCurrent] = React.useState<number>(0)

   const onSelect = useCallback(() => {
      if (!api) return
      setCurrent(api.selectedScrollSnap())
   }, [api])

   useEffect(() => {
      if (!api) return
      setCurrent(api.selectedScrollSnap())
      api.on('select', onSelect)
   }, [api, onSelect])

   return (
      <div className="flex gap-4">
         <Carousel setApi={setApi} className="relative basis-3/4">
            <CarouselContent className="">
               {movies.map((movie) => (
                  <CarouselItem key={movie.slug}>
                     <MainSlider movie={movie} />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <div className="absolute bottom-20 right-20 px-3 py-2">
               <CarouselPrevious className="disabled:opacity-40" />
               <div className="flex gap-4">
                  {movies.map((_, index) => (
                     <button key={`dot-${index}`}>
                        <div
                           onClick={() => api?.scrollTo(index)}
                           className={cn(
                              'size-3 cursor-pointer select-none rounded-full bg-white opacity-35',
                              {
                                 'opacity-100': index === current,
                              }
                           )}
                        ></div>
                     </button>
                  ))}
               </div>
               <CarouselNext className="disabled:opacity-40" />
            </div>
         </Carousel>
         <div className="flex basis-1/4 flex-col gap-8">
            <div className="flex items-center gap-1.5">
               <div className="size-1.5 rounded-full bg-primary-500"></div>
               <span className="text-sm">Showing Now</span>
            </div>
            <div className="flex flex-col gap-3">
               {movies.map((movie, index) => (
                  <MovieThumbnail
                     onClick={() => api?.scrollTo(index)}
                     className={cn('cursor-pointer select-none opacity-35', {
                        'opacity-100': index === current,
                     })}
                     key={movie.slug}
                     poster={movie.poster}
                     name={movie.name}
                     slug={movie.slug}
                     horizontalPoster={movie.horizontalPoster}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}
