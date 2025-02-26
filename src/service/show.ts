import { endpoint, ENDPOINTS } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { ShowSeatBooking } from '@/model/show'

export const getShowSeat = (url: string) => {
   return getPublic<ShowSeatBooking>(url)
}
