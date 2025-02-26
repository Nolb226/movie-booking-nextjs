'use server'

import MovieDetail from '@/components/pages/movie/movie-detail'

import { getMovieDetail } from '@/service/movie'
import React from 'react'

async function Page({ params }: { params: { slug: string } }) {
   const data = await getMovieDetail(params.slug)

   return <MovieDetail data={data} />
}

export default Page
