import { ENDPOINTS } from '@/constants/endpoint'
import { AuthUser } from '@/context/app-context'
import { get } from '@/lib/api'
import { Bill } from '@/model/bill'
import { User } from '@/model/user'

export const getUserProfile = (url: string) => {
   return get<AuthUser>(url)
}

export const getUserBill = () => {
   return get<Bill[]>(ENDPOINTS.AUTH.BILLING)
}
