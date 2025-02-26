import CarouselLanding from '@/components/pages/landing/carousel-landing'

import { getMovies } from '@/service/movie'
import React from 'react'

export async function Page() {
   const movies = await getMovies('showing-now', {
      page: 1,
      perPage: 3,
   })
   return <CarouselLanding movies={movies} />
}

export default Page
