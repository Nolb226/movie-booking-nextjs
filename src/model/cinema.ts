import { Movie } from './movie'

export type Location = {
    id: string
    name: string
    slug: string
    cinemas: Cinema[]
}

export type Cinema = {
    id: string
    name: string
    slug: string
    movies: Movie[]
}
