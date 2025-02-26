import { ENDPOINTS } from '@/constants/endpoint'
import { get } from '@/lib/api'
import { Bill } from '@/model/bill'

export const getBillDetails = (id: string) => {
   return get<Bill>(ENDPOINTS.AUTH.BILL_DETAILS(id))
}
