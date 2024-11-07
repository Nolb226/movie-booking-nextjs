import ProfileTicket from '@/components/pages/profile/profile-tickets'
import { getUserBill } from '@/service/user'

export default async function Page() {
    const bills = await getUserBill()

    return <ProfileTicket bills={bills} />
}
