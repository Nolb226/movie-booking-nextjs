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

const navigations = [
    {
        href: '/movie',
        label: 'Movies',
    },
    {
        href: '/cinema',
        label: 'Cinema',
    },
    {
        href: '/blogs',
        label: 'Blogs',
    },
]

function Header() {
    return (
        <header className="bg-black">
            <div className="mx-auto flex w-[1440px] items-center gap-6 py-4">
                <div className="w-[132px]">
                    <Link href="/">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-2">
                        {navigations.map(({ href, label }) => (
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
                <Avatar className="size-8">
                    <AvatarImage src="https://github.com/nolb226.png" />
                    <AvatarFallback>NT</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}

export default Header
