import { ENDPOINTS } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { City, getCinemaLocation } from '@/model/cinema'

export const getCinema = () => {
    return getPublic<getCinemaLocation[]>(ENDPOINTS.CINEMA.LIST)
}
