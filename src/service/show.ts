import { endpoint, ENDPOINTS } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { ShowSeatBooking } from '@/model/show'

export const getShowSeat = (id: string) => {
    return getPublic<ShowSeatBooking>(
        endpoint(ENDPOINTS.SHOW.SEAT, { SHOW: id })
    )
}
