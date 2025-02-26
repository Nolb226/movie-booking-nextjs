import { getUserProfile } from '@/service/user'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { LogOutIcon, TicketCheckIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import LogoutButton from './logout-button'
import { useAuth } from '@/context/app-context'

export default async function ProfileDropdown() {
   const user = await getUserProfile()

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
               <AvatarFallback>
                  <UserIcon className="size-5" />
               </AvatarFallback>
               <AvatarImage src={user?.avatar} />
            </Avatar>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem asChild>
                  <Link href={'/profile'}>
                     <UserIcon className="size-4" /> Profile
                     <DropdownMenuShortcut>K</DropdownMenuShortcut>
                  </Link>
               </DropdownMenuItem>
               <DropdownMenuItem asChild>
                  <Link href="/profile/tickets">
                     <TicketCheckIcon className="size-4" /> Billings
                     <DropdownMenuShortcut>B</DropdownMenuShortcut>
                  </Link>
               </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
               <LogoutButton>
                  <LogOutIcon className="size-4" /> Log out
                  <DropdownMenuShortcut>L</DropdownMenuShortcut>
               </LogoutButton>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
