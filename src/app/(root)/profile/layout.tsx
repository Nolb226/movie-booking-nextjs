'use client'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { useSelectedLayoutSegment } from 'next/navigation'

export default function Layout({
    children,
    breadcrumb,
}: {
    children: React.ReactNode
    breadcrumb: React.ReactNode
}) {
    const segment = useSelectedLayoutSegment()

    return (
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 pt-12">
            <div className="item flex gap-2 px-4">
                {breadcrumb}{' '}
                <div className="flex gap-2 text-xl font-semibold uppercase">
                    / {segment || 'general'}{' '}
                </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="hidden w-48 flex-col gap-2 rounded-md p-6 py-1 sm:flex">
                    <TabLink active={segment === null} href="/profile">
                        General
                    </TabLink>
                    <TabLink
                        active={segment === 'tickets'}
                        href="/profile/tickets"
                    >
                        Tickets
                    </TabLink>
                    <TabLink
                        active={segment === 'voucher'}
                        href="/profile/voucher"
                    >
                        Vouchers
                    </TabLink>
                    <TabLink
                        active={segment === 'password'}
                        href="/profile/password"
                    >
                        Password
                    </TabLink>
                </div>
                <Select defaultValue={segment || 'general'}>
                    <SelectTrigger className="mx-auto max-w-[400px] sm:hidden">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="general">
                            <Link href={'/profile'}>General</Link>
                        </SelectItem>
                        <SelectItem value="tickets">Tickets</SelectItem>
                        <SelectItem value="voucher">Voucher</SelectItem>
                        <SelectItem value="password">Password</SelectItem>
                    </SelectContent>
                </Select>

                <div className="flex-1 p-4">{children}</div>
            </div>
        </div>
    )
}

interface TabLinkProps
    extends LinkProps,
        React.HTMLAttributes<HTMLAnchorElement> {
    active?: boolean
}

const TabLink = ({ active = false, className, ...props }: TabLinkProps) => {
    return (
        <Link
            className={cn('cursor-pointer text-secondary-850', className, {
                'font-semibold text-primary-700': active,
            })}
            {...props}
        />
    )
}
