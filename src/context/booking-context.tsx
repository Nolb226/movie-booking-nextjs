'use client'

import { env } from '../../env.mjs'

import { ENDPOINTS } from '@/constants/endpoint'
import { Cinema, City, Seat } from '@/model/cinema'
import { Movie } from '@/model/movie'
import { getCinema } from '@/service/cinema'
import { createContext, useContext, useEffect, useState } from 'react'

type BookingContextState = {
    cinema: Cinema | undefined
    movie: Movie | undefined
    full_data: City[]
    selectCinema: (cityNum: number, cinemaNum: number) => void
    selectMovie: (movieNum: number) => void
}

const BookingContext = createContext<BookingContextState>({
    full_data: [],
    movie: undefined,
    cinema: undefined,
    selectCinema: () => {},
    selectMovie: () => {},
})

export const useBookingContext = () => useContext(BookingContext)

interface BookingContextProviderProps {
    children: React.ReactNode
}

const BookingProvider = ({ children }: BookingContextProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [cinema, setCinema] = useState<Cinema>()
    const [movie, setMovie] = useState<Movie>()
    const [data, setData] = useState<City[]>([])

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

    const selectCinema = (cityNum: number, cinemaNum: number) => {
        const cinema = data[cityNum].cinemas[cinemaNum]
        setCinema({ ...cinema })
        // const movie = cinema?.movies[0]
        setMovie(undefined)
    }

    const selectMovie = (movieNum: number) => {
        setMovie(cinema!.movies[movieNum] || {})
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <BookingContext.Provider
            value={
                {
                    full_data: data,
                    movie,
                    cinema,
                    selectCinema,
                    selectMovie,
                } as BookingContextState
            }
        >
            {children}
        </BookingContext.Provider>
    )
}

export { BookingProvider }
