import { ENDPOINTS } from '@/constants/endpoint'
import { AuthUser } from '@/context/app-context'
import { get, post } from '@/lib/api'
import { Bill } from '@/model/bill'
import { Seat } from '@/model/cinema'
import { User } from '@/model/user'

export const getUserProfile = () => {
   return get<AuthUser>(ENDPOINTS.AUTH.PROFILE)
}

export const getUserBill = () => {
   return get<Bill[]>(ENDPOINTS.AUTH.BILLING)
}

export const postBooking = (seats: string[], showId: string) => {
   return post<string>(ENDPOINTS.AUTH.BOOK, {
      body: {
         seatIds: seats,
         showId,
      },
   })
}
