'use server'
import { Seat } from '@/model/cinema'
import { postBooking } from '@/service/user'
import { permanentRedirect, redirect } from 'next/navigation'

export const buyTickets = async (seats: Seat[], showId: string) => {
   const seatIds = seats.map((seat) => seat.id)
   const url = await postBooking(seatIds, showId)
   permanentRedirect(url)
}
