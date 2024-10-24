import { Badge } from '@/components/ui/badge'
import { getMovieDetail } from '@/service/movie'
import { Star } from 'lucide-react'
import React from 'react'

async function Page({ params }: { params: { slug: string } }) {
    const data = await getMovieDetail(params.slug)

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
                        <span className="text-primary-600">
                            {data.director}
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/12 text-lg font-bold text-slate-500">
                        Ratings
                    </div>
                    <div className="w-11/12">
                        <span className="text-primary-600"></span>
                        <Star className="size-3.75 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
