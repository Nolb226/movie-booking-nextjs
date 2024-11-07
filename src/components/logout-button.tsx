'use client'
import { logoutAction } from '@/actions/common'
import { cn } from '@/lib/utils'

interface LogoutButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function LogoutButton({
    className,
    onClick,
    ...props
}: LogoutButtonProps) {
    return (
        <button
            className={cn('w-full', className)}
            onClick={() => {
                console.log(1)
                logoutAction()
            }}
            {...props}
        />
    )
}
