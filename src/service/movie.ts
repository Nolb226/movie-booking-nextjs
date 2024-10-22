import { ENDPOINTS, endpoint } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { Movie, MovieStatus } from '@/model/movie'

export const getMovies = (status: MovieStatus = 'showing-now') => {
    return getPublic<Movie[]>(ENDPOINTS.MOVIE.STATUS[status], {
        params: {
            page: 1,
            perPage: 12,
        },
    })
}

export const getMovieDetail = (slug: string) => {
    return getPublic<Movie>(endpoint(ENDPOINTS.MOVIE.DETAIL, { MOVIE: slug }))
}
