import { getUserProfile } from '@/service/user'

export default async function Page() {
    const user = await getUserProfile()
    return <div></div>
}
