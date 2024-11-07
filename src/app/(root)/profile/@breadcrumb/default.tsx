import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getUserProfile } from '@/service/user'
import { UserIcon } from 'lucide-react'

export default async function Page() {
    const user = await getUserProfile()

    return (
        <div className="flex gap-2">
            <div className="">
                <Avatar className="size-20">
                    <AvatarFallback>
                        <UserIcon className="size-10" />
                    </AvatarFallback>
                    <AvatarImage src={user.avatar} />
                </Avatar>
            </div>
            <div className="text-xl">{user.fullName}</div>
        </div>
    )
}
