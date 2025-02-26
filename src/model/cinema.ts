import { Movie } from './movie'

export type City = {
   id: string
   name: string
   slug: string
   cinemas: Cinema[]
}

export type Cinema = {
   id: string
   name: string
   slug: string
   // movies: Movie[]
   hall: Hall
}

export type Hall = {
   id: string
   name: string
   totalSeats: number
   availableSeats: number
   rows: RowSeat[]
}

export type RowSeat = {
   rowName: string
   seats: Seat[]
}

export type Seat = {
   id: string
   status: boolean
   rowIndex: number
   rowName: string
   order: number
   isReserved: boolean
   seatType: SeatType
}

export type getCinemaLocation = City & {
   cinemas: CinemaWithMovies[]
}

export type CinemaWithMovies = Cinema & {
   movies: Movie[]
}

export type SeatType = {
   id: number
   name: string
   price: number
}
