'use client'

import { env } from '../../env.mjs'

import { ENDPOINTS } from '@/constants/endpoint'
import { Cinema, City, Seat } from '@/model/cinema'
import { Movie, MovieDetails, MovieFormat } from '@/model/movie'
import { Show } from '@/model/show'
import { getCinema } from '@/service/cinema'
import { getBookingData } from '@/service/movie'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'

type BookingContextState = {
   isLoading: boolean
   currentStep: number
   isDisable: () => boolean
   prevStep: () => void
   nextStep: () => void
   cities: City[]
   selectedDay: Date
   selectDay: (day: Date) => void
   currentShow: Show | undefined
   selectShow: (format: MovieFormat, show: Show) => void
   currentFormat: MovieFormat | undefined
   seats: Seat[]
   selectSeat: (seat: Seat) => void
   currentMovie: Movie | undefined
   selectMovie: (movie: Movie) => void
   currentCinema: CinemaWithMovies | undefined
   selectCinema: (cinema: CinemaWithMovies) => void
}

const BookingContext = createContext<BookingContextState>({
   isLoading: true,
   isDisable: () => true,
   currentStep: 1,
   prevStep: () => {},
   nextStep: () => {},
   currentMovie: undefined,
   currentCinema: undefined,
   currentShow: undefined,
   currentFormat: undefined,
   cities: [],
   selectedDay: new Date(),
   selectDay: () => {},
   selectShow: () => {},
   seats: [],
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
   const {
      data: cities,
      error,
      isLoading,
   } = useSWR(ENDPOINTS.CINEMA.LIST, getBookingData, {})
   const [selectedDay, setSelectedDay] = useState<Date>(new Date())
   const [cinema, setCinema] = useState<CinemaWithMovies>()
   const [movie, setMovie] = useState<Movie>()
   const [format, setFormat] = useState<MovieFormat>()
   const [show, setShow] = useState<Show>()
   const [seats, setSeats] = useState<Seat[]>([])
   const [currentStep, setCurrentStep] = useState<number>(1)
   const isDisable = () => {
      switch (currentStep) {
         case 1: {
            return !cinema || !movie || !format || !show
         }
         case 2:
            return !seats.length
      }
   }

   const nextStep = () => {
      setCurrentStep(currentStep + 1)
   }
   const prevStep = () => {
      setCurrentStep(currentStep - 1)
   }

   const selectCinema = (cinema: CinemaWithMovies) => {
      setCinema(cinema)
   }

   const selectMovie = (movie: MovieDetails) => {
      setMovie(movie)
   }

   const selectShow = (format: MovieFormat, show: Show) => {
      setShow(show)

      setFormat(() => format)
   }

   const selectDay = (day: Date) => {
      setSelectedDay(day)
   }

   const selectSeat = (seat: Seat) => {
      setSeats((prev) => {
         if (prev.some((s) => s.id === seat.id)) {
            console.log(seat)

            return prev.filter((s) => s.id !== seat.id)
         }
         return [...prev, seat]
      })
   }

   return (
      <BookingContext.Provider
         value={
            {
               seats,
               selectSeat,
               cities,
               isLoading,
               isDisable,
               selectShow,
               currentShow: show,
               currentFormat: format,
               selectedDay,
               selectDay,
               currentStep,
               nextStep,
               prevStep,
               currentCinema: cinema,
               selectCinema,
               currentMovie: movie,
               selectMovie,
            } as BookingContextState
         }
      >
         {children}
      </BookingContext.Provider>
   )
}

export { BookingProvider }
