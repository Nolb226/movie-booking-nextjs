import { ENDPOINTS } from '@/constants/endpoint'
import { get } from '@/lib/api'
import { User } from '@/model/user'

export const getUserProfile = () => {
    return get<User>(ENDPOINTS.AUTH.PROFILE)
}
