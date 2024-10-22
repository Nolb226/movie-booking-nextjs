import { getMovieDetail } from '@/service/movie'
import React from 'react'

async function Page({ params }: { params: { slug: string } }) {
    const data = await getMovieDetail(params.slug)
    console.log(data)

    return <div>Page</div>
}

export default Page
