import { ENDPOINTS } from '@/constants/endpoint'
import { getPublic } from '@/lib/api'
import { City } from '@/model/cinema'

export const getCinema = () => {
    return getPublic<City[]>(ENDPOINTS.CINEMA.LIST)
}
