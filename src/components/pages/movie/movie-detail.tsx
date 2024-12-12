'use client'

import { MovieDetails } from '@/model/movie'
import DateFilter from '@/components/date-filter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatStartTime } from '@/lib/utils'
import { Star } from 'lucide-react'
import { useBookingContext } from '@/context/booking-context'
import { useRouter } from 'next/navigation'
interface MovieDetailProps {
   data: MovieDetails
}

export default function MovieDetail({ data }: MovieDetailProps) {
   const { selectCinema, selectMovie, selectShow, toStepTwo, selectedDay } =
      useBookingContext()
   const router = useRouter()
   return (
      <div className="mt-6">
         <div className="flex flex-col gap-4 pb-8">
            <h1 className="text-4xl">{data.name}</h1>
            <h3 className="text-slate-500">{data.subName}</h3>
         </div>
         <div className="mt-5.5 aspect-[24/16]">
            <img
               className="h-full w-full object-contain"
               src={data.horizontalPoster}
               alt={data.name}
            />
         </div>
         <div className="mt-10 flex flex-col gap-3.75">
            <div className="flex items-center">
               <div className="w-1/12 text-lg font-bold text-slate-500">
                  Genres
               </div>
               <div className="flex w-11/12 items-center gap-2">
                  {data.genres.map((genre) => (
                     <Badge key={genre.id}>{genre.name}</Badge>
                  ))}
               </div>
            </div>
            <div className="flex items-center">
               <div className="w-1/12 text-lg font-bold text-slate-500">
                  Director
               </div>
               <div className="w-11/12">
                  <span className="text-primary-600">{data.director}</span>
               </div>
            </div>
            <div className="flex items-center">
               {/* <div className="w-1/12 text-lg font-bold text-slate-500">
                  Ratings
               </div> */}
               <div className="w-11/12">
                  <span className="text-primary-600"></span>
                  <Star className="size-3.75 fill-yellow-400 text-yellow-400" />
               </div>
            </div>
         </div>
         <div className="flex flex-col gap-4">
            <div className="w-1/12 text-lg font-bold text-slate-500">
               Description
            </div>
            <div
               className="prose !max-w-none rounded-md bg-white/95 p-2"
               dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
         </div>
         <div className="mt-8 flex flex-col gap-4">
            <div>
               <div className="flex items-center gap-1.5">
                  <div className="size-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-2xl/tight">Shows</span>
               </div>
            </div>
            <div>
               <DateFilter />
            </div>
            <div className="flex flex-col gap-4">
               {data.cinemas.map((cinema) => (
                  <div className="flex flex-col gap-8 py-8" key={cinema.id}>
                     <p className="text-xl font-medium text-secondary-600">
                        {cinema.name}
                     </p>
                     <div className="flex flex-col gap-2">
                        {cinema.formats.map((format) => (
                           <div className="flex" key={format.id}>
                              <p className="w-2/12 font-bold text-slate-500">
                                 {format.caption} - {format.version}
                              </p>
                              <div className="flex w-10/12 flex-wrap gap-4">
                                 {format.shows
                                    .filter((show) => {
                                       const stringDate = `${show.startDate}T${show.startTime}`
                                       const startDate = new Date(stringDate)

                                       return (
                                          startDate.getTime() >=
                                          selectedDay.getTime()
                                       )
                                    })
                                    .map((show) => (
                                       <Button
                                          key={show.id}
                                          className="basis-1/12"
                                          variant="showtime"
                                          onClick={() => {
                                             selectCinema(cinema)

                                             selectMovie(data)
                                             selectShow(format, show)
                                             toStepTwo()
                                             router.push('/booking')
                                          }}
                                       >
                                          {formatStartTime(show.startTime)}
                                       </Button>
                                    ))}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
