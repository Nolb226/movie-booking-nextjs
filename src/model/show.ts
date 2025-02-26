import { Hall } from './cinema'
import { Movie, MovieFormat } from './movie'

export type Show = {
    id: string
    runningTime: number
    startDate: Date
    startTime: string
    endDate: Date
    status: boolean
}

export type ShowSeatBooking = Show & {
    format: MovieFormat
    movie: Movie
    hall: Hall & {
        cinema: { id: string; name: string }
    }
}
