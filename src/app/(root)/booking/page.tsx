'use client'
import MovieCard from '@/components/movie-card'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useBookingContext } from '@/context/booking-context'
import { cn } from '@/lib/utils'
import { CinemaWithMovies } from '@/model/cinema'
import { getCinema } from '@/service/cinema'

export default function Page() {
   const { cinema, full_data, movie, selectMovie, selectCinema } =
      useBookingContext()
   return (
      <div className="w-9/12">
         <Accordion
            className="flex flex-col gap-5.5"
            type="multiple"
            defaultValue={['location', 'movie', 'shows']}
         >
            <AccordionItem
               className="overflow-hidden rounded-lg border-none ring-1 ring-inset ring-primary-900"
               value="location"
            >
               <AccordionTrigger className="bg-primary-900 px-8 py-5.5">
                  Location
               </AccordionTrigger>
               <AccordionContent className="flex flex-col gap-4 bg-white/[4%] px-8 pt-5.5">
                  {full_data.map((city, cityNum) => (
                     <div
                        className="flex justify-between"
                        key={`city-${city.id}`}
                     >
                        <div className="">{city.name}</div>
                        <div className="flex w-2/3 flex-wrap gap-4 rounded-2xl bg-white/[8%] p-2">
                           {city.cinemas.map((c, cinemaNum) => (
                              <div key={`cinema-${cinema?.id}-${cinemaNum}`}>
                                 <Button
                                    onClick={() =>
                                       selectCinema(c as CinemaWithMovies)
                                    }
                                    className="w-full px-4"
                                    variant={
                                       c.id === cinema!.id
                                          ? 'secondary'
                                          : 'ghost'
                                    }
                                 >
                                    {c.name}
                                 </Button>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
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
                  {cinema?.movies.map((m, movieNum) => {
                     return (
                        <MovieCard
                           onClick={() => selectMovie(m)}
                           poster={m.poster}
                           name={m.name}
                           slug={m.slug}
                           rating={m.sumOfRating / m.numberOfRating || 0}
                           key={m.id}
                           className={cn({
                              'bg-primary-900 hover:bg-primary-900':
                                 movie?.id === m.id,
                           })}
                        ></MovieCard>
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
               <AccordionContent className="flex flex-wrap gap-4 bg-white/[4%] px-8 pt-5.5"></AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   )
}
