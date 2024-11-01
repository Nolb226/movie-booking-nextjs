'use client'

import { env } from '../../env.mjs'

import { ENDPOINTS } from '@/constants/endpoint'
import { Cinema, City, Seat } from '@/model/cinema'
import { Movie } from '@/model/movie'
import { getCinema } from '@/service/cinema'
import { createContext, useContext, useEffect, useState } from 'react'

type BookingContextState = {
    seats: Seat[]
    movie: Movie | undefined
    cinema: (Cinema & { movies: Movie[] }) | undefined
    full_data: City[]

    selectSeat: (seat: Seat) => void
    selectMovie: (movieNum: number) => void
    selectCinema: (cityNum: number, cinemaNum: number) => void
}

const BookingContext = createContext<BookingContextState>({
    seats: [],
    movie: undefined,
    cinema: undefined,
    full_data: [],
    selectSeat: () => {},
    selectMovie: () => {},
    selectCinema: () => {},
})

export const useBookingContext = () => useContext(BookingContext)

interface BookingContextProviderProps {
    children: React.ReactNode
}

type CinemaWithMovies = Cinema & { movies: Movie[] }

const BookingProvider = ({ children }: BookingContextProviderProps) => {
    const [data, setData] = useState<City[]>([])
    const [seats, setSeats] = useState<Seat[]>([])
    const [movie, setMovie] = useState<Movie>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [cinema, setCinema] = useState<CinemaWithMovies>()

    const fetchData = async () => {
        try {
            const data = await getCinema()
            setIsLoading(false)
            setData(data)
            setCinema(data[0].cinemas[0])
            setMovie(data[0].cinemas[0]?.movies[0] || {})
        } catch (error) {
            console.log(error)
        }
    }

    const selectSeat = (seat: Seat) => {
        setSeats((prevSeats) => {
            const seatExists = prevSeats.some((s) => s.id === seat.id)
            if (seatExists) {
                return prevSeats.filter((s) => s.id !== seat.id)
            } else {
                return [...prevSeats, seat]
            }
        })
    }

    const selectMovie = (movieNum: number) => {
        setMovie(cinema!.movies[movieNum] || {})
    }

    const selectCinema = (cityNum: number, cinemaNum: number) => {
        const cinema = data[cityNum].cinemas[cinemaNum] as CinemaWithMovies
        setCinema({ ...cinema })
        // const movie = cinema?.movies[0]
        setMovie(undefined)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <BookingContext.Provider
            value={
                {
                    seats,
                    movie,
                    cinema,
                    full_data: data,
                    selectSeat,
                    selectMovie,
                    selectCinema,
                } as BookingContextState
            }
        >
            {children}
        </BookingContext.Provider>
    )
}

export { BookingProvider }
