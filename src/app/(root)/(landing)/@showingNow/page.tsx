import MovieCard from '@/components/movie-card'
import { Button } from '@/components/ui/button'
import { getMovies } from '@/service/movie'
import Link from 'next/link'

export default async function Page() {
   const movies = await getMovies('showing-now', {
      page: 1,
      perPage: 5,
   })
   return (
      <div className="flex flex-col gap-7.5">
         <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-1.5">
                  <div className="size-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-[28px]">Showing Now</span>
               </div>
               <span className="text-slate-600">Movie in this week</span>
            </div>
            <div className="">
               <Button asChild variant={'secondary'} className="px-10 py-2">
                  <Link href={'/movie'}>View All</Link>
               </Button>
            </div>
         </div>
         <div className="flex justify-around">
            {movies.map((movie) => (
               <Link key={movie.slug} href={`/movie/${movie.slug}`}>
                  <MovieCard
                     slug={movie.slug}
                     name={movie.name}
                     rating={movie.sumOfRating}
                     poster={movie.poster}
                  />
               </Link>
            ))}
         </div>
      </div>
   )
}
