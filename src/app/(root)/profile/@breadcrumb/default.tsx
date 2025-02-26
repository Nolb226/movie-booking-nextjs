'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { useAuth } from '@/context/app-context'
import { getUserProfile } from '@/service/user'
import { UserIcon } from 'lucide-react'

export default function Page() {
   const { user, isLoading } = useAuth()
   if (isLoading)
      return (
         <div className="flex gap-2">
            <div className="">
               <Skeleton className="size-20 rounded-full" />
            </div>
            <Skeleton className="h-6 w-24" />
         </div>
      )
   return (
      <div className="flex gap-2">
         <div className="">
            <Avatar className="size-20">
               <AvatarFallback>
                  <UserIcon className="size-10" />
               </AvatarFallback>
               <AvatarImage src={user?.avatar} />
            </Avatar>
         </div>
         <div className="text-xl">
            <span>{user?.fullName}</span>
         </div>
      </div>
   )
}
