'use server'

import DateFilter from '@/components/date-filter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getMovieDetail } from '@/service/movie'
import { Star } from 'lucide-react'
import Link from 'next/link'
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
                        <div
                            className="flex flex-col gap-8 py-8"
                            key={cinema.id}
                        >
                            <p className="text-xl font-medium text-secondary-600">
                                {cinema.name}
                            </p>
                            <div className="flex flex-col gap-2">
                                {cinema.formats.map((format) => (
                                    <div className="flex" key={format.id}>
                                        <p className="w-2/12 font-bold text-slate-500">
                                            {format.caption} - {format.version}
                                        </p>
                                        <div className="flex w-10/12 gap-4">
                                            {format.shows.map((show) => (
                                                <Button
                                                    key={show.id}
                                                    variant="showtime"
                                                    asChild
                                                >
                                                    <Link
                                                        href={`/booking/${show.id}`}
                                                    >
                                                        {show.startTime}
                                                    </Link>
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

export default Page
