import { endpoint, ENDPOINTS } from '@/constants/endpoint'
import { get } from '@/lib/api'
import { ShowSeat } from '@/model/show'

export const getShowSeat = (id: string) => {
    return get<ShowSeat>(endpoint(ENDPOINTS.SHOW.SEAT, { SHOW: id }))
}
