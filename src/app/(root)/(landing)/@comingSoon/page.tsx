import MovieCard from '@/components/movie-card'
import { Button } from '@/components/ui/button'
import { getMovies } from '@/service/movie'
import Link from 'next/link'

export default async function Page() {
   const movies = await getMovies('coming-soon', {
      page: 1,
      perPage: 5,
   })
   return (
      <div className="flex flex-col gap-7.5">
         <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-1.5">
                  <div className="size-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-[28px]">Coming Soon</span>
               </div>
               <span className="text-slate-600">Movie that&apos;s coming </span>
            </div>
            <div className="">
               <Button variant={'secondary'} className="px-10 py-2">
                  View All
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
