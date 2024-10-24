import { Show } from './show'

export type Movie = {
    id: string
    name: string
    subName: string
    description: string
    slug: string
    sumOfRating: number
    numberOfRating: number
    director: string
    ageRestriction: number
    releaseDate: Date
    endDate: Date
    poster: string
    horizontalPoster: string
    language: string
    status: MovieStatus
    producer: string
    formats: MovieFormat[]
    genres: MovieGenre[]
}

export type MovieStatus = 'showing-now' | 'coming-soon'

export type MovieFormat = {
    id: number
    caption: string
    version: string
    shows: Show[]
}

export type MovieGenre = {
    id: number
    name: string
    slug: string
}
