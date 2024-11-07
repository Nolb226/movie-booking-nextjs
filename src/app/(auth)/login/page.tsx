import LoginForm from '@/components/pages/auth/login-form'
import Logo from '@/components/ui/logo'
import { Suspense } from 'react'

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-1/3 bg-secondary-850 p-4">
                <Logo />
                <Suspense>
                    <LoginForm />
                </Suspense>
            </div>
        </div>
    )
}
