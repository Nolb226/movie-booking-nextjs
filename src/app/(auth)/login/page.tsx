import LoginForm from '@/components/pages/auth/login-form'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
   return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-radial from-black to-primary-700">
         <div className="flex w-1/3 flex-col gap-2">
            <Logo />
            <Suspense>
               <LoginForm />
            </Suspense>
            <Button asChild variant={'secondary'}>
               <Link href={'/signup'}>Đăng ký</Link>
            </Button>
         </div>
      </div>
   )
}
