import { ENDPOINTS } from '@/constants/endpoint'
import { get } from '@/lib/api'

export const getCinema = () => {
    return get<Location[]>(ENDPOINTS.CINEMA.LIST)
}
