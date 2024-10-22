import { ENDPOINTS, endpoint } from '@/constants/endpoint'
import { get } from '@/lib/api'
import { Movie, MovieStatus } from '@/model/movie'

export const getMovies = (status: MovieStatus = 'showing-now') => {
    return get<Movie[]>(ENDPOINTS.MOVIE.STATUS[status], {
        params: {
            page: 1,
            perPage: 12,
        },
    })
}

export const getMovieDetail = (slug: string) => {
    return get<Movie>(endpoint(ENDPOINTS.MOVIE.DETAIL, { MOVIE: slug }))
}
