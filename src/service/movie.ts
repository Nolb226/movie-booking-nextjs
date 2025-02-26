import { basePagination } from '@/config/params'
import { ENDPOINTS, endpoint } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { City } from '@/model/cinema'
import { Movie, MovieDetails, MovieStatus } from '@/model/movie'
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

export const getBookingData = (url: string) => {
   return getPublic<City[]>(url)
}

export const getMovieDetail = (slug: string) => {
   return getPublic<MovieDetails>(
      endpoint(ENDPOINTS.MOVIE.DETAIL, { MOVIE: slug })
   )
}
