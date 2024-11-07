import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import Link from 'next/link'
import SearchBar from '../search-bar'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { NAVIGATIONS } from '@/config/navigation'
import { Dialog } from '../ui/dialog'
import { Button } from '../ui/button'
import ProfileDropdown from '../profile-dropdown'
import { cookies } from 'next/headers'

async function Header() {
    const session = cookies().get('_session')?.value
    return (
        <header className="bg-black">
            <div className="mx-auto flex max-w-[1440px] items-center gap-6 py-4">
                <div className="w-[132px]">
                    <Link href="/">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-2">
                        {NAVIGATIONS.map(({ href, label }) => (
                            <NavigationMenuItem key={label}>
                                <Link href={href} legacyBehavior passHref>
                                    <NavigationMenuLink>
                                        {label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <SearchBar />
                {session ? (
                    <ProfileDropdown />
                ) : (
                    <Button variant="secondary" asChild className="text-sm">
                        <Link href={'/login'}>Đăng nhập</Link>
                    </Button>
                )}
            </div>
        </header>
    )
}

export default Header
