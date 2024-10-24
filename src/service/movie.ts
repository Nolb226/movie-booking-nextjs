import { basePagination } from '@/config/params'
import { ENDPOINTS, endpoint } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { Movie, MovieStatus } from '@/model/movie'
import { PaginationParams } from '@/types'

export const getMovies = (
    status: MovieStatus = 'showing-now',
    options?: PaginationParams
) => {
    return getPublic<Movie[]>(ENDPOINTS.MOVIE.STATUS[status], {
        params: {
            ...basePagination,
            ...options,
        },
    })
}

export const getMovieDetail = (slug: string) => {
    return getPublic<Movie>(endpoint(ENDPOINTS.MOVIE.DETAIL, { MOVIE: slug }))
}
