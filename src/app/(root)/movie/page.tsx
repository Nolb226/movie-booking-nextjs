import MovieCard from '@/components/movie-card'
import { Button } from '@/components/ui/button'
import { MovieStatus } from '@/model/movie'
import { getMovies } from '@/service/movie'
import Link from 'next/link'
import React from 'react'

async function Page({
   searchParams,
}: {
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const status = (searchParams.status as MovieStatus) || ''
   const movies = await getMovies(status || 'showing-now', {
      page: 1,
      perPage: 10,
   })
   return (
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 pt-6">
         <h2 className="text-[28px]">Movies</h2>
         <div className="flex items-center gap-6 rounded-md bg-white/[4%] px-1 py-2">
            <Button
               className="px-2"
               variant={status === '' ? 'default' : null}
               asChild
            >
               <Link href={`/movie`}>Showing Now</Link>
            </Button>
            <Button
               className="px-2"
               variant={status === 'coming-soon' ? 'default' : null}
               asChild
            >
               <Link href={`/movie?status=coming-soon`}>Coming Soon</Link>
            </Button>
         </div>
         <div className="flex gap-4">
            {movies.map((movie) => (
               <MovieCard
                  key={movie.id}
                  poster={movie.poster}
                  slug={movie.slug}
                  name={movie.name}
               />
            ))}
         </div>
      </div>
   )
}

export default Page
