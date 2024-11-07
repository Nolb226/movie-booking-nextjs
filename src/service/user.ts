import { ENDPOINTS } from '@/constants/endpoint'
import { get } from '@/lib/api'
import { Bill } from '@/model/bill'
import { User } from '@/model/user'
import { cookies } from 'next/headers'

export const getUserProfile = () => {
    return get<User>(ENDPOINTS.AUTH.PROFILE)
}

export const getUserBill = () => {
    return get<Bill[]>(ENDPOINTS.AUTH.BILLING)
}
