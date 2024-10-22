import { endpoint, ENDPOINTS } from '@/constants/endpoint'
import { get, getPublic } from '@/lib/api'
import { ShowSeat } from '@/model/show'

export const getShowSeat = (id: string) => {
    return getPublic<ShowSeat>(endpoint(ENDPOINTS.SHOW.SEAT, { SHOW: id }))
}
