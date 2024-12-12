import InformationPage from '@/components/pages/profile/information-change'
import { getUserProfile } from '@/service/user'

export default async function Page() {
   const user = await getUserProfile()

   return <InformationPage user={user} />
}
